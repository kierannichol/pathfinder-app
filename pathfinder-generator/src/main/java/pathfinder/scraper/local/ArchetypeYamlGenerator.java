package pathfinder.scraper.local;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.scraper.remote.d20pfsrd.D20pfsrdArchetypeScraper;

@Component
@RequiredArgsConstructor
@Slf4j
public class ArchetypeYamlGenerator extends AbstractLocalYamlDatabaseGenerator {
    private final D20pfsrdArchetypeScraper scraper;

    public void generateLocalDatabase() {
        save("archetype_database.yml",
                scraper.scrapeArchetypes());
    }
}
