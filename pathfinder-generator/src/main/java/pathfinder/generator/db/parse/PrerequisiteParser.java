package pathfinder.generator.db.parse;

import java.io.IOException;
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
import logic.parse.tree.ParseException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import pathfinder.SourceDatabase;
import pathfinder.model.Ability;
import pathfinder.model.CharacterClass;
import pathfinder.model.Feat;
import pathfinder.model.Feat.Type;
import pathfinder.model.Size;
import pathfinder.model.Skill;
import pathfinder.model.Skills;
import pathfinder.source.ExcelFeatSourceDatabase;
import pathfinder.source.RaceSourceDatabase;
import pathfinder.source.SpellSourceDatabase;
import pathfinder.util.PatternMapper;

@Component("Prerequisite Parser")
@Lazy
@Slf4j
@RequiredArgsConstructor
public class PrerequisiteParser {
    private static final String RACE_GROUP = "(human|dwarf|orc|gnome|halfling|elf|half-elf|half-orc|naga|serpentfolk|goblin|creature that has the constrict special attack)";
    private static final String CLASS_GROUP = "(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|rogue|sorcerer|wizard|alchemist|cavalier|gunslinger|inquisitor|magus|omdura|oracle|shifter|summoner|witch|vampire hunter|vigilante|arcanist|bloodrager|brawler|hunter|investigator|shaman|skald|slayer|swashbuckler|warpriest|witch|savage)";
    private static final String SKILL_GROUP = "(" + Skills.ALL.stream().map(Skill::name).map(Pattern::quote).collect(Collectors.joining("|")) + ")";
    private static final String ABILITY_SCORE_GROUP = "(str|dex|con|wis|int|cha)";
    private static final String PHRASE_GROUP = "((?:\\s*[a-zA-Z0-9][\\w\\s'+\\-\\-]+(?:\\s*\\(.*?\\))?)+)";
    private static final String NAME_GROUP = "([a-zA-Z0-9][\\w\\s'+\\-\\-]*)";
    private static final String NUMBER_GROUP = "(\\d+)\\+?";
    private static final String LEVEL_GROUP = "(\\d+)(?:th|st|rd|nd)?";
    private static final String SIZE_GROUP = "(" + Arrays.stream(Size.values()).map(Size::longName).map(Pattern::quote).collect(Collectors.joining("|")) + ")";

    private final ExcelFeatSourceDatabase featSourceDatabase;
    private final List<SourceDatabase<Ability>> abilitySourceDatabases;
    private final SourceDatabase<CharacterClass> classSourceDatabase;
    private final RaceSourceDatabase raceSourceDatabase;
    private final SpellSourceDatabase spellSourceDatabase;

    private final Map<String, String> specialNameToId = new HashMap<>();

    // TODO: fix spells per day
    public static final PatternMapper GLOBAL_PATTERN_MAPPER = new PatternMapper()
            .addToken("NAME", NAME_GROUP)
            .addToken("NUMBER", NUMBER_GROUP)
            .addToken("LEVEL", LEVEL_GROUP)
            .addToken("ABILITY_SCORE", ABILITY_SCORE_GROUP)
            .addToken("CLASS", CLASS_GROUP)
            .addToken("RACE", RACE_GROUP)
            .addToken("PHRASE", PHRASE_GROUP)
            .addToken("SKILL", SKILL_GROUP)
            .addToken("SIZE", SIZE_GROUP)
            .addToken("ANY", "(.*?)")

            .addReplacement("Spell-like ability at CL 10th or higher", "\"Spell-like ability at CL 10th or higher\"")

            .addReplacement("Strength {NUMBER}", "@str_score >= {0}")
            .addReplacement("Dexterity {NUMBER}", "@dex_score >= {0}")
            .addReplacement("Constitution {NUMBER}", "@con_score >= {0}")
            .addReplacement("Intelligence {NUMBER}", "@int_score >= {0}")
            .addReplacement("Wisdom {NUMBER}", "@wis_score >= {0}")
            .addReplacement("Charisma {NUMBER}", "@cha_score >= {0}")

