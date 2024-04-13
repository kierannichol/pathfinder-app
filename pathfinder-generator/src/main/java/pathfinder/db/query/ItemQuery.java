package pathfinder.db.query;

import pathfinder.model.Source;
import pathfinder.model.pathfinder.ItemData;
import pathfinder.model.pathfinder.SourceId;

public class ItemQuery implements SourceSpecificQuery<ItemQuery> {
    private final String name;
    private SourceId sourceId;

    public ItemQuery source(SourceId sourceId) {
        return new ItemQuery(name, sourceId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return source.sourceId().equals(sourceId);
    }

    public boolean matches(ItemData item) {
        return this.name == null || item.name().equalsIgnoreCase(this.name);
    }

    ItemQuery(String name) {
        this.name = name;
    }

    private ItemQuery(String name, SourceId sourceId) {
        this.name = name;
        this.sourceId = sourceId;
    }
}
