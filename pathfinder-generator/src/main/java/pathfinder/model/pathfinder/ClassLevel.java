package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import java.util.Map;
import pathfinder.model.Id;

public record ClassLevel(int level,
                         @JsonProperty("class_feature_names") List<Id> classFeatureIds,
                         @JsonProperty("spells_per_day") Map<Integer, Integer> spellsPerDay) {

}
