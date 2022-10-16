package pathfinder.generator;

import com.google.protobuf.Message;
import com.google.protobuf.util.JsonFormat;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public abstract class AbstractDatabaseGenerator implements DatabaseGenerator {

    protected void write(Message message, String name, Path outputPath) throws IOException {
        Files.write(outputPath.resolve(name + ".bin"),
                message.toByteArray());
        Files.writeString(outputPath.resolve(name + ".json"),
                JsonFormat.printer().print(message));
    }
}
