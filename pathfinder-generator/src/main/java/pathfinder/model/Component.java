package pathfinder.model;

import java.util.List;

public record Component(List<Effect> effects,
                        List<Link> links,
                        List<Unlink> unlinks,
                        List<Choice> choices) {

    public static class ComponentBuilder extends AbstractComponentBuilder<ComponentBuilder> {
        public Component build() {
            return new Component(effects, links, unlinks, choices);
        }
    }
}
