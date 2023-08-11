package pathfinder.v7.model;

import static pathfinder.util.ListUtils.mapList;

import pathfinder.data.v6.ConditionalStackComponentDbo;

public record ConditionalComponentV7(String conditionFormula,
                                     Component component) {

    public ConditionalStackComponentDbo toDbo() {
        return ConditionalStackComponentDbo.newBuilder()
                .setConditionFormula(conditionFormula)
                .addAllEffects(mapList(component.effects(), EffectV7::toDbo))
                .addAllLinks(mapList(component.links(), LinkV7::toDbo))
                .addAllUnlinks(mapList(component.unlinks(), UnlinkV7::toDbo))
                .addAllChoices(mapList(component.choices(), ChoiceV7::toDbo))
                .build();
    }
}
