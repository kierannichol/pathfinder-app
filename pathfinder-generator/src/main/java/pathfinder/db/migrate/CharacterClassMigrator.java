package pathfinder.db.migrate;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import lombok.extern.slf4j.Slf4j;
import lombok.val;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.pathfinder.ArmorProficiency;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.CharacterClass.CharacterClassBuilder;
import pathfinder.model.pathfinder.CharacterClassLegacy;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Feature.FeatureBuilder;
import pathfinder.model.pathfinder.SpellCount;
import pathfinder.model.pathfinder.WeaponProficiency;
import pathfinder.model.pathfinder.WeaponType;
import pathfinder.model.pathfinder.Weapons;

@Component
@Slf4j
public class CharacterClassMigrator extends AbstractMigrator {
    private static final String VOWELS = "aeiouAEIOU";
    private static final List<SpellCount> NO_SPELLS = List.of();

    public void migrate() {
        List<CharacterClassLegacy> classList = loadAll("db/class", CharacterClassLegacy.class).toList();
        for (CharacterClassLegacy characterClass : classList) {
            var modified = migrateCharacterClass(characterClass);
            save("class/" + characterClass.id().key + ".yml", modified);
        }
    }

    private CharacterClass migrateCharacterClass(CharacterClassLegacy original) {
        var modifiedClass = CharacterClass.builder(original);

        fixProficiencies(modifiedClass);

        String classKey = original.id().key;
        String className = original.name();
        var spellsPerDay = spellsPerDayFormula(original.id());
        spellsPerDay.stream().mapToInt(SpellCount::firstClassLevel).min().ifPresent(firstClassLevel -> {
            FeatureBuilder spellCastingFeature = Feature.builder()
                    .id("ability:spellcasting#%s".formatted(classKey))
                    .name("Spell Casting (%s)".formatted(className))
                    .source(original.source())
                    .description("%s can cast spells.".formatted(className));

            spellsPerDay.forEach(spd -> spellCastingFeature.addEffect("SET trait:level_%d_spells_per_day#%s %s".formatted(spd.spellLevel(), classKey, spd.formula())));

            modifiedClass.removeClassFeatureIf(feature -> feature.id().key.equals("spellcasting"));

            modifiedClass.addClassFeature(spellCastingFeature);
            modifiedClass.level(firstClassLevel)
                    .removeClassFeatureIf(id -> id.key.equals("spellcasting"))
                    .addClassFeatureId(spellCastingFeature.id());
        });

        return modifiedClass.build();
    }

    private SpellCount buildSpellCountFormula(Id classId, int spellLevel, int startingLevel, int startingCount, List<Integer> incrementLevels) {
        StringBuilder builder = new StringBuilder();
        builder.append(startingCount);
        for (Integer level : incrementLevels) {
            builder.append("+if(@CLASS_ID>%d,1,0)".formatted(level-1));
        }

        val spellCountFormula = (startingLevel >1
               ? "if(@CLASS_ID>=%d,%s,null)".formatted(startingLevel, builder.toString())
               : builder.toString()).replace("CLASS_ID", classId.string());

        return new SpellCount(spellLevel, startingLevel, spellCountFormula);
    }

