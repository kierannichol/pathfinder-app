package pathfinder.generator;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
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
public class ArmorItemOptionsProvider implements ItemOptionsProvider {

    @Override
    public Stream<ItemOptionSet> optionSets(SourceId sourceId) {
        if (!sourceId.equals(Sources.CORE)) {
            return Stream.empty();
        }

        return Stream.of(
                createArmorEnhancementSet(),
                createArmorMaterialSet(OptionSets.SHIELD_ARMOR_MATERIAL, "shield_material"),
                createArmorMaterialSet(OptionSets.LIGHT_ARMOR_MATERIAL, "light_armor_material"),
                createArmorMaterialSet(OptionSets.MEDIUM_ARMOR_MATERIAL, "medium_armor_material"),
                createArmorMaterialSet(OptionSets.HEAVY_ARMOR_MATERIAL, "heavy_armor_material")
        );
    }

    private ItemOptionSet createArmorEnhancementSet() {
        return ItemOptionSet.builder(OptionSets.ARMOR_ENHANCEMENT_BONUS)
                .setMaxPoints(10)
                .setPointCurrencyCost(1, 1000)
                .setPointCurrencyCost(2, 4000)
                .setPointCurrencyCost(3, 9000)
                .setPointCurrencyCost(4, 16000)
                .setPointCurrencyCost(5, 25000)
                .setPointCurrencyCost(6, 36000)
                .setPointCurrencyCost(7, 49000)
                .setPointCurrencyCost(8, 64000)
                .setPointCurrencyCost(9, 81000)
                .setPointCurrencyCost(10, 100000)
                .addOptionGroup(ItemOptionGroup.builder()
                        .setName("Enhancement Bonus")
                        .addTag("armor_enhancement")
                        .setMaxSelectable(1)
                        .build())
                .addOptionGroup(ItemOptionGroup.builder()
                        .setName("Special Abilities")
                        .addTag("armor_special_ability")
                        .build())
                .build();
    }

    private ItemOptionSet createArmorMaterialSet(OptionSetId optionSetId, String tag) {
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
                enhancement(sourceId),
                materials(sourceId)));
    }

    private Stream<ItemOption> enhancement(SourceId sourceId) {
        if (!sourceId.equals(Sources.CORE)) {
            return Stream.empty();
        }

        List<ItemOption> options = new ArrayList<>();

        options.add(ItemOption.builder("armor_option:masterwork", sourceId)
                .setName("Masterwork")
                .setBaseNamePrefix("Masterwork")
                .addTag("armor_enhancement")
                .setCurrencyCostBase(150)
                .build());

        for (int i = 1; i <= 5; i++) {
            var option = ItemOption.builder("armor_option:p" + i, sourceId)
                    .setName("+" + i)
                    .setBaseNamePostfix("+" + i)
                    .addTag("armor_enhancement")
                    .setPointCost(i)
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
            material.ifLightArmorCost(cost -> options.add(createMaterialOption(material, "light_armor_material", cost)));
            material.ifMediumArmorCost(cost -> options.add(createMaterialOption(material, "medium_armor_material", cost)));
            material.ifHeavyArmorCost(cost -> options.add(createMaterialOption(material, "heavy_armor_material", cost)));
            material.ifShieldCost(cost -> options.add(createMaterialOption(material, "shield_material", cost)));
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
