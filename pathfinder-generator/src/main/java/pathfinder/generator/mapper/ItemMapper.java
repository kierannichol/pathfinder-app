package pathfinder.generator.mapper;

import java.util.Optional;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.Description;
import pathfinder.model.Item;
import pathfinder.model.Item.ItemBuilder;
import pathfinder.model.Weight;
import pathfinder.model.pathfinder.Armor;
import pathfinder.model.pathfinder.ItemData;
import pathfinder.model.pathfinder.OptionSets;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.WeaponType;
import pathfinder.model.pathfinder.Weapons;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.StringUtils;

@Component
@Slf4j
public class ItemMapper {

    public Stream<Item> flatMap(SourceId sourceId, ItemData item) {
        String name = item.name();
        name = StringUtils.capitalize(name);
        name = StringUtils.toSimpleName(name);

        ItemBuilder builder = Item.builder(sourceId, item.id().toString())
                .setName(name)
                .setDescription(Description.create(item.description())
                        .addSection("Destruction", item.destruction()))
                .setCost(parsePrice(item.price()))
                .setWeight(item.weight().equals("–") ? 0.0 : Weight.parseWeight(item.weight()).toLbs())
                .addTag("item")
                .addTag(NameToIdConverter.partialId(item.item_type()).key)
                .addTag(NameToIdConverter.partialId(item.slot()).key);

        if ("Weapon".equals(item.item_type())) {
            if (item.weapon_enhancement_bonus() == null) {
                if (item.weapon_type() != null && item.weapon_type().contains("Ranged")) {
                    builder.addOptionSet(OptionSets.RANGED_WEAPON_ENHANCEMENT_BONUS);
                }else if (item.weapon_groups() != null && item.weapon_groups().contains("Double")) {
                    builder.addOptionSet(OptionSets.DOUBLE_WEAPON_ENHANCEMENT_BONUS);
                } else {
                    builder.addOptionSet(OptionSets.SINGLE_WEAPON_ENHANCEMENT_BONUS);
                }
            }

            if (item.weapon_special_material() == null) {
                if (item.weapon_groups() != null && item.weapon_groups().contains("Double")) {
                    builder.addOptionSet(OptionSets.TWO_HANDED_WEAPON_MATERIAL);
                } else if ("Light".equals(item.weapon_type())) {
                    builder.addOptionSet(OptionSets.LIGHT_WEAPON_MATERIAL);
                } else if ("One-Handed".equals(item.weapon_type())) {
                    builder.addOptionSet(OptionSets.ONE_HANDED_WEAPON_MATERIAL);
                } else if ("Two-Handed".equals(item.weapon_type())) {
                    builder.addOptionSet(OptionSets.TWO_HANDED_WEAPON_MATERIAL);
                }
            }
        }

        if ("Armor".equals(item.item_type())) {
            if (item.armor_enhancement_bonus() == null) {
                builder.addOptionSet(OptionSets.ARMOR_ENHANCEMENT_BONUS);
            }

            if (item.armor_special_material() == null) {
                if ("Light".equals(item.armor_type())) {
                    builder.addOptionSet(OptionSets.LIGHT_ARMOR_MATERIAL);
                } else if ("Medium".equals(item.armor_type())) {
                    builder.addOptionSet(OptionSets.MEDIUM_ARMOR_MATERIAL);
                } else if ("Heavy".equals(item.armor_type())) {
                    builder.addOptionSet(OptionSets.HEAVY_ARMOR_MATERIAL);
                } else if ("Shield".equals(item.armor_type())) {
                    builder.addOptionSet(OptionSets.SHIELD_ARMOR_MATERIAL);
                }
            }
        }

        return Stream.of(builder.build());
    }

    private Optional<WeaponType> tryFindWeaponType(String name) {
        return Weapons.ALL_WEAPONS.stream()
                .filter(weaponType -> weaponType.name().replaceAll("\\W", "")
                        .equalsIgnoreCase(name.replaceAll("\\W", "")))
                .findFirst();
    }

    private Optional<Armor> tryFindArmorType(String name) {
        return Armor.ALL_ARMOR.stream()
                .filter(armor -> armor.name().replaceAll("\\W", "")
                        .equalsIgnoreCase(name.replaceAll("\\W", "")))
                .findFirst();
    }

    private double parsePrice(String priceText) {
        if (priceText.equals("–")) {
            return 0.0;
        }
        String[] parts = priceText.split("\\s+");
        if (parts.length == 1) {
            return Double.parseDouble(parts[0]);
        }

        double cost = Double.parseDouble(parts[0]);
        switch (parts[1].toLowerCase()) {
            case "gp":
                break;
            case "sp":
                cost /= 10.0;
                break;
            case "pp":
                cost *= 10.0;
                break;
            case "bp":
                cost /= 100.0;
                break;
            default:
                throw new IllegalArgumentException("Unknown currency: " + parts[1].toLowerCase());
        }

        return cost;
    }
}
