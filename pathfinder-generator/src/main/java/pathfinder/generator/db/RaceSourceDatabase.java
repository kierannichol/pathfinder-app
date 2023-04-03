package pathfinder.generator.db;

import java.util.stream.Stream;
import pathfinder.model.pathfinder.D20pfsrdRace;

public interface RaceSourceDatabase {

    Stream<D20pfsrdRace> streamRaces();
}
