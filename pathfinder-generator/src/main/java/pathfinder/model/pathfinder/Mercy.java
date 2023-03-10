package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import pathfinder.model.Description;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Mercy(Id id,
                    String name,
                    Description description,
                    @JsonProperty("prerequisites_formula") String prerequisitesFormula,
                    String source) implements NamedEntity {

    public Entity toEntity() {
        return Entity.builder()
                .id(id)
                .name(name)
                .description(description)
                .prerequisiteFormula(prerequisitesFormula)
                .source(Sources.findSourceByNameOrCode(source))
                .tags("mercy")
                .build();
    }
}
