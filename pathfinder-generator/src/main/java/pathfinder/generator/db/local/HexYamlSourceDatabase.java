package pathfinder.generator.db.local;

import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Spell;

@Component
public class HexYamlSourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource {

    public Stream<Spell> streamHexes() {
        return load("hex_database.yml", Spell[].class);
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamHexes();
    }
}
