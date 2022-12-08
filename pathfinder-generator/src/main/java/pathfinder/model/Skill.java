package pathfinder.model;

import java.io.Serializable;

public record Skill(String id,
                    String name,
                    boolean untrained,
                    boolean armorCheckPenalty,
                    String keyAbility) implements Serializable, FeatureModel {

}
