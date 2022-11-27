package pathfinder.generator.db.parse;

import static pathfinder.parser.NameToIdConverter.partialId;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.regex.MatchResult;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.FeatSourceDatabase;
import pathfinder.generator.model.Feat;
import pathfinder.util.Function3;
import pathfinder.util.Function4;
import pathfinder.util.Function5;
import pathfinder.util.Function6;

@Component("Feat Prerequisite Parser")
@RequiredArgsConstructor
public class FeatPrerequisiteParser {
    private static final String RACE_GROUP = "(human|dwarf|orc|gnome|halfling|elf|half-elf|half-orc|naga|serpentfolk|creature that has the constrict special attack)";
    private static final String CLASS_GROUP = "(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|rogue|sorcerer|wizard|alchemist|cavalier|gunslinger|inquisitor|magus|omdura|oracle|shifter|summoner|witch|vampire hunter|vigilante|arcanist|bloodrager|brawler|hunter|investigator|shaman|skald|slayer|swashbuckler|warpriest|witch)";
    private static final String ABILITY_SCORE_GROUP = "(str|dex|con|wis|int|cha)";
    private static final String NAME_GROUP = "(\\w[\\w -']+)";
    private static final String NUMBER_GROUP = "(\\d+)\\+?";
    private static final String LEVEL_GROUP = "(\\d+)(?:th|st|rd|nd)?";

    private final FeatSourceDatabase featSourceDatabase;

