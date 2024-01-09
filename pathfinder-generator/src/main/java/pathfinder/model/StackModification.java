package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.List;
import pathfinder.data.StackModificationDbo;

public record StackModification(int targetStackCount, List<Id> featuresToAdd, List<Id> featuresToRemove) {

    public static StackModificationBuilder builder(int targetStackCount) {
        return new StackModificationBuilder(targetStackCount);
    }

    public StackModificationDbo toDbo() {
        return StackModificationDbo.newBuilder()
                .setTargetStackCount(targetStackCount)
                .addAllLinksToAdd(mapList(featuresToAdd, Id::string))
                .addAllLinksToRemove(mapList(featuresToRemove, Id::string))
                .build();
    }

    public static class StackModificationBuilder {
        private final int targetStackCount;
        private final List<Id> featuresToAdd = new ArrayList<>();
        private final List<Id> featuresToRemove = new ArrayList<>();

        private StackModificationBuilder(int targetStackCount) {
            this.targetStackCount = targetStackCount;
        }

        public StackModificationBuilder addsFeature(Id featureToAdd) {
            this.featuresToAdd.add(featureToAdd);
            return this;
        }

        public StackModificationBuilder removesFeature(Id featureToRemove) {
            this.featuresToRemove.add(featureToRemove);
            return this;
        }

        public StackModification build() {
            return new StackModification(targetStackCount,
                    featuresToAdd,
                    featuresToRemove);
        }
    }
}
