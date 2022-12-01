package pathfinder.source.scraper;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import pathfinder.model.Ability.Type;
import pathfinder.model.Race;
import pathfinder.model.Size;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.RaceSourceDatabase;
import pathfinder.util.NameUtils;

@Service("d20pfsrd Race Scraper")
@Slf4j
public class D20pfsrdRaceScraper extends AbstractD20pfsrdScraper<List<Race>> implements
        RaceSourceDatabase {

    @Override
    public List<Race> scrape() throws IOException {
        Document document = fetch(
                new URL("https://www.d20pfsrd.com/races/"));

        List<Race> races = new ArrayList<>();

        Elements tableRows = document.select("table[border=1] tbody tr");
        tableRows.forEach(row -> {
            Elements columns = row.select("td");
            if (columns.size() != 14) {
                return;
            }

            String name = NameUtils.sanitize(columns.get(0).text());
            String abilityScorePlus = columns.get(1).text();
            String abilityScoreMinus = columns.get(2).text();
            String sizeText = columns.get(3).text();
            String typeText = columns.get(4).text();
            String speedText = columns.get(5).text();
            String startingLanguages = columns.get(6).text();
            String senses = columns.get(7).text();
            String defensiveTraits = columns.get(8).text();
            String offensiveTraits = columns.get(9).text();
            String skillBonuses = columns.get(10).text();
            String bonusFeats = columns.get(11).text();
            String specialAbilities = columns.get(12).text();
            String racePoints = columns.get(13).text();

            Type type = Type.fromAbilityName(name);
            name = Type.removeTypeFromName(name);

            if (speedText.isBlank()) {
                return;
            }

            Race race = new Race(
                    NameToIdConverter.raceId(name),
                    name,
                    Size.findByLongName(sizeText).orElseThrow(() -> new NoSuchElementException(sizeText)),
                    typeText,
                    Integer.parseInt(speedText.split(" ")[0]),
                    Arrays.stream(startingLanguages.split(","))
                            .map(NameUtils::sanitize)
                            .toList(),
                    List.of() // TODO: fill in traits
            );
            races.add(race);
        });

        return races;
    }

    @Override
    public Stream<Race> stream() throws IOException {
        return scrape().stream();
    }
}
