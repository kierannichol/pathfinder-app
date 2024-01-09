package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import pathfinder.data.FeatureModificationDbo;
import pathfinder.model.StackModification.StackModificationBuilder;

public record FeatureModification(Id targetFeatureId, List<StackModification> stackModifications) {

    public static FeatureModificationBuilder builder(Id targetFeatureId) {
        return new FeatureModificationBuilder(targetFeatureId);
    }

    public static FeatureModificationBuilder builder(String targetFeatureId) {
        return new FeatureModificationBuilder(Id.of(targetFeatureId));
    }

    public FeatureModificationDbo toDbo() {
        return FeatureModificationDbo.newBuilder()
                .setTargetFeatureId(targetFeatureId.string())
                .addAllStackModifications(mapList(stackModifications, StackModification::toDbo))
                .build();
    }

    public static class FeatureModificationBuilder {
        private final Id targetFeatureId;
        private final Map<Integer, StackModificationBuilder> stackModificationMap = new HashMap<>();

        private FeatureModificationBuilder(Id targetFeatureId) {
            this.targetFeatureId = targetFeatureId;
        }

        public StackModificationBuilder stack(int stackCount) {
            return stackModificationMap.computeIfAbsent(stackCount, StackModification::builder);
        }

        public FeatureModification build() {
            List<StackModification> stackModifications = new ArrayList<>();
            stackModificationMap.forEach((key, value) -> stackModifications.add(value.build()));
            return new FeatureModification(targetFeatureId, stackModifications);
        }
    }
}
