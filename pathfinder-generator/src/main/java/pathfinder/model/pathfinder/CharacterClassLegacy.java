package pathfinder.model.pathfinder;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record CharacterClassLegacy(
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
        List<ClassLevel> levels,
        Set<Feature> class_features) implements NamedEntity {

    public Optional<ClassLevel> level(int num) {
        return levels.stream()
                .filter(level -> level.level() == num)
                .findFirst();
    }
}
