package pathfinder.model.v4.pathfinder;

import java.util.ArrayList;
import java.util.List;
import pathfinder.model.Id;
import pathfinder.model.Size;
import pathfinder.model.v4.Choice;
import pathfinder.model.v4.Effect;
import pathfinder.model.v4.Entity;
import pathfinder.model.v4.NamedEntity;
import pathfinder.model.v4.SelectChoice;
import pathfinder.model.v4.Tags;

public record Race(Id id, String name, String size, int speed, String type, String source) implements NamedEntity {
    public Entity toEntity() {
        var tags = Tags.of("race");
        var effects = new ArrayList<Effect>();
        var choices = new ArrayList<Choice>();

        effects.add(Effect.setNumber(id.string(), 1));
        effects.add(Effect.setNumber("size", Size.findByLongName(size).orElseThrow().id()));

        switch (id.string()) {
            case "race:human" -> choices.add(new SelectChoice("level0:race_asi:human", "Ability Score Increase (Human)", "asi", "", List.of("ability_score")));
        }

        return Entity.builder()
                .id(id)
                .name(name)
                .tags(tags)
                .effects(effects)
                .choices(choices)
                .build();
    }
}