    private List<SpellCount> spellsPerDayFormula(Id classId) {
        var SPELLS_PALADIN = List.of(
                buildSpellCountFormula(classId, 1, 4, 0, List.of(5, 9, 13, 17)),
                buildSpellCountFormula(classId, 2, 7, 0, List.of(8, 12, 16, 20)),
                buildSpellCountFormula(classId, 3, 10, 0, List.of(11, 15, 19)),
                buildSpellCountFormula(classId, 4, 13, 0, List.of(14, 18, 20)));

        var SPELLS_1_4_MAX_4 = List.of(
                buildSpellCountFormula(classId, 1, 4, 1, List.of(9, 13, 17)),
                buildSpellCountFormula(classId, 2, 7, 1, List.of(12, 16, 20)),
                buildSpellCountFormula(classId, 3, 10, 1, List.of(15, 19)),
                buildSpellCountFormula(classId, 4, 13, 1, List.of(18)));

        var SPELLS_0_6_MAX_5 = List.of(
                buildSpellCountFormula(classId, 0, 1, 3, List.of(2, 6)),
                buildSpellCountFormula(classId, 1, 1, 1, List.of(2, 3, 5, 9)),
                buildSpellCountFormula(classId, 2, 4, 1, List.of(5, 6, 8, 12)),
                buildSpellCountFormula(classId, 3, 7, 1, List.of(8, 9, 11, 15)),
                buildSpellCountFormula(classId, 4, 10, 1, List.of(11, 12, 14, 18)),
                buildSpellCountFormula(classId, 5, 13, 1, List.of(14, 15, 17, 19)),
                buildSpellCountFormula(classId, 6, 16, 1, List.of(17, 18, 19, 20)));

        var SPELLS_1_6_MAX_5 = List.of(
                buildSpellCountFormula(classId, 1, 1, 1, List.of(2, 3, 5, 9)),
                buildSpellCountFormula(classId, 2, 4, 1, List.of(5, 6, 8, 12)),
                buildSpellCountFormula(classId, 3, 7, 1, List.of(8, 9, 11, 15)),
                buildSpellCountFormula(classId, 4, 10, 1, List.of(11, 12, 14, 18)),
                buildSpellCountFormula(classId, 5, 13, 1, List.of(14, 15, 17, 19)),
                buildSpellCountFormula(classId, 6, 16, 1, List.of(17, 18, 19, 20)));

        var SPELLS_0_9_MAX_4 = List.of(
                buildSpellCountFormula(classId, 0, 1, 3, List.of(2)),
                buildSpellCountFormula(classId, 1, 1, 1, List.of(2, 4, 7)),
                buildSpellCountFormula(classId, 2, 3, 1, List.of(4, 6, 9)),
                buildSpellCountFormula(classId, 3, 5, 1, List.of(6, 8, 11)),
                buildSpellCountFormula(classId, 4, 7, 1, List.of(8, 10, 13)),
                buildSpellCountFormula(classId, 5, 9, 1, List.of(10, 12, 15)),
                buildSpellCountFormula(classId, 6, 11, 1, List.of(12, 14, 17)),
                buildSpellCountFormula(classId, 7, 13, 1, List.of(14, 16, 19)),
                buildSpellCountFormula(classId, 8, 15, 1, List.of(16, 18, 20)),
                buildSpellCountFormula(classId, 9, 17, 1, List.of(18, 19, 20)));

        var SPELLS_1_9_MAX_4 = List.of(
                buildSpellCountFormula(classId, 1, 1, 2, List.of(2, 3)),
                buildSpellCountFormula(classId, 2, 4, 2, List.of(5, 6)),
                buildSpellCountFormula(classId, 3, 6, 2, List.of(7, 8)),
                buildSpellCountFormula(classId, 4, 8, 2, List.of(9, 10)),
                buildSpellCountFormula(classId, 5, 10, 2, List.of(11, 12)),
                buildSpellCountFormula(classId, 6, 12, 2, List.of(13, 14)),
                buildSpellCountFormula(classId, 7, 14, 2, List.of(15, 16)),
                buildSpellCountFormula(classId, 8, 16, 2, List.of(17, 18)),
                buildSpellCountFormula(classId, 9, 18, 2, List.of(19, 20)));

        var SPELLS_1_9_MAX_6 = List.of(
                buildSpellCountFormula(classId, 1, 1, 3, List.of(2, 3, 4)),
                buildSpellCountFormula(classId, 2, 4, 3, List.of(5, 6, 7)),
                buildSpellCountFormula(classId, 3, 6, 3, List.of(7, 8, 9)),
                buildSpellCountFormula(classId, 4, 8, 3, List.of(9, 10, 11)),
                buildSpellCountFormula(classId, 5, 10, 3, List.of(11, 12, 13)),
                buildSpellCountFormula(classId, 6, 12, 3, List.of(13, 14, 15)),
                buildSpellCountFormula(classId, 7, 14, 3, List.of(15, 16, 17)),
                buildSpellCountFormula(classId, 8, 16, 3, List.of(17, 18, 19)),
                buildSpellCountFormula(classId, 9, 18, 3, List.of(19, 20, 20)));


        return switch (classId.key) {
            case "alchemist" -> SPELLS_0_6_MAX_5;
            case "arcanist" -> SPELLS_1_9_MAX_4;
            case "barbarian" -> NO_SPELLS;
            case "bard" -> SPELLS_1_6_MAX_5;
            case "bloodrager" -> SPELLS_1_4_MAX_4;
            case "brawler" -> NO_SPELLS;
            case "cavalier" -> NO_SPELLS;
            case "cleric" -> SPELLS_0_9_MAX_4;
            case "druid" -> SPELLS_0_9_MAX_4;
            case "fighter" -> NO_SPELLS;
            case "gunslinger" -> NO_SPELLS;
            case "hunter" -> SPELLS_1_6_MAX_5;
            case "inquisitor" -> SPELLS_1_6_MAX_5;
            case "investigator" -> SPELLS_1_6_MAX_5;
            case "magus" -> SPELLS_0_6_MAX_5;
            case "monk" -> NO_SPELLS;
            case "omdura" -> SPELLS_1_6_MAX_5;
            case "oracle" -> SPELLS_1_9_MAX_6;
            case "paladin" -> SPELLS_PALADIN;
            case "ranger" -> SPELLS_PALADIN;
            case "rogue" -> NO_SPELLS;
            case "shaman" -> SPELLS_0_9_MAX_4;
            case "shifter" -> NO_SPELLS;
            case "skald" -> SPELLS_1_6_MAX_5;
            case "slayer" -> NO_SPELLS;
            case "sorcerer" -> SPELLS_1_9_MAX_6;
            case "summoner" -> SPELLS_1_6_MAX_5;
            case "swashbuckler" -> NO_SPELLS;
            case "unchained_barbarian" -> NO_SPELLS;
            case "unchained_monk" -> NO_SPELLS;
            case "unchained_rogue" -> NO_SPELLS;
            case "unchained_summoner" -> SPELLS_1_6_MAX_5;
            case "vampire_hunter" -> SPELLS_PALADIN;
            case "vigilante" -> NO_SPELLS;
            case "warpriest" -> SPELLS_0_6_MAX_5;
            case "witch" -> SPELLS_0_9_MAX_4;
            case "wizard" -> SPELLS_0_9_MAX_4;
            default -> throw new IllegalArgumentException("Spells per day formula not set for " + classId);
        };
    }

