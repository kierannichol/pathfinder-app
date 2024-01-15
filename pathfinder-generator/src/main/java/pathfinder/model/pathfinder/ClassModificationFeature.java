package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record ClassModificationFeature(Id id,
                                       @JsonProperty("target_id") Id targetId,
                                       String name,
                                       Description description,
                                       List<ClassModification> modifications,
                                       List<Feature> features,
                                       String source) implements NamedEntity, FromSourceBook {

}
