package pathfinder.generator.v4;

import com.google.protobuf.Message;
import com.google.protobuf.util.JsonFormat;
import com.google.protobuf.util.JsonFormat.Printer;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Stream;
import pathfinder.model.Id;
import pathfinder.model.v4.NamedEntity;
import pathfinder.model.v4.Sourced;
import pathfinder.spring.OutputPathValue;
import pathfinder.util.FileUtils;

public abstract class AbstractDatabaseGenerator<MODEL extends NamedEntity, SUMMARY extends Message, DETAILED extends Message> implements
        DatabaseGeneratorV4 {
    protected static final Predicate<Sourced> KNOWN_SOURCES = sourced -> sourced.source() != null;
    protected static final Printer JSON_PRINTER = JsonFormat.printer();

    @OutputPathValue
    private Path outputBasePath;

    protected abstract Stream<MODEL> streamModels() throws IOException;
    protected abstract String getRelativeOutputPath();
    protected abstract String getOutputDatabaseName();
    protected abstract SUMMARY encodedSummary(MODEL model);
    protected abstract DETAILED encodedDetailed(MODEL model, SUMMARY summary);
    protected abstract Message createSummaryDatabase(List<SUMMARY> summaries);

    @Override
    public void generate() throws IOException {
        String relativeOutputPath = getRelativeOutputPath();
        Path detailedDataPath = (relativeOutputPath != null && !relativeOutputPath.isBlank())
                ? outputBasePath.resolve(relativeOutputPath)
                : outputBasePath;

        if (!detailedDataPath.equals(outputBasePath)) {
            FileUtils.deleteDirectory(detailedDataPath);
            Files.createDirectory(detailedDataPath);
        }

        List<SUMMARY> summaries = new ArrayList<>();
        streamModels()
                .distinct()
                .forEachOrdered(model -> {
                    SUMMARY summary = encodedSummary(model);
                    if (summary != null) {
                        summaries.add(summary);
                    }

                    DETAILED detailed = encodedDetailed(model, summary);
                    if (detailed != null) {
                        String fileName = idToFilename(model.id());
                        write(detailed, fileName, detailedDataPath);
                    }
                });

        Message database = createSummaryDatabase(summaries);
        if (database != null) {
            write(database, getOutputDatabaseName(), outputBasePath);
        }
    }

    protected void write(Message message, String name, Path outputPath) throws UncheckedIOException {
        try {
            Files.write(outputPath.resolve(name + ".bin"),
                    message.toByteArray());
            Files.writeString(outputPath.resolve(name + ".json"),
                    JSON_PRINTER.print(message));
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    protected static String idToFilename(Id id) {
        return id.string()
                .replace(':', '_')
                .replace('#', '_');
    }
}
