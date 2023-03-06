package pathfinder.source;

import java.io.IOException;
import java.util.stream.Stream;
import pathfinder.model.pathfinder.Spell;

public interface SpellSourceDatabase {

    Stream<Spell> streamSpells() throws IOException;

}
