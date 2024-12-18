package pathfinder.db.query;

import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.ItemOption;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.SourceId;

public class ItemOptionQuery implements Query<ItemOption>, SourceSpecificQuery<ItemOptionQuery> {
    private final String name;
    private Collection<SourceId> sourceId;

    @Override
    public Stream<ItemOption> query(List<Source> sources, CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return sources.stream()
                .filter(this::matches)
                .flatMap(content -> content.itemOptions().stream())
                .filter(this::matches);
    }

    public ItemOptionQuery sources(Collection<SourceId> sourceId) {
        return new ItemOptionQuery(name, sourceId);
    }

    private boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    private boolean matches(ItemOption itemOption) {
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
