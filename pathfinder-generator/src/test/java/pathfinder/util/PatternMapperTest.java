package pathfinder.util;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

class PatternMapperTest {

    @Test
    void replaceText() {
        PatternMapper mapper = new PatternMapper()
                .addReplacement("AA", "123")
                .addReplacement("BAAC", "AA");

        assertThat(mapper.mapText("BAAC"))
                .isEqualTo("AA");
    }

    @Test
    void immediateReplaceText() {
        PatternMapper mapper = new PatternMapper()
                .addToken("LETTERS", "[A-Za-z]+")
                .addToken("NUMBERS", "[0-9]+")
                .addImmediateReplacement("AA", "123")
                .addReplacement("{LETTERS}{NUMBERS}{LETTERS}", "{0} {1} {2}");

        assertThat(mapper.mapText("BAAC"))
                .isEqualTo("b 123 c");
    }
}