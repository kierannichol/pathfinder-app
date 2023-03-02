package pathfinder.model;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

class IdTest {

    @Test
    void partialId() {
        Id id = Id.partial("key");
        assertThat(id.toString()).isEqualTo("key");
    }

    @Test
    void simpleId() {
        Id id = Id.of("type", "key");
        assertThat(id.toString()).isEqualTo("type:key");
    }

    @Test
    void withOption() {
        Id id = Id.of("type", "key").withOption("option");
        assertThat(id.toString()).isEqualTo("type:key#option");
    }

    @Test
    void parseTests() {
        assertThat(Id.of("key")).isEqualTo(Id.partial("key"));
        assertThat(Id.of("type:key")).isEqualTo(Id.of("type", "key"));
        assertThat(Id.of("type:key#option")).isEqualTo(Id.of("type", "key").withOption("option"));
        assertThat(Id.of("key#option")).isEqualTo(Id.partial("key").withOption("option"));
    }
}