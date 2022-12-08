package pathfinder.generator;

import com.google.protobuf.Message;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import pathfinder.data.v2.CharacterModifierDatabaseDbo;
import pathfinder.data.v2.CharacterModifierDetailedDbo;
import pathfinder.data.v2.CharacterModifierSummaryDbo;
import pathfinder.encoder.CharacterModifierDetailedEncoder;
import pathfinder.encoder.CharacterModifierSummaryEncoder;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.generator.encode.AbilityTypeEncoder;
import pathfinder.model.CharacterModifier;

public abstract class AbstractCharacterModifierDatabaseGenerator extends AbstractDatabaseGenerator<CharacterModifier, CharacterModifierSummaryDbo, CharacterModifierDetailedDbo> {

    @Autowired private CharacterModifierSummaryEncoder summaryEncoder;
    @Autowired private CharacterModifierDetailedEncoder detailedEncoder;

    @Autowired
    protected PrerequisiteParser prerequisiteParser;

    @Autowired
    protected AbilityTypeEncoder abilityTypeEncoder;

    @Override
    protected CharacterModifierSummaryDbo encodedSummary(CharacterModifier model) {
        return summaryEncoder.encode(model);
    }

    @Override
    protected CharacterModifierDetailedDbo encodedDetailed(CharacterModifier model,
            CharacterModifierSummaryDbo characterModifierSummaryDbo) {
        return detailedEncoder.encode(model);
    }

    @Override
    protected Message createSummaryDatabase(List<CharacterModifierSummaryDbo> characterModifierSummaryDbos) {
        return CharacterModifierDatabaseDbo.newBuilder()
                .addAllSummaries(characterModifierSummaryDbos)
                .build();
    }
}
