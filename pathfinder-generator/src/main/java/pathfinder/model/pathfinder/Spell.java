package pathfinder.model.pathfinder;

import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Spell(Id id, String name) implements NamedEntity {

}
