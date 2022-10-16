package pathfinder.generator;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import logic.parse.Formula;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.data.v2.FeatDatabaseDbo;
import pathfinder.data.v2.FeatDbo;
import pathfinder.data.v2.FeatOptionDbo;
import pathfinder.data.v2.FeatSummaryDbo;
import pathfinder.data.v2.FeatTypeDbo;
import pathfinder.generator.db.Feat;
import pathfinder.generator.db.Feat.Type;
import pathfinder.generator.db.FeatSourceDatabase;
import pathfinder.generator.db.Weapons;
import pathfinder.generator.db.parse.FeatPrerequisiteParser;
import pathfinder.generator.spring.OutputPathValue;
import pathfinder.parser.db.WeaponType;
import pathfinder.util.FileUtils;
import pathfinder.util.FormulaBuilder;
import pathfinder.util.FormulaBuilder.AnyOfFormulaBuilder;

@Slf4j
@RequiredArgsConstructor
@Service("Feat Database Generator")
public class FeatDatabaseGenerator extends AbstractDatabaseGenerator {
    private final FeatSourceDatabase featSourceDatabase;
    private final FeatPrerequisiteParser featPrerequisiteParser;

    @OutputPathValue private Path outputBasePath;

    @Override
    public void generate() throws IOException {
        List<Feat> feats = featSourceDatabase.stream()
                .toList();

        Path featDataPath = outputBasePath.resolve("feat");
        FileUtils.deleteDirectory(featDataPath);
        Files.createDirectory(featDataPath);

        var summaryDatabaseBuilder = FeatDatabaseDbo.newBuilder();
        for (Feat feat : feats) {

            String originalPrerequisiteFormula = featPrerequisiteParser.extractPrerequisites(feat);
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
                        if (weaponType.getRequiredProficiency().equals(Weapons.SIMPLE)) {
                            prerequisiteBuilder.or("@feat:simple_weapon_proficiency");
                        }
                        if (weaponType.getRequiredProficiency().equals(Weapons.MARTIAL)) {
                            prerequisiteBuilder.or("@feat:martial_weapon_proficiency");
                        }
                        if (weaponType.getRequiredProficiency().equals(Weapons.EXOTIC)) {
                            prerequisiteBuilder.or("@feat:exotic_weapon_proficiency#" + weaponType.getId());
                        }

                        modifiedPrerequisiteFormula = modifiedPrerequisiteFormula.replaceAll("@proficiency:selected_weapon", prerequisiteBuilder.build());
                    }


                    modifiedPrerequisiteFormula = modifiedPrerequisiteFormula.replaceAll("selected_weapon", weaponType.getId());

                    FeatOptionDbo option = FeatOptionDbo.newBuilder()
                            .setId(feat.id() + "#" + weaponType.getId())
                            .setName(weaponType.getName())
                            .setPrerequisitesFormula(modifiedPrerequisiteFormula)
                            .build();

                    options.add(option);
                }
            }

            if (prerequisiteFormula.contains("selected_ranged_weapon")) {
                Weapons.WEAPON_TYPES
                        .stream().filter(weaponType -> weaponType.getRange().isRanged())
                        .forEach(weaponType -> {
                            FeatOptionDbo option = FeatOptionDbo.newBuilder()
                                    .setId(feat.id() + "#" + weaponType.getId())
                                    .setName(weaponType.getName())
                                    .setPrerequisitesFormula(originalPrerequisiteFormula.replaceAll("selected_ranged_weapon", weaponType.getId()))
                                    .build();

                            options.add(option);
                        });
            }

            if (options.size() > 0) {
                prerequisiteFormula = "";
            }

            if (feat.id().equals("feat:exotic_weapon_proficiency")) {
                Weapons.WEAPON_TYPES
                        .stream().filter(weaponType -> weaponType.getRequiredProficiency().equals(Weapons.EXOTIC))
                        .forEach(weaponType -> {
                            FeatOptionDbo option = FeatOptionDbo.newBuilder()
                                    .setId(feat.id() + "#" + weaponType.getId())
                                    .setName(weaponType.getName())
                                    .build();

                            options.add(option);
                        });
            }

            var types = extractFeatTypes(feat);

            FeatDbo data = FeatDbo.newBuilder()
                    .setId(feat.id())
                    .setName(feat.name())
                    .setDescription(feat.description())
                    .addAllTypes(types)
                    .setBenefit(feat.benefit())
                    .setNormal(feat.normal())
                    .setSpecial(feat.special())
                    .setNote(feat.note())
                    .setSource(feat.source())
                    .setTeamwork(feat.teamwork())
                    .setPrerequisites(feat.prerequisites())
                    .setPrerequisitesFormula(prerequisiteFormula)
                    .addAllOptions(options)
                    .build();

            FeatSummaryDbo featSummary = FeatSummaryDbo.newBuilder()
                    .setId(feat.id())
                    .setName(feat.name())
                    .addAllTypes(types)
                    .setPrerequisites(feat.prerequisites())
                    .setPrerequisitesFormula(prerequisiteFormula)
                    .addAllOptions(options)
                    .build();

            summaryDatabaseBuilder.addFeatSummaries(featSummary);

            String featFileName = feat.id().replace(':', '_');
            write(data, featFileName, featDataPath);
        }

        var summaryDatabase = summaryDatabaseBuilder.build();

        write(summaryDatabase, "FeatDatabase", outputBasePath);
    }

    private static List<FeatTypeDbo> extractFeatTypes(Feat feat) {
        List<Feat.Type> types = new ArrayList<>(feat.types());
        if (feat.teamwork()) {
            types.add(Type.TEAMWORK);
        }
        return convertFeatTypes(types);
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
