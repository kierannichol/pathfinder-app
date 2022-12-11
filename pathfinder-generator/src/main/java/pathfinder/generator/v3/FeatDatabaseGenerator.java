package pathfinder.generator.v3;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.data.v3.EffectDbo;
import pathfinder.data.v3.EffectDbo.AdjustStateEffectDbo;
import pathfinder.data.v3.ModificationDatabaseDbo;
import pathfinder.data.v3.ModificationDetailsDbo;
import pathfinder.data.v3.ModificationSummaryDbo;
import pathfinder.generator.AbstractDatabaseGenerator;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.model.Feat;
import pathfinder.source.FeatSourceDatabase;

@Service
@RequiredArgsConstructor
public class FeatDatabaseGenerator extends AbstractDatabaseGenerator<Feat, ModificationSummaryDbo, ModificationDetailsDbo> {
    private final FeatSourceDatabase featSourceDatabase;
    private final PrerequisiteParser prerequisiteParser;

    @Override
    protected Stream<Feat> streamModels() throws IOException {
        return featSourceDatabase.streamFeats();
    }

    @Override
    protected String getRelativeOutputPath() {
        return "v3/feat";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "v3/FeatDatabase";
    }

    @Override
    protected ModificationSummaryDbo encodedSummary(Feat model) {
        String prerequisiteFormula = prerequisiteParser.extractPrerequisites(model.asAbility());

        return ModificationSummaryDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .setPrerequisiteFormula(prerequisiteFormula)
                .build();
    }

    @Override
    protected ModificationDetailsDbo encodedDetailed(Feat model, ModificationSummaryDbo summary) {
        return ModificationDetailsDbo.newBuilder()
                .setId(summary.getId())
                .setName(summary.getName())
                .setPrerequisiteFormula(summary.getPrerequisiteFormula())
                .setDescriptionText(model.description())
                .addEffects(EffectDbo.newBuilder()
                        .setAdjustState(AdjustStateEffectDbo.newBuilder()
                                .setLevel(1)
                                .setKey(model.id())
                                .setDelta(1)
                                .build())
                        .build())
                .build();
    }

    @Override
    protected Message createSummaryDatabase(List<ModificationSummaryDbo> modificationDetailsDbos) {
        return ModificationDatabaseDbo.newBuilder()
                .setDatabaseId("feat")
                .addAllSummaries(modificationDetailsDbos)
                .build();
    }
}
