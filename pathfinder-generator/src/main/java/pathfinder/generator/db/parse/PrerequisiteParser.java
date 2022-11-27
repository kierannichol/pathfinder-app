package pathfinder.generator.db.parse;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.function.Function;
import java.util.regex.MatchResult;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.annotation.PostConstruct;
import logic.parse.Formula;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.AbilitySourceDatabase;
import pathfinder.generator.db.ClassSourceDatabase;
import pathfinder.generator.db.FeatSourceDatabase;
import pathfinder.generator.db.RaceSourceDatabase;
import pathfinder.generator.db.RagePowerSourceDatabase;
import pathfinder.generator.model.Ability;
import pathfinder.util.PatternMapper;

@Component("Prerequisite Parser")
@RequiredArgsConstructor
public class PrerequisiteParser {
    private static final String RACE_GROUP = "(human|dwarf|orc|gnome|halfling|elf|half-elf|half-orc|naga|serpentfolk|creature that has the constrict special attack)";
    private static final String CLASS_GROUP = "(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|rogue|sorcerer|wizard|alchemist|cavalier|gunslinger|inquisitor|magus|omdura|oracle|shifter|summoner|witch|vampire hunter|vigilante|arcanist|bloodrager|brawler|hunter|investigator|shaman|skald|slayer|swashbuckler|warpriest|witch|savage)";
    private static final String ABILITY_SCORE_GROUP = "(str|dex|con|wis|int|cha)";
    private static final String PHRASE_GROUP = "([a-zA-Z][\\w --']+)";
    private static final String NAME_GROUP = "([a-zA-Z][\\w --']+)";
    private static final String NUMBER_GROUP = "(\\d+)\\+?";
    private static final String LEVEL_GROUP = "(\\d+)(?:th|st|rd|nd)?";

    private final FeatSourceDatabase featSourceDatabase;
    private final AbilitySourceDatabase abilitySourceDatabase;
    private final RagePowerSourceDatabase ragePowerSourceDatabase;
    private final ClassSourceDatabase classSourceDatabase;
    private final RaceSourceDatabase raceSourceDatabase;

    private final Map<String, String> specialNameToId = new HashMap<>();

    private static final PatternMapper GLOBAL_PATTERN_MAPPER = new PatternMapper()
            .addToken("NAME", NAME_GROUP)
            .addToken("NUMBER", NUMBER_GROUP)
            .addToken("LEVEL", LEVEL_GROUP)
            .addToken("ABILITY_SCORE", ABILITY_SCORE_GROUP)
            .addToken("CLASS", CLASS_GROUP)
            .addToken("RACE", RACE_GROUP)
            .addToken("PHRASE", PHRASE_GROUP)
            .addReplacement("either the {PHRASE} or {PHRASE}", "({0} OR {1})")
            .addReplacement("{PHRASE}, {PHRASE} and {PHRASE}", "({0} AND {1} AND {2})")
            .addReplacement("{PHRASE}, {PHRASE} or {PHRASE}", "({0} OR {1} OR {2})")
            .addReplacement("{PHRASE} or {PHRASE}", "({0} OR {1})")
            .addReplacement("{PHRASE}, {PHRASE}", "{0} AND {1}")
            .addReplacement("{PHRASE}; {PHRASE}", "{0} AND {1}")
            .addReplacement("{PHRASE} and {PHRASE}", "{0} AND {1}")
            .addReplacement("{ABILITY_SCORE} {NUMBER}", "{0} >= {1}")
            .addReplacement("{CLASS} OR {CLASS} {LEVEL}", "({0} >= {2} OR {1} >= 2)")
            .addReplacement("{CLASS} {LEVEL}", "{0} >= {1}")
            .addReplacement("{CLASS} level {LEVEL}", "{0} >= {1}")
            .addReplacement("{NAME} rage power", "{0}")
            .addReplacement("{NAME} rage powers", "{0}")

            // Not supported automatically yet
            .addReplacement("{NAME} archetype", "true")
            .addReplacement("darkvision {NUMBER} ft", "@trait:darkvision >= {0}")
            .addReplacement("racial low-light vision", "@trait:low_light_vision")
            .addReplacement("a natural bite attack", "@trait:bite_attack")
            .addReplacement("bite attack", "@trait:bite_attack")

            // Not in supported book
            .addReplacement("savage", "@class:savage")
            ;

    private final PatternMapper patternMapper = new PatternMapper(GLOBAL_PATTERN_MAPPER);

    @PostConstruct
    private void init() {
        specialNameToId.clear();
        featSourceDatabase.stream().forEach(feat -> specialNameToId.put(feat.name(), feat.id()));
        Stream.concat(abilitySourceDatabase.stream(), ragePowerSourceDatabase.stream())
                .forEach(ability -> specialNameToId.put(ability.name(), ability.id()));
        classSourceDatabase.stream().forEach(cls -> specialNameToId.put(cls.name(), cls.id()));
        raceSourceDatabase.stream().forEach(entry -> specialNameToId.put(entry.name(), entry.id()));

        List<String> abilityScores = List.of("strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma");
        for (String abilityScore : abilityScores) {
            String firstThree = abilityScore.substring(0, 3);
            specialNameToId.put(abilityScore, firstThree + "_score");
            specialNameToId.put(firstThree, firstThree + "_score");
        }

        for (Entry<String, String> entry : specialNameToId.entrySet()) {
            patternMapper.addReplacement(entry.getKey(), "@" + entry.getValue());
        }
    }

