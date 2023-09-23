package pathfinder.db.migrate;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.fasterxml.jackson.dataformat.yaml.YAMLGenerator;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.Objects;
import java.util.stream.Stream;
import java.util.stream.Stream.Builder;
import lombok.extern.slf4j.Slf4j;
import pathfinder.model.json.PathfinderJsonModule;

@Slf4j
abstract class AbstractMigrator {
    private final ObjectMapper objectMapper;

    public AbstractMigrator() {
        this.objectMapper = new ObjectMapper(new YAMLFactory()
                .disable(YAMLGenerator.Feature.WRITE_DOC_START_MARKER))
                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
                .findAndRegisterModules()
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false)
                .registerModule(new PathfinderJsonModule());
    }

    protected <T> Stream<T> load(String path, Class<T[]> type) {
        try (InputStream is = ClassLoader.getSystemResourceAsStream(path)) {
            if (is == null) {
                throw new IOException("Unable to open " + path);
            }

            T[] loaded = objectMapper.readValue(is, type);
            return Arrays.stream(loaded);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    protected <T> Stream<T> loadAll(String path, Class<T> type) {
        try {
            var dir = new File(ClassLoader.getSystemResource(path).toURI());
            Builder<T> stream = Stream.builder();
            for (File file : Objects.requireNonNull(dir.listFiles())) {
                stream.accept(objectMapper.readValue(file, type));
            }
            return stream.build();
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    protected <T> void save(String path, T obj) {

        try {
            File file = new File("build/db/" + path);
            file.getParentFile().mkdirs();

            log.info("Writing to " + file.getAbsolutePath());
            objectMapper.writeValue(file, obj);

        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
