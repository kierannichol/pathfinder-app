package pathfinder.scraper.local;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.pathfinder.BloodragerBloodline;
import pathfinder.scraper.remote.nethys.NethysBloodragerBloodlineScraper;

@Service("Bloodrager Bloodline YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class BloodragerBloodlineYamlGenerator extends AbstractLocalYamlSourceDatabase implements LocalSourceDatabaseGenerator {

    private final NethysBloodragerBloodlineScraper scraper;

    public void generateLocalDatabase() {
        Stream<BloodragerBloodline> stream = scraper.streamBloodlines();
        save("bloodrager_bloodline_database.yml", stream);
    }
}
