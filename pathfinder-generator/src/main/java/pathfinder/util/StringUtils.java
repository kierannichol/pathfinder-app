package pathfinder.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtils {
    private static final Pattern LEVEL_PATTERN = Pattern.compile("(\\d+)(?:th|st|rd|nd)?");

    public static String toCamelCase(String s) {
        StringBuilder builder = new StringBuilder(s.length());
        for (int i = 0; i < s.length(); i++) {
            char current = s.charAt(i);
            if (i == 0 || s.charAt(i - 1) == ' ') {
                current = Character.toUpperCase(current);
            }
            builder.append(current);
        }
        return builder.toString();
    }

    public static String toSimpleName(String formalName) {
        StringBuilder builder = new StringBuilder(formalName.length());

        String[] parts = formalName.split(",", 2);
        if (parts.length > 1) {
            builder.append(parts[1].trim());
            builder.append(' ');
        }
        builder.append(parts[0].trim());
        return builder.toString();
    }

    public static String sanitize(String str) {
        return str
                .replace("’", "'")
                .replace("—", "--")
                .replace("”", "\"")
                .trim();
    }

    public static int parseLevel(String str) {
        Matcher matcher = LEVEL_PATTERN.matcher(str);
        if (!matcher.find()) {
            return Integer.parseInt(str);
        }

        return Integer.parseInt(matcher.group(1));
    }
}
