package pathfinder.db.modify;

import java.nio.file.Path;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.AbstractLocalPathfinderDatabaseModifier;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.ItemData;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.NameUtils;

@Slf4j
@Component
public class FixPricesModifier extends AbstractLocalPathfinderDatabaseModifier {

    @Override
    protected void modify() {
        List<Path> paths = list("db/item").toList();

        replaceCost("Arcane mark", "25 gp", paths);
        replaceCost("Guidance", "25 gp", paths);
        replaceCost("Light", "25 gp", paths);
        replaceCost("Purify food and drink", "25 gp", paths);
        replaceCost("Resistance", "25 gp", paths);
        replaceCost("Stabilize", "25 gp", paths);
        replaceCost("Virtue", "25 gp", paths);
        replaceCost("Adhesive spittle", "50 gp", paths);
        replaceCost("Animate rope", "50 gp", paths);
        replaceCost("Ant haul", "50 gp", paths);
        replaceCost("Bless weapon", "50 gp", paths);
        replaceCost("Cloak of shade", "50 gp", paths);
        replaceCost("Cure light wounds", "50 gp", paths);
        replaceCost("Disguise weapon", "50 gp", paths);
        replaceCost("Endure elements", "50 gp", paths);
        replaceCost("Enlarge person", "50 gp", paths);
        replaceCost("Erase", "50 gp", paths);
        replaceCost("Feather step", "50 gp", paths);
        replaceCost("Gentle breeze", "50 gp", paths);
        replaceCost("Glue seal", "50 gp", paths);
        replaceCost("Goodberry", "50 gp", paths);
        replaceCost("Grease", "50 gp", paths);
        replaceCost("Handy grapnel", "50 gp", paths);
        replaceCost("Hide from animals", "50 gp", paths);
        replaceCost("Hide from undead", "50 gp", paths);
        replaceCost("Hold portal", "50 gp", paths);
        replaceCost("Invigorate", "50 gp", paths);
        replaceCost("Jump", "50 gp", paths);
        replaceCost("Keen senses", "50 gp", paths);
        replaceCost("Mage armor", "50 gp", paths);
        replaceCost("Magic fang", "50 gp", paths);
        replaceCost("Magic stone", "50 gp", paths);
        replaceCost("Magic weapon", "50 gp", paths);
        replaceCost("Obscure poison", "50 gp", paths);
        replaceCost("Open and shut", "50 gp", paths);
        replaceCost("Pass without trace", "50 gp", paths);
        replaceCost("Protection from chaos", "50 gp", paths);
        replaceCost("Protection from evil", "50 gp", paths);
        replaceCost("Protection from good", "50 gp", paths);
        replaceCost("Protection from law", "50 gp", paths);
        replaceCost("Reduce person", "50 gp", paths);
        replaceCost("Refine improvised weapon", "50 gp", paths);
        replaceCost("Remove fear", "50 gp", paths);
        replaceCost("Remove sickness", "50 gp", paths);
        replaceCost("Sanctify corpse", "50 gp", paths);
        replaceCost("Sanctuary", "50 gp", paths);
        replaceCost("Shillelagh", "50 gp", paths);
        replaceCost("Sunder breaker", "50 gp", paths);
        replaceCost("Sundering shards", "50 gp", paths);
        replaceCost("Touch of the sea", "50 gp", paths);
        replaceCost("Vanish", "50 gp", paths);
        replaceCost("Wizened appearance", "50 gp", paths);
        replaceCost("Ablative barrier", "300 gp", paths);
        replaceCost("Acute senses", "300 gp", paths);
        replaceCost("Aid", "300 gp", paths);
        replaceCost("Arcane lock", "300 gp", paths);
        replaceCost("Align weapon", "300 gp", paths);
        replaceCost("Barkskin", "300 gp", paths);
        replaceCost("Bear’s endurance", "300 gp", paths);
        replaceCost("Blur", "300 gp", paths);
        replaceCost("Bull’s strength", "300 gp", paths);
        replaceCost("Buoyancy", "300 gp", paths);
        replaceCost("Bullet shield", "300 gp", paths);
        replaceCost("Cat’s grace", "300 gp", paths);
        replaceCost("Certain grip", "300 gp", paths);
        replaceCost("Codespeak", "300 gp", paths);
        replaceCost("Companion life link", "300 gp", paths);
        replaceCost("Continual flame", "300 gp", paths);
        replaceCost("Corruption resistance", "300 gp", paths);
        replaceCost("Cure moderate wounds", "300 gp", paths);
        replaceCost("Darkvision", "300 gp", paths);
        replaceCost("Dark whispers", "300 gp", paths);
        replaceCost("Delay poison", "300 gp", paths);
        replaceCost("Disguise other", "300 gp", paths);
        replaceCost("Eagle’s splendor", "300 gp", paths);
        replaceCost("Fox’s cunning", "300 gp", paths);
        replaceCost("Gentle repose", "300 gp", paths);
        replaceCost("Hidden presence", "300 gp", paths);
        replaceCost("Invisibility", "300 gp", paths);
        replaceCost("Levitate", "300 gp", paths);
        replaceCost("Make whole", "300 gp", paths);
        replaceCost("Obscure object", "300 gp", paths);
        replaceCost("Owl’s wisdom", "300 gp", paths);
        replaceCost("Protection from arrows", "300 gp", paths);
        replaceCost("Reduce animal", "300 gp", paths);
        replaceCost("Remove paralysis", "300 gp", paths);
        replaceCost("Resist energy", "300 gp", paths);
        replaceCost("Rope trick", "300 gp", paths);
        replaceCost("Shifted steps", "300 gp", paths);
        replaceCost("Slipstream", "300 gp", paths);
        replaceCost("Spider climb", "300 gp", paths);
        replaceCost("Undetectable alignment", "300 gp", paths);
        replaceCost("Voluminous vocabulary", "300 gp", paths);
        replaceCost("Warp wood", "300 gp", paths);
        replaceCost("Wood shape", "300 gp", paths);
        replaceCost("Air geyser", "750 gp", paths);
        replaceCost("Burrow", "750 gp", paths);
        replaceCost("Catatonia", "750 gp", paths);
        replaceCost("Contagious zeal", "750 gp", paths);
        replaceCost("Countless eyes", "750 gp", paths);
        replaceCost("Cure serious wounds", "750 gp", paths);
        replaceCost("Daylight", "750 gp", paths);
        replaceCost("Dispel magic", "750 gp", paths);
        replaceCost("Displacement", "750 gp", paths);
        replaceCost("Draconic reservoir", "750 gp", paths);
        replaceCost("Fire trap", "775 gp", paths);
        replaceCost("Flame arrow", "750 gp", paths);
        replaceCost("Fly", "750 gp", paths);
        replaceCost("Gaseous form", "750 gp", paths);
        replaceCost("Good hope", "750 gp", paths);
        replaceCost("Haste", "750 gp", paths);
        replaceCost("Heart of the metal", "750 gp", paths);
        replaceCost("Heroism", "750 gp", paths);
        replaceCost("Keen edge", "750 gp", paths);
        replaceCost("Magic fang, greater", "750 gp", paths);
        replaceCost("Magic vestment", "750 gp", paths);
        replaceCost("Nauseating trail", "750 gp", paths);
        replaceCost("Neutralize poison", "750 gp", paths);
        replaceCost("Nondetection", "800 gp", paths);
        replaceCost("Protection from energy", "750 gp", paths);
        replaceCost("Rage", "750 gp", paths);
        replaceCost("Remove blindness/deafness", "750 gp", paths);
        replaceCost("Remove curse", "750 gp", paths);
        replaceCost("Remove disease", "750 gp", paths);
        replaceCost("Shrink item", "750 gp", paths);
        replaceCost("Stone shape", "750 gp", paths);
        replaceCost("Tongues", "750 gp", paths);
        replaceCost("Water breathing", "750 gp", paths);
        replaceCost("Water walk", "750 gp", paths);
    }

