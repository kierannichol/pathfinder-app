package pathfinder.source.local;

import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Mercy;

@Component
public class MercySourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource {

    public Stream<Mercy> streamMercies() {
        return load("mercy_database.yml", Mercy[].class);
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamMercies();
    }
}