    private List<SpellCount> spellsKnownFormula(Id classId) {
        var SPELLS_KNOWN_BARD = List.of(
                buildSpellCountFormula(classId, 0, 1, 4, List.of(2, 3)),
                buildSpellCountFormula(classId, 1, 1, 2, List.of(2, 7, 11)),
                buildSpellCountFormula(classId, 2, 4, 2, List.of(5, 6, 10, 14)),
                buildSpellCountFormula(classId, 3, 7, 2, List.of(8, 9, 13, 17)),
                buildSpellCountFormula(classId, 4, 10, 2, List.of(11, 12, 16, 20)),
                buildSpellCountFormula(classId, 5, 13, 2, List.of(14, 15, 19)),
                buildSpellCountFormula(classId, 6, 16, 2, List.of(17, 18, 20)));

        var SPELLS_KNOWN_SORCERER = List.of(
                buildSpellCountFormula(classId, 0, 1, 4, List.of(2, 4, 6, 8, 10)),
                buildSpellCountFormula(classId, 1, 1, 2, List.of(3, 5, 7)),
                buildSpellCountFormula(classId, 2, 4, 1, List.of(5, 7, 9, 11)),
                buildSpellCountFormula(classId, 3, 6, 1, List.of(7, 9, 11)),
                buildSpellCountFormula(classId, 4, 8, 1, List.of(9, 11, 13)),
                buildSpellCountFormula(classId, 5, 10, 1, List.of(11, 13, 15)),
                buildSpellCountFormula(classId, 6, 12, 1, List.of(13, 15)),
                buildSpellCountFormula(classId, 7, 14, 1, List.of(15, 17)),
                buildSpellCountFormula(classId, 8, 16, 1, List.of(17, 19)),
                buildSpellCountFormula(classId, 9, 18, 1, List.of(19, 20)));

        var SPELLS_KNOWN_VAMPIRE_HUNTER = List.of(
                buildSpellCountFormula(classId, 1, 4, 2, List.of(5, 6, 10, 14)),
                buildSpellCountFormula(classId, 2, 7, 2, List.of(8, 9, 13, 17)),
                buildSpellCountFormula(classId, 3, 10, 2, List.of(11, 12, 16, 20)),
                buildSpellCountFormula(classId, 4, 13, 2, List.of(14, 15, 19)));

        return switch (classId.key) {
            case "alchemist" -> NO_SPELLS;
            case "arcanist" -> NO_SPELLS;
            case "barbarian" -> NO_SPELLS;
            case "bard" -> SPELLS_KNOWN_BARD;
            case "bloodrager" -> NO_SPELLS;
            case "brawler" -> NO_SPELLS;
            case "cavalier" -> NO_SPELLS;
            case "cleric" -> NO_SPELLS;
            case "druid" -> NO_SPELLS;
            case "fighter" -> NO_SPELLS;
            case "gunslinger" -> NO_SPELLS;
            case "hunter" -> SPELLS_KNOWN_BARD;
            case "inquisitor" -> SPELLS_KNOWN_BARD;
            case "investigator" -> NO_SPELLS;
            case "magus" -> NO_SPELLS;
            case "monk" -> NO_SPELLS;
            case "omdura" -> SPELLS_KNOWN_BARD;
            case "oracle" -> SPELLS_KNOWN_SORCERER;
            case "paladin" -> NO_SPELLS;
            case "ranger" -> NO_SPELLS;
            case "rogue" -> NO_SPELLS;
            case "shaman" -> NO_SPELLS;
            case "shifter" -> NO_SPELLS;
            case "skald" -> SPELLS_KNOWN_BARD;
            case "slayer" -> NO_SPELLS;
            case "sorcerer" -> SPELLS_KNOWN_SORCERER;
            case "summoner" -> SPELLS_KNOWN_BARD;
            case "swashbuckler" -> NO_SPELLS;
            case "unchained_barbarian" -> NO_SPELLS;
            case "unchained_monk" -> NO_SPELLS;
            case "unchained_rogue" -> NO_SPELLS;
            case "unchained_summoner" -> SPELLS_KNOWN_BARD;
            case "vampire_hunter" -> SPELLS_KNOWN_VAMPIRE_HUNTER;
            case "vigilante" -> NO_SPELLS;
            case "warpriest" -> NO_SPELLS;
            case "witch" -> NO_SPELLS;
            case "wizard" -> NO_SPELLS;
            default -> throw new IllegalArgumentException("Spells known formula not set for " + classId);
        };
    }

