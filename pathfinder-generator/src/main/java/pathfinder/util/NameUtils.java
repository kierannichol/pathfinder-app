package pathfinder.util;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import pathfinder.model.Id;

public class NameUtils {
    private static final Pattern WITH_PARENTHESES = Pattern.compile("^(.*?)( *\\(.*\\))?$");

    public static String sanitize(String name) {
        return StringUtils.sanitize(name)
                .replace("*", "")
                .trim();
    }

    public static String enumToName(Enum<?> e) {
        String name = e.name().toLowerCase()
                .replace("_", " ");
        return StringUtils.toCamelCase(name);
    }

    public static List<String> extractNameAndParentheses(String text) {
        Matcher matcher = WITH_PARENTHESES.matcher(text);
        if (!matcher.find()) {
            return List.of(text);
        }

        String namePart = matcher.group(1);
        String parenthesesPart = matcher.group(2);
        if (parenthesesPart == null) {
            return List.of(text);
        }
        return List.of(namePart, parenthesesPart);
    }

    public static String fixNameOrder(String name) {
        Matcher matcher = WITH_PARENTHESES.matcher(name);
        if (!matcher.find()) {
            return name;
        }

        String namePart = matcher.group(1);
        String parenthesesPart = matcher.group(2);
        if (parenthesesPart == null) {
            parenthesesPart = "";
        }

        String[] parts = namePart.split(",", 2);
        if (parts.length == 1) {
            return parts[0];
        }
        return (parts[1].trim() + " " + parts[0].trim()) + parenthesesPart;
    }

    public static String idToName(String idString) {
        Id id = Id.of(idString);
        StringBuilder name = new StringBuilder();
        name.append(StringUtils.toCamelCase(id.key.replace("_", " ")));
        if (id.option != null) {
            name.append(" (");
            name.append(StringUtils.toCamelCase(id.option.replace("_", " ")));
            name.append(")");
        }
        return name.toString();
    }
}
