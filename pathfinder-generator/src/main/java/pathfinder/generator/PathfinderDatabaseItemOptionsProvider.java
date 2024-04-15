package pathfinder.generator;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.model.ItemOption;
import pathfinder.model.ItemOptionSet;
import pathfinder.model.pathfinder.SourceId;

@Component
@RequiredArgsConstructor
public class PathfinderDatabaseItemOptionsProvider implements ItemOptionsProvider {
    private final PathfinderDatabase database;

    @Override
    public Stream<ItemOptionSet> optionSets(SourceId sourceId) {
        return Stream.empty();
    }

    @Override
    public Stream<ItemOption> options(SourceId sourceId) {
        return database.query(Query.itemOptions().source(sourceId));
    }
}
