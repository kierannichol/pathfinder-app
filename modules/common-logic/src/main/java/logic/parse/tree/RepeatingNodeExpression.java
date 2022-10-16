package logic.parse.tree;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class RepeatingNodeExpression implements NodeExpression {
    private final TokenMatcher matcher;
    private final int minLength;
    private final int maxLength;

    @Override
    public <T> Node<T> chainTo(Node<T> root) {
        return root.add(new RepeatingNode<>(matcher, minLength, maxLength));
    }
}
