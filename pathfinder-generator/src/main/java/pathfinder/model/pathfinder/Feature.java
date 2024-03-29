package pathfinder.model.pathfinder;

import java.util.regex.Pattern;
import lombok.Builder;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

@Builder
public record Feature(Id id, String name, String type, Description description, String prerequisites, String source) implements NamedEntity {
    public static class Type {
        private static final Pattern FEATURE_NAME_PATTERN = Pattern.compile("^(?<name>.*?)(?: \\((?<type>Su|Sp|Ex)\\))?$");

        public static String fromFeatureName(String featureName) {
            var matcher = FEATURE_NAME_PATTERN.matcher(featureName);
            if (!matcher.find()) {
                return "";
            }
            String type = matcher.group("type");
            if (type == null) {
                type = "";
            }
            return type;
        }

        public static String removeTypeFromName(String featureName) {
            var matcher = FEATURE_NAME_PATTERN.matcher(featureName);
            if (!matcher.find()) {
                return "";
            }
            String name = matcher.group("name");
            if (name == null) {
                name = "";
            }
            return name;
        }
    }
}
