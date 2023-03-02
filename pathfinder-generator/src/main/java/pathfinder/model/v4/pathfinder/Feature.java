package pathfinder.model.v4.pathfinder;

import java.util.regex.Pattern;
import lombok.Builder;
import pathfinder.model.Id;
import pathfinder.model.v4.Description;
import pathfinder.model.v4.NamedEntity;

@Builder
public record Feature(Id id, String name, String type, Description description, String prerequisites, String source) implements NamedEntity {
    public static class Type {
        private static final Pattern FEATURE_NAME_PATTERN = Pattern.compile("(.*)(?: \\(Su|Sp|Ex\\))?");

        public static String fromFeatureName(String featureName) {
            var matcher = FEATURE_NAME_PATTERN.matcher(featureName);
            if (!matcher.find() || matcher.groupCount() < 2) {
                return "";
            }
            return matcher.group(2);
        }

        public static String removeTypeFromName(String featureName) {
            var matcher = FEATURE_NAME_PATTERN.matcher(featureName);
            if (!matcher.find()) {
                return featureName;
            }
            return matcher.group(1);
        }
    }
}
