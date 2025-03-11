package pathfinder.generator;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.function.BiConsumer;
import java.util.function.Function;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.text.WordUtils;
import org.formula.Formula;
import org.formula.parse.tree.ParseException;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.NamedEntityQuery;
import pathfinder.db.query.Query;
import pathfinder.model.Id;
import pathfinder.model.Identity;
import pathfinder.model.NamedEntity;
import pathfinder.model.pathfinder.ArmorProficiency;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.Feat.FeatType;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Size;
import pathfinder.model.pathfinder.Skill;
import pathfinder.model.pathfinder.Skills;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;
import pathfinder.model.pathfinder.Weapons;
import pathfinder.util.PatternMapper;
import pathfinder.util.StringUtils;

@Component("Prerequisite Parser")
@Lazy
@Slf4j
@RequiredArgsConstructor
public class PrerequisiteParser {
    private static final Pattern IS_INT_PATTERN = Pattern.compile("-?\\d+");
    private static final String RACE_GROUP = "(ifrit|dhampir|undine|aasimar|human|dwarf|drow|orc|hobgoblin|gnome|halfling|elf|half-elf|half-orc|naga|serpentfolk|tiefling|goblin|kobold|catfolk|creature that has the constrict special attack)";
    private static final String CLASS_GROUP = "(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|rogue|sorcerer|wizard|alchemist|cavalier|gunslinger|inquisitor|magus|omdura|oracle|shifter|summoner|witch|vampire hunter|vigilante|arcanist|bloodrager|brawler|hunter|investigator|shaman|skald|slayer|swashbuckler|warpriest|witch|savage|summoner \\(unchained\\)|occultist|kineticist|mesmerist)";
    private static final String SKILL_GROUP = "(" + Skills.ALL.stream().map(Skill::name).map(Pattern::quote).collect(Collectors.joining("|")) + ")";
    private static final String ABILITY_SCORE_GROUP = "(str|strength|dex|dexterity|con|constitution|wis|wisdom|int|intelligence|cha|charisma)";
    private static final String PHRASE_GROUP = "((?:\\s*[\\w\\s'+\\-\\-]+(?:\\s*\\(.*?\\))?)+)";
    private static final String NAME_GROUP = "([a-zA-Z0-9][\\w\\s'+\\-\\-]*)";
    private static final String NUMBER_GROUP = "(\\d+)\\+?";
    private static final String LEVEL_GROUP = "(\\d+)(?:th|st|rd|nd)?";
    private static final String SIZE_GROUP = "(" + Arrays.stream(Size.values()).map(Size::longName).map(Pattern::quote).collect(Collectors.joining("|")) + ")";

    private final AtomicBoolean initialized = new AtomicBoolean(false);
    private final PathfinderDatabase database;

    // TODO: fix spells per day
    public static final PatternMapper GLOBAL_PATTERN_MAPPER = new PatternMapper()
            .addToken("NAME", NAME_GROUP)
            .addToken("ABILITY", NAME_GROUP)
            .addToken("NUMBER", NUMBER_GROUP)
            .addToken("LEVEL", LEVEL_GROUP)
            .addToken("ABILITY_SCORE", ABILITY_SCORE_GROUP)
            .addToken("CLASS", CLASS_GROUP)
            .addToken("RACE", RACE_GROUP)
            .addToken("PHRASE", PHRASE_GROUP)
            .addToken("SKILL", SKILL_GROUP)
            .addToken("SIZE", SIZE_GROUP)
            .addToken("ANY", "(.*?)")

            .addFunction("key", (id, text) -> Id.of(id).key)
            .addFunction("id", (id, text) -> id)
//            .addFunction("class_feature", (id, text) -> wildcard(id, text, ""))
//            .addFunction("wildcard", (id, text) -> id)
//enabled_formula: "all(@dex_score>=13,@feat:greater_grapple,@feat:improved_grapple,@feat:improved_unarmed_strike,any(@bab>=9,@class:monk>=9))"

            .addImmediateReplacement("Proficient with armor or shield", "any(@proficiency:light_armor,@proficiency:medium_armor,@proficiency:heavy_armor,@proficiency:shield)")
            .addImmediateReplacement("proficient with {NAME} or {NAME}", "(@proficiency:{0} OR @proficiency:{1})")
            .addImmediateReplacement("the ability to cast animate dead or command undead", "(@spell:animate_dead OR @spell:command_undead)")
            .addImmediateReplacement("ability to acquire an animal companion, eidolon, familiar, or special mount", "(@trait:animal_companion OR @feature:eidolon OR @feature:familiar OR @feature:special_mount)")
            .addImmediateReplacement("Channel energy class feature", "@ability:channel_energy[Channel Energy]")
//            .addImmediateReplacement("halfling sling staff", "halfling_sling_staff")

//            .addImmediateReplacement("proficient with sling or halfling sling staff", "any(@proficiency:sling,@proficiency:halfling_sling_staff)")
//            .addImmediateReplacement("proficient with sling or half ling sling staff", "any(@proficiency:sling,@proficiency:halfling_sling_staff)")

            .addReplacement("augmented summoning", "@feat:augment_summoning")
//            .addReplacement("base attack bonus +{NUMBER} or monk level {LEVEL}", "any(@bab>={0},@class:monk>={1})")

            .addImmediateReplacement("base attack bonus +{NUMBER} or {CLASS} level {LEVEL}", "any(@bab>={0},{1}>={2})")

            .addReplacement("no levels in a class that has the {NAME}", "!{0}")
            .addReplacement("must be taken at {LEVEL} level", "@character_level==1")
            .addReplacement("you may only select this feat at {LEVEL} level", "@character_level=={0}")
            .addReplacement("you may only gain this feat at {LEVEL} level", "@character_level=={0}")

