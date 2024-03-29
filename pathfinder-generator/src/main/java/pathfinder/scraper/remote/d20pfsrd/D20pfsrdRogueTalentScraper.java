package pathfinder.scraper.remote.d20pfsrd;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.UncheckedIOException;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import pathfinder.generator.db.RogueTalentSourceDatabase;
import pathfinder.model.AttributeType;
import pathfinder.model.Description;
import pathfinder.model.pathfinder.Feature;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.NameUtils;

@Service("d20pfsrd Rogue Talent Scraper")
@Slf4j
public class D20pfsrdRogueTalentScraper extends AbstractD20pfsrdScraper implements
        RogueTalentSourceDatabase {

    public List<Feature> scrape() throws IOException {
        Document document = fetch(
                new URL("https://www.d20pfsrd.com/classes/core-classes/rogue/rogue-talents/"));

        List<Feature> rogueTalents = new ArrayList<>();

        Elements tableRows = document.select("table[border=1] tbody tr");
        tableRows.forEach(row -> {
            Elements columns = row.select("td");
            String name = NameUtils.sanitize(columns.get(0).text());
            String prerequisites = columns.get(1).text();
            if (prerequisites.equals("—")) {
                prerequisites = "";
            }
            String benefits = columns.get(2).text();
            String source = columns.get(3).text();

            String type = Feature.Type.fromFeatureName(name);
            name = Feature.Type.removeTypeFromName(name);

            Feature ability = Feature.builder()
                    .id(NameToIdConverter.generateId(AttributeType.ROGUE_TALENT, name))
                    .name(name)
                    .type(type)
                    .prerequisites(prerequisites)
                    .description(Description.create(benefits))
                    .source(source)
                    .build();

            rogueTalents.add(ability);
        });

        return rogueTalents;
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
