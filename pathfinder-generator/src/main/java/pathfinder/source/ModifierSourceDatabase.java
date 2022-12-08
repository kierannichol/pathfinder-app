package pathfinder.source;

import java.io.IOException;
import java.util.stream.Stream;
import pathfinder.model.CharacterModifier;

public interface ModifierSourceDatabase {

    Stream<CharacterModifier> streamModifiers() throws IOException;
}
