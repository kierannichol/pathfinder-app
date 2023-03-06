package pathfinder.model.pathfinder;

import java.io.Serializable;
import pathfinder.model.Id;

public record Skill(Id id,
                    String name,
                    boolean untrained,
                    boolean armorCheckPenalty,
                    String keyAbility) implements Serializable {

}
