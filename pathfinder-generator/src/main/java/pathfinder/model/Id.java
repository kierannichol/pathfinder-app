package pathfinder.model;

import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class Id {
    private static final Pattern ID_PATTERN = Pattern.compile("(?:(?<type>[\\w_]+):)?(?<key>[\\w_]+)(?:#(?<option>[\\w_]+))?");
    public final String type;
    public final String key;
    public final String option;

    public static Id parse(String idString) {
        Matcher matcher = ID_PATTERN.matcher(idString);
        if (!matcher.find()) {
            throw new IllegalArgumentException("Unable to parse id string: " + idString);
        }
        return new Id(matcher.group("type"), matcher.group("key"), matcher.group("option"));
    }

    public static Id partial(String key) {
        return new Id(null, key, null);
    }

    public static Id.Type type(String type) {
        return new Id.Type(type);
    }

    public static Id of(String type, String key) {
        return new Id(type, key, null);
    }

    public Id withOption(String option) {
        return new Id(type, key, option);
    }

    public String string() {
        String id = key;
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
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Id id = (Id) o;
        return Objects.equals(type, id.type) && key.equals(id.key) && Objects.equals(option, id.option);
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
    }
}
