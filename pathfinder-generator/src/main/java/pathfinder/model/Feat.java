package pathfinder.model;

import java.io.Serializable;
import java.util.List;

public record Feat(String id,
                   String name,
                   List<Type> types,
                   String description,
                   String prerequisites,
                   String benefit,
                   String normal,
                   String special,
                   String source,
                   boolean teamwork,
                   String note,
                   boolean multiples) implements Serializable {

    public Ability asAbility() {
        return new Ability(id, name, Ability.Type.NONE, description, prerequisites, "", source);
    }

    public enum Type {
        UNKNOWN,
        GENERAL,
        COMBAT,
        CRITICAL,
        ITEM_CREATION,
        METAMAGIC,
        ACHIEVEMENT,
        BLOODHEX,
        FACTION,
        GRIT,
        PANACHE,
        MYTHIC,
        TEAMWORK,
        MONSTER,
        STYLE,
        PERFORMANCE,
        STORY,
        RACIAL,
        CHANNELING,
    }
}