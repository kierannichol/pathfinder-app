package pathfinder.util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class FileUtils {

    public static void deleteDirectory(Path path) throws IOException {
        File[] allContents = path.toFile().listFiles();
        if (allContents != null) {
            for (File file : allContents) {
                deleteDirectory(file.toPath());
            }
        }
        Files.deleteIfExists(path);
    }
}
