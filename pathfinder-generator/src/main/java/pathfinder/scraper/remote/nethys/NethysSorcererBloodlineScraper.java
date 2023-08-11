package pathfinder.scraper.remote.nethys;

import static pathfinder.util.ElementUtils.nodeText;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.AttributeType;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.Feature;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.NameUtils;
import pathfinder.util.StringUtils;

@Service
@Slf4j
@NotCached
@RequiredArgsConstructor
public class NethysSorcererBloodlineScraper extends AbstractNethysScraper {

    public Stream<Bloodline> streamBloodlines() {
        try {
            Element results = search("*", SearchTarget.CLASSES);
            Elements content = selectSectionElements(
                    results.getElementsContainingOwnText("Sorcerer - Bloodlines").first());

            return content.select("a").stream()
                    .map(a -> scrapeBloodline(a.text(), a.attr("href")));
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private Bloodline scrapeBloodline(String target, String href) {
        Document document = fetchLink(href);

        Element titleElement = document.select("h1.title:contains(%s)".formatted(target)).first();
        if (titleElement == null) {
            throw new IllegalArgumentException("No title element found: " + target);
        }
        Elements contents = titleElement.nextElementSiblings();

        String name = nodeText(titleElement);
        Id id = NameToIdConverter.generateId(AttributeType.SORCERER_BLOODLINE, name);

        String description = nodeText(titleElement.nextElementSiblings().select("br").first().nextSibling());

        String source = findLinedContent(contents, "Source");
        source = formatSourceText(source);

        List<String> bonusFeats = parseBonusFeats(contents);
        List<String> bonusSpells = parseBonusSpells(contents);
        List<Feature> bloodlinePowers = parseBloodlinePowers(contents, source);

        return new Bloodline(
                id,
                name,
                Description.create(description),
                null,
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

    private List<Feature> parseBloodlinePowers(Elements contents, String source) {
        Element startElement = findElementsWithExactText(contents, "Bloodline Powers").first();

        Elements next = startElement.nextElementSiblings();
        Elements powerLabels = next.select("i");
        return powerLabels.stream().map(powerLabel -> {
            String label = powerLabel.text();
            String name = Feature.Type.removeTypeFromName(label);
            name = NameUtils.fixNameOrder(name);
            name = StringUtils.toCamelCase(name);
            String type = Feature.Type.fromFeatureName(label).toUpperCase();

            String descriptionText = nodeText(powerLabel.nextSibling());

            return new Feature(
                    NameToIdConverter.generateId(AttributeType.ABILITY, name).withOption("sorcerer"),
                    name,
                    type,
                    Description.create(descriptionText),
                    "",
                    source);
        }).toList();
    }
}