            .addReplacement("You have no levels in a class that has the grit", "!@ability:grit")
            .addReplacement("Craft Magic Arms and Armor", "@feat:craft_magic_arms_and_armor")
            .addReplacement("proficient with all martial weapons", "@feat:martial_weapon_proficiency")

            .addReplacement("divine bond (mount)", "@ability:divine_bond#mount")

            .addReplacement("{NAME} as a spell or spell-like ability (including from the {NAME} or {NAME} class features)", "({0} OR {1} OR {2})")
            .addReplacement("Ability to cast divine spells", "@ability:divine_caster")
            .addReplacement("Divine spellcaster", "@ability:divine_caster")
            .addReplacement("Ability to use the {NAME} or cast {NAME}", "({0} OR {1})")
            .addReplacement("darkvision or low-light vision racial trait", "(@ability:darkvision OR @ability:low_light_vision)")
            .addReplacement("darkvision or lowlight vision racial trait", "(@ability:darkvision OR @ability:low_light_vision)")
            .addReplacement("Darkvision {NUMBER} feet", "@ability:darkvision >= {0}")
            .addReplacement("ability to create magical darkness", "(@spell:darkness OR @spell:deeper_darkness)")
            .addReplacement("Ability to acquire a new familiar", "@ability:familiar")
            .addReplacement("ability to acquire an animal companion", "@ability:animal_companion")
            .addReplacement("{LEVEL}-level spells", "@spells_per_day#{0}")
            .addReplacement("{LEVEL}-level {CLASS} spells", "@spells_per_day:{1}#{0}")
            .addReplacement("{LEVEL}-level arcane spells", "@spells_per_day:arcane#{0}")
            .addReplacement("{LEVEL}-level divine spells", "@spells_per_day:divine#{0}")
            .addReplacement("1 rank in any Craft skill", "max(@skill:craft#*) >= 1")
            .addReplacement("Ride rank {NUMBER}", "@skill:ride >= {0}")
            .addImmediateReplacement("{NUMBER} ranks in any Craft or Profession skill", "(max(@skill:craft#*) >= {0} OR max(@skill:profession:#*) >= {0})")
            .addReplacement("special mount", "\"special mount\"")

            .addReplacement("Knowledge (dungeoneering, local, nature, planes, or religion) 1 rank", "(@skill:knowledge#dungeoneering OR @skill:knowledge#local OR @skill:knowledge#planes OR @skill:knowledge#religion)")
            .addReplacement("Knowledge (dungeoneering, local, nature, planes, or religion) {NUMBER} ranks", "(@skill:knowledge#dungeoneering >= {0} OR @skill:knowledge#local >= {0} OR @skill:knowledge#planes >= {0} OR @skill:knowledge#religion >= {0})")

            // Sizes
            .addImmediateReplacement("size {SIZE} or larger", "@size >= {0}")
            .addImmediateReplacement("size {SIZE} or smaller", "@size <= {0}")
            .addImmediateReplacement("{SIZE} size or smaller", "@size <= {0}")

            .addImmediateReplacement("slow and steady", "@ability:slow_and_steady")
            .addImmediateReplacement("cat's claws racial trait or Aspect of the Beast (claws of the beast manifestation)", "(@ability:cats_claws OR @ability:aspect_of_the_beast#claws)")
            .addImmediateReplacement("Profession (siege engineer)", "@skill:profession#siege_engineer")