            .addReplacement("must have an animal companion", "@trait:animal_companion")

//            .addReplacement("{RACE}", "@race:{0}")
            .addReplacement("goblin", "@race:goblin")
            .addReplacement("drow", "@race:drow")
            .addReplacement("tiefling", "@race:tiefling")
            .addReplacement("aasimar", "@race:aasimar")
            .addReplacement("undine", "@race:undine")
            .addReplacement("dhampir", "@race:dhampir")
            .addReplacement("ifrit", "@race:ifrit")
            .addReplacement("changeling", "@race:changeling")
            .addReplacement("ratfolk", "@race:ratfolk")
            .addReplacement("kobold", "@race:kobold")
            .addReplacement("strix", "@race:strix")
            .addReplacement("tengu", "@race:tengu")
            .addReplacement("suli", "@race:suli")
            .addReplacement("duergar", "@race:duergar")
            .addReplacement("kitsune", "@race:kitsune")
            .addReplacement("fetchling", "@race:fetchling")

            .addReplacement("use psychic spell-like abilities", "\"Use psychic spell-like abilities\"")
            .addReplacement("ability to awaken the heart chakra", "\"Ability to awaken the heart chakra\"")
            .addReplacement("ability to awaken the crown chakra", "\"Ability to awaken the crown chakra\"")
            .addReplacement("ability to awaken the root chakra", "\"Ability to awaken the root chakra\"")

            // removals
//            .addReplacement("occultist {NUMBER}", "(0)")
            .addReplacement("redmantisassassin {NUMBER}", "(0)")
//            .addReplacement("psychic {NUMBER}", "(0)")
            .addReplacement("antipaladin {NUMBER}", "(0)")
//            .addReplacement("mesmerist {NUMBER}", "(0)")
            .addReplacement("medium {NUMBER}", "(0)")
            .addReplacement("spiritualist {NUMBER}", "(0)")
            .addReplacement("sahirafiyun {NUMBER}", "(0)")
            .addReplacement("adept {NUMBER}", "(0)")
            .addReplacement("detect undead paladin class feature", "@ability:detect_undead#paladin")
            .addReplacement("ability to use any polymorph effect", "\"Ability to use any polymorph effect\"")
            .addReplacement("Centaur or any tauric creature at the GM's discretion", "\"Centaur or any tauric creature at the GM's discretion\"")
            .addImmediateReplacement("must worship and receive spells from a deity", "\"Worship and receive spells from a deity\"")
            .addImmediateReplacement("worship and receive spells from a deity", "\"Worship and receive spells from a deity\"")
            .addReplacement("ability to start a performance (or raging song) as a move action", "\"Ability to start a performance (or raging song) as a move action\"")
            .addReplacement("ability to spontaneously cast cure or inflict spells", "\"Ability to spontaneously cast cure or inflict spells\"")
            .addImmediateReplacement("Animal or Plant domain", "any(@domain:animal, @domain:plant)")

            .addReplacement("You have no levels in a class that has the grit class feature", "!@trait:grit")
            .addReplacement("Siege Weapon Engineer", "@feat:siege_engineer")

            .addReplacement("Spell-like ability at CL 10th or higher", "\"Spell-like ability at CL 10th or higher\"")

            .addReplacement("Channel energy {NUMBER}d{NUMBER} (positive energy)", "@ability:channel_positive_energy >= {0}")

            .addReplacement("Strength {NUMBER}", "@str_score >= {0}")
            .addReplacement("Dexterity {NUMBER}", "@dex_score >= {0}")
            .addReplacement("Constitution {NUMBER}", "@con_score >= {0}")
            .addReplacement("Intelligence {NUMBER}", "@int_score >= {0}")
            .addReplacement("Wisdom {NUMBER}", "@wis_score >= {0}")
            .addReplacement("Charisma {NUMBER}", "@cha_score >= {0}")

            .addReplacement("Str {NUMBER}", "@str_score >= {0}")
            .addReplacement("Dex {NUMBER}", "@dex_score >= {0}")
            .addReplacement("Con {NUMBER}", "@con_score >= {0}")
            .addReplacement("Int {NUMBER}", "@int_score >= {0}")
            .addReplacement("Wis {NUMBER}", "@wis_score >= {0}")
            .addReplacement("Cha {NUMBER}", "@cha_score >= {0}")

            .addReplacement("You have no levels in a class that has the grit", "!@ability:grit")
            .addReplacement("Craft Magic Arms and Armor", "@feat:craft_magic_arms_and_armor")
            .addReplacement("proficient with all martial weapons", "@feat:martial_weapon_proficiency")
            .addReplacement("proficient with {NAME}", "@proficiency:{0}")
            .addReplacement("proficient in {NAME}", "@proficiency:{0}")

            .addReplacement("patron deity is an evil god", "any(@deity:alignment_le,@deity:alignment_ne,@deity:alignment_ce)")
            .addReplacement("worshiper of an evil deity", "any(@deity:alignment_le,@deity:alignment_ne,@deity:alignment_ce)")
            .addReplacement("worshiper of a good deity", "any(@deity:alignment_lg,@deity:alignment_ng,@deity:alignment_cg)")
            .addReplacement("worshiper of a chaotic neutral deity", "@deity:alignment_cn")
            .addReplacement("follower of the green faith", "@deity:name=='Green Faith'")
            .addReplacement("worshiper of the god of {NAME}", "@deity:domain_{0}")
            .addReplacement("must worship a deity", "sum(@deity:domain_*)")
            .addReplacement("cannot have a patron deity", "sum(@deity:domain_*)<=0")
            .addImmediateReplacement("worshiper of a deity of trickery, lust, and revenge", "all(@deity:domain_trickery,@deity:domain_lust,@deity:domain_revenge)")
            .addImmediateReplacement("worshiper of a deity of trickery, lust, revenge", "all(@deity:domain_trickery,@deity:domain_lust,@deity:domain_revenge)")

