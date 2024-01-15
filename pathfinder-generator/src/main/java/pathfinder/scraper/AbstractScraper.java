package pathfinder.scraper;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.fasterxml.jackson.dataformat.yaml.YAMLGenerator;
import java.io.File;
import java.io.IOException;
import java.io.UncheckedIOException;
import lombok.extern.slf4j.Slf4j;
import pathfinder.model.json.PathfinderJsonModule;

@Slf4j
public abstract class AbstractScraper implements Scraper {

    private final ObjectMapper objectMapper;

    public AbstractScraper() {
        this.objectMapper = new ObjectMapper(new YAMLFactory()
                .disable(YAMLGenerator.Feature.WRITE_DOC_START_MARKER))
                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
                .findAndRegisterModules()
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false)
                .configure(SerializationFeature.ORDER_MAP_ENTRIES_BY_KEYS, true)
                .registerModule(new PathfinderJsonModule());
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
