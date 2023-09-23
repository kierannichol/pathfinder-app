package pathfinder.model.pathfinder;

import java.io.Serializable;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Skill(Id id,
                    String name,
                    boolean untrained,
                    boolean armorCheckPenalty,
                    String keyAbility) implements Serializable, NamedEntity {

}
