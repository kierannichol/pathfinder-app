package pathfinder.model;

import pathfinder.data.LinkDbo;
import pathfinder.data.LinkDbo.Builder;

public record Link(String featureId, String conditionFormula) {

    public LinkDbo toDbo() {
        Builder dbo = LinkDbo.newBuilder()
                .setFeatureId(featureId);

        if (conditionFormula != null && !conditionFormula.isEmpty()) {
            dbo.setConditionFormula(conditionFormula);
        }

        return dbo.build();
    }
}
