package pathfinder.scraper.local;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Sources;
import pathfinder.scraper.remote.excel.ExcelRagePowerSourceDatabase;

@Service("Rage Power YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class RagePowerYamlGenerator extends AbstractLocalYamlSourceDatabase implements LocalSourceDatabaseGenerator {

    private final ExcelRagePowerSourceDatabase scraper;

    public void generateLocalDatabase() {
        Stream<Feature> featureStream = scraper.streamAbilities()
                .map(ability -> new Feature(ability.id(), ability.name(), ability.type(), ability.description(), ability.prerequisites(),
//                        ability.source().code()
                        Sources.CORE.code()
                ));

        save("rage_power_database.yml", featureStream);
    }
}
