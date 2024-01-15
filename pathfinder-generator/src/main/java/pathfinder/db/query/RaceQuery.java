package pathfinder.db.query;

import pathfinder.model.Source;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.SourceId;

public class RaceQuery implements SourceSpecificQuery<RaceQuery> {
    private final String name;
    private SourceId sourceId;

    public RaceQuery source(SourceId sourceId) {
        return new RaceQuery(name, sourceId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return source.sourceId().equals(sourceId);
    }

    public boolean matches(ComplexFeature race) {
        return this.name == null || race.name().equalsIgnoreCase(this.name);
    }

    RaceQuery(String name) {
        this.name = name;
    }

    private RaceQuery(String name, SourceId sourceId) {
        this.name = name;
        this.sourceId = sourceId;
    }
}

