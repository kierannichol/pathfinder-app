package pathfinder.model.pathfinder;

import java.util.List;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Race(Id id, String name, String description, String size, int speed, String type, List<String> features, String source) implements NamedEntity, FromSourceBook {

}
