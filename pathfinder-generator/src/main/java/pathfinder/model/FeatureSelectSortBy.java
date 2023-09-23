package pathfinder.model;

import pathfinder.data.FeatureSelectChoiceSortByDbo;

public enum FeatureSelectSortBy {
    NONE,
    NAME;

    public FeatureSelectChoiceSortByDbo toDbo() {
        return FeatureSelectChoiceSortByDbo.forNumber(ordinal());
    }
}
