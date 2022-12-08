package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import logic.parse.Formula;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.data.v2.CharacterEffectDbo;
import pathfinder.data.v2.FeatDatabaseDbo;
import pathfinder.data.v2.FeatDbo;
import pathfinder.data.v2.FeatOptionDbo;
import pathfinder.data.v2.FeatSummaryDbo;
import pathfinder.data.v2.FeatTypeDbo;
import pathfinder.encoder.Encoder;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.model.CharacterEffect;
import pathfinder.model.Feat;
import pathfinder.model.Feat.Type;
import pathfinder.model.Id;
import pathfinder.model.Skills;
import pathfinder.model.Weapons;
import pathfinder.parser.db.WeaponType;
import pathfinder.source.FeatSourceDatabase;
import pathfinder.spring.ConditionalOnGeneratorEnabled;
import pathfinder.util.FormulaBuilder;
import pathfinder.util.FormulaBuilder.AnyOfFormulaBuilder;

@Slf4j
@RequiredArgsConstructor
@Service("Feat Database Generator")
@ConditionalOnGeneratorEnabled("feat")
public class FeatDatabaseGenerator extends AbstractDatabaseGenerator<Feat, FeatSummaryDbo, FeatDbo> {
    private final FeatSourceDatabase featSourceDatabase;
    private final PrerequisiteParser prerequisiteParser;
    private final Encoder<CharacterEffect, CharacterEffectDbo> effectEncoder;

