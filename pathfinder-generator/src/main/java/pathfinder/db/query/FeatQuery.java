package pathfinder.db.query;

import java.util.Collection;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.SourceId;

public class FeatQuery implements SourceSpecificQuery<FeatQuery> {
    private final String name;
    private Collection<SourceId> sourceIds;

    public FeatQuery sources(Collection<SourceId> sourceIds) {
        return new FeatQuery(name, sourceIds);
    }

    public boolean matches(Source source) {
        if (sourceIds == null) {
            return true;
        }
        return sourceIds.contains(source.sourceId());
    }

    public boolean matches(Feat feat) {
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
