package pathfinder.source.local;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.Feature;

@Component
public class ClassSourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource {
    private final Map<Id, CharacterClass> classMap = new HashMap<>();

    public Optional<CharacterClass> findById(Id id) {
        init();
        return Optional.ofNullable(classMap.get(id));
    }

    public Stream<CharacterClass> streamClasses() {
        init();
        return classMap.values().stream();
    }

    private synchronized void init() {
        if (!classMap.isEmpty()) {
            return;
        }

        String path = "class_database.yml";
        try (InputStream is = ClassLoader.getSystemResourceAsStream(path)) {
            if (is == null) {
                throw new IOException("Unable to open " + path);
            }

            Arrays.stream(objectMapper.readValue(is, CharacterClass[].class))
                    .forEach(characterClass -> classMap.put(characterClass.id(), characterClass));
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        Stream<CharacterClass> classes = streamClasses();
        Stream<Feature> classFeatures = streamClasses()
                .flatMap(cls -> cls.class_features().stream());

        return Stream.concat(classes, classFeatures);
    }
}
