package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;
import pathfinder.data.ChoiceDbo;
import pathfinder.data.FeatureSelectChoiceInputDbo;

public record FeatureSelectByTagChoice(String choiceId, String label, String type, List<String> optionTags, List<Id> featureIds, List<FeatureSelectCategory> categories, FeatureSelectSortBy sortBy, boolean repeating) implements
        Choice {

    public FeatureSelectByTagChoice(String choiceId, String label, String type, List<String> optionTags,
            List<Id> featureIds, List<FeatureSelectCategory> categories, FeatureSelectSortBy sortBy) {
        this(choiceId, label, type, optionTags, featureIds, categories, sortBy, false);
    }

    @Override
    public ChoiceDbo toDbo() {
        return ChoiceDbo.newBuilder()
                .setChoiceId(choiceId)
                .setLabel(label)
                .setType(type)
                .setRepeating(repeating)
                .setFeatureSelect(FeatureSelectChoiceInputDbo.newBuilder()
                        .addAllOptionTags(optionTags)
                        .addAllFeatureIds(mapList(featureIds, Id::string))
                        .addAllCategories(mapList(categories, FeatureSelectCategory::toDbo))
                        .setSortBy(sortBy.toDbo())
                        .build())
                .build();
    }
}
