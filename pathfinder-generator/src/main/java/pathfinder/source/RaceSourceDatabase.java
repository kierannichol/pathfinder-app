package pathfinder.source;

import java.io.IOException;
import java.util.stream.Stream;
import pathfinder.model.Race;

public interface RaceSourceDatabase {

    Stream<Race> streamRaces() throws IOException;
}
