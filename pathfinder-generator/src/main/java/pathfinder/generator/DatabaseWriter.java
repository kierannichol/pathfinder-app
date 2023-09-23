package pathfinder.generator;

import com.google.protobuf.Message;
import com.google.protobuf.util.JsonFormat;
import com.google.protobuf.util.JsonFormat.Printer;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import org.springframework.stereotype.Service;
import pathfinder.spring.OutputPathValue;

@Service
public class DatabaseWriter {
    protected static final Printer JSON_PRINTER = JsonFormat.printer();

    @OutputPathValue
    private Path outputBasePath;

    public void write(Message message, String name) throws UncheckedIOException {
        write(message, name, "");
    }

    public void write(Message message, String name, String relativeOutputPath) throws UncheckedIOException {
        Path outputPath = (relativeOutputPath != null && !relativeOutputPath.isBlank())
                                ? outputBasePath.resolve(relativeOutputPath)
                                : outputBasePath;

        name = sanitizeFilename(name);

        try {
            Files.createDirectories(outputPath);
            Files.write(outputPath.resolve(name + ".bin"),
                    message.toByteArray());
            Files.writeString(outputPath.resolve(name + ".json"),
                    JSON_PRINTER.print(message));
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private static String sanitizeFilename(String name) {
        return name
                .replace(':', '_')
                .replace('#', '_');
    }
}
