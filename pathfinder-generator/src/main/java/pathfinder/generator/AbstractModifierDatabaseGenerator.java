package pathfinder.generator;

import com.google.protobuf.Message;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import pathfinder.data.v2.ModifierDatabaseDbo;
import pathfinder.data.v2.ModifierDetailsDbo;
import pathfinder.data.v2.ModifierSummaryDbo;
import pathfinder.encoder.ModifierDetailsEncoder;
import pathfinder.encoder.ModifierSummaryEncoder;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.generator.encode.AbilityTypeEncoder;
import pathfinder.model.CharacterModifier;

public abstract class AbstractModifierDatabaseGenerator extends AbstractDatabaseGenerator<CharacterModifier, ModifierSummaryDbo, ModifierDetailsDbo> {

    @Autowired private ModifierSummaryEncoder summaryEncoder;
    @Autowired private ModifierDetailsEncoder detailedEncoder;

    @Autowired
    protected PrerequisiteParser prerequisiteParser;

    @Autowired
    protected AbilityTypeEncoder abilityTypeEncoder;

    protected abstract String getDatabaseId();

    @Override
    protected ModifierSummaryDbo encodedSummary(CharacterModifier model) {
        return summaryEncoder.encode(model);
    }

    @Override
    protected ModifierDetailsDbo encodedDetailed(CharacterModifier model,
            ModifierSummaryDbo characterModifierSummaryDbo) {
        return detailedEncoder.encode(model);
    }

    @Override
    protected Message createSummaryDatabase(List<ModifierSummaryDbo> summaries) {
        return ModifierDatabaseDbo.newBuilder()
                .setDatabaseId(getDatabaseId())
                .addAllSummaries(summaries)
                .build();
    }
}
