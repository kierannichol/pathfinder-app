package pathfinder.v7.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;
import pathfinder.data.v6.ChoiceDbo;
import pathfinder.data.v6.FeatureSelectChoiceInputDbo;
import pathfinder.model.Id;

public record FeatureSelectByTagChoiceV7(String choiceId, String label, String type, List<String> optionTags, List<Id> featureIds) implements ChoiceV7 {

    @Override
    public ChoiceDbo toDbo() {
        return ChoiceDbo.newBuilder()
                .setChoiceId(choiceId)
                .setLabel(label)
                .setType(type)
                .setFeatureSelect(FeatureSelectChoiceInputDbo.newBuilder()
                        .addAllOptionTags(optionTags)
                        .addAllFeatureIds(mapList(featureIds, Id::string))
                        .build())
                .build();
    }
}
