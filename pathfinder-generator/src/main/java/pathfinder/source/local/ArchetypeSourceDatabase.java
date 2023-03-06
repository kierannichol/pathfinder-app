package pathfinder.source.local;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.util.Arrays;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.Feature;

@Component
public class ArchetypeSourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource {

    public Stream<Archetype> streamArchetypes() {
        String path = "archetype_database.yml";
        try (InputStream is = ClassLoader.getSystemResourceAsStream(path)) {
            if (is == null) {
                throw new IOException("Unable to open " + path);
            }

            return Arrays.stream(objectMapper.readValue(is, Archetype[].class));
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        Stream<Archetype> classes = streamArchetypes();
        Stream<Feature> classFeatures = streamArchetypes()
                .flatMap(cls -> cls.features().stream());

        return Stream.concat(classes, classFeatures);
    }
}
