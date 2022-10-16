package logic.parse.tree;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class AnyUntilNodeExpression implements NodeExpression {
    private final String closeSequence;
    private final String escapeSequence;

    public static AnyUntilNodeExpression of(String closeSequence, String escapeSequence) {
        return new AnyUntilNodeExpression(closeSequence, escapeSequence);
    }

    public static AnyUntilNodeExpression of(String closeSequence) {
        return new AnyUntilNodeExpression(closeSequence, null);
    }

    @Override
    public <T> Node<T> chainTo(Node<T> root) {
        return root.add(new AnyUntilNode<>(closeSequence, escapeSequence));
    }
}
