package pathfinder.model;

import pathfinder.data.UnlinkDbo;
import pathfinder.data.UnlinkDbo.Builder;

public record Unlink(Id featureId, String conditionFormula) {

    public UnlinkDbo toDbo() {
        Builder dbo = UnlinkDbo.newBuilder()
                .setFeatureId(featureId.string());

        if (conditionFormula != null && !conditionFormula.isEmpty()) {
            dbo.setConditionFormula(conditionFormula);
        }

        return dbo.build();
    }
}
