package pathfinder.scraper.local;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UncheckedIOException;
import java.nio.file.Path;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

@Slf4j
public class AbstractLocalYamlSourceDatabase {
    private static final Path BASE_PATH = Path.of("pathfinder-generator", "src", "main", "resources");

    @Autowired
    private ObjectMapper objectMapper;

    protected <T> void save(String filename, Stream<T> modelsToSave) {
        Path filePath = BASE_PATH.resolve(filename);
        File file = filePath.toFile();
        if (file.delete()) {
            log.debug("Removing existing version of " + filename);
        }

//        ObjectMapper objectMapper = new ObjectMapper(new YAMLFactory()
//                .disable(YAMLGenerator.Feature.WRITE_DOC_START_MARKER))
//                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
//                .registerModule(new PathfinderJsonModule());

        try (OutputStream fos = new FileOutputStream(file)) {
            objectMapper.writeValue(fos, modelsToSave.toList());
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
