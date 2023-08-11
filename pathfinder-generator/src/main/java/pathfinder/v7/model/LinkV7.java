package pathfinder.v7.model;

import pathfinder.data.v6.LinkDbo;
import pathfinder.data.v6.LinkDbo.Builder;

public record LinkV7(String featureId, String conditionFormula) {

    public LinkDbo toDbo() {
        Builder dbo = LinkDbo.newBuilder()
                .setFeatureId(featureId);

        if (conditionFormula != null && !conditionFormula.isEmpty()) {
            dbo.setConditionFormula(conditionFormula);
        }

        return dbo.build();
    }
}
