package pathfinder.source.scraper.d20pfsrd;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import pathfinder.model.Ability.Type;
import pathfinder.model.Sources;
import pathfinder.model.Spell;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.WitchHexSourceDatabase;
import pathfinder.source.scraper.ScrapedFeature;
import pathfinder.util.StreamUtils;

@Component("Witch Hex Scraper")
@RequiredArgsConstructor
@Slf4j
public class D20pfsrdWitchHexScraper extends AbstractD20pfsrdScraper implements WitchHexSourceDatabase {
    private final D20pfsrdFeaturePageScraper featurePageScraper;

    @Override
    public Stream<Spell> streamSpells() throws IOException {
        Document document = fetch(new URL("https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/"));

        Stream<Spell> common = scrapeSection(document, "Common Hexes", "Witch 1");
        Stream<Spell> major = scrapeSection(document, "Major Hexes", "Witch 10");
        Stream<Spell> grand = scrapeSection(document, "Grand Hexes", "Witch 18");

        return StreamUtils.concat(List.of(common, major, grand));
    }

    private Stream<Spell> scrapeSection(Element document, String header, String prerequisites) throws IOException {
        Element list = document.getElementsContainingOwnText(header).last()
                .closest("h3")
                .nextElementSiblings()
                .select("ul")
                .first();

        Elements elements = list.select("a");

        return elements.stream().flatMap(element -> {
            String href = element.attr("href");
            try {
                return featurePageScraper.scrape(new URL(href))
                        .map(feature -> toSpell(feature, prerequisites))
                        .stream();
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }
        });
    }

    private Spell toSpell(ScrapedFeature feature, String prerequisites) {
        String name = feature.name();
        Type type = Type.fromAbilityName(name);
        name = Type.removeTypeFromName(name);

        return Spell.builder()
                .id(NameToIdConverter.generateId(AttributeType.WITCH_HEX, name))
                .name(name)
                .effect(feature.tryGetBlock("Effect").orElse(""))
                .description(feature.description())
                .source(Sources.findSourceByNameOrCode(feature.source()))
                .prerequisites(prerequisites)
                .type(type)
                .castingTime("Standard")
                .build();
    }
}
