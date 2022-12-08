package pathfinder.model;

import java.io.Serializable;

public record Special(String id, String name, Ability.Type type, String description) implements Serializable, FeatureModel {

}
