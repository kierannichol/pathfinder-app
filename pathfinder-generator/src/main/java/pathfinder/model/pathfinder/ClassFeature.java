package pathfinder.model.pathfinder;

import java.util.List;
import java.util.regex.Pattern;
import lombok.Builder;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

@Builder
public record ClassFeature(Id id, String name, String label, String type, Id classId, Description description, String prerequisites, List<String> effects, String source) implements NamedEntity, FromSourceBook, ClassSpecific {

    public static ClassFeature fromFeature(Feature feature, Id classId) {
        return new ClassFeature(
                feature.id(),
                feature.name(),
                feature.label(),
                feature.type(),
                classId,
                feature.description(),
                feature.prerequisites(),
                feature.effects(),
                feature.source());
    }

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
