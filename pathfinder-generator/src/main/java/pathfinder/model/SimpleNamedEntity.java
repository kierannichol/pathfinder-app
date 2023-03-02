package pathfinder.model;

import pathfinder.model.v4.NamedEntity;

public record SimpleNamedEntity(Id id, String name) implements NamedEntity {

}
