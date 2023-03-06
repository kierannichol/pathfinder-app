package pathfinder.source.local;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.fasterxml.jackson.dataformat.yaml.YAMLGenerator.Feature;
import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.util.Arrays;
import java.util.stream.Stream;
import pathfinder.model.json.PathfinderJsonModule;

public abstract class AbstractYamlSourceDatabase {

    protected final ObjectMapper objectMapper;

    protected AbstractYamlSourceDatabase() {
        objectMapper = new ObjectMapper(new YAMLFactory()
                .disable(Feature.WRITE_DOC_START_MARKER))
                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
                .enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
                .disable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT)
                .registerModule(new PathfinderJsonModule());
    }

    protected <T> Stream<T> load(String path, Class<T[]> type) {
        try (InputStream is = ClassLoader.getSystemResourceAsStream(path)) {
            if (is == null) {
                throw new IOException("Unable to open " + path);
            }

            return Arrays.stream(objectMapper.readValue(is, type));
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
