package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Mercy(Id id,
                    String name,
                    Description description,
                    @JsonProperty("prerequisites_formula") String prerequisitesFormula,
                    String source) implements NamedEntity {

}
