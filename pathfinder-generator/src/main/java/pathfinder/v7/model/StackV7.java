package pathfinder.v7.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;
import pathfinder.data.v6.StackDbo;

public record StackV7(List<EffectV7> effects,
                      List<LinkV7> links,
                      List<UnlinkV7> unlinks,
                      List<ChoiceV7> choices,
                      List<ConditionalComponentV7> conditionalComponents) {

    public StackDbo toDbo() {
        return StackDbo.newBuilder()
                .addAllEffects(mapList(effects, EffectV7::toDbo))
                .addAllLinks(mapList(links, LinkV7::toDbo))
                .addAllUnlinks(mapList(unlinks, UnlinkV7::toDbo))
                .addAllChoices(mapList(choices, ChoiceV7::toDbo))
                .addAllConditionalComponents(mapList(conditionalComponents, ConditionalComponentV7::toDbo))
                .build();
    }
}
