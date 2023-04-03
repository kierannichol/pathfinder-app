package pathfinder.scraper.remote.d20pfsrd;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.jsoup.UncheckedIOException;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import pathfinder.model.AttributeType;
import pathfinder.model.pathfinder.Feature.Type;
import pathfinder.model.pathfinder.Spell;
import pathfinder.scraper.remote.ScrapedFeature;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.StreamUtils;

@Component
@RequiredArgsConstructor
public class D20pfsrdHexScraper extends AbstractD20pfsrdScraper {
    private final D20pfsrdFeaturePageScraper featurePageScraper;

    public List<Spell> scrapeHexes() {
        try {
            Document document = fetch(new URL("https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/"));

            Stream<Spell> common = scrapeSection(document, "Common Hexes", "Witch 1");
            Stream<Spell> major = scrapeSection(document, "Major Hexes", "Witch 10");
            Stream<Spell> grand = scrapeSection(document, "Grand Hexes", "Witch 18");

            return StreamUtils.concat(List.of(common, major, grand))
                    .toList();
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
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
        String type = Type.fromFeatureName(name);
        name = Type.removeTypeFromName(name);

        return Spell.builder()
                .id(NameToIdConverter.generateId(AttributeType.WITCH_HEX, name))
                .name(name)
                .effect(feature.tryGetBlock("Effect").orElse(""))
                .description(feature.description())
                .source(feature.source())
                .prerequisites(prerequisites)
                .castingTime("Standard")
                .build();
    }
}
