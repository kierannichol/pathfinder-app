package pathfinder.model.pathfinder;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record CharacterClass(
        Id id,
        String name,
        String category,
        String description,
        String source,
        String hit_die,
        String alignment,
        Set<Id> class_skills,
        String skill_ranks_per_level,
        String bab,
        String fort,
        String ref,
        String will,
        Set<Id> weapon_proficiencies,
        Set<Id> armor_proficiencies,
        List<ClassLevel> levels,
        List<String> spell_caster_types,
        Set<Feature> class_features) implements NamedEntity {

    public Entity toClassEntity() {
        return ClassEntityGenerator.toClassEntity(this);
    }

    public Entity toFavoredClassEntity() {
        return FavoredClassEntityGenerator.toFavoredClassEntity(this);
    }

    public Optional<ClassLevel> level(int num) {
        return levels.stream()
                .filter(level -> level.level() == num)
                .findFirst();
    }
}
