package pathfinder.model.pathfinder;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import pathfinder.model.ConditionalStack;
import pathfinder.model.Description;
import pathfinder.model.FixedStacks;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.RepeatingStack;
import pathfinder.model.Stack;
import pathfinder.model.StackBuilder;
import pathfinder.model.Stacks;
import pathfinder.model.pathfinder.Feature.FeatureBuilder;

public record ComplexFeature(Id id, String name, List<String> tags, String type, Description description, Stacks stacks, List<ConditionalStack> conditionalStacks, List<Feature> features, String source, Map<String, String> metadata) implements NamedEntity, FromSourceBook {

    public static ComplexFeatureBuilder builder() {
        return new ComplexFeatureBuilder();
    }

    public static class ComplexFeatureBuilder {
        private Id id = Id.EMPTY;
        private String name = "";
        private final List<String> tags = new ArrayList<>();
        private String type = "";
        private Description description = Description.empty();
        private final List<StackBuilder> fixedStacks = new ArrayList<>();
        private StackBuilder repeatingStack = new StackBuilder();
        private boolean useRepeatingStack = false;
        private final List<ConditionalStack> conditionalStacks = new ArrayList<>();
        private final Map<Id, Feature.FeatureBuilder> features = new HashMap<>();
        private final Map<String, String> metadata = new HashMap<>();

        private String source = "";

        public ComplexFeature.ComplexFeatureBuilder id(Id id) {
            this.id = id;
            return this;
        }

        public ComplexFeature.ComplexFeatureBuilder id(String id) {
            return id(Id.of(id));
        }

        public ComplexFeature.ComplexFeatureBuilder name(String name) {
            this.name = name;
            return this;
        }

        public ComplexFeature.ComplexFeatureBuilder type(String type) {
            this.type = type;
            return this;
        }

        public ComplexFeature.ComplexFeatureBuilder description(Description description) {
            this.description = Description.copy(description);
            return this;
        }

        public ComplexFeature.ComplexFeatureBuilder description(String description) {
            return description(Description.create(description));
        }

        public StackBuilder fixedStack() {
            var stack = new StackBuilder();
            this.fixedStacks.add(stack);
            this.useRepeatingStack = false;
            return stack;
        }

        public ComplexFeature.ComplexFeatureBuilder addFixedStack(Stack stack) {
            this.fixedStacks.add(StackBuilder.copy(stack));
            this.useRepeatingStack = false;
            return this;
        }

        public ComplexFeature.ComplexFeatureBuilder addFixedStacks(Collection<Stack> stacks) {
            this.fixedStacks.addAll(mapList(stacks, StackBuilder::copy));
            this.useRepeatingStack = false;
            return this;
        }

        public StackBuilder repeatingStack() {
            this.useRepeatingStack = true;
            return this.repeatingStack;
        }

        public ComplexFeature.ComplexFeatureBuilder setRepeatingStack(Stack stack) {
            this.repeatingStack = StackBuilder.copy(stack);
            this.useRepeatingStack = true;
            return this;
        }

        public ComplexFeature.ComplexFeatureBuilder addConditionalStack(ConditionalStack stack) {
            this.conditionalStacks.add(stack);
            return this;
        }

        public ComplexFeature.ComplexFeatureBuilder addConditionalStacks(Collection<ConditionalStack> stacks) {
            this.conditionalStacks.addAll(stacks);
            return this;
        }

        public FeatureBuilder feature(Id id) {
            return features.computeIfAbsent(id, key -> Feature.builder().id(id));
        }

        public FeatureBuilder feature(Feature feature) {
            return features.computeIfAbsent(feature.id(), key -> Feature.builder(feature));
        }

        public ComplexFeature.ComplexFeatureBuilder source(String source) {
            this.source = source;
            return this;
        }

        public ComplexFeature.ComplexFeatureBuilder addMetadata(String key, String value) {
            this.metadata.put(key, value);
            return this;
        }

        public ComplexFeature.ComplexFeatureBuilder addTag(String tag) {
            this.tags.add(tag);
            return this;
        }

        public ComplexFeature.ComplexFeatureBuilder addTags(Collection<String> tags) {
            this.tags.addAll(tags);
            return this;
        }

        public ComplexFeature build() {
            Stacks stacks = useRepeatingStack
                    ? new RepeatingStack(repeatingStack.build())
                    : new FixedStacks(mapList(fixedStacks, StackBuilder::build));
            return new ComplexFeature(id, name, tags, type, description, stacks,
                    conditionalStacks,
                    mapList(features.values(), FeatureBuilder::build),
                    source,
                    metadata);
        }

        private ComplexFeatureBuilder() {
        }

        public Id id() {
            return this.id;
        }
    }
}
