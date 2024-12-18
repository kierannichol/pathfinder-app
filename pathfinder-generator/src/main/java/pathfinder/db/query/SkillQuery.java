package pathfinder.db.query;

import java.util.List;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.Skill;
import pathfinder.model.pathfinder.Skills;

public class SkillQuery implements Query<Skill> {
    private final String name;

    @Override
    public Stream<Skill> query(List<Source> sources, CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return Skills.ALL.stream()
                .filter(this::matches);
    }

    private boolean matches(Skill skill) {
        return this.name == null || skill.name().equalsIgnoreCase(this.name);
    }

    SkillQuery(String name) {
        this.name = name;
    }
}
