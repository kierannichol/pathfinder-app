package pathfinder.v7.model;

import pathfinder.data.v6.UnlinkDbo;
import pathfinder.data.v6.UnlinkDbo.Builder;
import pathfinder.model.Id;

public record UnlinkV7(Id featureId, String conditionFormula) {

    public UnlinkDbo toDbo() {
        Builder dbo = UnlinkDbo.newBuilder()
                .setFeatureId(featureId.string());

        if (conditionFormula != null && !conditionFormula.isEmpty()) {
            dbo.setConditionFormula(conditionFormula);
        }

        return dbo.build();
    }
}
