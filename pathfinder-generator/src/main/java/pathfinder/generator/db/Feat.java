package pathfinder.generator.db;

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
                   boolean multiples) {
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
    }
}