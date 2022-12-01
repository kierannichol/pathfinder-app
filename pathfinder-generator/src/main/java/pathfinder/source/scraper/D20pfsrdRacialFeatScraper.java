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
import pathfinder.model.Feat;
import pathfinder.model.Feat.Type;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.FeatSourceDatabase;
import pathfinder.util.NameUtils;

@Service("d20pfsrd Racial Feat Scraper")
@Slf4j
public class D20pfsrdRacialFeatScraper extends AbstractD20pfsrdScraper<List<Feat>> implements
        FeatSourceDatabase {

    @Override
    public List<Feat> scrape() throws IOException {
        Document document = fetch(
                new URL("https://www.d20pfsrd.com/feats/racial-feats/"));

        List<Feat> feats = new ArrayList<>();

        Elements tableRows = document.select("table[border=1] tbody tr");
        tableRows.forEach(row -> {
            Elements columns = row.select("td");
            if (columns.size() != 5) {
                return;
            }

            String name = NameUtils.sanitize(columns.get(0).text());
            name = NameUtils.fixNameOrder(name);

            String typeText = columns.get(1).text().trim();
            if (typeText.length() <= 2) {
                typeText = "";
            }
            String prerequisites = columns.get(2).text();
            if (prerequisites.equals("—")) {
                prerequisites = "";
            }
            String benefit = columns.get(3).text();
            String sourceText = columns.get(4).text();

            List<Feat.Type> types = new ArrayList<>();
            if (!typeText.isBlank()) {
                types.add(Feat.Type.valueOf(typeText.toUpperCase()));
            }
            types.add(Type.RACIAL);

            name = Ability.Type.removeTypeFromName(name);

            String id = NameToIdConverter.featId(name);

            Feat feat = new Feat(
                    id,
                    name,
                    types,
                    "",
                    prerequisites,
                    benefit,
                    "",
                    "",
                    sourceText,
                    false,
                    "",
                    false
            );

            feats.add(feat);
        });

        return feats;
    }

    @Override
    public Stream<Feat> stream() throws IOException {
        return scrape().stream();
    }
}
