package logic.parse.tree;

import java.util.stream.Stream;

public class TerminalNode<T> extends MappableNode<T> {

    @Override
    public Stream<TokenMatch<T>> walk(String text, int startIndex, int currentIndex) {

        var matches = walkChildren(text, startIndex, currentIndex);
        if (mapper == null) {
            return matches;
        }

        return Stream.of(new TokenMatch<>(text, startIndex, currentIndex, this.mapper));
    }
}
