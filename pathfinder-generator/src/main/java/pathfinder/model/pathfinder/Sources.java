package pathfinder.model.pathfinder;

import java.util.Arrays;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import pathfinder.util.StringUtils;

@Slf4j
public class Sources {
    public static final SourceId CORE = new SourceId(generate("PZO1110"),
            "PZO1110", "Core Rulebook", "PFRPG Core", "PRPG Core Rulebook", "Pathfinder RPG Core Rulebook");

    public static final SourceId ADVANCED_PLAYERS_GUIDE = new SourceId(generate("PZO1115"),
            "PZO1115", "Advanced Player's Guide", "APG", "Pathfinder Roleplaying Game: Advanced Player's Guide");
    public static final SourceId ADVANCED_CLASS_GUIDE = new SourceId(generate("PZO1129"),
            "PZO1129", "Advanced Class Guide", "ACG",
            "Pathfinder Roleplaying Game: Advanced Class Guide");
    public static final SourceId ADVANCED_RACE_GUIDE = new SourceId(generate("PZO1121"),
            "PZO1121", "Advanced Race Guide", "ARG",
            "Pathfinder Roleplaying Game: Advanced Race Guide");
    public static final SourceId ADVENTURERS_GUIDE = new SourceId(generate("PZO1138"),
            "PZO1138", "Adventurer's Guide",
            "Pathfinder Roleplaying Game: Adventurer's Guide");
    public static final SourceId GAMEMASTERY_GUIDE = new SourceId(generate("PZO1114"),
            "PZO1114", "GameMastery Guide");
    public static final SourceId UNCHAINED = new SourceId(generate("PZO1131"),
            "PZO1131", "Pathfinder Unchained");
    public static final SourceId ULTIMATE_COMBAT = new SourceId(generate("PZO1118"),
            "PZO1118", "Ultimate Combat",
            "Pathfinder Roleplaying Game: Ultimate Combat");
    public static final SourceId ULTIMATE_EQUIPMENT = new SourceId(generate("PZO1123"),
            "PZO1123", "Ultimate Equipment",
            "Pathfinder Roleplaying Game: Ultimate Equipment");
    public static final SourceId ULTIMATE_MAGIC = new SourceId(generate("PZO1117"),
            "PZO1117", "Ultimate Magic",
            "Pathfinder Roleplaying Game: Ultimate Magic", "PRG:UM");

    public static final SourceId COMPANION_HEROES_OF_THE_HIGH_COURT = new SourceId(
            generate("PZO9476"),
            "PZO9476", "Pathfinder Player Companion: Heroes of the High Court");
    public static final SourceId OCCULT_ADVENTURES = new SourceId(generate("PZO1132"),
            "PZO1132", "Occult Adventures",
            "Pathfinder Roleplaying Game: Occult Adventures", "OGL");

    public static SourceId findSourceByNameOrCode(String search) {
        if (search == null) {
            return null;
        }
        SourceId found = findSourceByName(search);
        if (found == null) {
            found = findSourceByCode(search);
        }
        return found;
    }

    private static SourceId findSourceByCode(String code) {
        if (code == null) {
            return null;
        }
        String sanitizedCode = StringUtils.sanitize(code);
        return SOURCES_LIST.stream()
                .filter(source -> source.code().equalsIgnoreCase(sanitizedCode))
                .findFirst()
                .orElse(null);
    }

    private static SourceId findSourceByName(String name) {
        if (name == null) {
            return null;
        }
        name = name
                .replace("Pathfinder Roleplaying Game: ", "")
                .replace("Pathfinder Roleplaying Game ", "")
                .replace("Pathfinder RPG ", "");
        String sanitizedName = StringUtils.sanitize(name);
        return SOURCES_LIST.stream()
                .filter(source -> source.name().equalsIgnoreCase(sanitizedName) || Arrays.stream(source.aliases())
                        .anyMatch(alias -> alias.equalsIgnoreCase(sanitizedName)))
                .findFirst()
                .orElse(null);
    }

    private static int generate(String sourceCode) {
        return Integer.parseInt(sourceCode.substring(3));
    }

    public static final List<SourceId> SOURCES_LIST = List.of(
            CORE,
            ADVANCED_PLAYERS_GUIDE,
            ADVANCED_CLASS_GUIDE,
//            ADVANCED_RACE_GUIDE,
            ADVENTURERS_GUIDE,
            GAMEMASTERY_GUIDE,
            new SourceId(generate("PZO1112"), "PZO1112", "Bestiary", "Pathfinder RPG Bestiary"),
            new SourceId(generate("PZO1116"), "PZO1116", "Bestiary 2"),
            new SourceId(generate("PZO1120"), "PZO1120", "Bestiary 3"),
            new SourceId(generate("PZO1127"), "PZO1127", "Bestiary 4"),
            new SourceId(generate("PZO1133"), "PZO1133", "Bestiary 5"),
            new SourceId(generate("PZO1137"), "PZO1137", "Bestiary 6"),
            new SourceId(generate("PZO1128"), "PZO1128", "Strategy Guide"),
            OCCULT_ADVENTURES,
            UNCHAINED,
//            new Source("PZO1136", "Villain Codex"),
//            new Source("PZO1130", "Monster Codex"),
//            new Source("PZO1135", "Horror Adventures"),
//            new Source("PZO1126", "Mythic Adventures"),
//            new Source("PZO1124", "NPC Codex"),
//            new Source("PZO1125", "Ultimate Campaign"),
            ULTIMATE_COMBAT,
            ULTIMATE_EQUIPMENT,
//            new Source("PZO1134", "Ultimate Intrigue"),
            ULTIMATE_MAGIC,

//            new Source("PZO1139", "Book of the Damned"),
//            new Source("PZO1140", "Ultimate Wilderness"),
//            new Source("PZO1141", "Planar Adventures")

            // Companions
            COMPANION_HEROES_OF_THE_HIGH_COURT
    );
}
