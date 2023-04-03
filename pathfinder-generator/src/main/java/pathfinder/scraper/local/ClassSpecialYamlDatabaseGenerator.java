package pathfinder.scraper.local;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.scraper.remote.d20pfsrd.D20pfsrdClassSpecialScraper;

@Component("Class Special YAML Database Generator")
@RequiredArgsConstructor
public class ClassSpecialYamlDatabaseGenerator extends AbstractLocalYamlDatabaseGenerator {
    private final D20pfsrdClassSpecialScraper scraper;

    @Override
    public void generateLocalDatabase() {
        save("class_special_database.yml", scraper.streamFeatures());
    }
}