            .addReplacement("{NAME} or {NAME} class feature", "({0} OR {1})")
            .addReplacement("{NAME} class ability", "{0}")
            .addReplacement("either the {PHRASE} or {PHRASE}", "({0} OR {1})")
            .addReplacement("either {PHRASE} or {PHRASE}", "({0} OR {1})")
            .addReplacement("either the {PHRASE}, {PHRASE} or {PHRASE}", "({0} OR {1} OR {2})")
            .addReplacement("either the {PHRASE}, {PHRASE}, or {PHRASE}", "({0} OR {1} OR {2})")
            .addReplacement("{ABILITY_SCORE} {NUMBER}", "{0} >= {1}")
            .addReplacement("{CLASS} OR {CLASS} {LEVEL}", "({0} >= {2} OR {1} >= 2)")
            .addReplacement("{CLASS} {LEVEL}", "{0} >= {1}")
            .addReplacement("{CLASS} level {LEVEL}", "{0} >= {1}")
            .addReplacement("{LEVEL}-level {CLASS}", "{1} >= {0}")
            .addReplacement("caster level {LEVEL}", "@caster_level >= {0}")
            .addReplacement("character level {LEVEL}", "@character_level >= {0}")
            .addReplacement("{NAME} rage power", "{0}")
            .addReplacement("{NAME} rage powers", "{0}")
            .addReplacement("{NAME} alchemist discovery", "{0}")
            .addReplacement("{NAME} discovery", "{0}")
            .addReplacement("{NAME} magus arcana", "{0}")
            .addReplacement("Trained in {NAME}", "{0}")
            .addReplacement("{SKILL} {NUMBER} ranks", "{0} >= {1}")
            .addReplacement("{SKILL} {NUMBER} rank", "{0} >= {1}")
            .addReplacement("{NAME} ({NAME} or {NAME})", "({0}#{1} OR {0}#{2})")
            .addReplacement("{NAME} ({NAME})", "{0}#{1}")
            .addReplacement("{NAME} ({NAME}) 1 rank", "{0}#{1}")
            .addReplacement("proficient with weapon", "@proficiency:selected_weapon")
            .addReplacement("proficiency with {NAME}", "@proficiency:{0}")
            .addReplacement("proficient with {NAME} or {NAME}", "(@proficiency:{0} OR @proficiency:{1})")
            .addReplacement("the selected weapon", "selected_weapon")
            .addReplacement("selected shield", "selected_shield")
            .addReplacement("selected weapon", "selected_weapon")
            .addReplacement("selected natural weapon", "selected_natural_weapon")
            .addReplacement("selected thrown weapon", "selected_thrown_weapon")
            .addReplacement("selected ranged weapon", "selected_ranged_weapon")
            .addReplacement("selected piercing melee weapon", "selected_piercing_melee_weapon")
            .addReplacement("the selected vehicle type", "selected_vehicle")
            .addReplacement("both wielded weapons", "selected_weapon")
            .addReplacement("Natural armor", "@ac:natural")
            .addReplacement("Natural weapon", "(@ability:bite OR @ability:claw OR @ability:gore)")
            .addReplacement("Natural weapons", "(@ability:bite OR @ability:claw OR @ability:gore)")
            .addReplacement("two claw natural weapon attacks", "@ability:claw == 2")
            .addReplacement("Three or more natural attacks", "(@ability:bite + @ability:claw + @ability:gore) >= 3")
            .addReplacement("base attack bonus +{NUMBER}", "@bab >= {0}")
            .addReplacement("base Fortitude save +{NUMBER}", "@fort:base >= {0}")
            .addReplacement("base Will save +{NUMBER}", "@will:base >= {0}")
            .addReplacement("base Reflex save +{NUMBER}", "@reflex:base >= {0}")
            .addReplacement("Ability to cast {NAME} as a spell-like ability", "{0}")
            .addReplacement("the ability to cast {NAME}", "{0}")
            .addReplacement("Ability to cast {NAME}", "{0}")
            .addReplacement("Able to cast {NAME}", "{0}")
            .addReplacement("Able to spontaneously cast spells", "@ability:spontaneous_caster")
            .addReplacement("{NAME} class feature", "{0}")
            .addReplacement("Fly speed", "@speed:fly")
            .addReplacement("{NUMBER} years old", "@age >= {0}")

