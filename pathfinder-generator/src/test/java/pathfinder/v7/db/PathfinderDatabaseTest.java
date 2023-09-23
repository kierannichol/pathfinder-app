package pathfinder.v7.db;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import pathfinder.db.LocalPathfinderDatabaseLoader;

@Slf4j
@Disabled
class PathfinderDatabaseTest {

    @Test
    void ableToLoad() {
        LocalPathfinderDatabaseLoader loader = new LocalPathfinderDatabaseLoader();
        loader.load();
    }
}