package pathfinder.model.pathfinder;

import java.util.OptionalInt;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import pathfinder.model.Id;

public class IdAndLevel {
    private static final Pattern ID_AND_LEVEL_PATTERN = Pattern.compile("(.*?)@(\\d+)");
    private final Id id;
    private final Integer level;

    public static IdAndLevel parse(String str) {
        Matcher matcher = ID_AND_LEVEL_PATTERN.matcher(str);
        if (!matcher.find()) {
            return new IdAndLevel(Id.of(str), null);
        }

        String idPart = matcher.group(1);
        String levelPart = matcher.group(2);

        if (idPart.isBlank()) {
            throw new IllegalArgumentException("Unable to parse id and level: " + str);
        }

        return new IdAndLevel(Id.of(idPart), levelPart != null ? Integer.parseInt(levelPart) : null);
    }

    public static IdAndLevel of(Id id) {
        return new IdAndLevel(id, null);
    }

    public static IdAndLevel of(Id id, int level) {
        return new IdAndLevel(id, level);
    }

    public Id id() {
        return this.id;
    }

    public OptionalInt level() {
        return level != null
               ? OptionalInt.of(level)
               : OptionalInt.empty();
    }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder(this.id.string());
        if (level != null) {
            str.append("@");
            str.append(level);
        }
        return str.toString();
    }

    private IdAndLevel(Id id, Integer level) {
        this.id = id;
        this.level = level;
    }
}
