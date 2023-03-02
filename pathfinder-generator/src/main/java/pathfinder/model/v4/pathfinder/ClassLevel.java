package pathfinder.model.v4.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import pathfinder.model.Id;

public record ClassLevel(int level,
                         @JsonProperty("class_feature_names") List<Id> classFeatureIds) {

}
