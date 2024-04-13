package pathfinder.generator;

import java.util.stream.Stream;
import pathfinder.model.ItemOption;
import pathfinder.model.ItemOptionSet;
import pathfinder.model.pathfinder.SourceId;

public interface ItemOptionsProvider {
    Stream<ItemOptionSet> optionSets(SourceId sourceId);

    Stream<ItemOption> options(SourceId sourceId);
}
