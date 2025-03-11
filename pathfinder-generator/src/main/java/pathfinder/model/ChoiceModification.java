package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.List;
import pathfinder.data.ChoiceModificationDbo;

public record ChoiceModification(String targetChoiceId,
                                 List<String> tagsToAdd,
                                 List<String> tagsToRemove,
                                 List<Id> featuresToAdd,
                                 List<Id> featuresToRemove) {

    public static ChoiceModificationBuilder builder(String targetChoiceId) {
        return new ChoiceModificationBuilder(targetChoiceId);
    }

    public ChoiceModificationDbo toDbo() {
        return ChoiceModificationDbo.newBuilder()
                .setTargetChoiceId(targetChoiceId)
                .addAllTagsToAdd(tagsToAdd)
                .addAllTagsToRemove(tagsToRemove)
                .addAllFeaturesToAdd(mapList(featuresToAdd, Id::string))
                .addAllFeaturesToRemove(mapList(featuresToRemove, Id::string))
                .build();
    }

    public static class ChoiceModificationBuilder {
        private final String targetChoiceId;
        private final List<String> tagsToAdd = new ArrayList<>();
        private final List<String> tagsToRemove = new ArrayList<>();
        private final List<Id> featuresToAdd = new ArrayList<>();
        private final List<Id> featuresToRemove = new ArrayList<>();

        public ChoiceModificationBuilder(String targetChoiceId) {
            this.targetChoiceId = targetChoiceId;
        }

        public ChoiceModificationBuilder addsTag(String tag) {
            tagsToAdd.add(tag);
            return this;
        }

        public ChoiceModificationBuilder removesTag(String tag) {
            tagsToRemove.add(tag);
            return this;
        }

        public ChoiceModificationBuilder addsFeature(Id feature) {
            featuresToAdd.add(feature);
            return this;
        }

        public ChoiceModificationBuilder addsFeatures(List<Id> features) {
            featuresToAdd.addAll(features);
            return this;
        }

        public ChoiceModificationBuilder removesFeature(Id feature) {
            featuresToRemove.add(feature);
            return this;
        }

        public ChoiceModification build() {
            return new ChoiceModification(targetChoiceId, tagsToAdd, tagsToRemove, featuresToAdd, featuresToRemove);
        }
    }
}
