package pathfinder.v7.model;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import pathfinder.v7.model.Component.ComponentBuilder;

public class StackBuilder extends AbstractComponentBuilder<StackBuilder> {
    private final List<ConditionalComponentV7> conditionalComponents = new ArrayList<>();

    public StackBuilder addConditionalComponent(String condition, Component component) {
        this.conditionalComponents.add(new ConditionalComponentV7(condition, component));
        return this;
    }

    public StackBuilder addConditionalComponent(String condition, Consumer<ComponentBuilder> builderAction) {
        var builder = new ComponentBuilder();
        builderAction.accept(builder);
        this.conditionalComponents.add(new ConditionalComponentV7(condition, builder.build()));
        return this;
    }

    public StackV7 build() {
        return new StackV7(effects, links, unlinks, choices, conditionalComponents);
    }
}
