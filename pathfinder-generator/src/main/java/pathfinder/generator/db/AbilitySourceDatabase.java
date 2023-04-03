package pathfinder.generator.db;

import java.io.IOException;
import java.util.stream.Stream;
import pathfinder.model.pathfinder.Feature;

public interface AbilitySourceDatabase {

    Stream<Feature> streamAbilities() throws IOException;
}
