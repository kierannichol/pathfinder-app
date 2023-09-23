package pathfinder.model;

import pathfinder.data.FeatureSelectChoiceCategoryDbo;

public record FeatureSelectCategory(String label, String tag) {

    public FeatureSelectChoiceCategoryDbo toDbo() {
        return FeatureSelectChoiceCategoryDbo.newBuilder()
                .setLabel(label)
                .setTag(tag)
                .build();
    }
}
