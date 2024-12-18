package pathfinder.db.query;

import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.SourceId;

public class RaceQuery implements Query<ComplexFeature>, SourceSpecificQuery<RaceQuery> {
    private final String name;
    private Collection<SourceId> sourceIds;

    @Override
    public Stream<ComplexFeature> query(List<Source> sources,
            CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return sources.stream()
                .filter(this::matches)
                .flatMap(content -> content.races().stream())
                .filter(this::matches);
    }

    public RaceQuery sources(Collection<SourceId> sourceIds) {
        return new RaceQuery(name, sourceIds);
    }

    private boolean matches(Source source) {
        if (sourceIds == null) {
            return true;
        }
        return sourceIds.contains(source.sourceId());
    }

    private boolean matches(ComplexFeature race) {
        return this.name == null || race.name().equalsIgnoreCase(this.name);
    }

    RaceQuery(String name) {
        this.name = name;
    }

    private RaceQuery(String name, Collection<SourceId> sourceIds) {
        this.name = name;
        this.sourceIds = sourceIds;
    }
}

