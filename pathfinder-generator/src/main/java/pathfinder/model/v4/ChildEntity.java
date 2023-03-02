package pathfinder.model.v4;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import pathfinder.data.v4.ChildEntityDbo;
import pathfinder.data.v4.ChildEntitySummaryDbo;
import pathfinder.util.ListUtils;

public record ChildEntity(String optionId,
                          String condition,
                          String name,
                          Tags additionalTags,
                          List<Effect> effects,
                          List<Choice> choices) {

    public static ChildEntityBuilder builder() {
        return new ChildEntityBuilder();
    }

    public ChildEntitySummaryDbo toSummaryDbo() {
        return ChildEntitySummaryDbo.newBuilder()
                .setOptionId(optionId)
                .setCondition(condition)
                .setName(name)
                .addAllAdditionalTags(additionalTags.toDbos())
                .build();
    }

    public ChildEntityDbo toDbo() {
        return ChildEntityDbo.newBuilder()
                .setOptionId(optionId)
                .setCondition(condition)
                .setName(name)
                .addAllAdditionalTags(additionalTags.toDbos())
                .addAllEffects(ListUtils.mapList(effects, Effect::toDbo))
                .addAllChoices(ListUtils.mapList(choices, Choice::toDbo))
                .build();
    }

    public static class ChildEntityBuilder {
        private String optionId;
        private String name = "";
        private String condition = "";
        private final Tags additionalTags = Tags.of();
        private final List<Effect> effects = new ArrayList<>();
        private final List<Choice> choices = new ArrayList<>();

        private ChildEntityBuilder() {}

        public ChildEntityBuilder optionId(String optionId) {
            this.optionId = optionId;
            return this;
        }

        public ChildEntityBuilder condition(String condition) {
            this.condition = condition;
            return this;
        }

        public ChildEntityBuilder name(String name) {
            this.name = name;
            return this;
        }

        public ChildEntityBuilder additionalTags(Tags tags) {
            this.additionalTags.addAll(tags);
            return this;
        }

        public ChildEntityBuilder additionalTags(String... tag) {
            Arrays.stream(tag)
                    .map(Tag::of)
                    .forEach(this.additionalTags::add);
            return this;
        }

        public ChildEntityBuilder effect(Effect... effect) {
            this.effects.addAll(Arrays.asList(effect));
            return this;
        }

        public ChildEntityBuilder effects(Iterable<Effect> effects) {
            effects.forEach(this.effects::add);
            return this;
        }

        public ChildEntityBuilder choice(Choice... choice) {
            this.choices.addAll(Arrays.asList(choice));
            return this;
        }

        public ChildEntityBuilder choices(Iterable<Choice> choices) {
            choices.forEach(this.choices::add);
            return this;
        }

        public ChildEntity build() {
            return new ChildEntity(optionId, condition, name, additionalTags, effects, choices);
        }
    }
}