    private static final List<ReplaceText> RENAMES = Stream.of(
//                    ReplaceText.map("^(.*) or (.*)$", (g1, g2) -> "(%s OR %s)".formatted(g1, g2)),
//                    ReplaceText.map("^(.*), (.*) or (.*)$", (g1, g2, g3) -> "(%s OR %s OR %s)".formatted(g1, g2, g3)),
                    ReplaceText.map("character level (\\d+)(?:th|st|rd|nd)", level -> "@level >= " + level),
                    ReplaceText.map("Catch Off-Guard or Throw Anything", "(@feat:catch_off_guard OR @feat:throw_anything)"),
                    ReplaceText.map("Dodge, Close Quarters Thrower or Point-Blank Master", "(@feat:dodge OR @feat:close_quarters_thrower OR @feat:point_blank_master)"),
                    ReplaceText.map("weapon expertise class feature or Quick Draw", "(@feat:weapon_expertise OR @feat:quick_draw)"),
                    ReplaceText.map("Grit class feature or the Amateur Gunslinger feat", "(sum(@ability:grit) OR @feat:amateur_gunslinger)"),
                    ReplaceText.map("Ability Focus \\(%s\\)".formatted(NAME_GROUP), name ->"@feat:ability_focus#%s".formatted(partialId(name))),
                    ReplaceText.map("Weapon Focus \\(%s\\)".formatted(NAME_GROUP), name ->"@feat:weapon_focus#%s".formatted(partialId(name))),
                    ReplaceText.map("Weapon Specialization \\(%s\\)".formatted(NAME_GROUP), name ->"@feat:weapon_specialization#%s".formatted(partialId(name))),
                    ReplaceText.map("Shield ally feature", "@ability:shield_ally"),
                    ReplaceText.map("Snake Sidewind", "@feat:snake_sidewind"),
                    ReplaceText.map("Rapid Reload", "@feat:rapid_reload"),
                    ReplaceText.map("Siege Weapon Engineer", "@feat:siege_weapon_engineer"),

                    ReplaceText.map("%s or %s %s".formatted(ABILITY_SCORE_GROUP, ABILITY_SCORE_GROUP, LEVEL_GROUP),
                            (ability1, ability2, level) -> "(@%s_score >= %s OR @%s_score >= %s)".formatted(partialId(ability1), level, partialId(ability2), level)),
                    ReplaceText.map("Int 13 or Cha 13", "(@int_score >= 13 OR @cha_score >= 13)"),
                    ReplaceText.map("Str(?:ength)? %s".formatted(NUMBER_GROUP), score -> "@str_score >= %s".formatted(score)),
                    ReplaceText.map("Con(?:stitution)? %s".formatted(NUMBER_GROUP), score -> "@con_score >= %s".formatted(score)),
                    ReplaceText.map("Dex(?:terity)? %s".formatted(NUMBER_GROUP), score -> "@dex_score >= %s".formatted(score)),
                    ReplaceText.map("Wis(?:dom)? %s".formatted(NUMBER_GROUP), score -> "@wis_score >= %s".formatted(score)),
                    ReplaceText.map("Int(?:elligence)? %s".formatted(NUMBER_GROUP), score -> "@int_score >= %s".formatted(score)),
                    ReplaceText.map("Cha(?:risma)? %s".formatted(NUMBER_GROUP), score -> "@cha_score >= %s".formatted(score)),
                    ReplaceText.map("base Fortitude save \\+(\\d+)", fort -> "@fort_save >= " + fort),
                    ReplaceText.map("[Bb]ase attack bonus \\+(\\d+)", min -> "@bab >= " + min),
                    ReplaceText.map("base attack bonus \\+(\\d+) or monk level (\\d+)\\w*", (minBab, minMonk) -> "@bab >= %s OR @class:monk >= %s".formatted(minBab, minMonk)),
                    ReplaceText.map("^(\\d+)(?:th|st|rd|nd)-level (\\w+)$", (level, className) -> "@class:" + partialId(className) + " >= " + level),
                    ReplaceText.map("^(\\w[\\w -]+) level (\\d+)(?:th|st|rd|nd)$", (className, level) -> "@class:" + partialId(className) + " >= " + level),
                    ReplaceText.map("Natural armor", "@armor:natural"),
                    ReplaceText.map("Proficient with armor or shield", "(@feat:light_armor_proficiency OR @feat:shield_proficiency)"),
                    ReplaceText.map("Grit class feature or Amateur Gunslinger feat", "(sum(@ability:grit) OR @feat:amateur_gunslinger)"),
                    ReplaceText.map("[Cc]hannel energy class feature","(@ability:channel_positive_energy OR @ability:channel_negative_energy)"),
                    ReplaceText.map("[Aa]bility to use the abundant step class feature or cast dimension door", "(sum(@ability:abundant_step) OR @spell:dimension_door)"),
                    ReplaceText.map("Weapon Specialization with selected ranged weapon", "@feat:weapon_specialization#selected_ranged_weapon"),
                    ReplaceText.map("(\\w[\\w -]+) class feature", ability -> "sum(@ability:" + partialId(ability) + ")"),
                    ReplaceText.map("Channel energy (\\d+)d6 \\(positive energy\\)", rank -> "@ability:channel_positive_energy >= " + rank),
                    ReplaceText.map("Channel energy (\\d+)d6 \\(negative energy\\)", rank -> "@ability:channel_negative_energy >= " + rank),
                    ReplaceText.map("(?:Ability to )?[Cc]hannel energy","(@ability:channel_positive_energy OR @ability:channel_negative_energy)"),
                    ReplaceText.map("(?:ability|able) to (?:cast|prepare) (\\d+)(?:th|st|rd|nd)-level spells", level -> "@spells_per_day:" + level + " > 0"),
//                    ReplaceText.map("ability to prepare (\\d+)(?:th|st|rd|nd)-level spells", level -> "@spells_per_day:" + level + " > 0"),
                    ReplaceText.map("Spell-like ability at caster level (\\d+)(?:th|st|rd|nd) or higher", level -> "@caster_level >= " + level),
                    ReplaceText.map("Spell-like ability at CL %s or higher".formatted(LEVEL_GROUP), level -> "@caster_level >= " + level),
                    ReplaceText.map("Ability to cast (\\w[\\w -']+) as a spell-like ability", spell -> "sum(@ability:" + partialId(spell) + ")"),
                    ReplaceText.map("ability to cast consecrate or desecrate", "(@spell:consecrate OR @spell:desecrate)"),
                    ReplaceText.map("Ability to cast (\\w[\\w]+) spells", type -> "@ability:" + partialId(type) + "_spellcaster"),
                    ReplaceText.map("(\\w[\\w]+) spellcaster", type -> "@ability:" + partialId(type) + "_spellcaster"),
                    ReplaceText.map("able to spontaneously cast spells", "@ability:spontaneous_spellcaster"),
                    ReplaceText.map("Ability to cast cantrips or orisons", "@spellcaster_level > 0"),
                    ReplaceText.map("(.*) or monk level (\\d+)(?:th|st|rd|nd)", (other, level) -> "(" + other + ") OR @class:monk >= " + level),

                    ReplaceText.map("necromancer or neutrally aligned cleric", "(@alignment == 'ng' OR @alignment == 'n' OR @alignment == 'ne')"),

                    ReplaceText.map("weapon proficiency \\(%s\\)".formatted(NAME_GROUP), weapon -> "weapon proficiency:%s".formatted(weapon)),
                    ReplaceText.map("Proficiency with(?: the)? selected weapon", "@proficiency:selected_weapon"),
                    ReplaceText.map("Proficiency with(?: the)? selected shield", "@proficiency:selected_shield"),
                    ReplaceText.map("Shield Specialization with selected shield", "@feat:shield_specialization#selected_shield"),
                    ReplaceText.map("3d6 prof iciency with a shield", "@proficiency:shield >= 3"),
                    ReplaceText.map("(\\w[\\w -']+) alchemist discovery", name -> "@alchemistdiscovery:" + partialId(name)),
                    ReplaceText.map("[Cc]aster level (\\d+)(?:th|st|rd|nd)", level -> "@caster_level >= " + level),
                    ReplaceText.map("proficiency with one siege engine", "@proficiency:siege_engine"),
                    ReplaceText.map("proficient with weapon", ""), // TODO: fix this
                    ReplaceText.map(" with both wielded weapons", ""),
                    ReplaceText.map(" with your deity's favored melee weapon", ""), // TODO: fix this
                    ReplaceText.map(" with the selected vehicle type", "#selected_vehicle_type"), // TODO: fix this
                    ReplaceText.map("proficient with sling or halfling sling staff", "(@proficiency:sling OR @proficiency:halfling_sling_staff)"),

                    // spells
                    ReplaceText.map("able to cast %s-level %s spells".formatted(LEVEL_GROUP, NAME_GROUP),
                            (level, name) -> "@ability:%s_spellcaster >= %s".formatted(partialId(name), level)),
                    ReplaceText.mapMany("ability to cast %s, %s, %s, %s, or %s".formatted(NAME_GROUP, NAME_GROUP, NAME_GROUP, NAME_GROUP, NAME_GROUP), matches -> "(" + matches.stream().map(spellName -> "@spell:" + partialId(spellName)).collect(
                            Collectors.joining(" OR ")) + ")"),
                    ReplaceText.map("ability to cast %s-level %s spells".formatted(LEVEL_GROUP, CLASS_GROUP), (level, className) -> "@spell_list:%s >= %s".formatted(partialId(className), level)),
                    ReplaceText.map("(?:the )?ability to cast %s or %s".formatted(NAME_GROUP, NAME_GROUP), (spell1, spell2) -> "(@spell:%s OR @spell:%s)".formatted(partialId(spell1), partialId(spell2))),
                    ReplaceText.map("(?:the )?ability to cast %s".formatted(NAME_GROUP), spellName -> "@spell:%s".formatted(partialId(spellName))),

                    // class abilities
                    ReplaceText.map("lay on hands", "sum(@ability:lay_on_hands)"),
                    ReplaceText.map("ki pool", "sum(@ability:ki_pool)"),
                    ReplaceText.map("%s magus arcana".formatted(NAME_GROUP), name -> "@magus_arcana:" + partialId(name)),
                    ReplaceText.map("%s discovery".formatted(NAME_GROUP), name -> "@discovery:" + partialId(name)),
                    ReplaceText.map("%s class ability".formatted(NAME_GROUP), name -> "@feat:" + partialId(name)),
                    ReplaceText.map("ability to use any polymorph effect", "max(@ability:polymorph)"),

                    // skills
                    ReplaceText.map("%s \\(%s\\) (\\d+) ranks? or %s \\(%s\\) (\\d+) ranks?".formatted(NAME_GROUP, NAME_GROUP, NAME_GROUP, NAME_GROUP), (category1, skill1, rank1, category2, skill2, rank2) -> "(@skill:%s#%s >= %s OR @skill:%s#%s >= %s)".formatted(partialId(category1), partialId(skill1), rank1, partialId(category2), partialId(skill2), rank2)),
                    ReplaceText.map("%s (\\d+) ranks? or %s \\(%s\\) (\\d+) ranks?".formatted(NAME_GROUP, NAME_GROUP, NAME_GROUP), (category1, rank1, category2, skill2, rank2) -> "(@skill:%s >= %s OR @skill:%s#%s >= %s)".formatted(partialId(category1), rank1, partialId(category2), partialId(skill2), rank2)),
                    ReplaceText.map("Profession \\((\\w[\\w -']+)\\) (\\d+) ranks?", (type, ranks) -> "@skill:profession#" + partialId(type) + " >= " + ranks),
                    ReplaceText.map("(\\w[\\w -']+) (\\d+) ranks?", (skill, ranks) -> "@skill:" + partialId(skill) + " >= " + ranks),
                    ReplaceText.map("Knowledge \\((\\w[\\w -']+)\\) (\\d+) ranks?", (type, ranks) -> "@skill:knowledge_" + partialId(type) + " >= " + ranks),
                    ReplaceText.map("Knowledge \\((\\w[\\w -']+), (\\w[\\w -']+), (\\w[\\w -']+), (\\w[\\w -']+), or (\\w[\\w -']+)\\) (\\d+) ranks?", (skill1, skill2, skill3, skill4, skill5, ranks) -> "(@skill:knowledge_" + partialId(skill1) + " >= " + ranks + " OR @skill:knowledge_" + partialId(skill2) + " >= " + ranks + " OR @skill:knowledge_" + partialId(skill3) + " >= " + ranks + " OR @skill:knowledge_" + partialId(skill4) + " >= " + ranks + " OR @skill:knowledge_" + partialId(skill5) + " >= " + ranks + ")"),
                    ReplaceText.map("Perform \\((\\w[\\w -']+)\\) (\\d+) ranks?", (skill, ranks) -> "@skill:perform#" + partialId(skill) + " >= " + ranks),
                    ReplaceText.map("Perform \\((\\w[\\w -']+) or (\\w[\\w -']+)\\) (\\d+) ranks?", (skill1, skill2, ranks) -> "(@skill:perform#" + partialId(skill1) + " >= " + ranks + " OR @skill:perform#" + partialId(skill2) + " >= " + ranks + ")"),
                    ReplaceText.map("(\\d+) ranks? in any Craft skill", (ranks) -> "min(@skill:craft) >= " + ranks),
                    ReplaceText.map("Craft \\((\\w[\\w -']+)\\) (\\d+) ranks?", (skill, ranks) -> "@skill:craft#" + partialId(skill) + " >= " + ranks),
                    ReplaceText.map("(\\d+) ranks? in any Craft or Profession skill", ranks -> "(max(@skill:craft) >= %s OR max(@skill:profession) >= %s)".formatted(ranks, ranks)),
                    ReplaceText.map("Ride rank (\\d+)", rank -> "@skill:ride >= %s".formatted(rank)),

                    // races
                    ReplaceText.map("%s, %s,? or %s".formatted(RACE_GROUP, RACE_GROUP, RACE_GROUP), (r1, r2, r3) -> "(@race == '%s' OR @race == '%s' OR @race == '%s')".formatted(r1, r2, r3)),
                    ReplaceText.map("%s,? or %s".formatted(RACE_GROUP, RACE_GROUP), (r1, r2) -> "(@race == '%s' OR @race == '%s')".formatted(r1, r2)),
                    ReplaceText.map("^%1$s$".formatted(RACE_GROUP), r1 -> "@race == '%s'".formatted(r1)),

                    ReplaceText.map("%1$s %1$s archetype".formatted(NAME_GROUP), (archetype, className) -> "@archetype:%s#%s > 0".formatted(className, archetype)),
                    ReplaceText.map("flowing monk level 12th", "@archetype:monk#flowing >= 12"), // TODO: fix this
                    ReplaceText.map("summoner 1st", "@class:summoner >= 1"),
                    ReplaceText.map("%s level %s".formatted(CLASS_GROUP, LEVEL_GROUP), (className, level) -> "@class:%s >= %s".formatted(partialId(className), level)),
                    ReplaceText.map("%s class".formatted(CLASS_GROUP), (className) -> "@class:%s".formatted(partialId(className))),
                    ReplaceText.map("any two critical feats", ""), // TODO: fix this
                    ReplaceText.map("any critical feat", ""), // TODO: fix this
                    ReplaceText.map("any item creation feat", ""), // TODO: fix this
                    ReplaceText.map("any one performance feat", ""), // TODO: fix this
                    ReplaceText.map("one other teamwork feat", ""), // TODO: fix this
                    ReplaceText.map("Ability to cast dispel magic or greater dispel magic", "(@spell:dispel_magic OR @spell:greater_dispel_magic)"),
                    ReplaceText.map("able to cast (\\w[\\w -']+)", spell -> "@spell:" + partialId(spell)),
                    ReplaceText.map("Weapon Focus \\((\\w[\\w -']+)\\)", weapon -> "@feat:weapon_focus#" + partialId(weapon)),
                    ReplaceText.map("Spell [Ff]ocus \\((\\w[\\w -']+)\\)", type -> "@feat:spell_focus#" + partialId(type)),
                    ReplaceText.map("Point Blank Shot", "@feat:point_blank_shot"),
                    ReplaceText.map("rend special attack", "sum(@ability:rend)"),
                    ReplaceText.map("Sneak attack \\+(\\d+)d6", rank -> "sum(@ability:sneak_attack) >= " + rank),
                    ReplaceText.map("size Large or larger", "@size >= 6"),
                    ReplaceText.map("Small size or smaller", "@size <= 4"),
                    ReplaceText.map("size Small or smaller", "@size <= 4"),
                    ReplaceText.map("Size Huge or larger", "@size >= 7"),
                    ReplaceText.map("Fly speed", "@speed:fly > 0"),
                    ReplaceText.map("ability to create magical darkness", "sum(@ability:magical_darkness)"),
                    ReplaceText.map("darkvision or low-light vision racial trait", "(@ability:darkvision OR @ability:low_light_vision)"),
                    ReplaceText.map("darkvision", "@ability:darkvision"),
                    ReplaceText.map("darkvision (\\d+) feet", feet -> "@ability:darkvision >= " + feet),
                    ReplaceText.map("the ability to cast animate dead or command undead", "(@spell:animate_dead OR @spell:command_undead)"),
                    ReplaceText.map("Damage reduction", "max(@ability:damage_reduction)"),
                    ReplaceText.map(" with selected (\\w[\\w -']+) weapon", type -> "#selected_" + partialId(type) + "_weapon"),
                    ReplaceText.map(" with selected weapon", "#selected_weapon"),
                    ReplaceText.map("ability to acquire an animal companion, eidolon, familiar, or special mount", ""), // TODO: fix this
                    ReplaceText.map("Skill Focus with the class skill of bloodline selected for this feat", ""), // TODO: fix this
                    ReplaceText.map("proficiency with weapon", "(@feat:light_armor_proficiency OR @proficiency:light_armor)"),
                    ReplaceText.map("Special attack", ""), // TODO: fix this
                    ReplaceText.map("Ability to acquire a new familiar, compatible alignment, sufficiently high level", ""), // TODO: fix this
                    ReplaceText.map("proficiency with your deity's favored weapon", ""), // TODO: fix this
                    ReplaceText.map("two claw natural weapon attacks", ""), // TODO: fix this
                    ReplaceText.map("Natural weapons?", ""), // TODO: fix this
                    ReplaceText.map("one metamagic feat", ""), // TODO: fix this
                    ReplaceText.map("at least three metamagic feats", ""), // TODO: fix this
                    ReplaceText.map("two or more style feats", ""), // TODO: fix this
                    ReplaceText.map("any two performance feats", ""), // TODO: fix this
                    ReplaceText.map("or at least three performance feats", ""), // TODO: fix this
                    ReplaceText.map("You have at least two other teamwork feats", ""), // TODO: fix this
                    ReplaceText.map("Three or more natural attacks", ""), // TODO: fix this
                    ReplaceText.map("weapon made of primitive material", ""), // TODO: fix this
                    ReplaceText.map("(\\d+)\\+? years old", age -> "@age >= " + age),

                    // very generic
                    ReplaceText.map("(\\w[\\w -']+) racial trait", trait -> "sum(@ability:" + partialId(trait) + ")"),
                    ReplaceText.map(" and ", " AND ")
            )
//            .sorted(Comparator.comparingInt(a -> -a.pattern().pattern().length()))
            .toList();

