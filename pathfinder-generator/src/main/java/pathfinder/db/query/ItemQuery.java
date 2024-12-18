package pathfinder.db.query;

import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.ItemData;
import pathfinder.model.pathfinder.SourceId;

public class ItemQuery implements Query<ItemData>, SourceSpecificQuery<ItemQuery> {
    private final String name;
    private Collection<SourceId> sourceId;

    @Override
    public Stream<ItemData> query(List<Source> sources, CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return sources.stream()
                .filter(this::matches)
                .flatMap(content -> content.items().stream())
                .filter(this::matches);
    }

    public ItemQuery sources(Collection<SourceId> sourceId) {
        return new ItemQuery(name, sourceId);
    }

    private boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    private boolean matches(ItemData item) {
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
