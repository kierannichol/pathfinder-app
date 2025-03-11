package pathfinder.util;

import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtils {
    private static final String COMMA_NOT_IN_BRACKETS = ",(?![^(]*\\))";

    private static final Pattern LEVEL_PATTERN = Pattern.compile("(\\d+)(?:th|st|rd|nd)?");
    private static final Set<Character> WORD_BREAKS = Set.of(' ', '\t', '\n', '(', '-', '/', '[', '<');

    public static String capitalize(String s) {
        StringBuilder builder = new StringBuilder(s.length());
        for (int i = 0; i < s.length(); i++) {
            char current = s.charAt(i);
            if (i == 0 || WORD_BREAKS.contains(s.charAt(i - 1))) {
                current = Character.toUpperCase(current);
            }
            builder.append(current);
        }
        return builder.toString();
    }

    public static String toSimpleName(String formalName) {
        StringBuilder builder = new StringBuilder(formalName.length());

        String[] parts = formalName.split(COMMA_NOT_IN_BRACKETS, 2);
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

    public static String trimPeriod(String str) {
        return str.replaceAll("\\.$", "");
    }


    public static boolean notEmpty(String str) {
        return str != null && !str.isBlank();
    }

    public static String emptyIfNull(String text) {
        if (text == null) {
            return "";
        }
        return text;
    }
}