    private void fixProficiencies(CharacterClassBuilder modifiedClass) {
        String className = modifiedClass.name();

        modifiedClass.modifyClassFeatureIf(
                feature -> feature.id().key.equals("weapon_proficiency"),
                feature -> feature.description(weaponProficiencyDescriptionText(className, feature.build())));

        modifiedClass.modifyClassFeatureIf(
                feature -> feature.id().key.equals("armor_proficiency"),
                feature -> feature.description(armorProficiencyDescriptionText(className, feature.build())));

        modifiedClass.forEachLevel(levelBuilder -> {
            if (levelBuilder.level() > 1) {
                levelBuilder.removeClassFeatureIf(id -> id.key.equals("armor_proficiency"));
                levelBuilder.removeClassFeatureIf(id -> id.key.equals("weapon_proficiency"));
            }
        });
    }

    private String weaponProficiencyDescriptionText(String className, Feature feature) {
        Set<WeaponType> weaponTypes = new TreeSet<>(Comparator.comparing(WeaponType::name));
        weaponTypes.addAll(weaponProficiencies(feature));
        List<WeaponProficiency> weaponProficiencies = new ArrayList<>(fullWeaponProficiencies(feature));

        weaponProficiencies.forEach(weaponProficiency ->
                weaponTypes.removeIf(wt -> wt.requiredProficiency() == weaponProficiency));

        StringBuilder builder = new StringBuilder();

        builder.append(aEntity(className));
        builder.append(" is proficient with ");

        if (!weaponProficiencies.isEmpty()) {
            builder.append("all ");
            for (int i = 0; i < weaponProficiencies.size() - 1; i++) {
                if (i > 0) {
                    builder.append(", ");
                }
                builder.append(weaponProficiencies.get(i).getName().toLowerCase());
            }
            if (weaponProficiencies.size() > 1) {
                builder.append(" and ");
            }
            builder.append(weaponProficiencies.get(weaponProficiencies.size() - 1).getName().toLowerCase());

            builder.append(" weapons");
        }

        if (!weaponTypes.isEmpty()) {
            if (!weaponProficiencies.isEmpty()) {
                builder.append(", plus ");
            }

            builder.append("the ");
            builder.append(String.join(", ", weaponTypes.stream()
                    .map(WeaponType::name).map(String::toLowerCase).toList()));
        }

        builder.append(".");

        return builder.toString();
    }

