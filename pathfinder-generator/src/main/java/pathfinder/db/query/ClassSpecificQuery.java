package pathfinder.db.query;

import pathfinder.model.Id;

public interface ClassSpecificQuery<SELF extends ClassSpecificQuery<SELF>> {

    SELF classId(Id classId);
}
