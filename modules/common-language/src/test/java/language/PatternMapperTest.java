package language;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

class PatternMapperTest {
    private static final String PHRASE_GROUP = "((?:\\s*[\\w\\s'+\\-\\-]+(?:\\s*\\(.*?\\))?)+)";
    private static final String NAME_GROUP = "([a-zA-Z0-9][\\w\\s'+\\-\\-]*)";
    private static final String NUMBER_GROUP = "(\\d+)\\+?";
    private static final String LEVEL_GROUP = "(\\d+)(?:th|st|rd|nd)?";

    private static final PatternMapper PATTERN_MAPPER = new PatternMapper()
            .addToken("LEVEL", LEVEL_GROUP)
            .addToken("NUMBER", NUMBER_GROUP)
            .addToken("NAME", NAME_GROUP)
            .addToken("PHRASE", PHRASE_GROUP)

            .addFunction("option", (id, text) -> text)

            .addReplacement("alpha", "@alpha")
            .addReplacement("beta", "@beta")
            .addReplacement("gamma", "@gamma")
            .addReplacement("size", "@size")
            .addReplacement("small", "@small")
            .addReplacement("medium", "@medium")
            .addReplacement("large", "@large")

            .addReplacement("{PHRASE}, {PHRASE} or {PHRASE}", "{0} OR {1} OR {2}")
            .addReplacement("{PHRASE}, {PHRASE}, or {PHRASE}", "{0} OR {1} OR {2}")
            .addReplacement("{PHRASE}, {PHRASE} and {PHRASE}", "{0} AND {1} AND {2}")
            .addReplacement("{PHRASE}, {PHRASE}, and {PHRASE}", "{0} AND {1} AND {2}")
            .addReplacement("{PHRASE} and {PHRASE}", "{0} AND {1}")
            .addReplacement("{PHRASE} or {PHRASE}", "{0} OR {1}")

            .addReplacement("{NAME} ({NAME}, {NAME} or {NAME})", "{0}#{option:1} OR {0}#{option:2} OR {0}#{option:3}")
            .addReplacement("{NAME} ({NAME} or {NAME})", "{0}#{option:1} OR {0}#{option:2}")
            .addReplacement("{NAME} ({NAME})", "{0}#{option:1}")

            .addReplacement("{NAME} size", "@size#{option:0}")
            ;

    private static void assertMapsTo(String source, String expected) {
        assertThat(PATTERN_MAPPER.mapText(source))
                .describedAs("Expected \"%s\" to map to different text".formatted(source))
                .isEqualTo(expected);
    }

    @Test
    void or() {
        assertMapsTo("alpha or gamma", "@alpha OR @gamma");
        assertMapsTo("alpha, beta or gamma", "@alpha OR @beta OR @gamma");
        assertMapsTo("alpha, beta, or gamma", "@alpha OR @beta OR @gamma");
    }

    @Test
    void and() {
        assertMapsTo("alpha and gamma", "@alpha AND @gamma");
        assertMapsTo("alpha, beta and gamma", "@alpha AND @beta AND @gamma");
        assertMapsTo("alpha, beta, and gamma", "@alpha AND @beta AND @gamma");
    }

    @Test
    void options() {
        assertMapsTo("medium size", "@size#medium");
        assertMapsTo("size (medium)", "@size#medium");
        assertMapsTo("size (small or medium)", "@size#small OR @size#medium");
        assertMapsTo("size (small, medium or large)", "@size#small OR @size#medium OR @size#large");
        assertMapsTo("alpha or size (small or medium)", "@alpha OR @size#small OR @size#medium");
    }
}