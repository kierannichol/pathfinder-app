package pathfinder.generator;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.AttackModification;
import pathfinder.model.ItemOption;
import pathfinder.model.ItemOptionGroup;
import pathfinder.model.ItemOptionSet;
import pathfinder.model.OptionSetId;
import pathfinder.model.pathfinder.Material;
import pathfinder.model.pathfinder.OptionSets;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.StreamUtils;

@Component
public class WeaponItemOptionsProvider implements ItemOptionsProvider {

    @Override
    public Stream<ItemOptionSet> optionSets(SourceId sourceId) {
        if (!sourceId.equals(Sources.CORE)) {
            return Stream.empty();
        }

        return Stream.of(
                createWeaponEnhancementSet(OptionSets.SINGLE_WEAPON_ENHANCEMENT_BONUS, "single_weapon_enhancement"),
                createWeaponEnhancementSet(OptionSets.DOUBLE_WEAPON_ENHANCEMENT_BONUS, "double_weapon_enhancement"),
                createWeaponEnhancementSet(OptionSets.RANGED_WEAPON_ENHANCEMENT_BONUS, "ranged_weapon_enhancement"),
                createWeaponMaterialSet(OptionSets.LIGHT_WEAPON_MATERIAL, "light_weapon_material"),
                createWeaponMaterialSet(OptionSets.ONE_HANDED_WEAPON_MATERIAL, "1h_weapon_material"),
                createWeaponMaterialSet(OptionSets.TWO_HANDED_WEAPON_MATERIAL, "2h_weapon_material"),
                createWeaponMaterialSet(OptionSets.AMMUNITION_MATERIAL, "ammunition_material")
        );
    }

    private ItemOptionSet createWeaponEnhancementSet(OptionSetId optionSetId, String tag) {
        return ItemOptionSet.builder(optionSetId)
                .setMaxPoints(10)
                .setPointCurrencyCost(1, 2000)
                .setPointCurrencyCost(2, 8000)
                .setPointCurrencyCost(3, 18000)
                .setPointCurrencyCost(4, 32000)
                .setPointCurrencyCost(5, 50000)
                .setPointCurrencyCost(6, 72000)
                .setPointCurrencyCost(7, 98000)
                .setPointCurrencyCost(8, 128000)
                .setPointCurrencyCost(9, 162000)
                .setPointCurrencyCost(10, 200000)
                .addOptionGroup(ItemOptionGroup.builder()
                        .setName("Enhancement Bonus")
                        .addTag("weapon_enhancement")
                        .addTag(tag)
                        .setMaxSelectable(1)
                        .build())
                .addOptionGroup(ItemOptionGroup.builder()
                        .setName("Special Abilities")
                        .addTag(optionSetId == OptionSets.RANGED_WEAPON_ENHANCEMENT_BONUS
                                ? "ranged_weapon_special_ability"
                                : "melee_weapon_special_ability")
                        .build())
                .build();
    }

    private ItemOptionSet createWeaponMaterialSet(OptionSetId optionSetId, String tag) {
        return ItemOptionSet.builder(optionSetId)
                .addOptionGroup(ItemOptionGroup.builder()
                        .setName("Material")
                        .addTag(tag)
                        .setMaxSelectable(1)
                        .build())
                .build();
    }

    @Override
    public Stream<ItemOption> options(SourceId sourceId) {
        return StreamUtils.concat(List.of(
                materials(sourceId),
                enhancements(sourceId)
        ));
    }

    private Stream<ItemOption> enhancements(SourceId sourceId) {
        if (!sourceId.equals(Sources.CORE)) {
            return Stream.empty();
        }

        List<ItemOption> options = new ArrayList<>();

        options.add(ItemOption.builder("weapon_option:masterwork", sourceId)
                .setName("Masterwork")
                .setBaseNamePrefix("Masterwork")
                .addTag("single_weapon_enhancement")
                .setCurrencyCostBase(300)
                .build());

        options.add(ItemOption.builder("double_weapon_option:masterwork", sourceId)
                .setName("Masterwork")
                .setBaseNamePrefix("Masterwork")
                .addTag("double_weapon_enhancement")
                .setCurrencyCostBase(600)
                .build());

        for (int i = 1; i <= 5; i++) {
            var option = ItemOption.builder("weapon_option:p" + i, sourceId)
                    .setName("+" + i)
                    .setBaseNamePostfix("+" + i)
                    .addTag("weapon_enhancement")
                    .setPointCost(i)
                    .setAttackMod(new AttackModification("" + i, "" + i))
                    .addStat("weapon:enhancement", i)
                    .build();
            options.add(option);
        }

        return options.stream();
    }

    private Stream<ItemOption> materials(SourceId sourceId) {
        List<ItemOption> options = new ArrayList<>();

        for (Material material : Material.ALL_MATERIALS) {
            if (!sourceId.equals(material.sourceId())) {
                continue;
            }
            material.ifAmmunitionCost(cost -> options.add(createMaterialOption(material, "ammunition_material", cost)));
            material.ifLightWeaponCost(cost -> options.add(createMaterialOption(material, "light_weapon_material", cost)));
            material.ifOneHandedCost(cost -> options.add(createMaterialOption(material, "1h_weapon_material", cost)));
            material.ifTwoHandedWeaponCost(cost -> options.add(createMaterialOption(material, "2h_weapon_material", cost)));
            material.ifDoubleWeaponCost(cost -> options.add(createMaterialOption(material, "2h_weapon_material", cost)));
        }

        return options.stream();
    }

    private ItemOption createMaterialOption(Material material, String tag, double baseCost) {
        String code = tag + "_option:" + NameToIdConverter.partialId(material.name()).key;
        ItemOption.Builder builder = ItemOption.builder(code, material.sourceId())
                .setName(material.name())
                .setBaseNamePrefix(material.name())
                .addTag(tag)
                .setCurrencyCostBase(baseCost);
        material.ifWeightCost(builder::setCurrencyCostByWeight);
        return builder.build();
    }
}
