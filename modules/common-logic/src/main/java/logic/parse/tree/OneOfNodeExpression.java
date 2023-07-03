package logic.parse.tree;

import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(staticName = "of")
public class OneOfNodeExpression implements NodeExpression {
    private final List<NodeExpression> oneof;

    @Override
    public <T> Node<T> chainTo(Node<T> root) {
        Node<T> terminalNode = new TerminalNode<>();
        for (NodeExpression toAdd : oneof) {
            toAdd.chainTo(root).add(terminalNode);
        }
        return terminalNode;
    }
}
