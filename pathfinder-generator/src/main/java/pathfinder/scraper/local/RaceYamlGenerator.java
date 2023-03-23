package pathfinder.scraper.local;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.pathfinder.Race;
import pathfinder.model.pathfinder.Size;
import pathfinder.scraper.remote.d20pfsrd.D20pfsrdRaceScraper;

@Service("Race YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class RaceYamlGenerator extends AbstractLocalYamlDatabaseGenerator implements LocalSourceDatabaseGenerator {

    private final D20pfsrdRaceScraper scraper;

    public void generateLocalDatabase() {
        var database = scraper.streamRaces()
                .map(scraped -> {
                    Size size = Size.findByLongName(scraped.size())
                            .orElseThrow();

                    return new Race(
                            scraped.id(),
                            scraped.name(),
                            size.longName(),
                            scraped.speed(),
                            scraped.type(),
                            scraped.source());
                });

        save("race_database.yml", database);
    }
}
