package pathfinder.source.v4;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.util.Arrays;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.v4.NamedEntity;
import pathfinder.model.v4.NamedEntitySource;
import pathfinder.model.v4.pathfinder.Archetype;
import pathfinder.model.v4.pathfinder.Feature;

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
