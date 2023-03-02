package pathfinder.model.v4;

import java.util.Objects;

public class Tag {
    private final String value;

    public static Tag of(String textValue) {
        if (textValue == null) {
            throw new NullPointerException("Tag value cannot be null");
        }
        return new Tag(textValue.toLowerCase().trim());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Tag tag = (Tag) o;
        return value.equals(tag.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }

    @Override
    public String toString() {
        return value;
    }

    private Tag(String value) {
        this.value = value;
    }
}