            .addReplacement("chaotic alignment", "any(@alignment:cg,@alignment:cn,@alignment:ce)")
            .addReplacement("chaotic neutral alignment", "any(@alignment:ln,@alignment:n,@alignment:cn)")
            .addReplacement("neutral alignment", "@alignment:cn")
            .addReplacement("divine bond (mount)", "sum(@trait:mount_bond#*)")
            .addReplacement("divine bond (armor)", "sum(@trait:armor_bond#*)")
            .addReplacement("divine bond (shield)", "sum(@trait:shield_bond#*)")
            .addReplacement("divine bond (armor or shield)", "sum(@trait:armor_bond#*) OR sum(@trait:shield_bond#*)")
            .addReplacement("divine bond (armor or shield), or sacred armor class feature", "sum(@trait:armor_bond#*) OR sum(@trait:shield_bond#*) OR @ability:sacred_armor")
            .addReplacement("rage class feature", "@trait:rage[Rage class feature]")
            .addReplacement("rage or raging song class feature", "any(@trait:rage, @trait:raging_song)[Rage class feature]")
            .addReplacement("able to maintain studied target against two opponents simultaneously", "@ability:studied_target>=2")
            .addReplacement("mesmerist trick", "@ability:mesmerist_tricks")

            .addReplacement("{NAME} as a spell or spell-like ability (including from the {NAME} or {NAME} class features)", "({0} OR {class_feature:1} OR {class_feature:2})")
            .addReplacement("Ability to cast divine spells", "@trait:divine_spellcaster[Divine spellcaster]")
            .addReplacement("ability to cast at least one force spell", "\"Ability to cast at least one force spell\"")
            .addReplacement("Divine spellcaster", "@trait:divine_spellcaster[Divine spellcaster]")
            .addReplacement("Ability to use the {NAME} or cast {NAME}", "({0} OR {spell:1})")
            .addImmediateReplacement("darkvision or low-light vision racial trait", "(@ability:darkvision OR @ability:low_light_vision)")
            .addImmediateReplacement("darkvision or lowlight vision racial trait", "(@ability:darkvision OR @ability:low_light_vision)")
            .addReplacement("lowlight vision", "@ability:low_light_vision")
            .addReplacement("low-light vision", "@ability:low_light_vision")
            .addReplacement("Darkvision {NUMBER} feet", "@ability:darkvision >= {0}")
            .addReplacement("ability to create magical darkness", "(@spell:darkness OR @spell:deeper_darkness)")
            .addReplacement("Ability to acquire a new familiar", "@ability:familiar")
            .addReplacement("ability to acquire an animal companion", "@trait:animal_companion")
            .addReplacement("{LEVEL}-level spells", "@spells_per_day#{0}")
            .addReplacement("{LEVEL}-level {CLASS} spells", "@spells_per_day:{key:1}#{0}")
            .addReplacement("{LEVEL}-level arcane spells", "@spells_per_day:arcane#{0}")
            .addReplacement("{LEVEL}-level divine spells", "@spells_per_day:divine#{0}")
            .addReplacement("ability to create {LEVEL}-level extracts", "@spells_per_day:alchemist#{0}")
            .addReplacement("1 rank in any Craft skill", "max(@skill:craft#*)[Any craft skill] >= 1")
            .addReplacement("Ride rank {NUMBER}", "@skill:ride >= {0}")
            .addImmediateReplacement("{NUMBER} ranks in any Craft or Profession skill", "(max(@skill:craft#*)[Any craft skill] >= {0} OR max(@skill:profession:#*)[Any profession skill] >= {0})")
            .addReplacement("{NUMBER} rank in at least one knowledge skill", "max(@skill:knowledge_*)[Any knowledge skill]>={0}")
            .addReplacement("special mount", "\"Special mount\"")

            .addImmediateReplacement("Knowledge (dungeoneering, local, nature, planes, or religion) 1 rank", "(@skill:knowledge_dungeoneering OR @skill:knowledge_local OR @skill:knowledge_planes OR @skill:knowledge_religion)")
            .addImmediateReplacement("Knowledge (dungeoneering, local, nature, planes, or religion) {NUMBER} ranks", "(@skill:knowledge_dungeoneering >= {0} OR @skill:knowledge_local >= {0} OR @skill:knowledge_planes >= {0} OR @skill:knowledge_religion >= {0})")
            .addReplacement("Knowledge ({NAME}) {NUMBER} ranks", "@skill:knowledge_{0}>={1}")

            // Sizes
            .addImmediateReplacement("size {SIZE} or larger", "@size >= {0}")
            .addImmediateReplacement("size {SIZE} or smaller", "@size <= {0}")
            .addImmediateReplacement("{SIZE} size or smaller", "@size <= {0}")

            .addImmediateReplacement("slow and steady", "@ability:slow_and_steady")
            .addImmediateReplacement("cat's claws racial trait or Aspect of the Beast (claws of the beast manifestation)", "(@ability:cats_claws OR @ability:aspect_of_the_beast#claws)")
            .addImmediateReplacement("Profession (siege engineer)", "@skill:profession#siege_engineer")

