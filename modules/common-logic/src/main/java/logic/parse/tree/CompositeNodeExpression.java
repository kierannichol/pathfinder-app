package logic.parse.tree;

import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(staticName = "of")
public class CompositeNodeExpression implements NodeExpression {
    private final List<NodeExpression> expressions;

    @Override
    public <T> Node<T> chainTo(Node<T> root) {
        Node<T> node = root;
        for (NodeExpression toAdd : expressions) {
            node = toAdd.chainTo(node);
        }
        return node;
    }
}