            // Not supported automatically yet
            .addReplacement("Ability to channel energy", "(@ability:channel_positive_energy OR @ability:channel_negative_energy)")
            .addReplacement("channel energy {NUMBER}d{NUMBER}", "(@ability:channel_positive_energy >= {0} OR @ability:channel_negative_energy >= {0})")
            .addReplacement("Good alignment", "(@alignment:lg OR @alignment:ng OR @alignment:cg)")
            .addReplacement("nonlawful", "(@alignment:ng OR @alignment:cg OR @alignment:n OR @alignment:cn OR @alignment:ne OR @alignment:ce)")
            .addReplacement("Channel negative energy", "@ability:channel_negative_energy")
            .addReplacement("Channel energy {NUMBER}d{NUMBER}#positive energy", "@ability:channel_positive_energy >= {0}")
            .addReplacement("Cold resistance racial trait", "@trait:cold_resistance")
            .addReplacement("{NAME} archetype", "true")
            .addReplacement("darkvision {NUMBER} ft", "@trait:darkvision >= {0}")
            .addReplacement("racial low-light vision", "@trait:low_light_vision")
            .addReplacement("a natural bite attack", "@ability:bite_attack")
            .addReplacement("rend special attack", "@ability:rend")
            .addReplacement("bite attack", "@trait:bite_attack")
            .addReplacement("creature that has the constrict special attack", "@ability:constrict")
            .addReplacement("Earthcraft ability", "@ability:earthcraft")
            .addReplacement("Rogue: none. Investigator: expanded inspiration", "(!@class:rogue#investigator OR @ability:expanded_inspiration)")
            .addReplacement("arcane spells", "@ability:arcane_spellcaster")
            .addReplacement("arcane spellcaster", "@ability:arcane_spellcaster")
            .addReplacement("3d6 prof iciency with a shield", "@proficiency:shield >= 3")
            .addReplacement("flowing monk level 12th", "@class:monk#flowing")
            .addReplacement("greater dispel magic", "@spell:greater_dispel_magic")
//            .addReplacement("Skill Focus with the class skill of bloodline selected for this feat", "@feat:skill_focus#selected_bloodline_skill")
            .addReplacement("the class skill of bloodline selected for this feat", "selected_bloodline_skill")
            .addReplacement("the class skill of bloodline selected for this feat ", "selected_bloodline_skill")
            .addReplacement("domain", "@ability:domains")
            .addReplacement("gnome magic racial trait", "@ability:gnome_magic")
            .addReplacement("Trap", "@ability:trap")
            .addReplacement("your deity's favored weapon", "selected_deity_weapon")
            .addReplacement("your deity's favored melee weapon", "selected_deity_melee_weapon")
            .addReplacement("sorcerer bloodline", "@ability:bloodline_power")
            .addReplacement("able to prepare {LEVEL}-level spells", "(@spells_per_day#{0} AND !@ability:spontaneous_caster)")
            .addReplacement("Wizard school", "@ability:arcane_school")
            .addReplacement("Spell-like ability at caster level {LEVEL} or higher", "@spells_per_day#{0}")
            .addReplacement("compatible alignment", "\"Compatible alignment\"")
            .addReplacement("sufficiently high level", "\"Sufficiently high level\"")
            .addReplacement("Special attack", "\"Special attack\"")
            .addReplacement("Sneak attack +{NUMBER}d{NUMBER}", "@ability:sneak_attack >= {0}")
            .addReplacement("defensive training", "@ability:defensive_training")
            .addReplacement("true healer", "@ability:true_healer")
            .addReplacement("bestow curse or major curse", "(@spell:bestow_curse OR @spell:bestow_major_curse)")
            .addReplacement("siege engine", "siege_engine")
            .addReplacement("siege weapon", "siege_weapon")
            .addReplacement("You must be non-mythic", "!@mythic_level")
            .addReplacement("{LEVEL} mythic tier", "@mythic_level >= {0}")
            .addReplacement("{NAME} spell-like ability", "{0}")
            .addReplacement("necromancer", "@class:necromancer")
            .addReplacement("neutrally aligned cleric", "(@class:cleric AND (@alignment:ng OR @alignment:n OR @alignment:ne))")
            .addReplacement("weapon made of primitive material", "\"weapon made of primitive material\"")

            // Misspelled Names
            .addReplacement("Close Quarters Thrower", "@feat:close_quarters_thrower")
            .addReplacement("Point-Blank Master", "@feat:point_blank_master")
            .addReplacement("Point Blank Shot", "@feat:point_blank_shot")
            .addReplacement("Rage power", "@ability:rage_power")
            .addReplacement("Surprise Follow Through", "@ability:surprise_follow_through")
            .addReplacement("Rapid Reload", "@ability:rapid_reload")

