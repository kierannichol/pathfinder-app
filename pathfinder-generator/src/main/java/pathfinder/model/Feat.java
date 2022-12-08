package pathfinder.model;

import java.io.Serializable;
import java.util.List;
import pathfinder.model.v3.Sourced;

public record Feat(String id,
                   String name,
                   List<Type> types,
                   String description,
                   String prerequisites,
                   String benefit,
                   String normal,
                   String special,
                   Source source,
                   boolean teamwork,
                   String note,
                   List<CharacterEffect> effects,
                   boolean multiples) implements Serializable, FeatureModel, Sourced {

    public Ability asAbility() {
        return Ability.builder()
                .id(id)
                .name(name)
                .type(Ability.Type.NONE)
                .description(description)
                .prerequisites(prerequisites)
                .source(source)
                .build();
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