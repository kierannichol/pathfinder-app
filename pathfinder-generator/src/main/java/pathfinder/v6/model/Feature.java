package pathfinder.v6.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.List;
import pathfinder.data.v6.FeatureDbo;
import pathfinder.data.v6.FeatureSummaryDbo;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Feature(Id id,
                      String name,
                      Description description,
                      Condition enabledCondition,
                      List<Effect> effects,
                      List<String> tags) implements NamedEntity {

    public static FeatureBuilder builder(String id) {
        return builder(Id.of(id));
    }

    public static FeatureBuilder builder(Id id) {
        return new FeatureBuilder(id);
    }

    public FeatureSummaryDbo toSummaryDbo() {
        return FeatureSummaryDbo.newBuilder()
                .setId(id.string())
                .setName(name)
                .setEnabledFormula(enabledCondition.formula())
                .addAllTags(tags)
                .build();
    }

    public FeatureDbo toDbo() {
        return FeatureDbo.newBuilder()
                .setId(id.string())
                .setName(name)
                .setEnabledFormula(enabledCondition.formula())
                .addAllTags(tags)
                .setDescription(description.toDbo())
                .addAllEffects(mapList(effects, Effect::toDbo))
                .build();
    }

    public static class FeatureBuilder {

        private final Id id;
        private String name = "";
        private Description description = Description.empty();
        private Condition enabledCondition = new Condition("");
        private final List<Effect> effects = new ArrayList<>();
        private final List<String> tags = new ArrayList<>();

        public FeatureBuilder(Id id) {
            this.id = id;
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
            this.enabledCondition = new Condition(formula);
            return this;
        }

        public FeatureBuilder addEffect(Effect effect) {
            this.effects.add(effect);
            return this;
        }

        public FeatureBuilder addTag(String tag) {
            this.tags.add(tag);
            return this;
        }

        public Feature build() {
            return new Feature(id,
                    name,
                    description,
                    enabledCondition,
                    new ArrayList<>(effects),
                    new ArrayList<>(tags));
        }
    }
}
