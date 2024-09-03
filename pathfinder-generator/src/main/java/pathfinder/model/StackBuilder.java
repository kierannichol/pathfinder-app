package pathfinder.model;

public class StackBuilder extends AbstractComponentBuilder<StackBuilder> {

    public static StackBuilder copy(Stack stack) {
        return new StackBuilder()
                .addEffects(stack.effects())
                .addLinks(stack.links())
                .addChoices(stack.choices())
                .addFeatureModifications(stack.featureModifications());
    }

    public Stack build() {
        return new Stack(effects, links, choices, featureModifications);
    }

    public boolean isEmpty() {
        return effects.isEmpty() && links.isEmpty() && choices.isEmpty() && featureModifications.isEmpty();
    }
}
