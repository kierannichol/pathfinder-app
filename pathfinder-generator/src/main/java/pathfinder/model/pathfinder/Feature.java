package pathfinder.model.pathfinder;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.function.Predicate;
import java.util.regex.Pattern;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Feature(Id id, String name, String label, String type, Description description, List<String> effects, String prerequisites, String source) implements NamedEntity, FromSourceBook {

    public static FeatureBuilder builder() {
        return new FeatureBuilder();
    }

    public static FeatureBuilder builder(Feature copy) {
        return new FeatureBuilder(copy);
    }

    public static class FeatureBuilder {
        private Id id;
        private String name;
        private String label;
        private String type;
        private Description description = Description.empty();
        private final List<String> effects = new ArrayList<>();
        private String prerequisites = "";
        private String source;

        public FeatureBuilder id(Id id) {
            this.id = id;
            return this;
        }

        public FeatureBuilder id(String id) {
            return id(Id.of(id));
        }

        public FeatureBuilder name(String name) {
            this.name = name;
            return this;
        }

        public FeatureBuilder label(String label) {
            this.label = label;
            return this;
        }

        public FeatureBuilder type(String type) {
            this.type = type;
            return this;
        }

        public FeatureBuilder description(Description description) {
            this.description = Description.copy(description);
            return this;
        }

        public FeatureBuilder description(String description) {
            return description(Description.create(description));
        }

        public FeatureBuilder prerequisites(String prerequisites) {
            this.prerequisites = prerequisites;
            return this;
        }

        public FeatureBuilder source(String source) {
            this.source = source;
            return this;
        }

        public FeatureBuilder addEffect(String effect) {
            this.effects.add(effect);
            return this;
        }

        public FeatureBuilder addEffects(Collection<String> effects) {
            this.effects.addAll(effects);
            return this;
        }

        public FeatureBuilder removeEffectIf(Predicate<String> effectPredicate) {
            this.effects.removeIf(effectPredicate);
            return this;
        }

        public Feature build() {
            return new Feature(id, name, label, type, description, effects, prerequisites, source);
        }

        private FeatureBuilder() {
        }

        private FeatureBuilder(Feature copy) {
            this.id = copy.id;
            this.name = copy.name;
            this.label = copy.label;
            this.type = copy.type;
            this.description = Description.copy(copy.description);
            this.effects.addAll(copy.effects);
            this.prerequisites = copy.prerequisites;
            this.source = copy.source;
        }

        public Id id() {
            return this.id;
        }
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
