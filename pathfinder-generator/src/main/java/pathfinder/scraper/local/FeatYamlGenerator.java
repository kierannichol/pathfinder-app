package pathfinder.scraper.local;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.pathfinder.Feat;
import pathfinder.scraper.remote.d20pfsrd.D20pdsrdFeatScrapper;

@Service("Feat YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class FeatYamlGenerator extends AbstractLocalYamlDatabaseGenerator {
    private final D20pdsrdFeatScrapper featScrapper;

    public void generateLocalDatabase() {
        List<Feat> featDatabase = featScrapper.scrapeFeats().toList();
        save("feat_database.yml", featDatabase);
    }
}
