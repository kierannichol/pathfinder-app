package pathfinder.source.scraper;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import pathfinder.model.Ability;
import pathfinder.model.Ability.Type;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.AlchemistDiscoverySourceDatabase;
import pathfinder.util.NameUtils;

@Service("d20pfsrd Alchemist Discovery Scraper")
@Slf4j
public class D20pfsrdAlchemistDiscoveryScraper extends AbstractD20pfsrdScraper<List<Ability>> implements
        AlchemistDiscoverySourceDatabase {

    @Override
    public List<Ability> scrape() throws IOException {
        Document document = fetch(
                new URL("https://www.d20pfsrd.com/classes/base-classes/alchemist/discoveries/"));

        List<Ability> abilities = new ArrayList<>();

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

            Type type = Type.fromAbilityName(name);
            name = Type.removeTypeFromName(name);

            Ability ability = Ability.builder()
                    .id(NameToIdConverter.generateId(AttributeType.ALCHEMIST_DISCOVERY, name))
                    .name(name)
                    .type(type)
                    .prerequisites(prerequisites)
                    .description(benefits)
                    .source(source)
                    .build();

            abilities.add(ability);
        });

        return abilities;
    }

    @Override
    public Stream<Ability> stream() throws IOException {
        return scrape().stream();
    }
}
