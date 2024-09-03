package pathfinder.db.query;

import java.util.Collection;
import pathfinder.model.ItemOption;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.SourceId;

public class ItemOptionQuery implements SourceSpecificQuery<ItemOptionQuery> {
    private final String name;
    private Collection<SourceId> sourceId;

    public ItemOptionQuery sources(Collection<SourceId> sourceId) {
        return new ItemOptionQuery(name, sourceId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    public boolean matches(ItemOption itemOption) {
        return this.name == null || itemOption.name().equalsIgnoreCase(this.name);
    }

    ItemOptionQuery(String name) {
        this.name = name;
    }

    private ItemOptionQuery(String name, Collection<SourceId> sourceId) {
        this.name = name;
        this.sourceId = sourceId;
    }
}