            // TODO: remove once paladin oath abilities have been added
            .addReplacement("Anchoring aura", "@ability:anchoring_aura")

            // Generic skills
            .addReplacement("Knowledge", "@skill:knowledge")

            // Not in supported book
            .addReplacement("savage", "@class:savage")
            .addReplacement("shadow jump", "false")
            .addReplacement("Elusive target", "@ability:elusive_target")
            .addReplacement("touch of corruption", "@ability:touch_of_corruption")  // anti-paladin ability
            .addReplacement("the Amateur Gunslinger feat", "@feat:amateur_gunslinger")  // gun-slinger feat
            .addReplacement("Amateur Gunslinger feat", "@feat:amateur_gunslinger")  // gun-slinger feat
            .addReplacement("weapon expertise", "@ability:weapon_expertise")        // Samurai class feature
            .addReplacement("Shield ally feature", "@ability:shield_ally")          // Summoner feat?
            .addReplacement("Leaping lance", "@ability:leaping_lance")              // Dragoon feat
            .addReplacement("illusion resistance", "@ability:illusion_resistance")  // Gnome trait
            .addReplacement("hatred", "@ability:hatred")                            // Gnome trait
            .addReplacement("drunken ki", "@ability:drunken_ki")                    // Monk subtype ability
            .addReplacement("adaptive luck", "@ability:adaptive_luck")              // Halfling thing
            .addReplacement("low-blow", "@ability:low_blow")                        // Halfling thing
            .addReplacement("adaptable luck", "@ability:adaptable_luck")            // Halfling thing
            .addReplacement("Fleet of foot", "@ability:fleet_of_foot")              // Halfling thing
            .addReplacement("Craven", "@ability:craven")                            // Halfling thing
            .addReplacement("Fearless", "@ability:fearless")                        // Halfling thing
            .addReplacement("shadow walk", "@spell:shadow_walk")
            .addReplacement("orc Ferocity", "@ability:orc_ferocity")                // Orc thing
            .addReplacement("Ferocity", "@ability:ferocity")                        // Orc thing
            .addReplacement("stonecunning", "@ability:stonecunning")                // Dwarf thing
            .addReplacement("seen and unseen", "@ability:seen_and_unseen")          // Half-elf thing
            .addReplacement("able to use drow spell-like abilities", "\"able to use drow spell-like abilities\"") // drow thing
            .addReplacement("Drow-blooded", "@ability:drow_blooded")
            .addReplacement("drow magic racial traits", "@ability:drow_magic")
            .addReplacement("hardy", "@ability:hardy")                              // Dwarf thing
            .addReplacement("mountaineer", "@ability:mountaineer")                  // Dwarf thing
            .addReplacement("stability", "@ability:stability")                      // Dwarf thing
            .addReplacement("swarming", "@ability:swarming")
            .addReplacement("sprinter", "@ability:sprinter")
            .addReplacement("bardic performance", "@ability:bardic_performance")
            .addReplacement("wing-clipped", "@ability:wing_clipped")
            .addReplacement("multitalented", "@ability:multitalented")
            .addReplacement("animal fury", "@ability:animal_fury")

            .addReplacement("{NAME} racial trait", "{0}")

            .addReplacement("two or more {NAME}", "{0} >= 2")
            .addReplacement("any two {NAME}", "{0} >= 2")
            .addReplacement("at least three {NAME}", "{0} >= 3")
            .addReplacement("one {NAME}", "{0}")
            .addReplacement("any {NAME}", "{0}")
            .addReplacement("You have at least two other {NAME}", "{0} >= 2")
            .addReplacement("{SKILL} ({NAME} or {NAME}) {NUMBER} ranks", "({0}#{1} >= {3} OR {0}#{2} >= {3})")
            .addReplacement("{SKILL} ({NAME}) 1 rank", "{0}#{1}")
            .addReplacement("{SKILL} ({NAME}) {NUMBER} ranks", "{0}#{1} >= {2}")
            .addReplacement("{NAME} class", "{0}")
//            .addReplacement("{SKILL} ({NAME}) {NUMBER} ranks, {SKILL} ({NAME}) {NUMBER} ranks or {SKILL} ({NAME}) 1 rank", "({0}#{1} >= {2} OR {3}#{4} >= {5} OR {6}#{7})")