    private final List<ReplaceText> featRenames = new ArrayList<>();

    @PostConstruct
    private void init() {
        this.featRenames.addAll(featSourceDatabase.stream()
                .sorted(Comparator.comparingInt(feat -> -feat.name().length()))
                .map(feat -> ReplaceText.map("(^|\\(| AND | OR )%s($|\\)|:|#| AND | OR )".formatted(feat.name()),
                        (before, after) -> "%s@%s%s".formatted(before, feat.id(), after))).toList());
    }

    public String extractPrerequisites(Feat feat) {
        String parsed = parsePrerequisites(feat.prerequisites());
        if (!feat.multiples()) {
            if (parsed.length() > 0) {
                parsed += " AND ";
            }
            parsed += " !@" + feat.id();
        }
        return parsed;
    }

    private String parsePrerequisites(String prerequisites) {
        prerequisites = prerequisites
                .replaceAll("\\*\\*", "")
                .replaceAll(", and", ",")
                .replaceAll(" \\(see Special\\)\\.{0,1}", "")
                .replaceAll(" \\((Advanced Player's Guide \\d+)\\)\\.{0,1}", "")
                .replaceAll(" see Special\\.{0,1}", "")
                .replaceAll("\\(see below\\)\\.{0,1}", "")
                .replaceAll("\\.$", "");

        Function<String, String> renameFunction = text -> Stream.concat(RENAMES.stream(), featRenames.stream())
                .reduce(text, (String in, ReplaceText rename) -> rename.tryReplace(in), (a,b) -> a);

        prerequisites = renameFunction.apply(prerequisites);

        return Arrays.stream(prerequisites.split("[,;]"))
                .map(String::trim)
                .filter(part -> !part.isBlank())
                .map(renameFunction::apply)
//                .map(part -> tryFeatPrerequisite(part).orElse(part))
                .collect(Collectors.joining(" AND "));
    }

