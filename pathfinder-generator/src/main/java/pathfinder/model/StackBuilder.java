package pathfinder.model;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import pathfinder.model.Component.ComponentBuilder;

public class StackBuilder extends AbstractComponentBuilder<StackBuilder> {
    private final List<ConditionalComponent> conditionalComponents = new ArrayList<>();

    public StackBuilder addConditionalComponent(String condition, Component component) {
        this.conditionalComponents.add(new ConditionalComponent(condition, component));
        return this;
    }

    public StackBuilder addConditionalComponent(String condition, Consumer<ComponentBuilder> builderAction) {
        var builder = new ComponentBuilder();
        builderAction.accept(builder);
        this.conditionalComponents.add(new ConditionalComponent(condition, builder.build()));
        return this;
    }

    public Stack build() {
        return new Stack(effects, links, unlinks, choices, conditionalComponents);
    }
}
