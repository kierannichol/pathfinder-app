package pathfinder.scraper.local;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.scraper.remote.nethys.NethysSorcererBloodlineScraper;

@Service("Sorcerer Bloodline YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class SorcererBloodlineYamlGenerator extends AbstractLocalYamlDatabaseGenerator implements LocalSourceDatabaseGenerator {

    private final NethysSorcererBloodlineScraper scraper;

    public void generateLocalDatabase() {
        Stream<Bloodline> stream = scraper.streamBloodlines();
        save("sorcerer_bloodline_database.yml", stream);
    }
}
