package pathfinder.source;

import java.util.stream.Stream;
import pathfinder.model.pathfinder.D20pfsrdRace;

public interface RaceSourceDatabase {

    Stream<D20pfsrdRace> streamRaces();
}
