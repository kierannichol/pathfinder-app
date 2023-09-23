package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import pathfinder.data.ConditionalStackComponentDbo;

public record ConditionalComponent(String conditionFormula,
                                   Component component) {

    public ConditionalStackComponentDbo toDbo() {
        return ConditionalStackComponentDbo.newBuilder()
                .setConditionFormula(conditionFormula)
                .addAllEffects(mapList(component.effects(), Effect::toDbo))
                .addAllLinks(mapList(component.links(), Link::toDbo))
                .addAllUnlinks(mapList(component.unlinks(), Unlink::toDbo))
                .addAllChoices(mapList(component.choices(), Choice::toDbo))
                .build();
    }
}