    private void replaceCost(String itemName, String newCost, List<Path> paths) {
        String fixedName = "Potion of " + NameUtils.fixNameOrder(itemName);
        Id itemId = NameToIdConverter.itemId(fixedName);

        String targetFile = itemId.key + ".yml";

        List<Path> matchingFiles = paths.stream().filter(path -> path.toFile().getName().equals(targetFile)).toList();

        if (matchingFiles.isEmpty()) {
            log.error("Did not find item entry for {}: {}", fixedName, targetFile);
            return;
        }

        if (matchingFiles.size() > 1) {
            log.error("Found multiple entries for {}: {}", fixedName, matchingFiles);
            return;
        }

        Path itemFile = matchingFiles.get(0);

        ItemData item = load(itemFile, ItemData.class);
        ItemData modifiedItem = replaceCost(item, newCost);

        save("item/" + itemFile.toFile().getName(), modifiedItem);
    }

    private ItemData replaceCost(ItemData item, String newCost) {
        return new ItemData(
                item.id(),
                item.name(),
                item.description(),
                item.item_type(),
                newCost,
                item.weight(),
                item.slot(),
                item.armor_bonus(),
                item.armor_type(),
                item.armor_max_dex(),
                item.armor_check_penalty(),
                item.arcane_spell_failure_chance(),
                item.armor_enhancement_bonus(),
                item.caster_level(),
                item.magic_aura(),
                item.weapon_proficiency_group(),
                item.weapon_type(),
                item.weapon_damage(),
                item.weapon_crit_range(),
                item.weapon_damage_type(),
                item.weapon_enhancement_bonus(),
                item.weapon_range(),
                item.weapon_groups(),
                item.sources(),
                item.destruction(),
                item.weapon_special(),
                item.armor_special_material(),
                item.weapon_special_material()
        );
    }
}
