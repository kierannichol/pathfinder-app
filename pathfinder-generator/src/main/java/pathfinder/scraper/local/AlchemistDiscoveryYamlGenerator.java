package pathfinder.scraper.local;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.pathfinder.Feature;
import pathfinder.scraper.remote.d20pfsrd.D20pfsrdAlchemistDiscoveryScraper;

@Service("Alchemist Discovery YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class AlchemistDiscoveryYamlGenerator extends AbstractLocalYamlDatabaseGenerator implements LocalSourceDatabaseGenerator {

    private final D20pfsrdAlchemistDiscoveryScraper scraper;

    public void generateLocalDatabase() {
        Stream<Feature> featureStream = scraper.streamAbilities()
                .map(ability -> new Feature(ability.id(), ability.name(), ability.type(), ability.description(), ability.prerequisites(), ability.source()));

        save("alchemist_discovery_database.yml", featureStream);
    }
}
