package pathfinder.model;

import lombok.RequiredArgsConstructor;
import pathfinder.data.EffectDbo;
import pathfinder.data.EffectDbo.Builder;

@RequiredArgsConstructor(staticName = "create")
public class ConditionalEffect extends Effect {
    private final Effect effect;
    private final String conditionFormula;

    @Override
    public EffectDbo toDbo() {
        Builder dbo = effect.toDbo().toBuilder();
        dbo.setConditionFormula(conditionFormula);
        return dbo.build();
    }
}
