package logic.parse.tree;

import java.util.Objects;
import java.util.stream.Stream;
import logic.util.StreamUtils;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class MatcherNode<T> extends MappableNode<T> {
    protected final TokenMatcher matcher;

    @Override
    public Stream<TokenMatch<T>> walk(String text, int startIndex, int currentIndex) {
        if (!matches(text, startIndex, currentIndex)) {
            return Stream.empty();
        }
        var matches = walkChildren(text, startIndex, currentIndex + 1);
        if (mapper == null) {
            return matches;
        }
        var match = new TokenMatch<>(text, startIndex, currentIndex + 1, mapper);
        return StreamUtils.defaultIfEmpty(matches,
                () -> match);
    }

    protected boolean matches(String text, int startIndex, int currentIndex) {
        if (currentIndex >= text.length()) {
            return false;
        }
        char current = text.charAt(currentIndex);
        return matcher.matches(current);
    }

    @Override
    public boolean equals(Object other) {
        if (other == null) {
            return false;
        }
        return getClass() == other.getClass()
                && Objects.equals(matcher, ((MatcherNode<T>) other).matcher);
    }

    @Override
    public String toString() {
        return matcher.toString();
    }
}
