package pathfinder.db.query;

import java.util.Collection;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.ItemData;
import pathfinder.model.pathfinder.SourceId;

public class ItemQuery implements SourceSpecificQuery<ItemQuery> {
    private final String name;
    private Collection<SourceId> sourceId;

    public ItemQuery sources(Collection<SourceId> sourceId) {
        return new ItemQuery(name, sourceId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    public boolean matches(ItemData item) {
        return this.name == null || item.name().equalsIgnoreCase(this.name);
    }

    ItemQuery(String name) {
        this.name = name;
    }

    private ItemQuery(String name, Collection<SourceId> sourceId) {
        this.name = name;
        this.sourceId = sourceId;
    }
}
