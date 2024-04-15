package pathfinder.db.query;

import pathfinder.model.ItemOption;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.SourceId;

public class ItemOptionQuery implements SourceSpecificQuery<ItemOptionQuery> {
    private final String name;
    private SourceId sourceId;

    public ItemOptionQuery source(SourceId sourceId) {
        return new ItemOptionQuery(name, sourceId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return source.sourceId().equals(sourceId);
    }

    public boolean matches(ItemOption itemOption) {
        return this.name == null || itemOption.name().equalsIgnoreCase(this.name);
    }

    ItemOptionQuery(String name) {
        this.name = name;
    }

    private ItemOptionQuery(String name, SourceId sourceId) {
        this.name = name;
        this.sourceId = sourceId;
    }
}
