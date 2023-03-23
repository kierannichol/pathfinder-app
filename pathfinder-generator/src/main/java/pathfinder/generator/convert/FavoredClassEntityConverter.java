package pathfinder.generator.convert;

import org.springframework.stereotype.Component;
import pathfinder.model.Description;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.Sources;

@Component
public class FavoredClassEntityConverter {

    public Entity toFavoredClassEntity(CharacterClass characterClass) {
        Tags tags = Tags.of("favored_class", characterClass.category());
        Id id = characterClass.id().changeType("favored_class");
        return Entity.builder()
                .id(id)
                .name(characterClass.name())
                .tags(tags)
                .description(Description.create(characterClass.description()))
                .effect(Effect.setNumber(id, 1))
                .source(Sources.findSourceByNameOrCode(characterClass.source()))
                .build();
    }
}
