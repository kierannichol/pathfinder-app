package logic.parse;

import static logic.parse.assertions.FormulaAssertions.assertFormula;
import static logic.parse.assertions.ResolvedValueAssertions.assertResolvedValue;

import logic.context.DataContext;
import logic.context.StaticDataContext;
import org.junit.jupiter.api.Test;

class FormulaTest {

    @Test
    void singleNegativeNumber() {
        var formula = Formula.parse("-9");
        assertResolvedValue(formula).hasValue(-9);
    }

    @Test
    void addTwoScalars() {
        var formula = Formula.parse("2 + 3");
        assertResolvedValue(formula).hasValue(5);
    }

    @Test
    void exponents() {
        var formula = Formula.parse("2^3");
        assertResolvedValue(formula).hasValue(8);
    }

    @Test
    void withBrackets() {
        var formula = Formula.parse("4 + 4 * 2 / ( 1 - 5 )");
        assertResolvedValue(formula).hasValue(2);
    }

    @Test
    void multipleDigitNumbers() {
        var formula = Formula.parse("12 + 100");
        assertResolvedValue(formula).hasValue(112);
    }

    @Test
    void absFunction() {
        var formula = Formula.parse("2 + abs(2 - 3) + 1");
        assertResolvedValue(formula).hasValue(4);
    }

    @Test
    void minFunction() {
        var formula = Formula.parse("1 + min(4, 2)");
        assertResolvedValue(formula).hasValue(3);
    }

    @Test
    void maxFunction() {
        var formula = Formula.parse("1 + max(4, 2)");
        assertResolvedValue(formula).hasValue(5);
    }

    @Test
    void complexMaxFunction() {
        var formula = Formula.parse("max(4 - 2, 2 / 2)");
        assertResolvedValue(formula).hasValue(2);
    }

    @Test
    void floorFunction() {
        var formula = Formula.parse("1 + floor(2.9)");
        assertResolvedValue(formula).hasValue(3);
    }

    @Test
    void ceilFunction() {
        var formula = Formula.parse("1 + ceil(2.9)");
        assertResolvedValue(formula).hasValue(4);
    }

    @Test
    void signedFunction() {
        assertResolvedValue(Formula.parse("signed(3)")).hasValue("+3");
        assertResolvedValue(Formula.parse("signed(-3)")).hasValue("-3");
        assertResolvedValue(Formula.parse("signed(3)")).hasValue(3);
        assertResolvedValue(Formula.parse("signed(-3)")).hasValue(-3);
    }

    @Test
    void simpleVariableFunction() {
        var formula = Formula.parse("@foo");
        var context = StaticDataContext.empty().set("foo", 12);
        assertResolvedValue(formula.resolve(context)).hasValue(12);
    }

    @Test
    void variableMath() {
        var formula = Formula.parse("@foo + 2");
        var context = StaticDataContext.empty().set("foo", 1);
        assertResolvedValue(formula.resolve(context)).hasValue(3);
    }

    @Test
    void variableReferenceFormula() {
        var formula = Formula.parse("@bar");
        var context = StaticDataContext.empty()
                .set("foo", 4)
                .set("bar", Formula.parse("@foo"));
        assertResolvedValue(formula.resolve(context)).hasValue(4);
    }

    @Test
    void ifFormula() {
        var formula = Formula.parse("if(-2 < 0, 'A', 'B')");
        var context = DataContext.EMPTY;
        assertResolvedValue(formula.resolve(context)).hasValue("A");
    }

    @Test
    void elseFormula() {
        var formula = Formula.parse("concat(if(2 < 0, '-', '+'), 2)");
        var context = DataContext.EMPTY;
        assertResolvedValue(formula.resolve(context)).hasValue("+2");
    }

    @Test
    void modifierFormula() {
        var formula = Formula.parse("concat(if((floor(@test_score/2) - 5) > 0, '+', ''), floor(@test_score/2) - 5)");
        var context = StaticDataContext.empty()
                .set("test_score", 12);
        assertResolvedValue(formula.resolve(context)).hasValue("+1");
    }

    @Test
    void ordinal() {
        String[] expected = { "0th", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th" };
        for (int i = 0; i < expected.length; i++) {
            assertFormula("ordinal(%d)".formatted(i))
                    .resolvesTo(expected[i]);
        }
    }

    @Test
    void wildcardMin() {
        var formula = Formula.parse("min(@key_*)");
        var context = StaticDataContext.empty()
                .set("other", 2)
                .set("key_1", 4)
                .set("key_2", 3)
                .set("key_3", 5);
        assertResolvedValue(formula.resolve(context)).hasValue(3);
    }

    @Test
    void wildcardMax() {
        var formula = Formula.parse("max(@key_*)");
        var context = StaticDataContext.empty()
                .set("other", 2)
                .set("key_1", 4)
                .set("key_2", 3)
                .set("key_3", 5);
        assertResolvedValue(formula.resolve(context)).hasValue(5);
    }

    @Test
    void wildcardSum() {
        var formula = Formula.parse("sum(@key_*)");
        var context = StaticDataContext.empty()
                .set("other", 2)
                .set("key_1", 4)
                .set("key_2", 3)
                .set("key_3", 5);
        assertResolvedValue(formula.resolve(context)).hasValue(12);
    }

    @Test
    void anyFunction() {
        var formula = Formula.parse("any(@a, @b)");
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 0).set("b", 0))).hasValue(false);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 0).set("b", 1))).hasValue(true);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 0))).hasValue(true);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 1))).hasValue(true);
    }

    @Test
    void allFunction() {
        var formula = Formula.parse("all(@a, @b)");
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 0).set("b", 0))).hasValue(false);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 0).set("b", 1))).hasValue(false);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 0))).hasValue(false);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 1))).hasValue(true);
    }

    @Test
    void allWithNestedAny() {
        var formula = Formula.parse("all(@a, any(@b, @c), 1)");
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 0).set("b", 0).set("c", 0))).hasValue(false);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 0).set("c", 0))).hasValue(false);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 1).set("c", 0))).hasValue(true);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 0).set("c", 1))).hasValue(true);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 1).set("c", 1))).hasValue(true);
    }

    @Test
    void allWithNestedAnyDifferentOrder() {
        var formula = Formula.parse("all(any(@b, @c), @a, 1)");
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 0).set("b", 0).set("c", 0))).hasValue(false);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 0).set("c", 0))).hasValue(false);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 1).set("c", 0))).hasValue(true);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 0).set("c", 1))).hasValue(true);
        assertResolvedValue(formula.resolve(StaticDataContext.empty().set("a", 1).set("b", 1).set("c", 1))).hasValue(true);
    }
}