package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;

public record MetamagicOptions(@JsonProperty("level_increase") int levelIncrease) {

}
