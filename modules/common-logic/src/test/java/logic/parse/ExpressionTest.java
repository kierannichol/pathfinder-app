package logic.parse;

import static logic.parse.assertions.ResolvedValueAssertions.assertResolvedValue;

import logic.context.StaticDataContext;
import org.junit.jupiter.api.Test;

class ExpressionTest {

    @Test
    void textOnlyExpression() {
        var expression = Expression.parse("This is a test");
        assertResolvedValue(expression).hasValue("This is a test");
    }

    @Test
    void expressionWithSimpleFormula() {
        var expression = Expression.parse("5 + 5 = {5 + 5}");
        assertResolvedValue(expression).hasValue("5 + 5 = 10");
    }

    @Test
    void expressionWithMultipleFormula() {
        var expression = Expression.parse("{2+3} + 5 = {5 + 5}");
        assertResolvedValue(expression).hasValue("5 + 5 = 10");
    }

    @Test
    void expressionWithVariableReference() {
        var expression = Expression.parse("foo = {@foo}");
        var context = StaticDataContext.empty().set("foo", "foo");
        assertResolvedValue(expression.resolve(context)).hasValue("foo = foo");
    }

    @Test
    void escapedSymbol() {
        var expression = Expression.parse("foo = \\{@foo\\}");
        var context = StaticDataContext.empty().set("foo", "foo");
        assertResolvedValue(expression.resolve(context)).hasValue("foo = {@foo}");
    }
}