    @Override
    protected Stream<Feat> streamModels() throws IOException {
        return featSourceDatabase.streamFeats()
                .filter(KNOWN_SOURCES)
                .filter(feat ->
                        !feat.types().contains(Type.UNKNOWN)
                        && !feat.types().contains(Type.STORY));
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
    protected FeatSummaryDbo encodedSummary(Feat feat) {
        String originalPrerequisiteFormula = prerequisiteParser.extractPrerequisites(feat.asAbility());
        String prerequisiteFormula = originalPrerequisiteFormula;

        try {
            // Validate feat
            Formula.parse(prerequisiteFormula).resolve();
        } catch (Exception e) {
            log.info("Failed to validate: {}", feat.prerequisites());
            log.info(prerequisiteFormula);
            e.printStackTrace();
            System.exit(0);
        }

        List<FeatOptionDbo> options = new ArrayList<>();
        if (prerequisiteFormula.contains("selected_weapon")) {
            for (WeaponType weaponType : Weapons.WEAPON_TYPES) {
                String modifiedPrerequisiteFormula = originalPrerequisiteFormula;
                if (originalPrerequisiteFormula.contains("@proficiency:selected_weapon")) {
                    AnyOfFormulaBuilder prerequisiteBuilder = FormulaBuilder.anyOf();
                    if (weaponType.requiredProficiency().equals(Weapons.SIMPLE)) {
                        prerequisiteBuilder.or("@feat:simple_weapon_proficiency");
                    }
                    if (weaponType.requiredProficiency().equals(Weapons.MARTIAL)) {
                        prerequisiteBuilder.or("@feat:martial_weapon_proficiency");
                    }
                    if (weaponType.requiredProficiency().equals(Weapons.EXOTIC)) {
                        prerequisiteBuilder.or("@feat:exotic_weapon_proficiency#" + weaponType.id());
                    }

                    modifiedPrerequisiteFormula = modifiedPrerequisiteFormula.replaceAll("@proficiency:selected_weapon", prerequisiteBuilder.build());
                }

                modifiedPrerequisiteFormula = modifiedPrerequisiteFormula.replace("selected_weapon", weaponType.id());
                modifiedPrerequisiteFormula = modifiedPrerequisiteFormula.replace("@" + feat.id(), "@" + feat.id() + "#" + weaponType.id());

                FeatOptionDbo option = FeatOptionDbo.newBuilder()
                        .setId(feat.id() + "#" + weaponType.id())
                        .setName(weaponType.name())
                        .setPrerequisitesFormula(modifiedPrerequisiteFormula)
                        .build();

                options.add(option);
            }
        }

        if (prerequisiteFormula.contains("selected_ranged_weapon")) {
            Weapons.WEAPON_TYPES
                    .stream().filter(weaponType -> weaponType.range().isRanged())
                    .forEach(weaponType -> {
                        FeatOptionDbo option = FeatOptionDbo.newBuilder()
                                .setId(feat.id() + "#" + weaponType.id())
                                .setName(weaponType.name())
                                .setPrerequisitesFormula(originalPrerequisiteFormula.replaceAll("selected_ranged_weapon", weaponType.id()))
                                .build();

                        options.add(option);
                    });
        }

        if (feat.description().toLowerCase().contains("choose a skill")) {
            Skills.ALL
                    .forEach(skill -> {
                        FeatOptionDbo option = FeatOptionDbo.newBuilder()
                                .setId(feat.id() + "#" + Id.parse(skill.id()).key)
                                .setName(skill.name())
                                .setPrerequisitesFormula(originalPrerequisiteFormula)
                                .build();

                        options.add(option);
                    });
        }

        if (options.size() > 0) {
            prerequisiteFormula = "";
        }

        if (feat.id().equals("feat:exotic_weapon_proficiency")) {
            Weapons.WEAPON_TYPES
                    .stream().filter(weaponType -> weaponType.requiredProficiency().equals(Weapons.EXOTIC))
                    .forEach(weaponType -> {
                        FeatOptionDbo option = FeatOptionDbo.newBuilder()
                                .setId(feat.id() + "#" + weaponType.id())
                                .setName(weaponType.name())
                                .build();

                        options.add(option);
                    });
        }

        var types = extractFeatTypes(feat);

        return FeatSummaryDbo.newBuilder()
                .setId(feat.id())
                .setName(feat.name())
                .addAllTypes(types)
                .setPrerequisites(feat.prerequisites())
                .setPrerequisitesFormula(prerequisiteFormula)
                .addAllOptions(options)
                .build();
    }

    @Override
    protected FeatDbo encodedDetailed(Feat feat, FeatSummaryDbo summary) {
        return FeatDbo.newBuilder()
                .setId(summary.getId())
                .setName(summary.getName())
                .addAllTypes(summary.getTypesList())
                .setPrerequisites(summary.getPrerequisites())
                .setPrerequisitesFormula(summary.getPrerequisitesFormula())
                .addAllOptions(summary.getOptionsList())
                .setDescription(feat.description())
                .setBenefit(feat.benefit())
                .setNormal(feat.normal())
                .setSpecial(feat.special())
                .setNote(feat.note())
                .setSource(feat.source().code())
                .setTeamwork(feat.teamwork())
                .addAllEffects(convertEffects(feat))
                .build();
    }

    @Override
    protected Message createSummaryDatabase(List<FeatSummaryDbo> featSummaryDbos) {
        return FeatDatabaseDbo.newBuilder()
                .addAllFeatSummaries(featSummaryDbos)
                .build();
    }

    private static List<FeatTypeDbo> extractFeatTypes(Feat model) {
        List<Feat.Type> types = new ArrayList<>(model.types());
        if (model.teamwork()) {
            types.add(Type.TEAMWORK);
        }
        return convertFeatTypes(types);
    }

    private List<CharacterEffectDbo> convertEffects(Feat model) {
        return effectEncoder.encodeList(model.effects());
    }

    private static List<FeatTypeDbo> convertFeatTypes(List<Feat.Type> types) {
        return types.stream()
                .map(FeatDatabaseGenerator::convertFeatType)
                .toList();
    }

    private static FeatTypeDbo convertFeatType(Feat.Type type) {
        String name = "FEAT_TYPE_" + type.name();
        return FeatTypeDbo.valueOf(name);
    }
}
