package pathfinder.util;

import static org.assertj.core.api.Assertions.assertThat;

import logic.parse.Formula;
import org.junit.jupiter.api.Test;

class PatternMapperTest {

    @Test
    void twoWords() {
        PatternMapper mapper = new PatternMapper()
                .addToken("WORD", "(\\w+)")
                .addReplacement("{WORD} {WORD}", "<{0} + {1}>");

        String actual = mapper.mapText("Foo Bar");
        assertThat(actual).isEqualTo("<Foo + Bar>");
    }

    @Test
    void recursive() {
        PatternMapper mapper = new PatternMapper()
                .addToken("WORD", "(\\w+)")
                .addReplacement("{WORD} {WORD}", "<{0} + {1}>")
                .addReplacement("Foo", "ooF");

        String actual = mapper.mapText("Foo Bar");
        assertThat(actual).isEqualTo("<ooF + Bar>");
    }

    @Test
    void testExample() {
        PatternMapper mapper = new PatternMapper()
                .addToken("PHRASE", "([\\w -]+)")
                .addToken("NUMBER", "(\\d+)")
                .addToken("WORD", "(\\w+)")
                .addReplacement("{PHRASE}, {PHRASE} or {PHRASE}", "({0} OR {1} OR {2})")
                .addReplacement("{WORD} {NUMBER}", "{0} >= {1}")
                .addReplacement("Barbarian", "@class:barbarian")
                .addReplacement("Super Focus", "@ability:super_focus")
                .addReplacement("Strength", "@str_score");

        String original = "Barbarian 3, Super Focus or Strength 5";

        String actual = mapper.mapText(original);
        assertThat(actual).isEqualTo("(@class:barbarian >= 3 OR @ability:super_focus OR @str_score >= 5)");
    }

    private static final String RACE_GROUP = "(human|dwarf|orc|gnome|halfling|elf|half-elf|half-orc|naga|serpentfolk|creature that has the constrict special attack)";
    private static final String CLASS_GROUP = "(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|rogue|sorcerer|wizard|alchemist|cavalier|gunslinger|inquisitor|magus|omdura|oracle|shifter|summoner|witch|vampire hunter|vigilante|arcanist|bloodrager|brawler|hunter|investigator|shaman|skald|slayer|swashbuckler|warpriest|witch)";
    private static final String ABILITY_SCORE_GROUP = "(str|dex|con|wis|int|cha)";
    private static final String PHRASE_GROUP = "([a-zA-Z][\\w --']+)";
    private static final String NAME_GROUP = "([a-zA-Z][\\w --']+)";
    private static final String NUMBER_GROUP = "(\\d+)\\+?";
    private static final String LEVEL_GROUP = "(\\d+)(?:th|st|rd|nd)?";

    @Test
    void currentProblem() {
        String original = "Half-orc, bloody bite rage power and either the animal fury rage power or a natural bite attack";

        PatternMapper mapper = new PatternMapper()
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
                .addReplacement("{CLASS} {LEVEL}", "{0} >= {1}")
                .addReplacement("{CLASS} level {LEVEL}", "{0} >= {1}")
                .addReplacement("{NAME} rage power", "{0}")
                .addReplacement("{NAME} rage powers", "{0}")

                .addReplacement("half-orc", "@race:half_orc")
                .addReplacement("bloody bite", "@ragepower:bloody_bite")
                .addReplacement("animal fury", "@ragepower:animal_fury")
                .addReplacement("a natural bite attack", "@trait:bite_attack")
                ;

        String actual = mapper.mapText(original);
        Formula.parse(actual);
    }
}