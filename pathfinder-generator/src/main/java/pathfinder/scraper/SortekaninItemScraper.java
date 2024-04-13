package pathfinder.scraper;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.TypedKey;

@Component
@Slf4j
public class SortekaninItemScraper extends AbstractScraper {

    private static final String BASE_ITEM_URL = "https://www.sortekanin.com/collection/items/%d";

    private static final TypedKey<?> ID_KEY = TypedKey.text("id");
    private static final TypedKey<?> NAME_KEY = TypedKey.text("name");
    private static final TypedKey<?> DESCRIPTION_KEY = TypedKey.text("description");
    private static final TypedKey<?> ITEM_TYPE_KEY = TypedKey.text("item_type");
    private static final TypedKey<?> PRICE_KEY = TypedKey.text("price");
    private static final TypedKey<?> WEIGHT_KEY = TypedKey.text("weight");
    private static final TypedKey<?> SLOT_KEY = TypedKey.text("slot");
    private static final TypedKey<?> ARMOR_BONUS_KEY = TypedKey.number("armor_bonus");
    private static final TypedKey<?> ARMOR_TYPE_KEY = TypedKey.text("armor_type");
    private static final TypedKey<?> ARMOR_MAX_DEX_KEY = TypedKey.number("armor_max_dex");
    private static final TypedKey<?> ARMOR_CHECK_PENALTY_KEY = TypedKey.number("armor_check_penalty");
    private static final TypedKey<?> ARMOR_ARCANE_SPELL_FAILURE_CHANCE_KEY = TypedKey.number("arcane_spell_failure_chance");
    private static final TypedKey<?> ARMOR_ENHANCEMENT_BONUS_KEY = TypedKey.text("armor_enhancement_bonus");
    private static final TypedKey<?> CASTER_LEVEL_KEY = TypedKey.number("caster_level");
    private static final TypedKey<?> MAGIC_AURA_KEY = TypedKey.text("magic_aura");
    private static final TypedKey<?> WEAPON_PROFICIENCY_GROUP_KEY = TypedKey.text("weapon_proficiency_group");
    private static final TypedKey<?> WEAPON_TYPE_KEY = TypedKey.text("weapon_type");
    private static final TypedKey<?> WEAPON_DAMAGE_KEY = TypedKey.text("weapon_damage");
    private static final TypedKey<?> WEAPON_CRIT_RANGE_KEY = TypedKey.text("weapon_crit_range");
    private static final TypedKey<?> WEAPON_DAMAGE_TYPE_KEY = TypedKey.text("weapon_damage_type");
    private static final TypedKey<?> WEAPON_ENHANCEMENT_BONUS_KEY = TypedKey.text("weapon_enhancement_bonus");
    private static final TypedKey<?> WEAPON_RANGE_KEY = TypedKey.text("weapon_range");
    private static final TypedKey<?> WEAPON_GROUPS_KEY = TypedKey.text("weapon_groups");
    private static final String SOURCES_KEY = "sources";
    private static final TypedKey<?> DESTRUCTION_KEY = TypedKey.text("destruction");
    private static final TypedKey<?> WEAPON_SPECIAL_KEY = TypedKey.text("weapon_special");
    private static final TypedKey<?> ARMOR_SPECIAL_MATERIAL_KEY = TypedKey.text("armor_special_material");
    private static final TypedKey<?> WEAPON_SPECIAL_MATERIAL_KEY = TypedKey.text("weapon_special_material");

    @Override
    public void scrape() throws IOException {
        int startIndex = 1;
        int lastIndex = startIndex;

        // TODO: run 0-2263
        // TODO: run 5000+
        try {
            for (int i = startIndex; i < 2263; i++) {
                log.info("Scraping item #" + i);
                lastIndex = i;
                scrapeItem(i);
            }

            for (int i = 5000; i < 10000; i++) {
                log.info("Scraping item #" + i);
                lastIndex = i;
                scrapeItem(i);
            }
        } catch (Exception e) {
            log.error("Failed on ID " + lastIndex, e);
        }
    }

