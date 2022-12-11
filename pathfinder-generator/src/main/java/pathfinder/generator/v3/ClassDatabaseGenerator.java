package pathfinder.generator.v3;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.data.v3.EffectDbo;
import pathfinder.data.v3.EffectDbo.AdjustStateEffectDbo;
import pathfinder.data.v3.EffectDbo.SetStateEffectDbo;
import pathfinder.data.v3.ModificationDatabaseDbo;
import pathfinder.data.v3.ModificationDetailsDbo;
import pathfinder.data.v3.ModificationSummaryDbo;
import pathfinder.generator.AbstractDatabaseGenerator;
import pathfinder.model.CharacterClass;
import pathfinder.source.ClassSourceDatabase;

@Service
@RequiredArgsConstructor
public class ClassDatabaseGenerator extends
        AbstractDatabaseGenerator<CharacterClass, ModificationSummaryDbo, ModificationDetailsDbo> {
    private final ClassSourceDatabase classSourceDatabase;

    @Override
    protected Stream<CharacterClass> streamModels() throws IOException {
        return classSourceDatabase.streamClasses();
    }

    @Override
    protected String getRelativeOutputPath() {
        return "v3/class";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "v3/ClassDatabase";
    }

    @Override
    protected ModificationSummaryDbo encodedSummary(CharacterClass model) {
        Set<ModificationSummaryDbo> children = new HashSet<>();

        model.levels().forEach(level -> {
            level.specials().forEach(special -> {
                children.add(ModificationSummaryDbo.newBuilder()
                        .setId(special.id())
                        .setName(special.name())
                        .build());
            });
        });

        return ModificationSummaryDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .addAllChildren(children)
                .build();
    }

    @Override
    protected ModificationDetailsDbo encodedDetailed(CharacterClass model,
            ModificationSummaryDbo summary) {
        List<EffectDbo> effects = new ArrayList<>();
        Set<ModificationDetailsDbo> children = new HashSet<>();

        model.levels().forEach(level -> {

            effects.add(EffectDbo.newBuilder()
                            .setSetState(SetStateEffectDbo.newBuilder()
                                    .setLevel(level.level())
                                    .setKey("bab")
                                    .setValue(level.bab())
                                    .build())
                    .build());

            effects.add(EffectDbo.newBuilder()
                    .setSetState(SetStateEffectDbo.newBuilder()
                            .setLevel(level.level())
                            .setKey("fort_save")
                            .setValue(level.fortSave())
                            .build())
                    .build());

            effects.add(EffectDbo.newBuilder()
                    .setSetState(SetStateEffectDbo.newBuilder()
                            .setLevel(level.level())
                            .setKey("reflex_save")
                            .setValue(level.refSave())
                            .build())
                    .build());

            effects.add(EffectDbo.newBuilder()
                    .setSetState(SetStateEffectDbo.newBuilder()
                            .setLevel(level.level())
                            .setKey("will_save")
                            .setValue(level.willSave())
                            .build())
                    .build());

            level.specials().forEach(special -> {
                EffectDbo effect = EffectDbo.newBuilder()
                        .setAdjustState(AdjustStateEffectDbo.newBuilder()
                                .setLevel(1)
                                .setKey(special.id())
                                .setDelta(1)
                                .build())
                        .build();

                children.add(ModificationDetailsDbo.newBuilder()
                                .setId(special.id())
                                .setName(special.name())
                                .setDescriptionText(special.description())
                                .addEffects(effect)
                        .build());

                effects.add(effect);
            });
        });

        return ModificationDetailsDbo.newBuilder()
                .setId(summary.getId())
                .setName(summary.getName())
                .setPrerequisiteFormula(summary.getPrerequisiteFormula())
                .setDescriptionText(model.shortDescription())
                .addAllEffects(effects)
                .addAllChildren(children)
                .build();
    }

    @Override
    protected Message createSummaryDatabase(List<ModificationSummaryDbo> modificationSummaryDbos) {
        return ModificationDatabaseDbo.newBuilder()
                .setDatabaseId("class")
                .addAllSummaries(modificationSummaryDbos)
                .build();
    }
}
