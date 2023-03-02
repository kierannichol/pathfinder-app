package pathfinder.model.v4.pathfinder;

import java.util.ArrayList;
import java.util.List;
import pathfinder.model.Id;
import pathfinder.model.v4.Choice;
import pathfinder.model.v4.Description;
import pathfinder.model.v4.Effect;
import pathfinder.model.v4.Entity;
import pathfinder.model.v4.NamedEntity;
import pathfinder.model.v4.Template;
import pathfinder.model.v4.Template.Section;

public record Archetype(Id id,
                        String name,
                        Description description,
                        List<ArchetypeModification> modifications,
                        List<Feature> features,
                        String source) implements NamedEntity {

    public Entity toArchetypeEntity() {
        var entity = Entity.builder()
                .id(id())
                .name(name())
                .description(description())
                .tags("archetype", id().key);

        var template = Template.builder(id());

        for (int level = 1; level <= 20; level++) {
            List<Effect> effects = new ArrayList<>();
            List<Choice> choices = new ArrayList<>();

            modifications().forEach(modification -> {
//                modification.add().forEach(toAdd -> effects.add(Effect.addNumber(toAdd, 1)));
//                modification.remove().forEach(toRemove -> effects.add(Effect.addNumber(toRemove, -1)));

                effects.add(Effect.renameKey(modification.remove(), modification.add()));
            });

            template.section(new Section("@%s>=%d".formatted(id().withoutOption(), level), effects, choices));
        }

        return entity
                .template(template.build())
                .build();
    }
}
