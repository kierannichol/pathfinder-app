package pathfinder.v7.db.query;

import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.v7.Source;

public class FeatQuery implements SourceSpecificQuery<FeatQuery> {
    private final String name;
    private SourceId sourceId;

    public FeatQuery source(SourceId sourceId) {
        return new FeatQuery(name, sourceId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return source.sourceId().equals(sourceId);
    }

    public boolean matches(Feat feat) {
        return this.name == null || feat.name().equalsIgnoreCase(this.name);
    }

    FeatQuery(String name) {
        this.name = name;
    }

    private FeatQuery(String name, SourceId sourceId) {
        this.name = name;
        this.sourceId = sourceId;
    }
}
