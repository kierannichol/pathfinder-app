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
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.json.PathfinderJsonModule;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.Feature;

@Component
@Slf4j
public class LocalPathfinderDatabaseCleaner {

    private final ObjectMapper objectMapper;

    public void clean() {
        cleanClasses();
    }

    private void cleanClasses() {
        String path = "class_database.yml";
        List<CharacterClass> classList = load(path, CharacterClass[].class).toList();
        List<CharacterClass> cleanedList = new ArrayList<>();
        for (CharacterClass characterClass : classList) {
            cleanedList.add(cleanCharacterClass(characterClass));
        }
        save(path, cleanedList);
    }

    private CharacterClass cleanCharacterClass(CharacterClass original) {
        Set<Id> foundFeatureIds = new HashSet<>();
        Set<Feature> cleanedFeatures = new HashSet<>();

        for (Feature originalCassFeature : original.class_features()) {
            if (foundFeatureIds.contains(originalCassFeature.id())) {
                continue;
            }

            cleanedFeatures.add(originalCassFeature);
            foundFeatureIds.add(originalCassFeature.id());
        }

        return new CharacterClass(
                original.id(),
                original.name(),
                original.category(),
                original.description(),
                original.source(),
                original.hit_die(),
                original.alignment(),
                original.class_skills(),
                original.skill_ranks_per_level(),
                original.bab(),
                original.fort(),
                original.ref(),
                original.will(),
                original.levels(),
                original.spell_caster_types(),
                cleanedFeatures
        );
    }

    public LocalPathfinderDatabaseCleaner() {

        this.objectMapper = new ObjectMapper(new YAMLFactory()
                .disable(YAMLGenerator.Feature.WRITE_DOC_START_MARKER))
                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
                .findAndRegisterModules()
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false)
                .registerModule(new PathfinderJsonModule());
    }

    @SuppressWarnings("unchecked")
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

    protected <T> void save(String path, T obj) {

        try {
            URL url = ClassLoader.getSystemResource(path);
            File file = new File(url.toURI().getPath());

            log.info("Writing to " + file.getAbsolutePath());
            objectMapper.writeValue(file, obj);

        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
