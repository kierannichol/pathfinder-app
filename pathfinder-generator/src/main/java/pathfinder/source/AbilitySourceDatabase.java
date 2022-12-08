package pathfinder.source;

import java.io.IOException;
import java.util.stream.Stream;
import pathfinder.model.Ability;

public interface AbilitySourceDatabase {

    Stream<Ability> streamAbilities() throws IOException;
}
