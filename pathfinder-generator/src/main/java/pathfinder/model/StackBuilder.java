package pathfinder.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.function.Consumer;
import pathfinder.model.Component.ComponentBuilder;

public class StackBuilder extends AbstractComponentBuilder<StackBuilder> {
    private final List<ConditionalComponent> conditionalComponents = new ArrayList<>();

    public static StackBuilder copy(Stack stack) {
        return new StackBuilder()
                .addEffects(stack.effects())
                .addLinks(stack.links())
                .removeLinks(stack.unlinks())
                .addChoices(stack.choices())
                .addConditionalComponents(stack.conditionalComponents());
    }

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

    public StackBuilder addConditionalComponent(ConditionalComponent component) {
        this.conditionalComponents.add(component);
        return this;
    }

    public StackBuilder addConditionalComponents(Collection<ConditionalComponent> conditionalComponents) {
        this.conditionalComponents.addAll(conditionalComponents);
        return this;
    }

    public Stack build() {
        return new Stack(effects, links, unlinks, choices, conditionalComponents);
    }
}
