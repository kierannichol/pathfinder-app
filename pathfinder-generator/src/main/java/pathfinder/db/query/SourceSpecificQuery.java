package pathfinder.db.query;

import java.util.Collection;
import java.util.List;
import pathfinder.model.pathfinder.SourceId;

public interface SourceSpecificQuery<SELF extends SourceSpecificQuery<SELF>> {
    default SELF source(SourceId sourceId) {
        return sources(sourceId == null ? null : List.of(sourceId));
    }

    SELF sources(Collection<SourceId> sourceIds);
}
