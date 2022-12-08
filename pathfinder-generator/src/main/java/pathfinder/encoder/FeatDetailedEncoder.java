package pathfinder.encoder;

import java.util.ArrayList;
import java.util.List;
import logic.parse.Formula;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.data.v2.FeatDbo;
import pathfinder.data.v2.FeatOptionDbo;
import pathfinder.data.v2.FeatTypeDbo;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.model.Feat;
import pathfinder.model.Feat.Type;
import pathfinder.model.Id;
import pathfinder.model.Skills;
import pathfinder.model.Weapons;
import pathfinder.parser.db.WeaponType;
import pathfinder.util.FormulaBuilder;
import pathfinder.util.FormulaBuilder.AnyOfFormulaBuilder;

@Component
@RequiredArgsConstructor
@Slf4j
public class FeatDetailedEncoder implements Encoder<Feat, FeatDbo> {
    private final PrerequisiteParser prerequisiteParser;

    @Override
    public FeatDbo encode(Feat model) {

        String originalPrerequisiteFormula = prerequisiteParser.extractPrerequisites(model.asAbility());
        String prerequisiteFormula = originalPrerequisiteFormula;

        try {
            // Validate model
            Formula.parse(prerequisiteFormula).resolve();
        } catch (Exception e) {
            log.info("Failed to validate: {}", model.prerequisites());
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
                modifiedPrerequisiteFormula = modifiedPrerequisiteFormula.replace("@" + model.id(), "@" + model.id() + "#" + weaponType.id());

                FeatOptionDbo option = FeatOptionDbo.newBuilder()
                        .setId(model.id() + "#" + weaponType.id())
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
                                .setId(model.id() + "#" + weaponType.id())
                                .setName(weaponType.name())
                                .setPrerequisitesFormula(originalPrerequisiteFormula.replaceAll("selected_ranged_weapon", weaponType.id()))
                                .build();

                        options.add(option);
                    });
        }

        if (model.description().toLowerCase().contains("choose a skill")) {
            Skills.ALL
                    .forEach(skill -> {
                        FeatOptionDbo option = FeatOptionDbo.newBuilder()
                                .setId(model.id() + "#" + Id.parse(skill.id()).key)
                                .setName(skill.name())
                                .setPrerequisitesFormula(originalPrerequisiteFormula)
                                .build();

                        options.add(option);
                    });
        }

        if (options.size() > 0) {
            prerequisiteFormula = "";
        }

        if (model.id().equals("model:exotic_weapon_proficiency")) {
            Weapons.WEAPON_TYPES
                    .stream().filter(weaponType -> weaponType.requiredProficiency().equals(Weapons.EXOTIC))
                    .forEach(weaponType -> {
                        FeatOptionDbo option = FeatOptionDbo.newBuilder()
                                .setId(model.id() + "#" + weaponType.id())
                                .setName(weaponType.name())
                                .build();

                        options.add(option);
                    });
        }

        var types = extractFeatTypes(model);

        var dbo = FeatDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .setDescription(model.description())
                .addAllTypes(types)
                .setBenefit(model.benefit())
                .setNormal(model.normal())
                .setSpecial(model.special())
                .setNote(model.note())
                .setSource(model.source().code())
                .setTeamwork(model.teamwork())
                .setPrerequisites(model.prerequisites())
                .setPrerequisitesFormula(prerequisiteFormula)
                .addAllOptions(options);

        return dbo.build();
    }

    private static List<FeatTypeDbo> extractFeatTypes(Feat model) {
        List<Feat.Type> types = new ArrayList<>(model.types());
        if (model.teamwork()) {
            types.add(Type.TEAMWORK);
        }
        return convertFeatTypes(types);
    }

    private static List<FeatTypeDbo> convertFeatTypes(List<Feat.Type> types) {
        return types.stream()
                .map(FeatDetailedEncoder::convertFeatType)
                .toList();
    }

    private static FeatTypeDbo convertFeatType(Feat.Type type) {
        String name = "FEAT_TYPE_" + type.name();
        return FeatTypeDbo.valueOf(name);
    }
}
