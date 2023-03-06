package pathfinder.scraper.remote.nethys;

import static pathfinder.util.ElementUtils.nodeText;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.BloodragerBloodline;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Source;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;

@Service
@Slf4j
@NotCached
@RequiredArgsConstructor
public class NethysBloodragerBloodlineScraper extends AbstractNethysScraper {

    public Stream<BloodragerBloodline> streamBloodlines() {
        try {
            Element results = search("*", SearchTarget.CLASSES);
            Elements content = selectSectionElements(
                    results.getElementsContainingOwnText("Bloodrager - Bloodlines").first());

            return content.select("a").stream()
                    .map(a -> scrapeBloodline(a.text(), a.attr("href")))
                    .filter(Objects::nonNull);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private BloodragerBloodline scrapeBloodline(String target, String href) {
        Document document = fetchLink(href);

        Element titleElement = document.select("h1.title:contains(%s)".formatted(target)).first();
        if (titleElement == null) {
            throw new IllegalArgumentException("No title element found: " + target);
        }
        Elements contents = titleElement.nextElementSiblings();

        String name = nodeText(titleElement);
        Id id = NameToIdConverter.generateId(AttributeType.BLOODRAGER_BLOODLINE, name);

        String description = nodeText(titleElement.nextElementSiblings().select("br").first().nextSibling());

        String sourceText = findLinedContent(contents, "Source");
        Source source = parseSource(sourceText);

        List<String> bonusFeats = parseBonusFeats(contents);
        List<String> bonusSpells = parseBonusSpells(contents);
        List<Feature> bloodlinePowers = parseBloodlinePowers(contents, source);

        return new BloodragerBloodline(
                id,
                name,
                Description.create(description),
                bonusFeats,
                bonusSpells,
                bloodlinePowers,
                source
        );
    }

    private List<String> parseBonusFeats(Elements contents) {
        String bonusFeatText = findLinedContent(contents, "Bonus Feats");

        return Arrays.stream(bonusFeatText.split(","))
                .map(String::trim)
                .map(text -> text.replace(": ", "").replace(".", "").replace("*", "").replace("APG", ""))
                .toList();
    }

    private List<String> parseBonusSpells(Elements contents) {
        String bonusFeatText = findLinedContent(contents, "Bonus Spells");

        return Arrays.stream(bonusFeatText.split(","))
                .map(String::trim)
                .map(text -> text.replace(": ", "").replace(".", "").replace("*", "").replace("APG", ""))
                .toList();
    }

    private List<Feature> parseBloodlinePowers(Elements contents, Source source) {
        Element startElement = findElementsWithExactText(contents, "Bloodline Powers").first();

        Elements next = startElement.nextElementSiblings();
        Elements powerLabels = next.select("i");
        return powerLabels.stream().map(powerLabel -> {
            String label = powerLabel.text();
            String name = Feature.Type.removeTypeFromName(label);
            String type = Feature.Type.fromFeatureName(label).toUpperCase();

            String descriptionText = nodeText(powerLabel.nextSibling());

            return new Feature(
                    NameToIdConverter.generateId(AttributeType.ABILITY, name).withOption("bloodrager"),
                    name,
                    type,
                    Description.create(descriptionText),
                    "",
                    source != null ? source.code() : "");
        }).toList();
    }
}
