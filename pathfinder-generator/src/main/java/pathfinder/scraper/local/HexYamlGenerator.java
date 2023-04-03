package pathfinder.scraper.local;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.scraper.remote.d20pfsrd.D20pfsrdHexScraper;

@Component
@RequiredArgsConstructor
public class HexYamlGenerator extends AbstractLocalYamlDatabaseGenerator {
    private final D20pfsrdHexScraper scraper;

    @Override
    public void generateLocalDatabase() {
        save("hex_database.yml", scraper.scrapeHexes());
    }
}
