package pathfinder.db;

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
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pathfinder.model.json.PathfinderJsonModule;
import pathfinder.util.FileUtils;

@Slf4j
public abstract class AbstractLocalPathfinderDatabaseModifier {
    private final ObjectMapper objectMapper;

    protected abstract void modify();

    public void execute() throws IOException {
        FileUtils.deleteDirectory(Path.of("build", "db"));
        modify();
    }

    protected Stream<Path> list(String path) {
        try (var stream = Files.list(Path.of(ClassLoader.getSystemResource(path).getPath()))) {
            return stream.toList().stream();
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    protected <T> T load(Path path, Class<T> type) {
        try (InputStream is = Files.newInputStream(path)) {
            return objectMapper.readValue(is, type);
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

    public AbstractLocalPathfinderDatabaseModifier() {
        this.objectMapper = new ObjectMapper(new YAMLFactory()
                .disable(YAMLGenerator.Feature.WRITE_DOC_START_MARKER))
                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
                .findAndRegisterModules()
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false)
                .registerModule(new PathfinderJsonModule());
    }

    @Configuration
    static class SelfExecutingConfiguration {
        @Bean
        PathfinderDatabase pathfinderDatabase() {
            return new LocalPathfinderDatabaseLoader().load();
        }

        @Bean
        public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
            return args -> {
                log.info("Modifying data...");
                ctx.getBean(AbstractLocalPathfinderDatabaseModifier.class).execute();
                System.exit(0);
            };
        }
    }
}