    private Set<WeaponType> weaponProficiencies(Feature feature) {
        Set<WeaponType> proficientWith = new TreeSet<>(Comparator.comparing(wt -> wt.id().key));
        for (var effect : feature.effects()) {
            for (WeaponType weaponType : Weapons.ALL_WEAPONS) {
                if (effect.contains("SET proficiency:" + weaponType.id().key + " 1")) {
                    proficientWith.add(weaponType);
                }
            }
        }
        return proficientWith;
    }

    private Set<WeaponProficiency> fullWeaponProficiencies(Feature feature) {
        Set<WeaponProficiency> proficiencies = new TreeSet<>();
        Set<WeaponType> proficientWith = weaponProficiencies(feature);

        for (WeaponProficiency proficiency : Weapons.PROFICIENCIES) {
            Set<WeaponType> weaponTypes = new HashSet<>(Weapons.ALL_WEAPONS.stream().filter(w -> w.requiredProficiency() == proficiency).toList());
            weaponTypes.removeAll(proficientWith);

            if (weaponTypes.isEmpty()) {
                proficiencies.add(proficiency);
            }
        }

        return proficiencies;
    }

    private String armorProficiencyDescriptionText(String className, Feature feature) {
        Set<ArmorProficiency> armorProficiencies = new TreeSet<>(Comparator.comparing(ArmorProficiency::name));
        feature.effects().forEach(effect -> {
            if (effect.equals("SET proficiency:light_armor 1")) {
                armorProficiencies.add(ArmorProficiency.LIGHT_ARMOR);
            }
            if (effect.equals("SET proficiency:medium_armor 1")) {
                armorProficiencies.add(ArmorProficiency.MEDIUM_ARMOR);
            }
            if (effect.equals("SET proficiency:heavy_armor 1")) {
                armorProficiencies.add(ArmorProficiency.HEAVY_ARMOR);
            }
            if (effect.equals("SET proficiency:buckler 1")) {
                armorProficiencies.add(ArmorProficiency.BUCKLER);
            }
            if (effect.equals("SET proficiency:light_shield 1")) {
                armorProficiencies.add(ArmorProficiency.LIGHT_SHIELD);
            }
            if (effect.equals("SET proficiency:heavy_shield 1")) {
                armorProficiencies.add(ArmorProficiency.HEAVY_SHIELD);
            }
            if (effect.equals("SET proficiency:tower_shield 1")) {
                armorProficiencies.add(ArmorProficiency.TOWER_SHIELD);
            }
        });

        StringBuilder builder = new StringBuilder();

        builder.append(aEntity(className));

        if (armorProficiencies.isEmpty()) {
            builder.append(" is not proficient with any armor or shields.");
            return builder.toString();
        }

        builder.append(" is proficient with ");
        int count = 0;

        if (armorProficiencies.contains(ArmorProficiency.LIGHT_ARMOR)
            && armorProficiencies.contains(ArmorProficiency.MEDIUM_ARMOR)
            && armorProficiencies.contains(ArmorProficiency.HEAVY_ARMOR)) {
            builder.append("all types of armor (");
        }

        if (armorProficiencies.contains(ArmorProficiency.LIGHT_ARMOR)) {
            builder.append("light");
            count++;
        }

        if (armorProficiencies.contains(ArmorProficiency.MEDIUM_ARMOR)) {
            if (count > 0) {
                if (!armorProficiencies.contains(ArmorProficiency.HEAVY_ARMOR)) {
                    builder.append(" and ");
                } else {
                    builder.append(", ");
                }
            }
            builder.append("medium");
            count++;
        }

        if (armorProficiencies.contains(ArmorProficiency.HEAVY_ARMOR)) {
            if (count > 0) {
                if (count > 1) {
                    builder.append(",");
                }
                builder.append(" and ");
            }
            builder.append("heavy");
            count++;
        }

        if (armorProficiencies.contains(ArmorProficiency.LIGHT_ARMOR)
                && armorProficiencies.contains(ArmorProficiency.MEDIUM_ARMOR)
                && armorProficiencies.contains(ArmorProficiency.HEAVY_ARMOR)) {
            builder.append(")");
        } else if (count > 0) {
            builder.append(" armor");
        }

        if (count > 0) {
            if (armorProficiencies.contains(ArmorProficiency.BUCKLER)
                    || armorProficiencies.contains(ArmorProficiency.LIGHT_SHIELD)
                    || armorProficiencies.contains(ArmorProficiency.HEAVY_SHIELD)
                    || armorProficiencies.contains(ArmorProficiency.TOWER_SHIELD)) {
                builder.append(", plus ");
            }
        }

        if (armorProficiencies.contains(ArmorProficiency.BUCKLER)
                && armorProficiencies.contains(ArmorProficiency.LIGHT_SHIELD)
                && armorProficiencies.contains(ArmorProficiency.HEAVY_SHIELD)
                && armorProficiencies.contains(ArmorProficiency.TOWER_SHIELD)) {
            builder.append("all shields");
        } else if (armorProficiencies.contains(ArmorProficiency.BUCKLER)
                && armorProficiencies.contains(ArmorProficiency.LIGHT_SHIELD)
                && armorProficiencies.contains(ArmorProficiency.HEAVY_SHIELD)) {
            builder.append("all shields (except tower shields)");
        }  else if (armorProficiencies.contains(ArmorProficiency.BUCKLER)
                && armorProficiencies.contains(ArmorProficiency.LIGHT_SHIELD)) {
            builder.append("bucklers and light shields");
        } else if (armorProficiencies.contains(ArmorProficiency.BUCKLER)) {
            builder.append("bucklers");
        }

        builder.append(".");
        return builder.toString();
    }

    private String aEntity(NamedEntity namedEntity) {
        return aEntity(namedEntity.name());
    }

    private String aEntity(String name) {
        StringBuilder builder = new StringBuilder();
        if (VOWELS.indexOf(name.charAt(0)) == -1) {
            builder.append("A ");
        } else {
            builder.append("An ");
        }
        builder.append(name);
        return builder.toString();
    }
}
