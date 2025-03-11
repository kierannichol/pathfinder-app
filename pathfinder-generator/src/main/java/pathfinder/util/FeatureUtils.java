package pathfinder.util;

import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class FeatureUtils {
    private static final List<Pattern> LEVEL_DESCRIPTION_PATTERNS = List.of(
            Pattern.compile("at (?<level>\\d+)(th|nd|st|rd) level", Pattern.CASE_INSENSITIVE)
    );

    public static Optional<Integer> parseLevelFromDescription(String description) {
        for (Pattern pattern : LEVEL_DESCRIPTION_PATTERNS) {
            Matcher matcher = pattern.matcher(description);
            if (!matcher.find()) {
                continue;
            }

            String levelText = matcher.group("level");
            return Optional.of(Integer.parseInt(levelText));
        }

        return Optional.empty();
    }
}
