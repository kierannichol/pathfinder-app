package pathfinder.util;

public class StringUtils {

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
}
