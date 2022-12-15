package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.data.v3.CategoryDbo;
import pathfinder.data.v3.EffectDbo;
import pathfinder.data.v3.EffectDbo.AdjustStateEffectDbo;
import pathfinder.data.v3.ModificationDatabaseDbo;
import pathfinder.data.v3.ModificationDetailsDbo;
import pathfinder.data.v3.ModificationSummaryDbo;
import pathfinder.generator.encode.EffectsEncoder;
import pathfinder.model.CharacterClass;
import pathfinder.model.v3.Effects;
import pathfinder.model.v3.Id;
import pathfinder.source.ClassSourceDatabase;
import pathfinder.util.NameUtils;

@Service("Class Database Generator")
@RequiredArgsConstructor
public class ClassDatabaseGenerator extends
        AbstractDatabaseGenerator<CharacterClass, ModificationSummaryDbo, ModificationDetailsDbo> {
    private final ClassSourceDatabase classSourceDatabase;
    private final EffectsEncoder effectsEncoder;

    @Override
    protected Stream<CharacterClass> streamModels() throws IOException {
        return classSourceDatabase.streamClasses();
    }

    @Override
    protected String getRelativeOutputPath() {
        return "class";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "ClassDatabase";
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
                .setType("class")
                .setCategoryId(model.type().ordinal())
                .setName(model.name())
                .addAllChildren(children)
                .build();
    }

    @Override
    protected ModificationDetailsDbo encodedDetailed(CharacterClass model,
            ModificationSummaryDbo summary) {
        Effects effects = new Effects();
        Set<ModificationDetailsDbo> children = new HashSet<>();

        Id classId = Id.parse(model.id());

        effects.setState(0, "class_1", model.id());

        switch (model.id()) {
            case "class:sorcerer":
                effects.selectChoice(1, "sorcerer_bloodline", "level1:sorcerer:bloodline:0", "Bloodline", "sorcerer_bloodline/*");
                break;
        }

        for (int i = 1; i <= 20; i++) {
            effects.adjustState(i, model.id(), 1);
        }

        for (int i = 1; i <= 20; i += 2) {
            effects.selectChoice(i,
                    "feat",
                    "level%d:feat".formatted(i),
                    "Feat",
                    "feat/*");
        }

        model.skills().forEach(skill -> effects.setState(0, "trained:" + skill.id(), 1));

        model.levels().forEach(level -> {

            effects.setState(level.level(), "bab", level.bab());
            effects.setState(level.level(), "fort:base", level.fortSave());
            effects.setState(level.level(), "ref:base", level.refSave());
            effects.setState(level.level(), "will:base", level.willSave());

            // TODO: data-drive this; default to 2
            effects.selectChoice(level.level(), "skill",
                    "level%d:skill:%d".formatted(level.level(), 0),
                    "Skill",
                    "skill/*");
            effects.selectChoice(level.level(), "skill",
                    "level%d:skill:%d".formatted(level.level(), 1),
                    "Skill",
                    "skill/*");

            level.specials().forEach(special -> {
                EffectDbo effect = EffectDbo.newBuilder()
                        .setAdjustState(AdjustStateEffectDbo.newBuilder()
                                .setLevel(level.level())
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

                effects.adjustState(level.level(), special.id(), 1);

                Id specialId = Id.parse(special.id());
                switch (specialId.key) {
                    case "rage_power" -> effects.selectChoice(level.level(), "rage_power",
                            "level%d:%s:rage_power".formatted(level.level(), classId.key),
                            "Rage Power",
                            "rage_power/*");
                    case "discovery" -> effects.selectChoice(level.level(), "alchemist_discovery",
                            "level%d:%s:alchemist_discovery".formatted(level.level(), classId.key),
                            "Discovery",
                            "alchemist_discovery/*");
                    case "magus_arcana" -> effects.selectChoice(level.level(), "magus_arcana",
                            "level%d:%s:magus_arcana".formatted(level.level(), classId.key),
                            "Magus Arcana",
                            "magusarcana/*");
                    case "rogue_talent" -> effects.selectChoice(level.level(), "rogue_talent",
                            "level%d:%s:rogue_talent".formatted(level.level(), classId.key),
                            "Rogue Talent",
                            "roguetalent/*");
                }
            });
        });

        return ModificationDetailsDbo.newBuilder()
                .setId(summary.getId())
                .setName(summary.getName())
                .setType(summary.getType())
                .setCategoryId(summary.getCategoryId())
                .setPrerequisiteFormula(summary.getPrerequisiteFormula())
                .setDescriptionText(model.shortDescription())
                .addAllEffects(effectsEncoder.encode(effects))
                .addAllChildren(children)
                .build();
    }

    @Override
    protected Message createSummaryDatabase(List<ModificationSummaryDbo> modificationSummaryDbos) {
        List<CategoryDbo> categories = Arrays.stream(CharacterClass.Type.values())
                .map(type -> CategoryDbo.newBuilder()
                        .setId(type.ordinal())
                        .setName(NameUtils.enumToName(type))
                        .build())
                .toList();

        return ModificationDatabaseDbo.newBuilder()
                .setDatabaseId("class")
                .addAllSummaries(modificationSummaryDbos)
                .addAllCategories(categories)
                .build();
    }
}
