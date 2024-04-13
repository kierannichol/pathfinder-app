package pathfinder.generator;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.generator.mapper.ItemMapper;
import pathfinder.model.Item;
import pathfinder.model.pathfinder.SourceId;

@Component
@RequiredArgsConstructor
@Slf4j
public class PathfinderDatabaseItemProvider implements ItemProvider {
    private final PathfinderDatabase database;
    private final ItemMapper item;

    @Override
    public Stream<Item> items(SourceId sourceId) {
        return database.query(Query.items().source(sourceId))
                .flatMap(data -> item.flatMap(sourceId, data));
    }
}