            .addReplacement("two or more {NAME}", "{0} >= 2")
            .addReplacement("any two {NAME}", "{0} >= 2")
            .addReplacement("two {NAME}", "{0} >= 2")
            .addReplacement("at least one {NAME}", "{0} >= 1")
            .addReplacement("at least two {NAME}", "{0} >= 2")
            .addReplacement("at least three {NAME}", "{0} >= 3")
            .addReplacement("one {NAME}", "{0}")
            .addReplacement("any {NAME}", "{0}")
            .addReplacement("You have at least two other {NAME}", "{0} >= 2")
            .addReplacement("{SKILL} ({NAME} or {NAME}) {NUMBER} ranks", "({0}#{key:1} >= {3} OR {0}#{key:2} >= {3})")
            .addReplacement("{SKILL} ({NAME}) 1 rank", "{0}#{key:1}")
            .addReplacement("{SKILL} ({NAME}) {NUMBER} ranks", "{0}#{key:1} >= {2}")
            .addReplacement("{NAME} class", "{0}")
            .addReplacement("{NAME} +{NUMBER}d{NUMBER}", "{0} >= {1}")

            .addReplacement("{NAME} class feature or the {NAME} feat", "({class_feature:0} OR {feat:1})")
            .addReplacement("{NAME} feature or {NAME} feat", "({ability:0} OR {feat:1})")
            .addReplacement("any {NAME}", "{0}")
            .addReplacement("{NAME} feat", "{feat:0}")
            .addReplacement("{NAME} or {NAME} class feature", "({0} OR {class_feature:1})")
            .addReplacement("{NAME} class ability", "{ability:0}")
            .addReplacement("either the {PHRASE} or {PHRASE}", "({0} OR {1})")
            .addReplacement("either {PHRASE} or {PHRASE}", "({0} OR {1})")
            .addReplacement("either the {PHRASE}, {PHRASE} or {PHRASE}", "({0} OR {1} OR {2})")
            .addReplacement("either the {PHRASE}, {PHRASE}, or {PHRASE}", "({0} OR {1} OR {2})")
            .addReplacement("{ABILITY_SCORE} {NUMBER}", "{0} >= {1}")
            .addReplacement("{CLASS} OR {CLASS} {LEVEL}", "({class:0} >= {2} OR {class:1} >= 2)")
            .addReplacement("{CLASS} {LEVEL}", "{class:0} >= {1}")
            .addReplacement("{CLASS} {LEVEL} ({NAME})", "all({class:0} >= {1}, {2})")
            .addReplacement("{CLASS} {LEVEL} or {CLASS} {LEVEL} ({NAME})", "any({class:0} >= {1}, {2} >= {3}) AND {4}")
            .addReplacement("{CLASS} level {LEVEL}", "{class:0} >= {1}")
            .addReplacement("{LEVEL}-level {CLASS}", "{class:1} >= {0}")
            .addReplacement("caster level {LEVEL}", "@caster_level >= {0}")
            .addReplacement("character level {LEVEL}", "@character_level >= {0}")
            .addReplacement("{NAME} rage power", "{rage_power:0}")
            .addReplacement("{NAME} and {NAME} rage powers", "all({rage_power:0}, {rage_power:1})")
            .addReplacement("{NAME} rage powers", "{rage_power:0}")
            .addReplacement("{NAME} alchemist discovery", "{discovery:0}")
            .addReplacement("{NAME} discovery", "{discovery:0}")
            .addReplacement("{NAME} magus arcana", "{magus_arcana:0}")
            .addReplacement("{NAME} rogue talent", "{rogue_talent:0}")
            .addReplacement("{NAME} mercy", "{mercy:0}")
            .addReplacement("{NAME} advanced slayer talent or ninja master trick", "{slayer_talent:0}")
            .addReplacement("Trained in {NAME}", "{0}")
            .addReplacement("{PHRASE} {NUMBER} ranks", "{0} >= {1}")
            .addReplacement("{PHRASE} {NUMBER} rank", "{0} >= {1}")
            .addReplacement("{NAME} ({NAME}) 1 rank", "{0}#{key:1}")
            .addReplacement("proficient with weapon", "@proficiency:selected_weapon")
            .addReplacement("proficiency with chosen weapon", "@proficiency:selected_weapon")
            .addReplacement("{NAME} Proficiency", "@proficiency:{0}")
            .addReplacement("proficiency with a shield", "any(%s)".formatted(String.join(",", Arrays.stream(ArmorProficiency.values()).map(ArmorProficiency::getId).map(Id::string).map(id -> formatId(id)).toList())))
            .addReplacement("proficiency with {NAME}", "@proficiency:{0}")
            .addReplacement("the selected weapon", "selected_weapon")
            .addReplacement("selected shield", "selected_shield")
            .addReplacement("selected weapon", "selected_weapon")
            .addReplacement("selected natural weapon", "selected_natural_weapon")
            .addReplacement("selected thrown weapon", "selected_thrown_weapon")
            .addReplacement("selected ranged weapon", "selected_ranged_weapon")
            .addReplacement("selected piercing melee weapon", "selected_piercing_melee_weapon")
            .addReplacement("the chosen weapon", "selected_weapon")
            .addReplacement("the selected vehicle type", "selected_vehicle")
            .addReplacement("both wielded weapons", "selected_weapon")
            .addReplacement("Natural armor", "@ac:natural")
            .addReplacement("Natural weapon", "(@ability:bite OR @ability:claw OR @ability:gore)[Natural weapon]")
            .addReplacement("Natural weapons", "(@ability:bite OR @ability:claw OR @ability:gore)[Natural weapons]")
            .addReplacement("two claw natural weapon attacks", "@ability:claw == 2")
            .addReplacement("Three or more natural attacks", "(@ability:bite + @ability:claw + @ability:gore)[Natural weapon attacks] >= 3")
            .addReplacement("base attack bonus +{NUMBER}", "@bab >= {0}")
            .addReplacement("base Fortitude save +{NUMBER}", "@fort:base >= {0}")
            .addReplacement("base Will save +{NUMBER}", "@will:base >= {0}")
            .addReplacement("base Reflex save +{NUMBER}", "@reflex:base >= {0}")
            .addReplacement("Ability to cast {NAME} as a spell-like ability", "{0}")
            .addReplacement("Ability to cast spells", "@trait:spellcaster[Spellcaster]")
            .addReplacement("the ability to cast {NAME}", "{0}")
            .addReplacement("Ability to cast {NAME}", "{0}")
            .addReplacement("Able to cast {NAME}", "{0}")
            .addReplacement("Able to spontaneously cast spells", "@ability:spontaneous_caster")
            .addReplacement("ability to perform {NAME}", "{0}")
            .addReplacement("{NAME} class feature", "{class_feature:0}")
            .addReplacement("Fly speed", "@speed:fly")
            .addReplacement("{NUMBER} years old", "@age >= {0}")
            .addReplacement("{NAME} racial trait or {NAME} racial trait", "{0} OR {1}")

