package pathfinder.db.query;

import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.SourceId;

public class FeatQuery implements Query<Feat>, SourceSpecificQuery<FeatQuery> {
    private final String name;
    private Collection<SourceId> sourceIds;

    @Override
    public Stream<Feat> query(List<Source> sources, CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return sources.stream()
                .filter(this::matches)
                .flatMap(content -> content.feats().stream())
                .filter(this::matches);
    }

    public FeatQuery sources(Collection<SourceId> sourceIds) {
        return new FeatQuery(name, sourceIds);
    }

    private boolean matches(Source source) {
        if (sourceIds == null) {
            return true;
        }
        return sourceIds.contains(source.sourceId());
    }

    private boolean matches(Feat feat) {
        return this.name == null || feat.name().equalsIgnoreCase(this.name);
    }

    FeatQuery(String name) {
        this.name = name;
    }

    private FeatQuery(String name, Collection<SourceId> sourceIds) {
        this.name = name;
        this.sourceIds = sourceIds;
    }
}
