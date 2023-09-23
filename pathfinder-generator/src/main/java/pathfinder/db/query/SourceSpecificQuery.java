package pathfinder.db.query;

import pathfinder.model.pathfinder.SourceId;

public interface SourceSpecificQuery<SELF extends SourceSpecificQuery<SELF>> {
    SELF source(SourceId sourceId);
}