            // Not supported automatically yet
            .addReplacement("Ability to channel energy", "(@ability:channel_energy)[Channel Energy]")
            .addReplacement("channel energy {NUMBER}d{NUMBER}", "(@ability:channel_energy)[Channel Energy] >= {0}")
            .addReplacement("Good alignment", "(@alignment:lg OR @alignment:ng OR @alignment:cg)[Good alignment]")
            .addReplacement("must be lawful good", "@alignment:lg")
            .addReplacement("alignment must be within one step of your deity's", "\"alignment must be within one step of your deity's\"")
            .addReplacement("nonlawful", "(@alignment:ng OR @alignment:cg OR @alignment:n OR @alignment:cn OR @alignment:ne OR @alignment:ce)[Non-lawful alignment]")
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
            .addReplacement("creature that has the constrict special attack as a racial ability", "@ability:constrict")
            .addReplacement("Earthcraft ability", "@ability:earthcraft")
            .addReplacement("Rogue: none. Investigator: expanded inspiration", "(!@class:rogue#investigator OR @ability:expanded_inspiration)")
            .addReplacement("arcane spells", "max(@spells_per_day:arcane#*)[Arcane spells]")
            .addReplacement("arcane spellcaster", "max(@spells_per_day:arcane#*)[Arcane spellcaster]")

            .addReplacement("bard spells", "max(@spells_per_day:bard#*)[Bard spells]")
            .addReplacement("an arcane fire spell from some other spellcasting", "\"an arcane fire spell from some other spellcasting\"")

            .addReplacement("3d6 prof iciency with a shield", "@proficiency:shield >= 3")
            .addReplacement("flowing monk level 12th", "@class:monk#flowing_monk AND @class:monk >= 12")
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
            .addReplacement("{NAME} or {NAME} bloodline", "@sorcerer_bloodline:{0} OR @bloodrager_bloodline:{0} OR @sorcerer_bloodline:{1} OR @bloodrager_bloodline:{1}")
            .addReplacement("able to prepare {LEVEL}-level spells", "all(@spells_per_day#{0}, !@ability:spontaneous_caster)")
            .addReplacement("ability to prepare {LEVEL}-level spells", "all(@spells_per_day#{0}, !@ability:spontaneous_caster)")
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
            .addReplacement("neutrally aligned cleric", "all(@class:cleric, any(@alignment:ng, @alignment:n, @alignment:ne)[Neutral alignment])")
            .addReplacement("weapon made of primitive material", "\"Weapon made of primitive material\"")
            .addReplacement("levels in another spellcasting", "\"Levels in another spellcasting class\"")
            .addReplacement("Air, Earth, Fire, or Water domain or blessing", "\"Air, Earth, Fire, or Water domain or blessing\"")
            .addReplacement("spellbook", "max(@spellbook:*)")

            // Ability Aliases
            .addReplacement("{NAME} simple blast", "@ability:{0}_blast#kineticist")

            // Misspelled Names
            .addReplacement("Close Quarters Thrower", "@feat:close_quarters_thrower")
            .addReplacement("Point-Blank Master", "@feat:point_blank_master")
            .addReplacement("Point Blank Shot", "@feat:point_blank_shot")
            .addReplacement("Rage power", "@ability:rage_power")
            .addReplacement("Surprise Follow Through", "@ability:surprise_follow_through")
            .addReplacement("Rapid Reload", "@ability:rapid_reload")
            .addReplacement("Snake Sidewind", "@feat:snake_sidewind")

            // TODO: remove once paladin oath abilities have been added
            .addReplacement("Anchoring aura", "@ability:anchoring_aura")

            // Generic skills
            .addReplacement("Knowledge", "@skill:knowledge")
            .addReplacement("spellbook class feature", "@ability:spellbook")

            // Not in supported book
            .addReplacement("none", "true")
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
            .addReplacement("shadow walk", "@spell:shadow_walk")
            .addReplacement("orc Ferocity", "@ability:orc_ferocity")                // Orc thing
            .addReplacement("Ferocity", "@ability:ferocity")                        // Orc thing
            .addReplacement("stonecunning", "@ability:stonecunning")                // Dwarf thing
            .addReplacement("seen and unseen", "@ability:seen_and_unseen")          // Half-elf thing
            .addReplacement("able to use drow spell-like abilities", "\"Able to use drow spell-like abilities\"") // drow thing
            .addReplacement("Drow-blooded", "@ability:drow_blooded")
            .addReplacement("drow magic racial traits", "@ability:drow_magic")
            .addReplacement("Drow-blooded and drow magic racial traits", "all(@ability:drow_blooded, @ability:drow_magic)")
            .addReplacement("hardy", "@ability:hardy")                              // Dwarf thing
            .addReplacement("mountaineer", "@ability:mountaineer")                  // Dwarf thing
            .addReplacement("stability", "@ability:stability")                      // Dwarf thing
            .addReplacement("swarming", "@ability:swarming")
            .addReplacement("sprinter", "@ability:sprinter")
            .addReplacement("bardic performance", "@ability:bardic_performance")
            .addReplacement("bardic performance ability", "@ability:bardic_performance")
            .addReplacement("wing-clipped", "@ability:wing_clipped")
            .addReplacement("multitalented", "@ability:multitalented")
            .addReplacement("animal fury", "@ability:animal_fury")
            .addReplacement("opportune parry and riposte deed", "@swashbuckler_deed:opportune_parry_and_riposte")

