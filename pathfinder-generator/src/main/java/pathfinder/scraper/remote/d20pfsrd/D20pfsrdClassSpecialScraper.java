package pathfinder.scraper.remote.d20pfsrd;

import java.net.URL;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.stereotype.Component;
import pathfinder.model.AttributeType;
import pathfinder.model.Description;
import pathfinder.model.pathfinder.Feature;
import pathfinder.scraper.remote.ScrapedFeature;
import pathfinder.scraper.remote.d20pfsrd.AbstractD20pfsrdTablePageScraper.Row;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.StreamUtils;

@Component
@RequiredArgsConstructor
public class D20pfsrdClassSpecialScraper extends AbstractD20pfsrdScraper {
    private final D20pfsrdFeaturePageScraper featurePageScraper;

    public Stream<Feature> streamFeatures() {
        return StreamUtils.concat(List.of(
                scrapeTablePage("https://www.d20pfsrd.com/classes/hybrid-classes/slayer/slayer-talents/", this::slayerTalent)
        ));
    }

    @SneakyThrows
    private Feature slayerTalent(Row row) {
        if (row.size() != 4) {
            return null;
        }

        String name = row.text(0);

        String prerequisites = row.text(1);
        if (prerequisites.equals("—")) {
            prerequisites = "";
        }
        String benefit = row.text(2);
        Description description = Description.empty().addSection("Benefit", benefit);
        String source = row.text(3);

        String featureUrl = row.element(0).select("a").attr("href");
        if (!featureUrl.isBlank()) {
            Optional<ScrapedFeature> maybeScrapedFeature = featurePageScraper.scrape(
                    new URL(featureUrl));

            if (maybeScrapedFeature.isPresent()) {
                ScrapedFeature scrapedFeature = maybeScrapedFeature.get();
                name = scrapedFeature.name();
                description = Description.create(scrapedFeature.description());
                scrapedFeature.blocks().forEach(description::addSection);
            }
        }

        String type = Feature.Type.fromFeatureName(name);
        name = Feature.Type.removeTypeFromName(name);

        return new Feature(
                NameToIdConverter.generateId(AttributeType.SLAYER_TALENT, name),
                name,
                type,
                description,
                prerequisites,
                source);
    }
}
