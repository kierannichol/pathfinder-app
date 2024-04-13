package pathfinder.generator;

import java.util.stream.Stream;
import pathfinder.model.Item;
import pathfinder.model.pathfinder.SourceId;

public interface ItemProvider {
    Stream<Item> items(SourceId sourceId);
}
