package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.data.v3.CategoryDbo;
import pathfinder.data.v3.EffectDbo;
import pathfinder.data.v3.EffectDbo.AdjustStateEffectDbo;
import pathfinder.data.v3.ModificationDatabaseDbo;
import pathfinder.data.v3.ModificationDetailsDbo;
import pathfinder.data.v3.ModificationSummaryDbo;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.model.Feat;
import pathfinder.model.Feat.Type;
import pathfinder.source.FeatSourceDatabase;
import pathfinder.util.NameUtils;

@Service("Feat Database Generator")
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
        return "feat";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "FeatDatabase";
    }

    @Override
    protected ModificationSummaryDbo encodedSummary(Feat model) {
        String prerequisiteFormula = prerequisiteParser.extractPrerequisites(model.asAbility());

        return ModificationSummaryDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .setType("feat")
                .setCategoryId(model.types().stream().findFirst().map(Type::ordinal).orElse(0))
                .setPrerequisiteFormula(prerequisiteFormula)
                .build();
    }

    @Override
    protected ModificationDetailsDbo encodedDetailed(Feat model, ModificationSummaryDbo summary) {
        return ModificationDetailsDbo.newBuilder()
                .setId(summary.getId())
                .setName(summary.getName())
                .setType(summary.getType())
                .setCategoryId(summary.getCategoryId())
                .setPrerequisiteFormula(summary.getPrerequisiteFormula())
                .setDescriptionText(Optional.ofNullable(model.description()).orElse(""))
                .setBenefitText(Optional.ofNullable(model.benefit()).orElse(""))
                .setSpecialText(Optional.ofNullable(model.special()).orElse(""))
                .setNormalText(Optional.ofNullable(model.normal()).orElse(""))
                .setNoteText(Optional.ofNullable(model.note()).orElse(""))
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
        List<CategoryDbo> categories = Stream.of(Type.COMBAT, Type.GENERAL, Type.METAMAGIC, Type.TEAMWORK)
                .map(type -> CategoryDbo.newBuilder()
                        .setId(type.ordinal())
                        .setName(NameUtils.enumToName(type))
                        .build())
                .toList();

        return ModificationDatabaseDbo.newBuilder()
                .setDatabaseId("feat")
                .addAllSummaries(modificationDetailsDbos)
                .addAllCategories(categories)
                .build();
    }
}
