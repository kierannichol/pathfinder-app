package pathfinder.util;

public class NameUtils {

    public static String fixNameOrder(String name) {
        String[] parts = name.split(",", 2);
        if (parts.length == 1) {
            return parts[0];
        }
        return parts[1].trim() + " " + parts[0].trim();
    }
}
