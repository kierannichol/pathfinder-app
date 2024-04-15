package pathfinder.scraper;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.ItemOption;
import pathfinder.model.ItemOption.Builder;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;
import pathfinder.util.NameToIdConverter;

@Component
@Slf4j
public class WeaponSpecialAbilityScraper extends D20pfsrdBaseScraper {

    @Override
    public void scrape() throws IOException {
        Document doc = fetch("https://www.d20pfsrd.com/magic-items/magic-weapons/");

        Elements meleeP1Rows = doc.select("table:has(caption:contains(+1 Weapon Special Abilities)) > tbody > tr");
        Elements meleeP2Rows = doc.select("table:has(caption:contains(+2 Weapon Special Abilities)) > tbody > tr");
        Elements meleeP3Rows = doc.select("table:has(caption:contains(+3 Weapon Special Abilities)) > tbody > tr");
        Elements meleeP4n5Rows = doc.select("table:has(caption:contains(+4 or +5 Weapon Special Abilities)) > tbody > tr");

        Elements allMelee = new Elements(100);
        allMelee.addAll(meleeP1Rows);
        allMelee.addAll(meleeP2Rows);
        allMelee.addAll(meleeP3Rows);
        allMelee.addAll(meleeP4n5Rows);

        Map<String, ItemOption.Builder> processed = new HashMap<>();

        for (Element tr : allMelee) {
            ItemOption.Builder builder = parseOptionRow(tr)
                    .addTag("melee_weapon_special_ability");
            builder.setDescription(scrapeDescription(tr));

            processed.put(builder.getCode(), builder);
//            save("item_option/" + Id.of(item.code()).key + ".yml", item);
        }

        Elements rangedP1Rows = doc.select("table:has(caption:contains(+1 Ranged Weapon Special Abilities)) > tbody > tr");
        Elements rangedP2Rows = doc.select("table:has(caption:contains(+2 Ranged Weapon Special Abilities)) > tbody > tr");
        Elements rangedP3Rows = doc.select("table:has(caption:contains(+3 or +4 Ranged Weapon Special Abilities)) > tbody > tr");

        Elements allRanged = new Elements(100);
        allRanged.addAll(rangedP1Rows);
        allRanged.addAll(rangedP2Rows);
        allRanged.addAll(rangedP3Rows);

        for (Element tr : allRanged) {
            ItemOption.Builder builder = parseOptionRow(tr);

            if (processed.containsKey(builder.getCode())) {
                builder = processed.get(builder.getCode());
                builder.addTag("ranged_weapon_special_ability");
                continue;
            }

            builder.addTag("ranged_weapon_special_ability");
            builder.setDescription(scrapeDescription(tr));

            processed.put(builder.getCode(), builder);
        }

        processed.forEach((key, value) -> {
            ItemOption item = value.build();
            save("item_option/" + Id.of(item.code()).key + ".yml", item);
        });
    }

    private ItemOption.Builder parseOptionRow(Element tr) {
        String name = tr.select("td:nth-child(2) > a").text();
        String basePriceCellText = tr.select("td:nth-child(3)").text();
        String sourceCellText = tr.select("td:nth-child(4)").text();

        SourceId sourceId = Sources.findSourceByNameOrCode(sourceCellText);
        String code = NameToIdConverter.partialId(name)
                .withType("weapon_special_ability")
                .string();

        Builder builder = ItemOption.builder(code, sourceId)
                .setName(name)
                .setBaseNamePrefix(name);

        parseBonus(basePriceCellText).ifPresent(builder::setPointCost);
        parsePrice(basePriceCellText).ifPresent(builder::setCurrencyCostBase);

        return builder;
    }

    private String scrapeDescription(Element tr) throws IOException {
        Element a = tr.selectFirst("td:nth-child(2) a");
        if (a == null) {
            return "";
        }

        String url = a.attr("href");
        Document abilityDoc = fetch(url);

        Element startElement = abilityDoc.selectFirst("p:contains(DESCRIPTION)");
        Element endElement = startElement.nextElementSiblings().select("p.divider").first();
        return between(startElement, endElement).text();
    }

    private Optional<Integer> parseBonus(String text) {
        Pattern pattern = Pattern.compile("^\\+(\\d+) bonus$");
        Matcher matcher = pattern.matcher(text);
        if (!matcher.find()) {
            return Optional.empty();
        }
        return Optional.of(Integer.parseInt(matcher.group(1)));
    }

    private Optional<Integer> parsePrice(String text) {
        Pattern pattern = Pattern.compile("^\\+(\\d+)$");
        Matcher matcher = pattern.matcher(text.replace(",", ""));
        if (!matcher.find()) {
            return Optional.empty();
        }
        return Optional.of(Integer.parseInt(matcher.group(1)));
    }
}
