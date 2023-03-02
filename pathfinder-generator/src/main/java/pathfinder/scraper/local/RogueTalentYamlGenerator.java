package pathfinder.scraper.local;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.v4.pathfinder.Feature;
import pathfinder.source.scraper.d20pfsrd.D20pfsrdRogueTalentScraper;

@Service("Rogue Talent YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class RogueTalentYamlGenerator extends AbstractLocalYamlSourceDatabase implements LocalSourceDatabaseGenerator {

    private final D20pfsrdRogueTalentScraper scraper;

    public void generateLocalDatabase() {
        Stream<Feature> featureStream = scraper.streamAbilities()
                .map(ability -> new Feature(
                        ability.id(),
                        ability.name(),
                        ability.type(),
                        ability.description(),
                        ability.prerequisites(),
                        ability.source()));

        save("rogue_talent_database.yml", featureStream);
    }
}
