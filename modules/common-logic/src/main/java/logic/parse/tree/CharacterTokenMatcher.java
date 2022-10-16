package logic.parse.tree;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(staticName = "of")
public class CharacterTokenMatcher implements TokenMatcher {
    private final char character;

    @Override
    public boolean matches(char c) {
        return c == character;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        CharacterTokenMatcher that = (CharacterTokenMatcher) o;
        return character == that.character;
    }

    @Override
    public int hashCode() {
        return character;
    }
}
