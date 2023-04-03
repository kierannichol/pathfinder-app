package pathfinder.generator.db;

import java.util.stream.Stream;
import pathfinder.model.pathfinder.Spell;

public interface SpellSourceDatabase {

    Stream<Spell> streamSpells();

}
