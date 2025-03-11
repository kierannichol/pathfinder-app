package pathfinder.model;

public class StackBuilder extends AbstractComponentBuilder<StackBuilder> {

    public static StackBuilder copy(Stack stack) {
        return new StackBuilder()
                .addEffects(stack.effects())
                .addLinks(stack.links())
                .addChoices(stack.choices())
                .addFeatureModifications(stack.featureModifications())
                .addChoiceModifications(stack.choiceModifications());
    }

    public Stack build() {
        return new Stack(effects, links, choices, featureModifications, choiceModifications);
    }

    public boolean isEmpty() {
        return effects.isEmpty()
                && links.isEmpty()
                && choices.isEmpty()
                && featureModifications.isEmpty()
                && choiceModifications.isEmpty();
    }
}
