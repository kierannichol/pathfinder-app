package pathfinder.source.scraper.d20pfsrd;

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
import pathfinder.model.Sources;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.RogueTalentSourceDatabase;
import pathfinder.util.NameUtils;

@Service("d20pfsrd Rogue Talent Scraper")
@Slf4j
public class D20pfsrdRogueTalentScraper extends AbstractD20pfsrdScraper implements
        RogueTalentSourceDatabase {

    public List<Ability> scrape() throws IOException {
        Document document = fetch(
                new URL("https://www.d20pfsrd.com/classes/core-classes/rogue/rogue-talents/"));

        List<Ability> rogueTalents = new ArrayList<>();

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

            Type type = Ability.Type.fromAbilityName(name);
            name = Ability.Type.removeTypeFromName(name);

            Ability ability = Ability.builder()
                    .id(NameToIdConverter.generateId(AttributeType.ROGUE_TALENT, name))
                    .name(name)
                    .type(type)
                    .prerequisites(prerequisites)
                    .description(benefits)
                    .source(Sources.findSourceByNameOrCode(source))
                    .build();

            rogueTalents.add(ability);
        });

        return rogueTalents;
    }

    @Override
    public Stream<Ability> streamAbilities() throws IOException {
        return scrape().stream();
    }
}
