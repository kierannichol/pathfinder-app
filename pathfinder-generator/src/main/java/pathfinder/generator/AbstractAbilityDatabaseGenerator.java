package pathfinder.generator;

import com.google.protobuf.Message;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import pathfinder.data.v2.AbilityDataDbo;
import pathfinder.data.v2.AbilityDatabaseDbo;
import pathfinder.data.v2.AbilitySummaryDbo;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.generator.encode.AbilityTypeEncoder;
import pathfinder.model.Ability;

public abstract class AbstractAbilityDatabaseGenerator extends AbstractDatabaseGenerator<Ability, AbilitySummaryDbo, AbilityDataDbo> {

    @Autowired
    protected PrerequisiteParser prerequisiteParser;

    @Autowired
    protected AbilityTypeEncoder abilityTypeEncoder;

    @Override
    protected AbilitySummaryDbo encodedSummary(Ability ability) {
        String prerequisiteFormula = prerequisiteParser.extractPrerequisites(ability);

        return AbilitySummaryDbo.newBuilder()
                .setId(ability.id())
                .setName(ability.name())
                .setType(abilityTypeEncoder.encode(ability.type()))
                .setPrerequisitesFormula(prerequisiteFormula)
                .build();
    }

    @Override
    protected AbilityDataDbo encodedDetailed(Ability model, AbilitySummaryDbo summary) {
        return AbilityDataDbo.newBuilder()
                .setId(summary.getId())
                .setName(summary.getName())
                .setType(summary.getType())
                .setPrerequisitesFormula(summary.getPrerequisitesFormula())
                .setDescription(model.description())
                .build();
    }

    @Override
    protected Message createSummaryDatabase(List<AbilitySummaryDbo> abilitySummaryDbos) {
        return AbilityDatabaseDbo.newBuilder()
                .addAllAbilitySummaries(abilitySummaryDbos)
                .build();
    }
}
