package pathfinder.model.pathfinder;

import static pathfinder.model.pathfinder.ArmorProficiency.HEAVY_ARMOR;
import static pathfinder.model.pathfinder.ArmorProficiency.LIGHT_ARMOR;
import static pathfinder.model.pathfinder.ArmorProficiency.MEDIUM_ARMOR;

import java.util.Set;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import pathfinder.model.Id;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.StringUtils;

@RequiredArgsConstructor(staticName = "of")
@Value
public class Armor {
    public static final Armor MITHRAL_SHIRT = Armor.of("Mithral Shirt", LIGHT_ARMOR);
    public static final Armor ARMORED_KILT = Armor.of("Armored Kilt", LIGHT_ARMOR);
    public static final Armor DANCING_SCARVES = Armor.of("Dancing Scarves", LIGHT_ARMOR);
    public static final Armor HARAMAKI = Armor.of("Haramaki", LIGHT_ARMOR);
    public static final Armor PADDED = Armor.of("Padded", LIGHT_ARMOR);
    public static final Armor QUILTED_CLOTH = Armor.of("Quilted Cloth", LIGHT_ARMOR);
    public static final Armor REINFORCED_TUNIC = Armor.of("Reinforced Tunic", LIGHT_ARMOR);
    public static final Armor SILKEN_CEREMONIAL_ARMOR = Armor.of("Silken Ceremonial", LIGHT_ARMOR);
    public static final Armor LAMELLAR_CUIRASS = Armor.of("Lamellar Cuirass", LIGHT_ARMOR);
    public static final Armor LEATHER = Armor.of("Leather", LIGHT_ARMOR);
    public static final Armor ROSEWOOD_ARMOR = Armor.of("Rosewood Armor", LIGHT_ARMOR);
    public static final Armor HELL_KNIGHT_LEATHER = Armor.of("Hell Knight Leather", LIGHT_ARMOR);
    public static final Armor HIDE_SHIRT = Armor.of("Hide Shirt", LIGHT_ARMOR);
    public static final Armor LEAF_ARMOR = Armor.of("Leaf Armor", LIGHT_ARMOR);
    public static final Armor PARADE_ARMOR = Armor.of("Parade Armor", LIGHT_ARMOR);
    public static final Armor SPIDER_SILK_BODYSUIT = Armor.of("Spider Silk Bodysuit", LIGHT_ARMOR);
    public static final Armor STUDDED_LEATHER = Armor.of("Studded Leather", LIGHT_ARMOR);
    public static final Armor WOODEN = Armor.of("Wooden", LIGHT_ARMOR);
    public static final Armor CHAIN_SHIRT = Armor.of("Chain Shirt", LIGHT_ARMOR);
    public static final Armor LAMELLAR_LEATHER = Armor.of("Lamellar (Leather)", LIGHT_ARMOR);

    public static final Armor ARMORED_COAT = Armor.of("Armored coat", MEDIUM_ARMOR);
    public static final Armor CHAIN_COAT = Armor.of("Chain coat", MEDIUM_ARMOR);
    public static final Armor HIDE = Armor.of("Hide", MEDIUM_ARMOR);
    public static final Armor ICE_COAT = Armor.of("Ice coat", MEDIUM_ARMOR);
    public static final Armor DO_MARU = Armor.of("Do-maru", MEDIUM_ARMOR);
    public static final Armor KIKKO = Armor.of("Kikko", MEDIUM_ARMOR);
    public static final Armor LAMELLAR_HORN = Armor.of("Lamellar (horn)", MEDIUM_ARMOR);
    public static final Armor SCALE_MAIL = Armor.of("Scale mail", MEDIUM_ARMOR);
    public static final Armor BREASTPLATE = Armor.of("Breastplate", MEDIUM_ARMOR);
    public static final Armor BREASTPLATE_AGILE = Armor.of("Breastplate (agile)", MEDIUM_ARMOR);
    public static final Armor CHAINMAIL = Armor.of("Chainmail", MEDIUM_ARMOR);
    public static final Armor FOUR_MIRROR = Armor.of("Four mirror", MEDIUM_ARMOR);
    public static final Armor LAMELLAR_STEEL = Armor.of("Lamellar (steel)", MEDIUM_ARMOR);
    public static final Armor MOUNTAIN_PATTERN = Armor.of("Mountain pattern", MEDIUM_ARMOR);

    public static final Armor BANDED_MAIL = Armor.of("Banded mail", HEAVY_ARMOR);
    public static final Armor FIELD_PLATE = Armor.of("Field plate", HEAVY_ARMOR);
    public static final Armor KUSARI_GUSOKU = Armor.of("Kusari gusoku", HEAVY_ARMOR);
    public static final Armor LAMELLAR_IRON = Armor.of("Lamellar (iron)", HEAVY_ARMOR);
    public static final Armor SPLINT_MAIL = Armor.of("Splint mail", HEAVY_ARMOR);
    public static final Armor TATAMI_DO = Armor.of("Tatami-do", HEAVY_ARMOR);
    public static final Armor FORTRESS_PLATE = Armor.of("Fortress plate", HEAVY_ARMOR);
    public static final Armor HALF_PLATE = Armor.of("Half-plate", HEAVY_ARMOR);
    public static final Armor HALF_PLATE_AGILE = Armor.of("Half-plate (agile)", HEAVY_ARMOR);
    public static final Armor HELL_KNIGHT_HALF_PLATE = Armor.of("Hell Knight half-plate", HEAVY_ARMOR);
    public static final Armor LAMELLAR_STONE_COAT = Armor.of("Lamellar (stone coat)", HEAVY_ARMOR);
    public static final Armor O_YOROI = Armor.of("O-yoroi", HEAVY_ARMOR);
    public static final Armor FULL_PLATE = Armor.of("Full plate", HEAVY_ARMOR);
    public static final Armor GRAY_MAIDEN_PLATE = Armor.of("Gray Maiden plate", HEAVY_ARMOR);
    public static final Armor HELL_KNIGHT_PLATE = Armor.of("Hell Knight plate", HEAVY_ARMOR);
    public static final Armor STONEPLATE = Armor.of("Stoneplate", HEAVY_ARMOR);

