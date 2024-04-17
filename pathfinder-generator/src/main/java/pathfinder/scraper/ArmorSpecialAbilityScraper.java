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
import pathfinder.util.NameUtils;
import pathfinder.util.StringUtils;

@Component
@Slf4j
public class ArmorSpecialAbilityScraper extends D20pfsrdBaseScraper {

    @Override
    public void scrape() throws IOException {
        Document doc = fetch("https://www.d20pfsrd.com/magic-items/magic-armor/");
        Map<String, Builder> processed = new HashMap<>();

        processArmor(doc, processed);
        processShields(doc, processed);

        processed.forEach((key, value) -> {
            ItemOption item = value.build();
//            log.info(item.toString());
            save("item_option/armor_special/" + Id.of(item.code()).key + ".yml", item);
        });
    }

    private void processArmor(Document doc, Map<String, Builder> processed) throws IOException {
        Elements p1Rows = doc.select("table:has(> caption:contains(+1 Armor Special Abilities)) > tbody > tr:not(:first-child)");
        Elements p2Rows = doc.select("table:has(> caption:contains(+2 Armor Special Abilities)) > tbody > tr:not(:first-child)");
        Elements p3Rows = doc.select("table:has(> caption:contains(+3 Armor Special Abilities)) > tbody > tr:not(:first-child)");
        Elements p4Rows = doc.select("table:has(> caption:contains(+4 Armor Special Abilities)) > tbody > tr:not(:first-child)");
        Elements p5Rows = doc.select("table:has(> caption:contains(+5 Armor Special Abilities)) > tbody > tr:not(:first-child)");

        Elements allOptionRows = new Elements(100);
        allOptionRows.addAll(p1Rows);
        allOptionRows.addAll(p2Rows);
        allOptionRows.addAll(p3Rows);
        allOptionRows.addAll(p4Rows);
        allOptionRows.addAll(p5Rows);

        for (Element tr : allOptionRows) {
            Builder builder = parseOptionRow(tr);
            String code = builder.getCode();

            if (code.equals("armor_special_ability:")) {
                continue;
            }

            if (processed.containsKey(code)) {
                builder = processed.get(code);
            } else {
                builder.setDescription(scrapeDescription(tr));
            }

            builder.addTag("armor_special_ability");
            processed.put(builder.getCode(), builder);
        }
    }

    private void processShields(Document doc, Map<String, Builder> processed) throws IOException {
        Elements p1Rows = doc.select("table:has(> caption:contains(+1 Shield Special Abilities)) > tbody > tr:not(:first-child)");
        Elements p2Rows = doc.select("table:has(> caption:contains(+2 Shield Special Abilities)) > tbody > tr:not(:first-child)");
        Elements p3Rows = doc.select("table:has(> caption:contains(+3 Shield Special Abilities)) > tbody > tr:not(:first-child)");
        Elements p4Rows = doc.select("table:has(> caption:contains(+4 Shield Special Abilities)) > tbody > tr:not(:first-child)");
        Elements p5Rows = doc.select("table:has(> caption:contains(+5 Shield Special Abilities)) > tbody > tr:not(:first-child)");

        Elements allOptionRows = new Elements(100);
        allOptionRows.addAll(p1Rows);
        allOptionRows.addAll(p2Rows);
        allOptionRows.addAll(p3Rows);
        allOptionRows.addAll(p4Rows);
        allOptionRows.addAll(p5Rows);

        for (Element tr : allOptionRows) {
            Builder builder = parseOptionRow(tr);
            String code = builder.getCode();

            if (code.equals("armor_special_ability:")) {
                continue;
            }

            if (processed.containsKey(code)) {
                builder = processed.get(code);
                builder.setDescription(scrapeDescription(tr));
            }

            builder.addTag("armor_special_ability");
            processed.put(builder.getCode(), builder);
        }
    }

    private Builder parseOptionRow(Element tr) {
        String name = tr.select("td:nth-child(2)").text();
        name = StringUtils.capitalize(name);
        name = NameUtils.fixNameOrder(name);
        String basePriceCellText = tr.select("td:nth-child(3)").text();
        String sourceCellText = tr.select("td:nth-child(4)").text();

        SourceId sourceId = Sources.findSourceByNameOrCode(sourceCellText);
        String code = NameToIdConverter.partialId(name)
                .withType("armor_special_ability")
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

        Element startElement = abilityDoc.selectFirst("p:contains(DESCRIPTION), h4:contains(DESCRIPTION)");
        Element endElement = startElement.nextElementSiblings().select("p.divider, h4").first();
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