    public void scrapeItem(int id) throws IOException {
        Document doc = Jsoup.parse(
                new URL(BASE_ITEM_URL.formatted(id)),
                5000);

        Map<String, Object> item = new HashMap<>();

        String name = doc.select("#page_container > main > h1").text();
        NAME_KEY.putInMap(item, name);

        Elements itemPropertiesElements = doc.select(".item_properties");
        for (var itemPropertiesElement : itemPropertiesElements) {
            Element previousElement = itemPropertiesElement.previousElementSibling();
            String heading = previousElement != null ? previousElement.text() : "";

            for (var itemPropertyElement : itemPropertiesElement.children()) {
                String label = itemPropertyElement.select("strong").text();
                label = label.substring(0, label.lastIndexOf(':'));
                label = heading + "/" + label;

                TypedKey<?> key = keyFromLabel(label);
                String value = itemPropertyElement.textNodes().get(0).text();

                key.putInMap(item, value);
            }
        }

        List<String> descriptionParts = scanHeaderContents(doc, "Description");
        if (!descriptionParts.isEmpty()) {
            DESCRIPTION_KEY.putInMap(item, String.join("\n", descriptionParts));
        }

        List<String> destructionParts = scanHeaderContents(doc, "Destruction");
        if (!destructionParts.isEmpty()) {
            DESTRUCTION_KEY.putInMap(item, String.join("\n", destructionParts));
        }

        Elements sourcesElements = doc.select("h2:contains(%s)".formatted("Sources")).first().nextElementSibling()
                .select("li");
        List<String> sources = new ArrayList<>();
        sourcesElements.forEach(sourceElement -> sources.add(sourceElement.text()));
        item.put(SOURCES_KEY, sources);

        Id itemId = NameToIdConverter.itemId(name);

        ID_KEY.putInMap(item, itemId.string());

//        log.info(item.toString());
        save("item/" + itemId.key + ".yml", item);
    }

    private static List<String> scanHeaderContents(Document doc, String heading) {
        Element descriptionHeaderElement = doc.select("h2:contains(%s)".formatted(heading)).first();
        if (descriptionHeaderElement == null) {
            return List.of();
        }
        List<String> descriptionParts = new ArrayList<>();
        Element nextElementSibling = descriptionHeaderElement;
        while ((nextElementSibling = nextElementSibling.nextElementSibling()).is("p")) {
            descriptionParts.add(nextElementSibling.text());
        }
        return descriptionParts;
    }

    private static TypedKey<?> keyFromLabel(String label) {

        return switch (label) {
            case "Properties/Type" -> ITEM_TYPE_KEY;
            case "Properties/Price" -> PRICE_KEY;
            case "Properties/Weight" -> WEIGHT_KEY;
            case "Properties/Slot" -> SLOT_KEY;

            case "Armor properties/Type" -> ARMOR_TYPE_KEY;
            case "Armor properties/Armor bonus" -> ARMOR_BONUS_KEY;
            case "Armor properties/Maximum dexterity" -> ARMOR_MAX_DEX_KEY;
            case "Armor properties/Armor check penalty" -> ARMOR_CHECK_PENALTY_KEY;
            case "Armor properties/Arcane spell failure chance" -> ARMOR_ARCANE_SPELL_FAILURE_CHANCE_KEY;
            case "Armor properties/Enhancement bonus" -> ARMOR_ENHANCEMENT_BONUS_KEY;
            case "Armor properties/Special material" -> ARMOR_SPECIAL_MATERIAL_KEY;

            case "Weapon properties/Proficiency group" -> WEAPON_PROFICIENCY_GROUP_KEY;
            case "Weapon properties/Type" -> WEAPON_TYPE_KEY;
            case "Weapon properties/Damage" -> WEAPON_DAMAGE_KEY;
            case "Weapon properties/Critical" -> WEAPON_CRIT_RANGE_KEY;
            case "Weapon properties/Damage type" -> WEAPON_DAMAGE_TYPE_KEY;
            case "Weapon properties/Enhancement bonus" -> WEAPON_ENHANCEMENT_BONUS_KEY;
            case "Weapon properties/Range" -> WEAPON_RANGE_KEY;
            case "Weapon properties/Weapon groups" -> WEAPON_GROUPS_KEY;
            case "Weapon properties/Special" -> WEAPON_SPECIAL_KEY;
            case "Weapon properties/Special material" -> WEAPON_SPECIAL_MATERIAL_KEY;

            case "Magical properties/Caster level" -> CASTER_LEVEL_KEY;
            case "Magical properties/Aura" -> MAGIC_AURA_KEY;
            case "Cursed/Caster level" -> CASTER_LEVEL_KEY;
            case "Cursed/Aura" -> MAGIC_AURA_KEY;

            default -> throw new IllegalArgumentException("Unknown label: " + label);
        };
    }
}
