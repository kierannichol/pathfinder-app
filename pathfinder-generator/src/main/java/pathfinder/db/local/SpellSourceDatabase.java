package pathfinder.db.local;

import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Spell;

@Component
public class SpellSourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource {

    public Stream<Spell> streamSpells() {
        return Stream.concat(
                load("spells_database_1.yml", Spell[].class),
                load("spells_database_2.yml", Spell[].class));
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamSpells();
    }
}
