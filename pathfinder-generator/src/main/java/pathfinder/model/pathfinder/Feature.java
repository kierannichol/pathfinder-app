package pathfinder.model.pathfinder;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.function.Predicate;
import java.util.regex.Pattern;
import pathfinder.model.Description;
import pathfinder.model.FixedStacks;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.RepeatingStack;
import pathfinder.model.Stack;
import pathfinder.model.StackBuilder;
import pathfinder.model.Stacks;

public record Feature(Id id, String name, String label, String type, Description description, List<String> effects, List<Id> links, Stacks stacks, String prerequisites, String enabled_formula, String source) implements NamedEntity, FromSourceBook {

    public static FeatureBuilder builder() {
        return new FeatureBuilder();
    }

    public static FeatureBuilder builder(Feature copy) {
        return new FeatureBuilder(copy);
    }

    @Override
    public List<String> sources() {
        return List.of(source);
    }

    public static class FeatureBuilder {
        private Id id;
        private String name;
        private String label;
        private String type;
        private Description description = Description.empty();
        private final List<String> effects = new ArrayList<>();
        private final List<Id> links = new ArrayList<>();
        private final List<StackBuilder> fixedStacks = new ArrayList<>();
        private StackBuilder repeatingStack = new StackBuilder();
        private boolean useRepeatingStack = false;
        private String prerequisites = "";
        private String enabled_formula = "";
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

        public FeatureBuilder enabled_formula(String enabled_formula) {
            this.enabled_formula = enabled_formula;
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

        public FeatureBuilder addLink(Id link) {
            this.links.add(link);
            return this;
        }

        public FeatureBuilder addLinks(Collection<Id> links) {
            this.links.addAll(links);
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

        public StackBuilder fixedStack() {
            var stack = new StackBuilder();
            this.fixedStacks.add(stack);
            this.useRepeatingStack = false;
            return stack;
        }

        public FeatureBuilder addFixedStack(Stack stack) {
            this.fixedStacks.add(StackBuilder.copy(stack));
            this.useRepeatingStack = false;
            return this;
        }

        public FeatureBuilder addFixedStacks(Collection<Stack> stacks) {
            this.fixedStacks.addAll(mapList(stacks, StackBuilder::copy));
            this.useRepeatingStack = false;
            return this;
        }

        public StackBuilder repeatingStack() {
            this.useRepeatingStack = true;
            return this.repeatingStack;
        }

        public FeatureBuilder setRepeatingStack(Stack stack) {
            this.repeatingStack = StackBuilder.copy(stack);
            this.useRepeatingStack = true;
            return this;
        }

        public Feature build() {
            Stacks stacks = useRepeatingStack
                            ? new RepeatingStack(repeatingStack.build())
                            : new FixedStacks(mapList(fixedStacks, StackBuilder::build));
            return new Feature(id, name, label, type, description, effects, links, stacks, prerequisites, enabled_formula, source);
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
            this.links.addAll(copy.links);
            this.prerequisites = copy.prerequisites;
            this.source = copy.source;
        }

        public Id id() {
            return this.id;
        }
    }

    public static class Type {
        private static final Pattern FEATURE_NAME_PATTERN = Pattern.compile("^(?<name>.*?)(?: \\((?<type>Su|Sp|Ex(?: or Su|Sp|Ex)?)\\))?$");

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
