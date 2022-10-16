package pathfinder.util;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;
import java.util.stream.Stream;

public class CsvFile {
    private static final Pattern CSV_SPLIT = Pattern.compile(",(?=(?:[^\\\"]*\\\"[^\\\"]*\\\")*[^\\\"]*$)");
    private static final Pattern STRIP_HTML = Pattern.compile("<[^>]*>");

    private final List<Map<String, String>> rows;

    public static CsvFile load(Path path) throws IOException {
        List<String> lines = Files.readAllLines(path);
        String[] headers = splitRow(lines.remove(0));

        List<Map<String, String>> rows = new ArrayList<>();
        for (String row : lines) {
            if (row.isBlank()) {
                continue;
            }
            String[] values = splitRow(row);
            Map<String, String> entry = new HashMap<>();
            for (int i = 0; i < headers.length; i++) {
                String header = headers[i];
                String value = values[i];

                value = stripHtml(value);
                entry.put(header, value);
            }
            rows.add(entry);
        }

        return new CsvFile(rows);
    }

    public Stream<Map<String,String>> stream() {
        return rows.stream();
    }

    private CsvFile(List<Map<String, String>> rows) {
        this.rows = rows;
    }

    private static String[] splitRow(String row) {
        return Arrays.stream(CSV_SPLIT.split(row))
                .map(value -> {
                    if (value.startsWith("\uFEFF")) {
                        value = value.substring(1);
                    }
                    if (value.startsWith("\"")) {
                        value = value.substring(1, value.length() - 1);
                    }
                    return value;
                })
                .toArray(String[]::new);
    }

    private static String stripHtml(String row) {
        return row.replaceAll("<[^>]*>", "");
    }
}