            .addReplacement("{NAME} racial trait", "{0}")
            .addReplacement("racial bonus to dexterity", "@dex:race")

            .addReplacement("member of a primitive tribe", "\"Member of a primitive tribe\"")

            // Experimental
            .addReplacement("access to a blessing's major power", "@trait:major_blessing")
            .addReplacement("angelic blood", "@trait:angelic_blood")
            .addReplacement("angelic flesh", "@trait:angelic_flesh")
            .addReplacement("greater drow nobility", "@trait:greater_drow_nobility")

            // Generic
            .addReplacement("{NAME} with {NAME}", "{id:0}#{key:1}")
            .addReplacement("{PHRASE}, {PHRASE} and either the {PHRASE} or {PHRASE}", "all({0}, {1}, any({2}, {3}))")
            .addReplacement("{PHRASE} and {PHRASE}, or {PHRASE}", "any(all({0}, {1}), {2}))")
            .addReplacement("{PHRASE} and {PHRASE}", "{0} AND {1}")
            .addReplacement("{PHRASE} or {PHRASE}", "{0} OR {1}")
            .addReplacement("or {PHRASE}", " OR {1}")
            .addReplacement("{PHRASE}, {PHRASE}, or {PHRASE}", "any({0}, {1}, {2})")
            .addReplacement("{PHRASE}, {PHRASE} or {PHRASE}", "any({0}, {1}, {2})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}", "all({0}, {1}, {2})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, or {PHRASE}", "any({0}, {1}, {2}, {3})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE} or {PHRASE}", "any({0}, {1}, {2}, {3})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, or {PHRASE}", "any({0}, {1}, {2}, {3}, {4})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE} or {PHRASE}", "any({0}, {1}, {2}, {3}, {4})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE} or {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE} or {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE} or {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE} or {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12}, {13})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12}, {13}, {14})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12}, {13}, {14}, {15})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12}, {13}, {14}, {15}, {16})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12}, {13}, {14}, {15}, {16}, {17})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12}, {13}, {14}, {15}, {16}, {17}, {18})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12}, {13}, {14}, {15}, {16}, {17}, {18}, {19})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12}, {13}, {14}, {15}, {16}, {17}, {18}, {19}, {20})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "any({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12}, {13}, {14}, {15}, {16}, {17}, {18}, {19}, {20}, {21})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}", "all({0}, {1}, {2})")
            .addReplacement("{PHRASE}, {PHRASE}", "all({0}, {1})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "all({0}, {1}, {2}, {3})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "all({0}, {1}, {2}, {3}, {4})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "all({0}, {1}, {2}, {3}, {4}, {5})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "all({0}, {1}, {2}, {3}, {4}, {5}, {6})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "all({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "all({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8})")
            .addReplacement("{PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}, {PHRASE}", "all({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9})")
            .addReplacement("{ANY}; {ANY}; {ANY}", "all({0}, {1}, {2})")
            .addReplacement("{ANY}; {ANY}", "all({0}, {1})")

            // Brackets
            .addReplacement("{NAME} ({NAME})", "{0}#{key:1}")
            .addReplacement("{NAME} ({NAME} or {NAME})", "{0}#{key:1} OR {0}#{key:2}")
            .addReplacement("{NAME} ({NAME}, {NAME} or {NAME})", "{0}#{key:1} OR {0}#{key:2} OR {0}#{key:3}")
            .addReplacement("{NAME} ({NAME}, {NAME}, or {NAME})", "{0}#{key:1} OR {0}#{key:2} OR {0}#{key:3}")
            ;

    private final PatternMapper patternMapper = new PatternMapper();

    public String prerequisites(Feature feature) {
        if (StringUtils.notEmpty(feature.enabled_formula())) {
            return feature.enabled_formula();
        }

        var context = PrerequisiteContext.create()
                .sourceId(feature.source());

        return extractPrerequisiteFormula(feature.id(), feature.prerequisites(), context);
    }

    public String prerequisites(ClassFeature feature) {
        if (StringUtils.notEmpty(feature.enabled_formula())) {
            return feature.enabled_formula();
        }

        var context = PrerequisiteContext.create()
                .sourceId(feature.source())
                .classId(feature.classId());

        return extractPrerequisiteFormula(feature.id(), feature.prerequisites(), context);
    }

    public String prerequisites(Feat feat) {
        if (StringUtils.notEmpty(feat.enabled_formula())) {
            return feat.enabled_formula();
        }

        var context = PrerequisiteContext.create()
                .sourceId(feat.source());

        return extractPrerequisiteFormula(feat.id(), feat.prerequisites(), context);
    }

    private String extractPrerequisiteFormula(Id id, String prerequisites, PrerequisiteContext context) {
        if (prerequisites == null || prerequisites.trim().isBlank() || prerequisites.trim().equals("—")) {
            return "";
        }

        try {
            String parsed = parsePrerequisites(prerequisites, context);
            Formula.parse(parsed);

            if (parsed.contains("#@")) {
                log.warn("Contained illegal \"#@\":\n%s\n%s".formatted(prerequisites, parsed));
            }
            if (parsed.equals("@ability")) {
                log.warn("Was just \"@ability\":\n%s\n%s".formatted(prerequisites, parsed));
            }

//            return parsed;
            return Formula.optimize(parsed);
        } catch (ParseException e) {
            log.error("Failed to parse: \"" + prerequisites + "\" for " + id);
            throw e;
        } catch (IOException e) {
            log.error("Failed to parse: \"" + prerequisites + "\"");
            throw new UncheckedIOException(e);
        }
    }

    @SuppressWarnings("unchecked")
    private synchronized void init() {
        if (initialized.getAndSet(true)) {
            return;
        }

        log.info("Initializing prerequisite parser");

        // generic terms
        addNameMapping("proficiency:{NAME}", Id.partial("@proficiency:{key:0}"));

        // hard-coded
        addNameMapping("force spell", Id.partial("(1[force spell])"));
        addNameMapping("arcane force spell", Id.partial("(1[arcane force spell])"));

        // custom (not dynamically supported yet)
        addNameMapping("ranger spellbook", Id.of("spellbook:ranger"));
        addNameMapping("ranger spells", Id.of("spellbook:ranger"));
        addNameMapping("psychic spells", Id.of("spellbook:psychic"));
        addNameMapping("ability focus", Id.of("feat:ability_focus"));

        // Weapon Types
        Weapons.ALL_WEAPONS.forEach(weaponType -> addNameMapping(
                weaponType.name(),
                weaponType.id()));
        Arrays.stream(ArmorProficiency.values()).forEach(armorProficiency ->
                addNameMapping(armorProficiency.getName(), armorProficiency.getId()));

        // Races
        addNameMapping("naga", Id.of("race:naga"));
        addNameMapping("serpentfolk", Id.of("race:serpentfolk"));
        addNameMapping("wayang", Id.of("race:wayang"));
        addNameMapping("vishkanya", Id.of("race:vishkanya"));
        addNameMapping("orc", Id.of("race:orc"));
        addNameMapping("orcs", Id.of("race:orc"));
        addNameMapping("hobgoblin", Id.of("race:hobgoblin"));
        addNameMapping("catfolk", Id.of("race:catfolk"));
        addNameMapping("varies", Id.of("\"varies\""));
        addNameMapping("samsaran", Id.of("race:samsaran"));
//        specialNameToId.put("Aasimar", "race:aasimar");
//        specialNameToId.put("goblin", "race:goblin");

        Arrays.stream(Size.values()).forEach(size -> addNameMapping(size.longName(), size.id()));

        List<String> abilityScores = List.of("strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma");
        for (String abilityScore : abilityScores) {
            String firstThree = abilityScore.substring(0, 3);
            addNameMapping(abilityScore, Id.of(firstThree + "_score"));
            addNameMapping(firstThree, Id.of(firstThree + "_score"));
        }

        Skills.ALL.forEach(skill -> addNameMapping(skill.name(), skill.id()));

        // Style feat support
        addFeatTypeToSpecialIds(FeatType.STYLE, "style feat", "style feats");
        addFeatTypeToSpecialIds(FeatType.METAMAGIC, "metamagic feat", "metamagic feats");
        addFeatTypeToSpecialIds(FeatType.CRITICAL, "critical feat", "critical feats");
        addFeatTypeToSpecialIds(FeatType.PERFORMANCE, "performance feat", "performance feats");
        addFeatTypeToSpecialIds(FeatType.TEAMWORK, "teamwork feat", "teamwork feats", "other teamwork feat");
        addFeatTypeToSpecialIds(FeatType.ITEM_CREATION, "item creation feat", "item creation feats");

        // Custom missing things
        addNameMapping("craven", Id.of("ability:craven"));
        addNameMapping("fearless", Id.of("ability:fearless"));

        addNameMapping("summon monster i", Id.of("spell:summon_monster_1"));
        addNameMapping("summon monster ii", Id.of("spell:summon_monster_2"));
        addNameMapping("summon monster iii", Id.of("spell:summon_monster_3"));
        addNameMapping("summon monster iv", Id.of("spell:summon_monster_4"));
        addNameMapping("summon monster v", Id.of("spell:summon_monster_5"));

        addNameMapping("summon monster", Id.partial(summonMonsterSpellClause() + "[Able to cast Summon Monster]"));
        addNameMapping("summon nature's ally spells", Id.partial(summonNaturesAllyClause() + "[Able to cast Summon Nature's Ally]"));
        addNameMapping("summon nature's ally", Id.partial(summonNaturesAllyClause() + "[Able to cast Summon Nature's Ally]"));

        patternMapper.addAll(GLOBAL_PATTERN_MAPPER);

        BiConsumer<String, Function<String, Stream<? extends NamedEntity>>> addTypeLookupFunction = (type, dataSupplier) -> {
            patternMapper.addFunction(type, (id, text) -> {
                if (id.startsWith("@%s:".formatted(type))) {
                    return id;
                }

                Id foundId = dataSupplier.apply(text).findFirst().map(Identity::id)
                        .orElseThrow(() -> new IllegalArgumentException("No %s found for name: %s".formatted(type, text.toLowerCase())));

                return formatId(foundId);
            });
        };

        patternMapper.addFunction("class_feature", this::resolveClassFeature);

        addTypeLookupFunction.accept("class", text -> database.query(Query.characterClass(text)));
        addTypeLookupFunction.accept("ability", text -> database.query(Query.namedEntity(text)));
        addTypeLookupFunction.accept("feat", text -> database.query(Query.feat(text)));
        addTypeLookupFunction.accept("spell", text -> database.query(Query.spell(text)));
        addTypeLookupFunction.accept("magus_arcana", text -> database.query(Query.classFeature(text).classId(Id.of("class:magus"))));
        addTypeLookupFunction.accept("rogue_talent", text -> database.query(Query.classFeature(text).classId(Id.of("class:rogue"))));
        addTypeLookupFunction.accept("rage_power", text -> database.query(Query.classFeature(text).classId(Id.of("class:barbarian"))));
        addTypeLookupFunction.accept("slayer_talent", text -> database.query(Query.classFeatures().classId(Id.of("class:slayer"))));
//        addTypeLookupFunction.accept("ninja_trick");
        addTypeLookupFunction.accept("discovery", text -> database.query(Query.classFeature(text).classId(Id.of("class:alchemist"))));

        addTypeLookupFunction.accept("mercy", text -> database.query(Query.classFeature(text).idMatches(Pattern.compile("mercy:.*"))));

        patternMapper.addContextResolver((text, context) -> {
            if (IS_INT_PATTERN.matcher(text).matches()) {
                return text;
            }
            return null;
        });

        patternMapper.addContextResolver((text, context) -> {
            if (context instanceof PrerequisiteContext c) {
                var typeOrder = new ArrayList<Class<? extends NamedEntity>>();
                if (c.classId() != null) {
                    typeOrder.add(ClassFeature.class);
                }
                typeOrder.add(Feat.class);
                typeOrder.add(NamedEntity.class);

                for (Class<? extends NamedEntity> type : typeOrder) {
                    var query = Query.namedEntity(text)
                            .source(c.sourceId())
                            .type(type)
                            .classId(c.classId());

                    for (int i = 0; i < 4; i++) {
                        var expandedQuery = expandQuery((NamedEntityQuery<NamedEntity>) query, c.sourceId(), i);
                        var found = database.query(expandedQuery).findFirst()
                                .map(entity -> {
                                    String entityId = formatId(entity.id());
//                                    if (entity instanceof Feat feat) {
//                                        boolean featHasOptions = feat.options() != null;
//                                        boolean idHasOption = Id.of(entityId).hasOption();
//                                        if (featHasOptions && !idHasOption) {
//                                            return "sum(%s#*)".formatted(entityId);
//                                        }
//                                    }
                                    return entityId;
                                });

                        if (found.isPresent()) {
                            return found.get();
                        }
                    }
                }
            }
            return null;
        });

        log.info("Finished initializing prerequisite parser");
    }

    private static String wildcard(String id, String text, String appendText) {
        Id idObj = Id.of(id);
        if (!idObj.hasOption()) {
            return id;
        }
        return "sum(" + formatId(idObj.withOption("*")) + ")[" + WordUtils.capitalize(text) + appendText + "]";
    }

    private NamedEntityQuery<NamedEntity> expandQuery(NamedEntityQuery<NamedEntity> query, SourceId sourceId, int i) {
        var previousSources = Sources.previousSourceIds(sourceId);
        return switch (i) {
            case 0 -> query;
            case 1 -> query.sources(previousSources);
            case 2 -> query.classId(null);
            default -> query.sources(previousSources).classId(null);
        };
    }

    private void addNameMapping(String name, Id to) {
        this.patternMapper.addReplacement(name, formatId(to));
    }

    private void addFeatTypeToSpecialIds(FeatType type, String... names) {
        String featsOfType = database.query(Query.feats())
                .filter(feat -> switch (type) {
                    case GRIT -> feat.grit();
                    case CRITICAL -> feat.critical();
                    case RACIAL -> feat.racial();
                    case TEAMWORK -> feat.teamwork();
                    case STYLE -> feat.style();
                    case PERFORMANCE -> feat.performance();
                    default -> false;
                })
                .map(feat -> formatId(feat.id()))
                .collect(Collectors.joining(" + "));
        if (featsOfType.isBlank()) {
            featsOfType = "0";
        }

        for (String name : names) {
            addNameMapping(name, Id.partial("(%s)[%s(s)]".formatted(featsOfType, names[0])));
        }
    }

    private String parsePrerequisites(String prerequisites, PrerequisiteContext context) throws IOException {
        init();
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
                .replaceAll("\\s*\\(see text\\)\\.?", "")
                .replaceAll("\\.", "")
                .trim();

        return patternMapper.mapText(prerequisites, context);
    }

    private String summonNaturesAllyClause() {
        String spells = database.query(Query.spells())
                .filter(spell -> spell.name().toLowerCase().startsWith("summon nature's ally"))
                .map(spell -> "@" + spell.id())
                .collect(Collectors.joining(", "));
        if (spells.isBlank()) {
            spells = "0";
        }
        return "(any(" + spells + "))";
    }

    private String summonMonsterSpellClause() {
        String spells = database.query(Query.spells())
                .filter(spell -> spell.name().toLowerCase().startsWith("summon monster"))
                .map(spell -> "@" + spell.id())
                .collect(Collectors.joining(", "));
        if (spells.isBlank()) {
            spells = "0";
        }
        return "(any(" + spells + "))";
    }

    private String resolveClassFeature(String id, String text) {
        return wildcard(id, text, "");

//        throw new IllegalArgumentException("Unsupported class feature: " + text);
//        return switch (text) {
//            default -> throw new IllegalArgumentException("Unsupported class feature: " + text);
//        };
    }

    private static String formatId(Id id) {
        return formatId(id.string());
    }

    private static String formatId(String id) {
        if (id.startsWith("@")) {
            return id;
        }
        return (id.startsWith("(") || id.startsWith("\"") || IS_INT_PATTERN.matcher(id).matches())
                ? id
                : "@" + id;
    }
}
