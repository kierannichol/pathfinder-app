package pathfinder.v7.model;

import java.util.List;

public record Component(List<EffectV7> effects,
                        List<LinkV7> links,
                        List<UnlinkV7> unlinks,
                        List<ChoiceV7> choices) {

    public static class ComponentBuilder extends AbstractComponentBuilder<ComponentBuilder> {
        public Component build() {
            return new Component(effects, links, unlinks, choices);
        }
    }
}
