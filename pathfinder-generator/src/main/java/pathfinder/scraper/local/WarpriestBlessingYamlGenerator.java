package pathfinder.scraper.local;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.scraper.remote.d20pfsrd.D20pfsrdWarpriestBlessingScraper;

@Service("Warpriest Blessing YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class WarpriestBlessingYamlGenerator extends AbstractLocalYamlDatabaseGenerator implements LocalSourceDatabaseGenerator {
    private final D20pfsrdWarpriestBlessingScraper scraper;

    @Override
    public void generateLocalDatabase() {

        save("warpriest_blessing_database.yml", scraper.scrape());
    }
}
