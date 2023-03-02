package pathfinder.source.scraper.d20pfsrd;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import pathfinder.model.v4.Description;
import pathfinder.model.v4.pathfinder.Feature;
import pathfinder.model.v4.pathfinder.Feature.Type;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.AlchemistDiscoverySourceDatabase;
import pathfinder.util.NameUtils;

@Service("d20pfsrd Alchemist Discovery Scraper")
@Slf4j
public class D20pfsrdAlchemistDiscoveryScraper extends AbstractD20pfsrdScraper implements
        AlchemistDiscoverySourceDatabase {

    public List<Feature> scrape() throws IOException {
        Document document = fetch(
                new URL("https://www.d20pfsrd.com/classes/base-classes/alchemist/discoveries/"));

        List<Feature> abilities = new ArrayList<>();

        Elements tableRows = document.select("table[border=1] tbody tr");
        tableRows.forEach(row -> {
            Elements columns = row.select("td");
            if (columns.size() != 4) {
                return;
            }

            String name = NameUtils.sanitize(columns.get(0).text());
            String prerequisites = columns.get(1).text();
            if (prerequisites.equals("—")) {
                prerequisites = "";
            }
            String benefits = columns.get(2).text();
            String source = columns.get(3).text();

            String type = Type.fromFeatureName(name);
            name = Type.removeTypeFromName(name);

            Feature ability = Feature.builder()
                    .id(NameToIdConverter.generateId(AttributeType.ALCHEMIST_DISCOVERY, name))
                    .name(name)
                    .type(type)
                    .prerequisites(prerequisites)
                    .description(Description.create(benefits))
                    .source(source)
                    .build();

            abilities.add(ability);
        });

        return abilities;
    }

    @Override
    public Stream<Feature> streamAbilities() {
        try {
            return scrape().stream();
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
