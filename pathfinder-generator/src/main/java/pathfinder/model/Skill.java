package pathfinder.model;

import java.io.Serializable;

public record Skill(Id id,
                    String name,
                    boolean untrained,
                    boolean armorCheckPenalty,
                    String keyAbility) implements Serializable {

}
