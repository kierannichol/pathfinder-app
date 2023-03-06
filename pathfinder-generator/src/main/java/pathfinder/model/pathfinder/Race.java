package pathfinder.model.pathfinder;

import java.util.ArrayList;
import java.util.List;
import pathfinder.model.Choice;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.SelectChoice;
import pathfinder.model.Tags;
import pathfinder.model.Template;
import pathfinder.model.Template.Section;
import pathfinder.model.Template.TemplateBuilder;

public record Race(Id id, String name, String size, int speed, String type, String source) implements NamedEntity {
    public Entity toEntity() {
        var tags = Tags.of("race");
        var effects = new ArrayList<Effect>();
        var choices = new ArrayList<Choice>();

        effects.add(Effect.setNumber(id.string(), 1));
        effects.add(Effect.setNumber("size", Size.findByLongName(size).orElseThrow().id()));

        TemplateBuilder template = Template.builder(id);

        switch (id.string()) {
            case "race:human" -> {
                template.section(Section.builder()
                                .condition("@character_level>=0")
                                .choice(new SelectChoice("level0:race_asi:human", "Ability Score Increase (Human)", "asi", "", List.of("ability_score"), List.of()))
                                .build());
                template.section(Section.builder()
                                .condition("@character_level>=1")
                                .choice(new SelectChoice("level1:human_bonus_feat", "Bonus Feat (Human)", "feat", "", List.of("feat"), List.of()))
                                .build());
            }
        }

        return Entity.builder()
                .id(id)
                .name(name)
                .tags(tags)
                .effects(effects)
                .choices(choices)
                .template(template.build())
                .build();
    }
}
