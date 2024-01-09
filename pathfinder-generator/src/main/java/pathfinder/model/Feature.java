package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.List;
import pathfinder.data.FeatureDbo;
import pathfinder.data.FeatureSummaryDbo;

public record Feature(Id id,
                      String name,
                      String label,
                      Description description,
                      Condition enabledCondition,
                      List<String> tags,
                      Integer maxStacks,
                      Stacks stacks,
                      List<FeatureModification> featureModifications) implements NamedEntity {

    public static Feature simple(Id id, String name) {
        return builder(id)
                .setName(name)
                .build();
    }

    public static Feature simple(Id id, String name, String description) {
        return builder(id)
                .setName(name)
                .setDescription(description)
                .build();
    }

    public static FeatureBuilder builder(Feature feature) {
        var builder = builder(feature.id)
                .setName(feature.name)
                .setDescription(feature.description)
                .setEnabledCondition(feature.enabledCondition.formula());

        feature.tags.forEach(builder::addTag);

        if (feature.stacks instanceof RepeatingStack repeatingStack) {
            builder.setRepeatingStack(repeatingStack.stack());
        }
        if (feature.stacks instanceof FixedStacks fixedStacks) {
            fixedStacks.stacks().forEach(builder::addFixedStack);
        }

        if (feature.maxStacks != null) {
            builder.setMaxStacks(feature.maxStacks);
        }

        if (feature.featureModifications != null) {
            feature.featureModifications.forEach(builder::addFeatureModification);
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
        if (label != null) {
            summary.setLabel(label);
        }
        if (maxStacks != null) {
            summary.setMaxStacks(maxStacks);
        }
        return summary.build();
    }

    public FeatureDbo toDbo() {
        Description description = this.description;
        if (description == null) {
            description = Description.empty();
        }
        var feature = FeatureDbo.newBuilder()
                .setId(id.string())
                .setName(name)
                .setEnabledFormula(enabledCondition.formula())
                .addAllTags(tags)
                .setDescription(description.toDbo())
                .setStacks(stacks.toDbo())
                .addAllFeatureModifications(mapList(featureModifications, FeatureModification::toDbo));
        if (label != null) {
            feature.setLabel(label);
        }
        if (maxStacks != null) {
            feature.setMaxStacks(maxStacks);
        }
        return feature.build();
    }

    public static class FeatureBuilder {

        private Id id;
        private String name = "";
        private String label = null;
        private Description description = Description.empty();
        private Condition enabledCondition = new Condition("");
        private final List<String> tags = new ArrayList<>();
        private final List<Stack> fixedStack = new ArrayList<>();
        private Stack repeatingStack = null;
        private Integer maxStacks = null;
        private final List<FeatureModification> featureModifications = new ArrayList<>();

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

        public FeatureBuilder setLabel(String label) {
            this.label = label;
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
            this.enabledCondition = new Condition(formula);
            return this;
        }

        public FeatureBuilder addEnabledCondition(String formula) {
            if (this.enabledCondition.formula().isEmpty()) {
                this.enabledCondition = new Condition(formula);
                return this;
            }
            this.enabledCondition = new Condition("(" + this.enabledCondition.formula() + ") AND (" + formula + ")");
            return this;
        }

        public FeatureBuilder addTag(String tag) {
            this.tags.add(tag.toLowerCase().trim());
            return this;
        }

        public FeatureBuilder addFixedStack(Stack stack) {
            this.repeatingStack = null;
            this.fixedStack.add(stack);
            return this;
        }

        public FeatureBuilder setRepeatingStack(Stack stack) {
            this.repeatingStack = stack;
            this.fixedStack.clear();
            return this;
        }

        public FeatureBuilder addFeatureModification(FeatureModification featureModification) {
            this.featureModifications.add(featureModification);
            return this;
        }

        public FeatureBuilder setMaxStacks(Integer num) {
            this.maxStacks = num;
            return this;
        }

        public Feature build() {
            Stacks stacks = repeatingStack != null
                    ? new RepeatingStack(repeatingStack)
                    : new FixedStacks(fixedStack);

            Integer calcMaxStacks = repeatingStack != null
                    ? null
                    : Math.max(1, fixedStack.size());
            if (maxStacks != null) {
                calcMaxStacks = maxStacks;
            }

            return new Feature(id,
                    name,
                    label,
                    description,
                    enabledCondition,
                    tags,
                    calcMaxStacks,
                    stacks,
                    featureModifications);
        }
    }

}