    public String extractPrerequisites(Ability ability) {
        String parsed = parsePrerequisites(ability.prerequisites());
        if (parsed.length() > 0) {
            parsed += " AND ";
        }
        parsed += "!@" + ability.id();

        Formula.parse(parsed);
        return parsed;
    }

    private String parsePrerequisites(String prerequisites) {
        prerequisites = prerequisites
                .replaceAll("—", "")
                .replaceAll("’", "'")
                .replaceAll("\\*\\*", "")
                .replaceAll(", and", ",")
                .replaceAll(" \\(see Special\\)\\.{0,1}", "")
                .replaceAll(" \\((Advanced Player's Guide \\d+)\\)\\.{0,1}", "")
                .replaceAll(" see Special\\.{0,1}", "")
                .replaceAll("\\(see below\\)\\.{0,1}", "")
                .replaceAll("\\.$", "");

        Function<String, String> renameFunction = patternMapper::mapText;

        prerequisites = renameFunction.apply(prerequisites);

        return Arrays.stream(prerequisites.split("[,;]"))
                .map(String::trim)
                .filter(part -> !part.isBlank())
                .map(renameFunction)
                .collect(Collectors.joining(" AND "));
    }

    private interface ReplaceText {

        static ReplaceText map(String pattern, String replacement) {
            return SmartReplace.map(pattern, replacement);
        }

        static ReplaceText map(String pattern, Function<String, String> mapping) {
            return SmartReplace.map(pattern, mapping);
        }

        static ReplaceText mapMany(String regex, Function<List<String>,String> mapping) {
            return MapText.of(regex, match -> {
                List<String> matches = new ArrayList<>();
                for (int i = 1; i < match.groupCount(); i++) {
                    matches.add(match.group(1));
                }
                return mapping.apply(matches);
            });
        }

        Pattern pattern();

        String tryReplace(String text);
    }

    private static class SmartReplace {

        public static ReplaceText map(String pattern, String replacement) {
            String regex = generateRegEx(pattern);
            replacement = generateReplacementForRegEx(replacement);

            return new ReplacePattern(Pattern.compile(regex, Pattern.CASE_INSENSITIVE), replacement);
        }

        public static ReplaceText map(String pattern, Function<String, String> mapping) {
            String regex = generateRegEx(pattern);

            return new MapText(Pattern.compile(regex, Pattern.CASE_INSENSITIVE),
                    matchResult -> mapping.apply(matchResult.group(1)));
        }

        private static String generateRegEx(String pattern) {
            String regex = pattern;
            regex = regex.replace("{ABILITY_SCORE}", ABILITY_SCORE_GROUP);
            regex = regex.replace("{CLASS}", CLASS_GROUP);
            regex = regex.replace("{RACE}", RACE_GROUP);
            regex = regex.replace("{NAME}", NAME_GROUP);
            regex = regex.replace("{NUMBER}", NUMBER_GROUP);
            regex = regex.replace("{LEVEL}", LEVEL_GROUP);
            return regex;
        }

        private static String generateReplacementForRegEx(String replacement) {
            replacement = replacement.replace("{0}", "$1");
            replacement = replacement.replace("{1}", "$2");
            replacement = replacement.replace("{2}", "$3");
            replacement = replacement.replace("{3}", "$4");
            replacement = replacement.replace("{4}", "$5");
            replacement = replacement.replace("{5}", "$6");
            return replacement;
        }
    }

    private static class ReplacePattern implements ReplaceText {
        private final Pattern pattern;
        private final String replacement;

        public static ReplaceText of(String regex, String replacement) {
            return new ReplacePattern(Pattern.compile(regex, Pattern.CASE_INSENSITIVE), replacement);
        }

        @Override
        public Pattern pattern() {
            return this.pattern;
        }

        private ReplacePattern(Pattern pattern, String replacement) {
            this.pattern = pattern;
            this.replacement = replacement;
        }

        public String tryReplace(String text) {
            try {
                Matcher matcher = pattern.matcher(text);
                return matcher.replaceAll(replacement);
            } catch (IllegalArgumentException e) {
                throw new IllegalArgumentException(
                        "Failed to parse \"%s\": %s".formatted(text, e.getMessage()), e);
            }
        }
    }

    private static class MapText implements ReplaceText {
        private final Pattern pattern;
        private final Function<MatchResult,String> mapping;

        public static ReplaceText of(String regex, Function<MatchResult,String> mapping) {
            return new MapText(Pattern.compile(regex, Pattern.CASE_INSENSITIVE), mapping);
        }

        private MapText(Pattern pattern, Function<MatchResult,String> mapping) {
            this.pattern = pattern;
            this.mapping = mapping;
        }

        @Override
        public Pattern pattern() {
            return this.pattern;
        }

        public String tryReplace(String text) {
            try {
                Matcher matcher = pattern.matcher(text);
                return matcher.replaceAll(mapping);
            } catch (IllegalArgumentException e) {
                throw new IllegalArgumentException(
                        "Failed to parse \"%s\": %s".formatted(text, e.getMessage()), e);
            }
        }
    }
}
