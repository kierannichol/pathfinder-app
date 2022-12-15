package pathfinder.generator;

import com.google.protobuf.Message;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import pathfinder.data.v3.ModificationDatabaseDbo;
import pathfinder.data.v3.ModificationDetailsDbo;
import pathfinder.data.v3.ModificationSummaryDbo;
import pathfinder.generator.encode.AbilityEncoder;
import pathfinder.model.Ability;

public abstract class AbstractAbilityDatabaseGenerator extends AbstractDatabaseGenerator<Ability, ModificationSummaryDbo, ModificationDetailsDbo> {

    @Autowired
    protected AbilityEncoder abilityEncoder;

    @Override
    protected ModificationSummaryDbo encodedSummary(Ability model) {
        return abilityEncoder.encodeSummary(model, getRelativeOutputPath());
    }

    @Override
    protected ModificationDetailsDbo encodedDetailed(Ability model, ModificationSummaryDbo summary) {
        return abilityEncoder.encodeDetails(model, getRelativeOutputPath());
    }

    @Override
    protected Message createSummaryDatabase(List<ModificationSummaryDbo> summaries) {
        return ModificationDatabaseDbo.newBuilder()
                .setDatabaseId(getRelativeOutputPath())
                .addAllSummaries(summaries)
                .build();
    }
}
