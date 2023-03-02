package pathfinder.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
@JsonFormat()
public class Id {

    public static final Id EMPTY = new Id(null, null, null);
    private static final Pattern ID_PATTERN = Pattern.compile("(?:(?<type>[\\w_]+):)?(?<key>[\\w_]+)(?:#(?<option>[\\w_]+))?");
    public final String type;
    public final String key;
    public final String option;

    public static Id of(String idString) {
        Matcher matcher = ID_PATTERN.matcher(idString);
        if (!matcher.find()) {
            throw new IllegalArgumentException("Unable to parse id string: " + idString);
        }
        return new Id(matcher.group("type"), matcher.group("key"), matcher.group("option"));
    }

    public static Id of(String type, String key) {
        return new Id(type, key, null);
    }

    public static Id of(String type, Key key) {
        return new Id(type, key.key, null);
    }

    public static Id of(Id.Type type, String key) {
        return new Id(type.type, key, null);
    }

    public static Id of(Id.Type type, Id.Key key) {
        return new Id(type.type, key.key, null);
    }

    public static Key partial(String key) {
        return new Key(key);
    }

    public static Id.Type type(String type) {
        return new Id.Type(type);
    }

    public Id withOption(String option) {
        return new Id(type, key, option);
    }

    public Id withoutOption() {
        return new Id(type, key, null);
    }

    public Id changeType(String newType) {
        return new Id(newType, this.key, this.option);
    }

    public String string() {
        String id = "";
        if (key != null) {
            id = key;
        }
        if (type != null) {
            id = type + ":" + id;
        }
        if (option != null) {
            id = id + "#" + option;
        }
        return id;
    }

    @Override
    public String toString() {
        return string();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Id id)) {
            return false;
        }
        return Objects.equals(type, id.type) && Objects.equals(key, id.key) && Objects.equals(
                option, id.option);
    }

    @Override
    public int hashCode() {
        return Objects.hash(type, key, option);
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    public static class Type {
        private final String type;

        public Id withKey(String key) {
            return Id.of(type, key);
        }

        public Id withKey(Id.Key key) {
            return Id.of(type, key);
        }
    }

    public static class Key extends Id {

        private Key(String key) {
            super(null, key, null);
        }

        public Id withType(String type) {
            return Id.of(type, key);
        }

        public Id withType(Type type) {
            return Id.of(type, key);
        }
    }
}