            // Generic
            .addReplacement("{NAME} with {NAME}", "{0}#{1}")
            .addReplacement("{PHRASE}, {PHRASE} and either the {PHRASE} or {PHRASE}", "{0} AND {1} AND ({2} OR {3})")
            .addReplacement("{PHRASE} and {PHRASE}, or {PHRASE}", "(({0} AND {1}) OR {2})")
            .addReplacement("{PHRASE} or {PHRASE}", "({0} OR {1})")
            .addReplacement("{PHRASE}, {PHRASE}, or {PHRASE}", "({0} OR {1} OR {2})")
            .addReplacement("{PHRASE}, {PHRASE} or {PHRASE}", "({0} OR {1} OR {2})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, or {PHRASE}", "({0} OR {1} OR {2} OR {3})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE} or {PHRASE}", "({0} OR {1} OR {2} OR {3})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, or {PHRASE}", "({0} OR {1} OR {2} OR {3} OR {4})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE} or {PHRASE}", "({0} OR {1} OR {2} OR {3} OR {4})")
            .addReplacement("{PHRASE}, {PHRASE} and {PHRASE}", "({0} AND {1} AND {2})")
            .addReplacement("{PHRASE}, {PHRASE}", "{0} AND {1}")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}", "{0} AND {1} AND {2}")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "{0} AND {1} AND {2} AND {3}")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "{0} AND {1} AND {2} AND {3} AND {4}")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "{0} AND {1} AND {2} AND {3} AND {4} AND {5}")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "{0} AND {1} AND {2} AND {3} AND {4} AND {5} AND {6}")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "{0} AND {1} AND {2} AND {3} AND {4} AND {5} AND {6} AND {7}")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "{0} AND {1} AND {2} AND {3} AND {4} AND {5} AND {6} AND {7} AND {8}")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "{0} AND {1} AND {2} AND {3} AND {4} AND {5} AND {6} AND {7} AND {8} AND {9}")
            .addReplacement("{ANY}; {ANY}; {ANY}", "{0} AND {1} AND {2}")
            .addReplacement("{ANY}; {ANY}", "{0} AND {1}")
            .addReplacement("{PHRASE} and {PHRASE}", "{0} AND {1}")
            ;

    private final PatternMapper patternMapper = new PatternMapper(GLOBAL_PATTERN_MAPPER);

    @PostConstruct
    private void init() throws IOException {
        Stream<Ability> abilityStream = Stream.of();
        for (SourceDatabase<Ability> abilitySourceDatabase : abilitySourceDatabases) {
            abilityStream = Stream.concat(abilityStream, abilitySourceDatabase.stream());
        }

        specialNameToId.clear();

        // generic terms
        specialNameToId.put("proficiency", "proficiency");

        featSourceDatabase.stream().forEach(feat -> specialNameToId.put(feat.name(), feat.id()));
        abilityStream
                .forEach(ability -> specialNameToId.put(ability.name(), ability.id()));
        classSourceDatabase.stream().forEach(cls -> specialNameToId.put(cls.name(), cls.id()));
        classSourceDatabase.stream()
                        .flatMap(cls -> cls.levels().stream())
                                .flatMap(level -> level.specials().stream())
                                        .forEach(special -> specialNameToId.put(special.name(), special.id()));

        // Races
        raceSourceDatabase.stream().forEach(entry -> specialNameToId.put(entry.name(), entry.id()));
        specialNameToId.put("naga", "race:naga");
        specialNameToId.put("serpentfolk", "race:serpentfolk");
        specialNameToId.put("wayang", "race:wayang");
        specialNameToId.put("vishkanya", "race:vishkanya");
//        specialNameToId.put("Aasimar", "race:aasimar");
//        specialNameToId.put("goblin", "race:goblin");

        spellSourceDatabase.stream().forEach(entry -> specialNameToId.put(entry.name(), entry.id()));
        Arrays.stream(Size.values()).forEach(size -> specialNameToId.put(size.longName(), "(" + size.id() + ")"));

        List<String> abilityScores = List.of("strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma");
        for (String abilityScore : abilityScores) {
            String firstThree = abilityScore.substring(0, 3);
            specialNameToId.put(abilityScore, firstThree + "_score");
            specialNameToId.put(firstThree, firstThree + "_score");
        }

        Skills.ALL.forEach(skill -> specialNameToId.put(skill.name(), skill.id()));

        // Style feat support
        addFeatTypeToSpecialIds(Type.STYLE, "style feat", "style feats");
        addFeatTypeToSpecialIds(Type.METAMAGIC, "metamagic feat", "metamagic feats");
        addFeatTypeToSpecialIds(Type.CRITICAL, "critical feat", "critical feats");
        addFeatTypeToSpecialIds(Type.PERFORMANCE, "performance feat", "performance feats");
        addFeatTypeToSpecialIds(Type.TEAMWORK, "teamwork feat", "teamwork feats");
        addFeatTypeToSpecialIds(Type.ITEM_CREATION, "item creation feat", "item creation feats");

        specialNameToId.put("summon monster", summonMonsterSpellClause());
        specialNameToId.put("summon nature's ally spells", summonMonsterNaturesAllyClause());

        for (Entry<String, String> entry : specialNameToId.entrySet()) {
            String replacement = entry.getValue();
            if (!replacement.startsWith("(")) {
                replacement = "@" + replacement;
            }
            patternMapper.addReplacement(entry.getKey(), replacement);
        }
    }

    private void addFeatTypeToSpecialIds(Feat.Type type, String... names) throws IOException {
        String featsOfType = featSourceDatabase.stream()
                .filter(feat -> feat.types().contains(type))
                .map(feat -> "@" + feat.id())
                .collect(Collectors.joining(" + "));
        if (featsOfType.isBlank()) {
            featsOfType = "0";
        }

        for (String name : names) {
            specialNameToId.put(name, "(" + featsOfType + ")");
        }
    }

    private String summonMonsterNaturesAllyClause() throws IOException {
        String spells = spellSourceDatabase.stream()
                .filter(spell -> spell.name().toLowerCase().startsWith("summon nature's ally"))
                .map(spell -> "@" + spell.id())
                .collect(Collectors.joining(" OR "));
        if (spells.isBlank()) {
            spells = "0";
        }
        return "(" + spells + ")";
    }

    private String summonMonsterSpellClause() throws IOException {
        String spells = spellSourceDatabase.stream()
                .filter(spell -> spell.name().toLowerCase().startsWith("summon monster"))
                .map(spell -> "@" + spell.id())
                .collect(Collectors.joining(" OR "));
        if (spells.isBlank()) {
            spells = "0";
        }
        return "(" + spells + ")";
    }

    public String extractPrerequisites(Ability ability) {
        if (ability.prerequisites() == null) {
            throw new IllegalArgumentException("Prerequisites was null for " + ability);
        }

        String parsed = parsePrerequisites(ability.prerequisites());
        try {
            Formula.parse(parsed);
        } catch (ParseException e) {
            log.error("Failed to parse: \"" + ability.prerequisites() + "\"");
            throw e;
        }
        return parsed;
    }

    private String parsePrerequisites(String prerequisites) {
        prerequisites = prerequisites
                .replaceAll("—", "")
                .replaceAll("’", "'")
                .replaceAll("\\*\\*", "")
                .replaceAll(", and", ",")
                .replaceAll("APG", "")
                .replaceAll("UM", "")
                .replaceAll("UC", "")
                .replaceAll(" \\(see Special\\)\\.?", "")
                .replaceAll(" \\((Advanced Player's Guide \\d+)\\)\\.?", "")
                .replaceAll(",? see Special\\.?", "")
                .replaceAll("\\s*\\(see below\\)\\.?", "")
                .replaceAll("\\.", "");

        Function<String, String> renameFunction = patternMapper::mapText;

        prerequisites = renameFunction.apply(prerequisites);

//        return Arrays.stream(prerequisites.split("[,;](?![^()*])"))
        return Stream.of(prerequisites)
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
