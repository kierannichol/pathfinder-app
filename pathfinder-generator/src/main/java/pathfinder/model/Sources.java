package pathfinder.model;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class Sources {

    public static Optional<Source> tryFindSourceByCode(String code) {
        return SOURCES_LIST.stream()
                .filter(source -> source.code().equalsIgnoreCase(code))
                .findFirst();
    }

    public static Optional<Source> tryFindSourceByName(String name) {
        return SOURCES_LIST.stream()
                .filter(source -> source.name().equalsIgnoreCase(name) || Arrays.stream(source.aliases())
                        .anyMatch(alias -> alias.equalsIgnoreCase(name)))
                .findFirst();
    }

    public static final List<Source> SOURCES_LIST = List.of(
            new Source("PZO1110", "Core Rulebook", "PFRPG Core"),
            new Source("PZO1114", "GameMastery Guide"),
            new Source("PZO1112", "Bestiary"),
            new Source("PZO1116", "Bestiary 2"),
            new Source("PZO1120", "Bestiary 3"),
            new Source("PZO1127", "Bestiary 4"),
            new Source("PZO1133", "Bestiary 5"),
            new Source("PZO1137", "Bestiary 6"),
            new Source("PZO1129", "Advanced Class Guide"),
            new Source("PZO1115", "Advanced Player's Guide"),
            new Source("PZO1121", "Advanced Race Guide"),
            new Source("PZO1138", "Adventurer's Guide"),
            new Source("PZO1128", "Strategy Guide"),
            new Source("PZO1132", "Occult Adventures"),
            new Source("PZO1131", "Pathfinder Unchained")
//            new Source("PZO1136", "Villain Codex"),
//            new Source("PZO1130", "Monster Codex"),
//            new Source("PZO1135", "Horror Adventures"),
//            new Source("PZO1126", "Mythic Adventures"),
//            new Source("PZO1124", "NPC Codex"),
//            new Source("PZO1125", "Ultimate Campaign"),
//            new Source("PZO1118", "Ultimate Combat"),
//            new Source("PZO1123", "Ultimate Equipment"),
//            new Source("PZO1134", "Ultimate Intrigue"),
//            new Source("PZO1117", "Ultimate Magic"),
//            new Source("PZO1139", "Book of the Damned"),
//            new Source("PZO1140", "Ultimate Wilderness"),
//            new Source("PZO1141", "Planar Adventures")
    );
}
