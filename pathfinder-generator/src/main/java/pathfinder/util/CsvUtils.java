package pathfinder.util;

import java.util.Arrays;
import java.util.regex.Pattern;
import java.util.stream.Stream;

public class CsvUtils {
    private static final Pattern CSV_SPLIT = Pattern.compile(",(?=(?:[^\\\"]*\\\"[^\\\"]*\\\")*[^\\\"]*$)");

    public static Stream<String> split(String csv) {
        return Arrays.stream(CSV_SPLIT.split(csv))
                .map(value -> {
                    if (value.startsWith("\uFEFF")) {
                        value = value.substring(1);
                    }
                    if (value.startsWith("\"")) {
                        value = value.substring(1, value.length() - 1);
                    }
                    return value.trim();
                });
    }
}