    private Optional<String> tryFeatPrerequisite(String rawPrerequisite) {
        return featSourceDatabase.findByName(rawPrerequisite)
                .map(feat -> {
                    String id = feat.id();
                    return "@" + id;
                });
    }

    private interface ReplaceText {

        static ReplaceText map(String regex, String replacement) {
            return ReplacePattern.of(regex, replacement);
        }

        static ReplaceText map(String regex, Function<String,String> mapping) {
            return MapText.of(regex, match -> mapping.apply(match.group(1)));
        }

        static ReplaceText map(String regex, BiFunction<String,String,String> mapping) {
            return MapText.of(regex, match -> mapping.apply(match.group(1), match.group(2)));
        }

        static ReplaceText map(String regex, Function3<String,String,String,String> mapping) {
            return MapText.of(regex, match -> mapping.apply(match.group(1), match.group(2), match.group(3)));
        }

        static ReplaceText map(String regex, Function4<String,String,String,String,String> mapping) {
            return MapText.of(regex, match -> mapping.apply(match.group(1), match.group(2), match.group(3), match.group(4)));
        }

        static ReplaceText map(String regex, Function5<String,String,String,String,String,String> mapping) {
            return MapText.of(regex, match -> mapping.apply(match.group(1), match.group(2), match.group(3), match.group(4), match.group(5)));
        }

        static ReplaceText map(String regex, Function6<String,String,String,String,String,String,String> mapping) {
            return MapText.of(regex, match -> mapping.apply(match.group(1), match.group(2), match.group(3), match.group(4), match.group(5), match.group(6)));
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
            Matcher matcher = pattern.matcher(text);
            return matcher.replaceAll(replacement);

//            return text.replaceAll(pattern.pattern(), replacement);
//            Matcher matcher = pattern.matcher(text);
//            if (!matcher.find()) {
//                return Optional.empty();
//            }
//            return Optional.of(matcher.replaceFirst(replacement));
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
            Matcher matcher = pattern.matcher(text);
            return matcher.replaceAll(mapping::apply);
//            if (!matcher.find()) {
//                return text;
//            }
//            return text.replaceAll(pattern.pattern(), mapping.apply(matcher));
        }
    }
}
