package pathfinder.scraper.local;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.scraper.remote.d20pfsrd.D20pfsrdClassScraper;

@Service("Class YAML Generator")
@Slf4j
@RequiredArgsConstructor
public class ClassYamlGenerator extends AbstractLocalYamlDatabaseGenerator {
    private static final String DATABASE_FILE = "class_database.yml";

    private final D20pfsrdClassScraper scraper;

    public void generateLocalDatabase() {
        save(DATABASE_FILE, scraper.streamClasses());
    }

}
