package pathfinder.model.v4;

import pathfinder.model.Id;
import pathfinder.model.SimpleNamedEntity;

public interface NamedEntity extends Identity {
    static NamedEntity of(Id id, String name) {
        return new SimpleNamedEntity(id, name);
    }

    String name();
}
