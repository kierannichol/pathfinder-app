package pathfinder.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import pathfinder.model.Id;

public class NameUtils {
    private static final Pattern WITH_PARENTHESES = Pattern.compile("^(.*?)( *\\(.*\\))?$");

    private static final Pattern NAME_AND_PARENTHESES = Pattern.compile("^(.*?)(?: *\\((.*?)\\))*$");

    public static String sanitize(String name) {
        return StringUtils.sanitize(name)
                .replace("*", "")
                .trim();
    }

    public static String enumToName(Enum<?> e) {
        String name = e.name().toLowerCase()
                .replace("_", " ");
        return StringUtils.capitalize(name);
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

    public static NameAndParentheses nameAndParentheses(String text) {
        Matcher matcher = NAME_AND_PARENTHESES.matcher(text);
        if (!matcher.find()) {
            return new NameAndParentheses(text, List.of());
        }

        String namePart = matcher.group(1);
        List<String> parenthesesParts = new ArrayList<>();
        for (int i = 2; i <= matcher.groupCount(); i++) {
            String group = matcher.group(i);
            if (group == null) {
                break;
            }
            parenthesesParts.add(group);
        }
        return new NameAndParentheses(namePart, parenthesesParts);
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
            return parts[0] + parenthesesPart;
        }
        return (parts[1].trim() + " " + parts[0].trim()) + parenthesesPart;
    }

    public static String idToName(String idString) {
        Id id = Id.of(idString);
        StringBuilder name = new StringBuilder();
        name.append(StringUtils.capitalize(id.key.replace("_", " ")));
        if (id.option != null) {
            name.append(" (");
            name.append(StringUtils.capitalize(id.option.replace("_", " ")));
            name.append(")");
        }
        return name.toString();
    }

    public record NameAndParentheses(String name, List<String> parentheses) {
        public Optional<String> firstParentheses() {
            return parentheses.size() > 0 ? Optional.of(parentheses.get(0)) : Optional.empty();
        }

        public Optional<String> lastParentheses() {
            return parentheses.size() > 0 ? Optional.of(parentheses.get(parentheses.size() - 1)) : Optional.empty();
        }
    }
}
