package pathfinder.model.pathfinder;

import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(staticName = "of", access = AccessLevel.PRIVATE)
@Builder
public class Material {

    public static Material ADAMANTINE = Material.builder()
            .name("Adamantine")
            .source(Sources.CORE)
            .ammunitionCost(60.0)
            .lightWeaponCost(3000.0)
            .oneHandedWeaponCost(3000.0)
            .twoHandedWeaponCost(3000.0)
            .lightArmorCost(5000.0)
            .mediumArmorCost(10000.0)
            .heavyArmorCost(15000.0)
            .build();

    public static Material DARKWOOD = Material.builder()
            .name("Darkwood")
            .source(Sources.CORE)
            .weightCost(10.0)
            .build();

    public static Material MITHRAL = Material.builder()
            .name("Mithral")
            .source(Sources.CORE)
            .lightArmorCost(1000.0)
            .mediumArmorCost(4000.0)
            .heavyArmorCost(9000.0)
            .shieldCost(1000.0)
            .build();

    public static Material SILVER = Material.builder()
            .name("Silver")
            .source(Sources.CORE)
            .ammunitionCost(2.0)
            .lightWeaponCost(20.0)
            .oneHandedWeaponCost(90.0)
            .twoHandedWeaponCost(180.0)
            .build();

    public static final List<Material> ALL_MATERIALS = List.of(
            ADAMANTINE,
            DARKWOOD,
            MITHRAL,
            SILVER
    );

    private final String name;
    private final Double lightArmorCost;
    private final Double mediumArmorCost;
    private final Double heavyArmorCost;
    private final Double shieldCost;
    private final Double lightWeaponCost;
    private final Double oneHandedWeaponCost;
    private final Double twoHandedWeaponCost;
    private final Double ammunitionCost;
    private final Double weightCost;
    private final SourceId source;

    public String name() {
        return name;
    }

    public SourceId sourceId() {
        return source;
    }

    public void ifLightArmorCost(Consumer<Double> consumer) {
        if (lightArmorCost != null) consumer.accept(lightArmorCost);
    }

    public void ifMediumArmorCost(Consumer<Double> consumer) {
        if (mediumArmorCost != null) consumer.accept(mediumArmorCost);
    }

    public void ifHeavyArmorCost(Consumer<Double> consumer) {
        if (heavyArmorCost != null) consumer.accept(heavyArmorCost);
    }

    public void ifShieldCost(Consumer<Double> consumer) {
        if (shieldCost != null) consumer.accept(shieldCost);
    }

    public void ifLightWeaponCost(Consumer<Double> consumer) {
        if (lightWeaponCost != null) consumer.accept(lightWeaponCost);
    }

    public void ifOneHandedCost(Consumer<Double> consumer) {
        if (oneHandedWeaponCost != null) consumer.accept(oneHandedWeaponCost);
    }

    public void ifTwoHandedWeaponCost(Consumer<Double> consumer) {
        if (twoHandedWeaponCost != null) consumer.accept(twoHandedWeaponCost);
    }

    public void ifDoubleWeaponCost(Consumer<Double> consumer) {
        if (twoHandedWeaponCost != null) consumer.accept(twoHandedWeaponCost);
    }

    public void ifAmmunitionCost(Consumer<Double> consumer) {
        if (ammunitionCost != null) consumer.accept(ammunitionCost);
    }

    public void ifWeightCost(Consumer<Double> consumer) {
        if (weightCost != null) consumer.accept(weightCost);
    }

    public Optional<Double> costOf(ItemData item) {
        if (item.armor_enhancement_bonus() != null
            || item.armor_special_material() != null
            || item.weapon_enhancement_bonus() != null
            || item.weapon_special_material() != null) {
            return Optional.empty();
        }

        if (item.item_type().equals("Weapon")) {
            if (item.weapon_type().equals("Light") && lightWeaponCost != null) {
                return Optional.of(lightWeaponCost);
            }
            if (item.weapon_type().equals("One-Handed") && oneHandedWeaponCost != null) {
                return Optional.of(oneHandedWeaponCost);
            }
            if (item.weapon_type().equals("Two-Handed") && twoHandedWeaponCost != null) {
                return Optional.of(twoHandedWeaponCost);
            }
        }
        if (item.item_type().equals("Ammunition") && ammunitionCost != null) {
            return Optional.of(ammunitionCost);
        }
        if (item.item_type().equals("Armor")) {
            if (item.armor_type().equals("Light") && lightArmorCost != null) {
                return Optional.of(lightArmorCost);
            }
            if (item.armor_type().equals("Medium") && mediumArmorCost != null) {
                return Optional.of(mediumArmorCost);
            }
            if (item.armor_type().equals("Heavy") && heavyArmorCost != null) {
                return Optional.of(heavyArmorCost);
            }
        }
        if (item.item_type().equals("Shield") && shieldCost != null) {
            return Optional.of(shieldCost);
        }

        if (weightCost != null) {
            return Optional.of(Double.parseDouble(item.weight()) * weightCost);
        }
        return Optional.empty();
    }
}
