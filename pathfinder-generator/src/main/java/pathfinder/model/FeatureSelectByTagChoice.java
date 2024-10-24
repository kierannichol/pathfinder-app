package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import pathfinder.data.ChoiceDbo;
import pathfinder.data.FeatureSelectChoiceInputDbo;

public record FeatureSelectByTagChoice(String choiceId, String label, String type, List<String> optionTags, List<Id> featureIds, List<FeatureSelectCategory> categories, FeatureSelectSortBy sortBy, RepeatingChoiceType repeating) implements
        Choice {

    public static Builder builder(String id, String label, String type) {
        return new FeatureSelectByTagChoice.Builder(id, label, type);
    }

    public FeatureSelectByTagChoice(String choiceId, String label, String type, List<String> optionTags,
            List<Id> featureIds, List<FeatureSelectCategory> categories, FeatureSelectSortBy sortBy) {
        this(choiceId, label, type, optionTags, featureIds, categories, sortBy, RepeatingChoiceType.none());
    }

    @Override
    public ChoiceDbo toDbo() {
        return ChoiceDbo.newBuilder()
                .setChoiceId(choiceId)
                .setLabel(label)
                .setType(type)
                .setRepeating(repeating.toDbo())
                .setFeatureSelect(FeatureSelectChoiceInputDbo.newBuilder()
                        .addAllOptionTags(optionTags)
                        .addAllFeatureIds(mapList(featureIds, Id::string))
                        .addAllCategories(mapList(categories, FeatureSelectCategory::toDbo))
                        .setSortBy(sortBy.toDbo())
                        .build())
                .build();
    }

    public static class Builder {
        private final String id;
        private final String label;
        private final String type;
        private final List<String> optionTags = new ArrayList<>();
        private final List<Id> featureIds = new ArrayList<>();
        private final List<FeatureSelectCategory> categories = new ArrayList<>();
        private FeatureSelectSortBy sortBy = FeatureSelectSortBy.NONE;
        private RepeatingChoiceType repeating = RepeatingChoiceType.none();

        public Builder(String id, String label, String type) {
            this.id = id;
            this.label = label;
            this.type = type;
        }

        public Builder optionTag(String tag) {
            this.optionTags.add(tag);
            return this;
        }

        public Builder optionTags(Collection<String> tags) {
            this.optionTags.addAll(tags);
            return this;
        }

        public Builder featureId(Id featureId) {
            this.featureIds.add(featureId);
            return this;
        }

        public Builder featureIds(Collection<Id> featureIds) {
            this.featureIds.addAll(featureIds);
            return this;
        }

        public Builder category(String label, String tag) {
            this.categories.add(new FeatureSelectCategory(label, tag));
            return this;
        }

        public Builder sortBy(FeatureSelectSortBy sortBy) {
            this.sortBy = sortBy;
            return this;
        }

        public Builder repeating() {
            this.repeating = RepeatingChoiceType.unlimited();
            return this;
        }

        public Builder repeating(int max) {
            this.repeating = RepeatingChoiceType.maxLimit(max);
            return this;
        }

        public Builder repeating(String formula) {
            this.repeating = RepeatingChoiceType.calculatedLimit(formula);
            return this;
        }

        public FeatureSelectByTagChoice build() {
            return new FeatureSelectByTagChoice(id, label, type, optionTags, featureIds, categories, sortBy, repeating);
        }
    }
}
