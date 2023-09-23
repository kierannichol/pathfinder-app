package pathfinder.db.query;

import pathfinder.model.pathfinder.Skill;

public class SkillQuery {
    private final String name;

    public boolean matches(Skill skill) {
        return this.name == null || skill.name().equalsIgnoreCase(this.name);
    }

    SkillQuery(String name) {
        this.name = name;
    }
}
