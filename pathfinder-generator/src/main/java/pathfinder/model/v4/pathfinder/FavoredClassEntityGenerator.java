package pathfinder.model.v4.pathfinder;

import pathfinder.model.Id;
import pathfinder.model.v4.Description;
import pathfinder.model.v4.Effect;
import pathfinder.model.v4.Entity;
import pathfinder.model.v4.Tags;

public class FavoredClassEntityGenerator {

    public static Entity toFavoredClassEntity(CharacterClass characterClass) {
        Tags tags = Tags.of("favored_class", characterClass.category());
        Id id = characterClass.id().changeType("favored_class");
        return Entity.builder()
                .id(id)
                .name(characterClass.name())
                .tags(tags)
                .description(Description.create(characterClass.description()))
                .effect(Effect.setNumber(id, 1))
                .build();
    }
}