    public static final Armor BUCKLER = Armor.of("Buckler", ArmorProficiency.BUCKLER);
    public static final Armor KLAR = Armor.of("Klar", ArmorProficiency.LIGHT_SHIELD);
    public static final Armor MADU_LEATHER = Armor.of("Madu, leather", ArmorProficiency.LIGHT_SHIELD);
    public static final Armor MADU_STEEL = Armor.of("Madu, steel", ArmorProficiency.LIGHT_SHIELD);
    public static final Armor SHIELD_LIGHT_STEEL = Armor.of("Shield, light steel", ArmorProficiency.LIGHT_SHIELD);
    public static final Armor SHIELD_LIGHT_STEEL_QUICKDRAW = Armor.of("Shield, light steel (quickdraw)", ArmorProficiency.LIGHT_SHIELD);
    public static final Armor SHIELD_LIGHT_WOODEN = Armor.of("Shield, light wooden", ArmorProficiency.LIGHT_SHIELD);
    public static final Armor SHIELD_LIGHT_WOODEN_QUICKDRAW = Armor.of("Shield, light wooden (quickdraw)", ArmorProficiency.LIGHT_SHIELD);
    public static final Armor SHIELD_HEAVY_STEEL = Armor.of("Shield, heavy steel", ArmorProficiency.HEAVY_SHIELD);
    public static final Armor SHIELD_HEAVY_WOODEN = Armor.of("Shield, heavy wooden", ArmorProficiency.HEAVY_SHIELD);
    public static final Armor SHIELD_TOWER = Armor.of("Shield, tower", ArmorProficiency.TOWER_SHIELD);
    public static final Armor SNARLSHIELD_STEEL = Armor.of("Snarlshield, steel", ArmorProficiency.HEAVY_SHIELD);
    public static final Armor SNARLSHIELD_WOODEN = Armor.of("Snarlshield, wooden", ArmorProficiency.HEAVY_SHIELD);
    public static final Armor WAR_SHIELD_DWARVEN = Armor.of("War-shield, dwarven", ArmorProficiency.HEAVY_SHIELD);

    public static final Set<ArmorProficiency> PROFICIENCIES = Set.of(LIGHT_ARMOR, MEDIUM_ARMOR, HEAVY_ARMOR);

    public static final Set<Armor> ALL_ARMOR = Set.of(
            MITHRAL_SHIRT,
            ARMORED_COAT,
            CHAIN_COAT,
            HIDE,
            ICE_COAT,
            DO_MARU,
            KIKKO,
            LAMELLAR_HORN,
            SCALE_MAIL,
            BREASTPLATE,
            BREASTPLATE_AGILE,
            CHAINMAIL,
            FOUR_MIRROR,
            LAMELLAR_STEEL,
            MOUNTAIN_PATTERN,
            BANDED_MAIL,
            FIELD_PLATE,
            KUSARI_GUSOKU,
            LAMELLAR_IRON,
            SPLINT_MAIL,
            TATAMI_DO,
            FORTRESS_PLATE,
            HALF_PLATE,
            HALF_PLATE_AGILE,
            HELL_KNIGHT_HALF_PLATE,
            LAMELLAR_STONE_COAT,
            O_YOROI,
            FULL_PLATE,
            GRAY_MAIDEN_PLATE,
            HELL_KNIGHT_PLATE,
            STONEPLATE,
            BUCKLER,
            KLAR,
            MADU_LEATHER,
            MADU_STEEL,
            SHIELD_LIGHT_STEEL,
            SHIELD_LIGHT_STEEL_QUICKDRAW,
            SHIELD_LIGHT_WOODEN,
            SHIELD_LIGHT_WOODEN_QUICKDRAW,
            SHIELD_HEAVY_STEEL,
            SHIELD_HEAVY_WOODEN,
            SHIELD_TOWER,
            SNARLSHIELD_STEEL,
            SNARLSHIELD_WOODEN,
            WAR_SHIELD_DWARVEN,
            ARMORED_KILT,
            DANCING_SCARVES,
            HARAMAKI,
            PADDED,
            QUILTED_CLOTH,
            REINFORCED_TUNIC,
            SILKEN_CEREMONIAL_ARMOR,
            LAMELLAR_CUIRASS,
            LEATHER,
            ROSEWOOD_ARMOR,
            HELL_KNIGHT_LEATHER,
            HIDE_SHIRT,
            LEAF_ARMOR,
            PARADE_ARMOR,
            SPIDER_SILK_BODYSUIT,
            STUDDED_LEATHER,
            WOODEN,
            CHAIN_SHIRT,
            LAMELLAR_LEATHER
    );

    Id.Key id;
    String name;
    ArmorProficiency requiredProficiency;

    public static Armor of(String name, ArmorProficiency requiredProficiency) {
        String simpleName = formatName(name);
        return new Armor(NameToIdConverter.armorId(simpleName), simpleName, requiredProficiency);
    }

    private static String formatName(String originalName) {
        String simpleName = StringUtils.toSimpleName(originalName);
        simpleName = StringUtils.capitalize(simpleName);
        return simpleName;
    }
}
