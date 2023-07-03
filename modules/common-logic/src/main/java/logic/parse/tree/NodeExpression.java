package logic.parse.tree;

import static logic.parse.tree.CharacterClass.ALPHA_CHARACTERS;
import static logic.parse.tree.CharacterClass.DIGIT_CHARACTERS;
import static logic.parse.tree.CharacterClass.WORD_CHARACTERS;

import java.util.Arrays;
import java.util.List;

public interface NodeExpression {

    NodeExpression DIGIT = anyOf(DIGIT_CHARACTERS);
    NodeExpression DIGITS = anyOf(DIGIT_CHARACTERS).repeats(1);
    NodeExpression INTEGER = of(just('-').optional(), DIGITS);
    NodeExpression DECIMAL = of(INTEGER, just('.'), DIGITS);
    NodeExpression NUMBER = of(INTEGER, optional(just('.'), DIGITS));
    NodeExpression ALPHA = anyOf(ALPHA_CHARACTERS);
    NodeExpression WORD = anyOf(WORD_CHARACTERS).repeats(1);
    NodeExpression KEY = anyOf(WORD_CHARACTERS + ":.#*").repeats(1);

    static NodeExpression of(NodeExpression... expressions) {
        return CompositeNodeExpression.of(Arrays.asList(expressions));
    }

    static MatcherNodeExpression anyOf(CharSequence allowed) {
        return matches(AnyOfTokenMatcher.of(allowed));
    }

    static AnyUntilNodeExpression anyUntil(String closeSequence, String escapeSequence) {
        return AnyUntilNodeExpression.of(closeSequence, escapeSequence);
    }

    static AnyUntilNodeExpression anyUntil(String closeSequence) {
        return AnyUntilNodeExpression.of(closeSequence);
    }

    static NodeExpression literal(String openSequence, String closeSequence, String escapeSequence) {
        return of(term(openSequence), anyUntil(closeSequence, escapeSequence), term(closeSequence));
    }

    static NodeExpression literal(String openSequence, String closeSequence) {
        return of(term(openSequence), anyUntil(closeSequence), term(closeSequence));
    }

    static NodeExpression term(CharSequence term) {
        return CompositeNodeExpression.of(term.chars()
                .mapToObj(c -> (NodeExpression) just((char) c))
                .toList());
    }

    static NodeExpression oneOf(String... expressions) {
        return OneOfNodeExpression.of(Arrays.stream(expressions).map(NodeExpression::term).toList());
    }

    static NodeExpression oneOf(NodeExpression... expressions) {
        return OneOfNodeExpression.of(List.of(expressions));
    }

    static NodeExpression optional(NodeExpression... expressions) {
        return new OptionalNodeExpression(Arrays.asList(expressions));
    }

    static MatcherNodeExpression just(char c) {
        return matches(CharacterTokenMatcher.of(c));
    }

    static MatcherNodeExpression matches(TokenMatcher matcher) {
        return new MatcherNodeExpression(matcher);
    }

    <T> Node<T> chainTo(Node<T> root);
}
