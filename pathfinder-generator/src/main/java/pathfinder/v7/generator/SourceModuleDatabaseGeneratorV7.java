package pathfinder.v7.generator;

import com.google.protobuf.Message;
import com.google.protobuf.util.JsonFormat;
import com.google.protobuf.util.JsonFormat.Printer;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import pathfinder.data.v6.FeatureDbo;
import pathfinder.data.v6.FeatureSummaryDbo;
import pathfinder.data.v6.SourceModuleDbo;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.spring.OutputPathValue;
import pathfinder.util.FileUtils;
import pathfinder.util.StreamUtils;
import pathfinder.v7.model.FeatureV7;

@RequiredArgsConstructor
public class SourceModuleDatabaseGeneratorV7 {

    protected static final Printer JSON_PRINTER = JsonFormat.printer();

    @OutputPathValue
    private Path outputBasePath;
    private final SourceId sourceId;
    private final List<FeatureProviderV7> featureProviders;

    protected Stream<FeatureV7> streamFeatures() {
        return featureProviders.stream()
                .flatMap(provider -> provider.features(sourceId))
                .filter(StreamUtils.duplicates(FeatureV7::id));
    }

    private String databaseId() {
        return sourceId.code();
    }

    protected String getRelativeOutputPath() {
        return "v7/" + databaseId();
    }

    protected String getOutputDatabaseName() {
        return "v7/" + databaseId();
    }

    protected FeatureSummaryDbo encodedFeatureSummary(FeatureV7 feature) {
        return feature.toSummaryDbo();
    }

    protected FeatureDbo encodedFeatureDetailed(FeatureV7 feature) {
        return feature.toDbo();
    }

    protected Message createSummaryDatabase(List<FeatureSummaryDbo> features) {
        return SourceModuleDbo.newBuilder()
                .setSourceId(databaseId())
                .addAllFeatures(features)
                .build();
    }

    public void generate() throws IOException {
        String relativeOutputPath = getRelativeOutputPath();
        Path detailedDataPath = (relativeOutputPath != null && !relativeOutputPath.isBlank())
                ? outputBasePath.resolve(relativeOutputPath)
                : outputBasePath;

        if (!detailedDataPath.equals(outputBasePath)) {
            FileUtils.deleteDirectory(detailedDataPath);
            Files.createDirectory(detailedDataPath);
        }

        List<FeatureSummaryDbo> summaries = new ArrayList<>();
        streamFeatures()
                .distinct()
                .forEachOrdered(model -> {
                    FeatureSummaryDbo summary = encodedFeatureSummary(model);
                    if (summary != null) {
                        summaries.add(summary);
                    }

                    FeatureDbo detailed = encodedFeatureDetailed(model);
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
