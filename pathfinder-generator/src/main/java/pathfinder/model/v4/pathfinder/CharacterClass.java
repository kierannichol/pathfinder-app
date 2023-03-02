package pathfinder.model.v4.pathfinder;

import java.util.List;
import pathfinder.model.Id;
import pathfinder.model.v4.Entity;
import pathfinder.model.v4.NamedEntity;

public record CharacterClass(
        Id id,
        String name,
        String category,
        String description,
        String source,
        String hit_die,
        String alignment,
        List<Id> class_skills,
        String skill_ranks_per_level,
        String bab,
        String fort,
        String ref,
        String will,
        List<Id> weapon_proficiencies,
        List<Id> armor_proficiencies,
        List<ClassLevel> levels,
        List<Feature> class_features) implements NamedEntity {

    public Entity toClassEntity() {
        return ClassEntityGenerator.toClassEntity(this);
    }

    public Entity toFavoredClassEntity() {
        return FavoredClassEntityGenerator.toFavoredClassEntity(this);
    }


}
