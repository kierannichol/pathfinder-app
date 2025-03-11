package pathfinder.generator.mapper;

import java.util.Optional;
import java.util.regex.Pattern;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.Attack;
import pathfinder.model.Chance;
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

    private static final Pattern DIE = Pattern.compile("(?<count>\\d+)d(?<sides>\\d+)");
    private static final Pattern CRIT_RANGE = Pattern.compile("(?<critrange>\\d+)?(-\\d+)?/?x(?<multiplier>\\d+)");

    public Stream<Item> flatMap(SourceId sourceId, ItemData item) {
        String name = item.name();
        name = StringUtils.capitalize(name);
        name = StringUtils.toSimpleName(name);

        var description = Description.create(item.description())
                .addSection("Destruction", item.destruction());

        ItemBuilder builder = Item.builder(sourceId, item.id().toString())
                .setName(name)
                .setDescription(description)
                .setCost(parsePrice(item.price()))
                .setWeight(item.weight().equals("–") ? 0.0 : Weight.parseWeight(item.weight()).toLbs())
                .addTag("item")
                .addTag(NameToIdConverter.partialId(item.item_type()).key)
                .addTag(NameToIdConverter.partialId(item.slot()).key)
                .addEffects(item.effects())
                .addStats(item.stats());

        if (item.attack_mod() != null) {
            builder.setAttackMod(item.attack_mod());
        }

        if ("Weapon".equals(item.item_type())) {
            builder.addTag("weapon");
            if (item.weapon_enhancement_bonus() == null) {
                if (item.weapon_type() != null && item.weapon_type().contains("Ranged")) {
                    builder.addOptionSet(OptionSets.RANGED_WEAPON_ENHANCEMENT_BONUS);
                } else if (item.weapon_groups() != null && item.weapon_groups().contains("Double")) {
                    builder.addOptionSet(OptionSets.DOUBLE_WEAPON_ENHANCEMENT_BONUS);
                } else {
                    builder.addOptionSet(OptionSets.SINGLE_WEAPON_ENHANCEMENT_BONUS);
                }

                description.addSection("Damage", item.weapon_damage());
                description.addSection("Damage Type", item.weapon_damage_type());
                description.addSection("Critical", item.weapon_crit_range());
                description.addSection("Proficiency", item.weapon_proficiency_group());
                description.addSection("Weapon Group", item.weapon_proficiency_group());
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

            int diceCount = 0;
            int diceSides = 0;
            int critRange = 20;
            int critMultiplier = 0;
            {
                var match = DIE.matcher(item.weapon_damage());
                if (match.find()) {
                    diceCount = Integer.parseInt(match.group("count"));
                    diceSides = Integer.parseInt(match.group("sides"));
                }
            }
            {
                var match = CRIT_RANGE.matcher(item.weapon_crit_range());
                if (match.find()) {
                    if (match.group("critrange") != null) {
                        critRange = Integer.parseInt(match.group("critrange"));
                    }
                    critMultiplier = Integer.parseInt(match.group("multiplier"));
                }
            }
            builder.addAction("Attack");
            builder.addStat("dice_count", diceCount);
            builder.addStat("dice_sides", diceSides);
            builder.addStat("crit_range", critRange);
            builder.addStat("crit_multiplier", critMultiplier);

            for (int i = 0; i < 5; i++) {
                Attack attack = new Attack("Attack #" + (i+1),
                        "@bab > " + (i * 5),
                        new Chance(
                                "1d20 + (@bab-%d) + @str_mod + @size_mod".formatted(i * 5),
                                "@target:ac"
                        ),
                        "%dd%d".formatted(diceCount, diceSides),
                        "0");

                builder.addAttack(attack);
            }

            if (item.weapon_type() != null) {
                switch (item.weapon_type()) {
                    case "Light":
                        builder.addStat("type:light", 1);
                        break;
                    case "One-Handed":
                        builder.addStat("type:one-handed", 1);
                        break;
                    case "Two-Handed":
                        builder.addStat("type:two-handed", 1);
                        break;
                    case "Ranged":
                        builder.addStat("type:ranged", 1);
                        break;
                    case "Ammunition":
                        builder.addStat("type:ammunition", 1);
                        break;
                    case "Double":
                        builder.addStat("type:double", 1);
                        break;
                }
            }
        }

        if ("Armor".equals(item.item_type())) {
            builder.addTag("armor");
            if (item.armor_enhancement_bonus() == null) {
                builder.addOptionSet(OptionSets.ARMOR_ENHANCEMENT_BONUS);
            }

            if (item.armor_special_material() == null) {
                if ("Light".equals(item.armor_type())) {
                    builder.addOptionSet(OptionSets.LIGHT_ARMOR_MATERIAL);
                } else if ("Medium".equals(item.armor_type())) {
                    builder.addOptionSet(OptionSets.MEDIUM_ARMOR_MATERIAL);
                    description.addSection("Speed", "20 ft./15 ft.");
                } else if ("Heavy".equals(item.armor_type())) {
                    builder.addOptionSet(OptionSets.HEAVY_ARMOR_MATERIAL);
                    description.addSection("Speed", "20 ft./15 ft.");
                } else if ("Shield".equals(item.armor_type())) {
                    builder.addOptionSet(OptionSets.SHIELD_ARMOR_MATERIAL);
                }
            }

            generateArmorStats(item, builder);

            description.addSection("Armor Bonus", signed(item.armor_bonus()));
            description.addSection("Max Dex Bonus", signed(item.armor_max_dex()));
            description.addSection("Armor Check Penalty", signed(item.armor_check_penalty()));
            description.addSection("Arcane Spell Failure Chance", item.arcane_spell_failure_chance() + "%");
        }

        if ("Shield".equals(item.item_type())) {
            if (item.armor_enhancement_bonus() == null) {
                builder.addOptionSet(OptionSets.ARMOR_ENHANCEMENT_BONUS);
            }

            if (item.armor_special_material() == null) {
                builder.addOptionSet(OptionSets.SHIELD_ARMOR_MATERIAL);
            }
        }

        return Stream.of(builder.build());
    }

    private void generateArmorStats(ItemData item, ItemBuilder builder) {
        builder.addStat("armor:bonus", item.armor_bonus());
        builder.addStat("armor:max_dex_bonus", item.armor_max_dex());
        builder.addStat("armor:armor_check_penalty", item.armor_check_penalty());
        builder.addStat("armor:arcane_spell_failure_chance", item.arcane_spell_failure_chance());
        if (StringUtils.notEmpty(item.armor_enhancement_bonus())) {
            int enhancementBonus = Integer.parseInt(item.armor_enhancement_bonus().substring(1));
            builder.addStat("armor:enhancement", enhancementBonus);
        }
    }

    private String signed(int integer) {
        return integer > 0 ? "+" + integer : Integer.toString(integer);
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
