package pathfinder.parser.util;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import pathfinder.util.FormulaBuilder;

class FormulaBuilderTest {

    @Nested
    class AnyOf {

        @Test
        void singleClause() {
            String formula = FormulaBuilder.anyOf("A").build();
            assertThat(formula).isEqualTo("A");
        }

        @Test
        void or() {
            var builder = FormulaBuilder.anyOf("A").or("B");
            String formula = builder.build();
            assertThat(formula).isEqualTo("(A OR B)");
        }
    }

    @Nested
    class AllOf {

        @Test
        void singleClause() {
            String formula = FormulaBuilder.allOf("B").build();
            assertThat(formula).isEqualTo("B");
        }

        @Test
        void and() {
            var builder = FormulaBuilder.allOf("A").and("B");
            String formula = builder.build();
            assertThat(formula).isEqualTo("(A AND B)");
        }
    }
}