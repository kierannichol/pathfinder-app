package pathfinder.v7.model;

import java.util.ArrayList;
import java.util.List;
import pathfinder.data.v6.FeatureDbo;
import pathfinder.data.v6.FeatureSummaryDbo;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record FeatureV7(Id id,
                        String name,
                        Description description,
                        ConditionV7 enabledCondition,
                        List<String> tags,
                        Integer maxStacks,
                        StacksV7 stacks) implements NamedEntity {

    public static FeatureBuilder builder(FeatureV7 feature) {
        var builder = builder(feature.id)
                .setName(feature.name)
                .setDescription(feature.description)
                .setEnabledCondition(feature.enabledCondition.formula());

        feature.tags.forEach(builder::addTag);

        if (feature.stacks instanceof RepeatingStack repeatingStack) {
            builder.setRepeatingStack(repeatingStack.stack());
        }
        if (feature.stacks instanceof FixedStacksV7 fixedStacks) {
            fixedStacks.stacks().forEach(builder::addFixedStack);
        }

        if (feature.maxStacks != null) {
            builder.setMaxStacks(feature.maxStacks);
        }

        return builder;
    }

    public static FeatureBuilder builder(String id) {
        return builder(Id.of(id));
    }

    public static FeatureBuilder builder(Id id) {
        return new FeatureBuilder(id);
    }

    public FeatureSummaryDbo toSummaryDbo() {
        var summary = FeatureSummaryDbo.newBuilder()
                .setId(id.string())
                .setName(name)
                .setEnabledFormula(enabledCondition.formula())
                .addAllTags(tags);
        if (maxStacks != null) {
            summary.setMaxStacks(maxStacks);
        }
        return summary.build();
    }

    public FeatureDbo toDbo() {
        var feature = FeatureDbo.newBuilder()
                .setId(id.string())
                .setName(name)
                .setEnabledFormula(enabledCondition.formula())
                .addAllTags(tags)
                .setDescription(description.toDbo())
                .setStacks(stacks.toDbo());
        if (maxStacks != null) {
            feature.setMaxStacks(maxStacks);
        }
        return feature.build();
    }

    public static class FeatureBuilder {

        private Id id;
        private String name = "";
        private Description description = Description.empty();
        private ConditionV7 enabledCondition = new ConditionV7("");
        private final List<String> tags = new ArrayList<>();
        private final List<StackV7> fixedStack = new ArrayList<>();
        private StackV7 repeatingStack = null;
        private Integer maxStacks = null;

        public FeatureBuilder(Id id) {
            this.id = id;
        }

        public FeatureBuilder setId(Id id) {
            this.id = id;
            return this;
        }

        public FeatureBuilder setName(String name) {
            this.name = name;
            return this;
        }

        public FeatureBuilder setDescription(String text) {
            return setDescription(Description.create(text));
        }

        public FeatureBuilder setDescription(Description description) {
            this.description = description;
            return this;
        }

        public FeatureBuilder setEnabledCondition(String formula) {
            this.enabledCondition = new ConditionV7(formula);
            return this;
        }

        public FeatureBuilder addEnabledCondition(String formula) {
            if (this.enabledCondition.formula().isEmpty()) {
                this.enabledCondition = new ConditionV7(formula);
                return this;
            }
            this.enabledCondition = new ConditionV7("(" + this.enabledCondition.formula() + ") AND (" + formula + ")");
            return this;
        }

        public FeatureBuilder addTag(String tag) {
            this.tags.add(tag);
            return this;
        }

        public FeatureBuilder addFixedStack(StackV7 stack) {
            this.repeatingStack = null;
            this.fixedStack.add(stack);
            return this;
        }

        public FeatureBuilder setRepeatingStack(StackV7 stack) {
            this.repeatingStack = stack;
            this.fixedStack.clear();
            return this;
        }

        public FeatureBuilder setMaxStacks(Integer num) {
            this.maxStacks = num;
            return this;
        }

        public FeatureV7 build() {
            StacksV7 stacks = repeatingStack != null
                    ? new RepeatingStack(repeatingStack)
                    : new FixedStacksV7(fixedStack);

            Integer calcMaxStacks = repeatingStack != null
                    ? null
                    : Math.max(1, fixedStack.size());
            if (maxStacks != null) {
                calcMaxStacks = maxStacks;
            }

            return new FeatureV7(id,
                    name,
                    description,
                    enabledCondition,
                    tags,
                    calcMaxStacks,
                    stacks);
        }
    }

}
