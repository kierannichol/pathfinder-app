package pathfinder.scraper.remote.d20pfsrd;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import pathfinder.generator.db.RaceSourceDatabase;
import pathfinder.model.pathfinder.D20pfsrdRace;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.NameUtils;

@Service("d20pfsrd Race Scraper")
@Slf4j
@RequiredArgsConstructor
public class D20pfsrdRaceScraper extends AbstractD20pfsrdScraper implements
        RaceSourceDatabase {

    public List<D20pfsrdRace> scrape() throws IOException {
        Document document = fetch(
                new URL("https://www.d20pfsrd.com/races/"));

        List<D20pfsrdRace> races = new ArrayList<>();

        Elements tableRows = document.select("table[border=1] tbody tr");
        tableRows.forEach(row -> {
            Elements columns = row.select("td");
            if (columns.size() != 14) {
                return;
            }

            String name = NameUtils.sanitize(columns.get(0).text());
            List<String> abilityScorePlus = split(columns.get(1).text());
            List<String> abilityScoreMinus = split(columns.get(2).text());
            String sizeText = columns.get(3).text();
            String typeText = columns.get(4).text();
            String speedText = columns.get(5).text();
            List<String> startingLanguages = split(columns.get(6).text());
            List<String> senses = split(columns.get(7).text());
            List<String> defensiveTraits = split(columns.get(8).text());
            List<String> offensiveTraits = split(columns.get(9).text());
            List<String> skillBonuses = split(columns.get(10).text());
            List<String> bonusFeats = split(columns.get(11).text());
            List<String> spsuAbilities = split(columns.get(12).text());
            String sourceText;

            if (speedText.isBlank()) {
                return;
            }

            try {
                String racePageUrl = columns.get(0).select("a").first().attr("href");
                Document raceDocument = fetch(new URL(racePageUrl));
                sourceText = scrapeSourceFromCopyrightSection(raceDocument).trim();
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }

            if (sourceText.isBlank()) {
                sourceText = Sources.CORE.code();
            }
            Source source = Sources.findSourceByNameOrCode(sourceText);
            if (source != null) {
                sourceText = source.code();
            }

            D20pfsrdRace race = new D20pfsrdRace(
                    NameToIdConverter.raceId(name),
                    name,
                    abilityScorePlus,
                    abilityScoreMinus,
                    sizeText,
                    typeText,
                    Integer.parseInt(speedText.split(" ")[0]),
                    startingLanguages,
                    senses,
                    defensiveTraits,
                    offensiveTraits,
                    skillBonuses,
                    bonusFeats,
                    spsuAbilities,
                    sourceText
            );
            races.add(race);
        });

        return races;
    }

    @Override
    public Stream<D20pfsrdRace> streamRaces() {
        try {
            return scrape().stream();
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private static List<String> split(String bulk) {
        return Arrays.stream(bulk.split(","))
                .map(NameUtils::sanitize)
                .map(String::trim)
                .filter(str -> !str.isBlank())
                .toList();
    }
}
