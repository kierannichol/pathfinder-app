package pathfinder.model;

import pathfinder.data.ConditionalStackDbo;

public record ConditionalStack(String conditionFormula, Stack stack) {

    public ConditionalStackDbo toDbo() {
        var stackDbo = stack.toDbo();
        return ConditionalStackDbo.newBuilder()
                .setConditionFormula(conditionFormula)
                .addAllEffects(stackDbo.getEffectsList())
                .addAllLinks(stackDbo.getLinksList())
                .addAllUnlinks(stackDbo.getUnlinksList())
                .addAllChoices(stackDbo.getChoicesList())
                .build();
    }
}
