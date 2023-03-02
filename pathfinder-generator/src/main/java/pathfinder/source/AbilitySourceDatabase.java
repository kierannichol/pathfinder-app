package pathfinder.source;

import java.io.IOException;
import java.util.stream.Stream;
import pathfinder.model.v4.pathfinder.Feature;

public interface AbilitySourceDatabase {

    Stream<Feature> streamAbilities() throws IOException;
}
