package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;
import pathfinder.data.StackDbo;

public record Stack(List<Effect> effects,
                    List<Link> links,
                    List<Choice> choices,
                    List<FeatureModification> featureModifications) {

    public StackDbo toDbo() {
        return StackDbo.newBuilder()
                .addAllEffects(mapList(effects, Effect::toDbo))
                .addAllLinks(mapList(links, Link::toDbo))
                .addAllChoices(mapList(choices, Choice::toDbo))
                .addAllFeatureModifications(mapList(featureModifications, FeatureModification::toDbo))
                .build();
    }
}
