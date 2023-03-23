package pathfinder.scraper.local;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.pathfinder.Feature;
import pathfinder.scraper.remote.d20pfsrd.D20pfsrdMagusArcanaScraper;

@Service("Magus Arcana YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class MagusArcanaYamlGeneratorGenerator extends AbstractLocalYamlDatabaseGenerator implements LocalSourceDatabaseGenerator {

    private final D20pfsrdMagusArcanaScraper magusArcanaScraper;

    public void generateLocalDatabase() {
        Stream<Feature> featureStream = magusArcanaScraper.streamAbilities()
                .map(ability -> new Feature(ability.id(), ability.name(), ability.type(), ability.description(), ability.prerequisites(), ability.source()));

        save("magus_arcana_database.yml", featureStream);
    }
}
