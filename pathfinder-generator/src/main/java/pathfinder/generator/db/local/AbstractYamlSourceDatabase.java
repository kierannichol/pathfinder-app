package pathfinder.generator.db.local;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.fasterxml.jackson.dataformat.yaml.YAMLGenerator.Feature;
import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;
import pathfinder.model.json.PathfinderJsonModule;

public abstract class AbstractYamlSourceDatabase {
    private final Map<String, Object[]> cache = new HashMap<>();

    protected final ObjectMapper objectMapper;

    protected AbstractYamlSourceDatabase() {
        objectMapper = new ObjectMapper(new YAMLFactory()
                .disable(Feature.WRITE_DOC_START_MARKER))
                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
                .enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
                .disable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT)
                .registerModule(new PathfinderJsonModule());
    }

    @SuppressWarnings("unchecked")
    protected <T> Stream<T> load(String path, Class<T[]> type) {
        if (cache.containsKey(path)) {
            return Arrays.stream(cache.get(path))
                    .map(obj -> (T) obj);
        }

        try (InputStream is = ClassLoader.getSystemResourceAsStream(path)) {
            if (is == null) {
                throw new IOException("Unable to open " + path);
            }

            T[] loaded = objectMapper.readValue(is, type);
            cache.put(path, loaded);
            return Arrays.stream(loaded);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
