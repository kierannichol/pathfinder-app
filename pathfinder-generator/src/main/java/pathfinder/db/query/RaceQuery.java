package pathfinder.db.query;

import java.util.Collection;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.SourceId;

public class RaceQuery implements SourceSpecificQuery<RaceQuery> {
    private final String name;
    private Collection<SourceId> sourceIds;

    public RaceQuery sources(Collection<SourceId> sourceIds) {
        return new RaceQuery(name, sourceIds);
    }

    public boolean matches(Source source) {
        if (sourceIds == null) {
            return true;
        }
        return sourceIds.contains(source.sourceId());
    }

    public boolean matches(ComplexFeature race) {
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

