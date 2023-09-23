package pathfinder.model.pathfinder;

import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Race(Id id, String name, String size, int speed, String type, String source) implements NamedEntity, FromSourceBook {

}
