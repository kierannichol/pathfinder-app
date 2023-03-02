package pathfinder.source.v4;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.util.Arrays;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.v4.NamedEntity;
import pathfinder.model.v4.NamedEntitySource;
import pathfinder.model.v4.pathfinder.Race;

@Component
public class RaceSourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource {

    public Stream<Race> streamRaces() {
        String path = "race_database.yml";
        try (InputStream is = ClassLoader.getSystemResourceAsStream(path)) {
            if (is == null) {
                throw new IOException("Unable to open " + path);
            }

            return Arrays.stream(objectMapper.readValue(is, Race[].class));
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamRaces();
    }
}
