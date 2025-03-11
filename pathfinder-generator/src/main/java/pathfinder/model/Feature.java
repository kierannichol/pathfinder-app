package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.function.Consumer;
import pathfinder.data.FeatureDbo;
import pathfinder.data.FeatureSummaryDbo;
import pathfinder.util.SortedArrayList;

public record Feature(Id id,
                      String name,
                      String label,
                      String typeAlias,
                      Description description,
                      Condition enabledCondition,
                      List<String> tags,
                      FeatureOptions options,
                      Integer maxStacks,
                      Stacks stacks,
                      List<ConditionalStack> conditionalStacks,
                      AttackModification attackMod,
                      List<Attack> attacks) implements NamedEntity {

    public static Feature simple(NamedEntity namedEntity) {
        return builder(namedEntity.id())
                .setName(namedEntity.name())
                .build();
    }

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
        builder.addConditionalStacks(feature.conditionalStacks());

        if (feature.maxStacks != null) {
            builder.setMaxStacks(feature.maxStacks);
        }

        if (feature.options != null) {
            builder.addOptions(feature.options);
        }

        builder.setAttackModifier(feature.attackMod);

        return builder;
    }

    public static FeatureBuilder builder(String id) {
        return builder(Id.of(id));
    }

    public static FeatureBuilder builder(Id id) {
        return new FeatureBuilder(id);
    }

    public static FeatureBuilder builder(NamedEntity namedEntity) {
        return builder(namedEntity.id())
                .setName(namedEntity.name());
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
        if (options != null) {
            summary.setOptions(options.toDbo());
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
                .addAllConditionalStacks(mapList(conditionalStacks, ConditionalStack::toDbo));
        if (label != null) {
            feature.setLabel(label);
        }
        if (maxStacks != null) {
            feature.setMaxStacks(maxStacks);
        }
        if (options != null) {
            feature.setOptions(options.toDbo());
        }
        if (attackMod != null) {
            feature.setAttackModifier(attackMod.toDbo());
        }
        if (attacks != null) {
            feature.addAllAttacks(mapList(attacks, Attack::toDbo));
        }
        return feature.build();
    }

    public static class FeatureBuilder {

        private Id id;
        private String name = "";
        private String label = null;
        private String typeAlias = "";
        private Description description = pathfinder.model.Description.empty();
        private Condition enabledCondition = new Condition("");
        private final List<String> tags = new SortedArrayList<>(Comparator.comparing(key -> key));
        private FeatureOptions options = null;
        private final List<StackBuilder> fixedStack = new ArrayList<>();
        private Stack repeatingStack = null;
        private Integer maxStacks = null;
        private final List<ConditionalStack> conditionalStacks = new ArrayList<>();
        private AttackModification attackMod = null;
        private final List<Attack> attacks = new ArrayList<>();

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

        public FeatureBuilder setTypeAlias(String typeAlias) {
            this.typeAlias = typeAlias;
            return this;
        }

        public FeatureBuilder setDescription(String text) {
            return setDescription(pathfinder.model.Description.create(text));
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

        public FeatureBuilder removeTag(String tag) {
            this.tags.remove(tag.toLowerCase().trim());
            return this;
        }

        public FeatureBuilder clearTags() {
            this.tags.clear();
            return this;
        }

        public FeatureBuilder addFixedStack(Stack stack) {
            this.repeatingStack = null;
            this.fixedStack.add(StackBuilder.copy(stack));
            return this;
        }

        public FeatureBuilder modifyStack(int count, Consumer<StackBuilder> modifyFn) {
            for (int i = fixedStack.size(); i < count; i++) {
                this.fixedStack.add(new StackBuilder());
            }
            modifyFn.accept(fixedStack.get(count - 1));
            return this;
        }

        public FeatureBuilder setRepeatingStack(Stack stack) {
            this.repeatingStack = stack;
            this.fixedStack.clear();
            return this;
        }

        public FeatureBuilder addConditionalStack(ConditionalStack stack) {
            this.conditionalStacks.add(stack);
            return this;
        }

        public FeatureBuilder addConditionalStacks(Collection<ConditionalStack> stacks) {
            this.conditionalStacks.addAll(stacks);
            return this;
        }

        public FeatureBuilder clearStacks() {
            fixedStack.clear();
            conditionalStacks.clear();
            repeatingStack = null;
            return this;
        }

        public FeatureBuilder setMaxStacks(Integer num) {
            this.maxStacks = num;
            return this;
        }

        public FeatureBuilder addOptions(FeatureOptions options) {
            this.options = options;
            return this;
        }

        public FeatureBuilder setAttackModifier(AttackModification attackMod) {
            this.attackMod = attackMod;
            return this;
        }

        public FeatureBuilder addAttack(Attack attack) {
            this.attacks.add(attack);
            return this;
        }

        public FeatureBuilder addAllAttacks(List<Attack> attacks) {
            this.attacks.addAll(attacks);
            return this;
        }

        public Feature build() {
            Stacks stacks = repeatingStack != null
                    ? new RepeatingStack(repeatingStack)
                    : new FixedStacks(mapList(fixedStack, StackBuilder::build));

            Integer calcMaxStacks = repeatingStack != null
                    ? null
                    : Math.max(1, fixedStack.size());
            if (maxStacks != null) {
                calcMaxStacks = maxStacks;
            }

            return new Feature(id,
                    name,
                    label,
                    typeAlias,
                    description,
                    enabledCondition,
                    tags,
                    options,
                    calcMaxStacks,
                    stacks,
                    conditionalStacks,
                    attackMod,
                    attacks);
        }
    }

}
