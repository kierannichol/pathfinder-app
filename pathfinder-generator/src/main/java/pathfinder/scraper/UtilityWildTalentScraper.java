package pathfinder.scraper;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import pathfinder.model.AttributeType;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.Sources;
import pathfinder.model.pathfinder.Spell;
import pathfinder.model.pathfinder.Spell.Level;
import pathfinder.model.pathfinder.Spell.SpellBuilder;
import pathfinder.util.NameToIdConverter;

@Component
@RequiredArgsConstructor
@Slf4j
public class UtilityWildTalentScraper extends D20pfsrdBaseScraper {

    @Override
    public void scrape() throws IOException {
        Document doc = Jsoup.parse(
                new URL("https://www.d20pfsrd.com/alternative-rule-systems/occult-adventures/occult-classes/kineticist/utility-wild-talents/"), 5000);

        Elements wildTalentSections = doc.select("h4:not(.widget-title), h4:not(.widget-title) ~ p");

        SpellBuilder spellBuilder = Spell.builder();
        boolean hasBlockData = false;
        StringBuilder description = new StringBuilder();
        StringBuilder effect = new StringBuilder();

        for (Element part : wildTalentSections) {
            if (part.is("h4")) {
                spellBuilder.description(description.toString());
                spellBuilder.effect(effect.toString());
                Spell spell = spellBuilder.build();
                if (spell.name() != null) {
                    spellBuilder = Spell.builder()
                            .source(Sources.OCCULT_ADVENTURES.code());
                    hasBlockData = false;
                    description = new StringBuilder();
                    effect = new StringBuilder();
                    log.info("Wild Talent: " + spell);
                    save("wild_talent/" + spell.id().key + ".yml", spell);
                }

                spellBuilder.name(part.text());
                spellBuilder.id(NameToIdConverter.generateId(AttributeType.WILD_TALENT, part.text()));
            }
            else if (part.is("p.source")) {
                String source = liftBoldKeyValue(part, "Source").orElseThrow();
                spellBuilder.source(source);
            }
            else if (part.is("p") && !hasBlockData) {
                hasBlockData = true;

                List<String> elements = new ArrayList<>();
                liftBoldKeyValue(part, "Element").ifPresent(value -> {
                    String[] valueParts = value.split("( or )|,|;");
                    elements.addAll(Arrays.asList(valueParts));
                });

                if (elements.isEmpty()) {
                    description.append(part.text());
                    continue;
                }

//                String type = liftBoldKeyValue(part, "Type").orElseThrow();
                String level = liftBoldKeyValue(part, "Level").orElseThrow().replaceAll(";", "");
//                String burn = liftBoldKeyValue(part, "Burn").orElseThrow();

                StringBuilder prerequisites = new StringBuilder("(" + elements.stream()
                        .map(String::trim)
                        .filter(element -> !element.isBlank())
                        .map(element -> "@ability:elemental_focus#" + element)
                        .collect(Collectors.joining(" OR ")) + ")");

                liftBoldKeyValue(part, "Prerequisites").ifPresent(value -> prerequisites.append(" AND (")
                        .append(value).append(")"));
                liftBoldKeyValue(part, "Prerequisite(s)").ifPresent(value -> prerequisites.append(" AND (")
                        .append(value).append(")"));
                spellBuilder.prerequisites(prerequisites.toString());

                try {
                    int levelNumber = Integer.parseInt(level);
                    spellBuilder.level(List.of(new Level(Id.of("class:kineticist"), levelNumber)));
                } catch (NumberFormatException e) {
                    log.info(spellBuilder.toString());
                    throw e;
                }

                liftBoldKeyValue(part, "Saving Throw").ifPresent(spellBuilder::savingThrow);
                liftBoldKeyValue(part, "Spell Resistance").ifPresent(spellBuilder::spellResistance);
            }
            else if (part.is("p")) {
                description.append(part.text());
            }
        }
    }
}
