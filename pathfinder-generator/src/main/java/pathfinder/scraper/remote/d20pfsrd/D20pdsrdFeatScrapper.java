package pathfinder.scraper.remote.d20pfsrd;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import pathfinder.model.AttributeType;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.Feat.FeatType;
import pathfinder.model.pathfinder.Feature;
import pathfinder.util.StreamUtils;

@Component("Feat Scraper")
@RequiredArgsConstructor
@Slf4j
public class D20pdsrdFeatScrapper extends AbstractD20pfsrdScraper {

    private final D20pfsrdAbilityPageScraper abilityPageScraper;

    public Stream<Feat> scrapeFeats() {
        try {
            return StreamUtils.concat(List.of(
                    scrapeFeatDirectoryPage(new URL("https://www.d20pfsrd.com/feats/general-feats"), FeatType.GENERAL),
                    scrapeFeatDirectoryPage(new URL("https://www.d20pfsrd.com/feats/combat-feats"), FeatType.COMBAT),
                    scrapeFeatDirectoryPage(new URL("https://www.d20pfsrd.com/feats/grit-feats"), FeatType.GRIT),
                    scrapeFeatDirectoryPage(new URL("https://www.d20pfsrd.com/feats/panache-feats"), FeatType.PANACHE),
                    scrapeFeatDirectoryPage(new URL("https://www.d20pfsrd.com/feats/metamagic-feats"), FeatType.METAMAGIC),
                    scrapeFeatDirectoryPage(new URL("https://www.d20pfsrd.com/feats/racial-feats"), FeatType.RACIAL),
                    scrapeFeatDirectoryPage(new URL("https://www.d20pfsrd.com/feats/style-feats"), FeatType.STYLE),
                    scrapeFeatDirectoryPage(new URL("https://www.d20pfsrd.com/feats/teamwork-feats"), FeatType.TEAMWORK)
            ));
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private Stream<Feat> scrapeFeatDirectoryPage(URL url, Feat.FeatType type) throws IOException {
        Document document = fetch(url);
        Element content = contentElement(document);

        Elements tables = content.select("table");

        return tables.stream()
                .flatMap(table -> table.select("tr").stream())
                .map(row -> row.select("td.text").first())
                .filter(Objects::nonNull)
                .map(cell -> {
                    try {
                        Element a = cell.select("a").first();
                        if (a == null) {
                            log.warn("No link to feat page found in " + cell);
                            return null;
                        }
                        return abilityPageScraper.scrape(AttributeType.FEAT, type.name(), new URL(a.attr("href")));
                    } catch (IOException e) {
                        log.error("Failed to scrape: " + url, e);
                        return null;
//                        throw new UncheckedIOException(e);
                    }
                })
                .filter(Objects::nonNull)
                .map(feature -> featureToFeat(feature, type));
    }

    private Feat featureToFeat(Feature feature, Feat.FeatType type) {
        var descSections = feature.description().sections();

        return new Feat(
                feature.id(),
                feature.name(),
                feature.type(),
                feature.description().text(),
                feature.prerequisites(),
                "",
                descSections.getOrDefault("Benefit", ""),
                descSections.getOrDefault("Normal", ""),
                descSections.getOrDefault("Special", ""),
                feature.source(),
                type == FeatType.TEAMWORK,
                type == FeatType.CRITICAL,
                type == FeatType.GRIT,
                type == FeatType.STYLE,
                type == FeatType.PERFORMANCE,
                type == FeatType.RACIAL,
                type == FeatType.COMPANION,
                "",
                descSections.getOrDefault("Note", ""),
                descSections.getOrDefault("Goal", ""),
                descSections.getOrDefault("Completion Benefit", ""),
                false,
                ""
        );
    }
}
