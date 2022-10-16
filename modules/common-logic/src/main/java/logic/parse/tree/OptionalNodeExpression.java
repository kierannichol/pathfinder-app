package logic.parse.tree;

import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class OptionalNodeExpression implements NodeExpression {
    private final List<NodeExpression> expressions;

    @Override
    public <T> Node<T> chainTo(Node<T> root) {
        Node<T> node = root;
        for (NodeExpression toAdd : expressions) {
            node = toAdd.chainTo(node);
        }
        if (root instanceof MappableNode<T> mappableRoot && node instanceof MappableNode<T> mappableNode) {
            mappableRoot.mapper(token -> {
                TokenMapper<T> mapper = mappableNode.mapper();
                if (mapper == null) {
                    return null;
                }
                return mapper.map(token);
            });
        }
        return node;
    }
}
