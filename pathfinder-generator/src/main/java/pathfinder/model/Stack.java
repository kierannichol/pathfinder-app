package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;
import pathfinder.data.StackDbo;

public record Stack(List<Effect> effects,
                    List<Link> links,
                    List<Unlink> unlinks,
                    List<Choice> choices,
                    List<ConditionalComponent> conditionalComponents) {

    public StackDbo toDbo() {
        return StackDbo.newBuilder()
                .addAllEffects(mapList(effects, Effect::toDbo))
                .addAllLinks(mapList(links, Link::toDbo))
                .addAllUnlinks(mapList(unlinks, Unlink::toDbo))
                .addAllChoices(mapList(choices, Choice::toDbo))
                .addAllConditionalComponents(mapList(conditionalComponents, ConditionalComponent::toDbo))
                .build();
    }
}
