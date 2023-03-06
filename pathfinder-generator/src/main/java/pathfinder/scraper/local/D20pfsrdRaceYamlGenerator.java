package pathfinder.scraper.local;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.fasterxml.jackson.dataformat.yaml.YAMLGenerator.Feature;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UncheckedIOException;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.json.PathfinderJsonModule;
import pathfinder.model.pathfinder.Race;
import pathfinder.model.pathfinder.Size;
import pathfinder.scraper.remote.d20pfsrd.AbstractD20pfsrdScraper;
import pathfinder.scraper.remote.d20pfsrd.D20pfsrdRaceScraper;

@Service("d20pfsrd Race YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class D20pfsrdRaceYamlGenerator extends AbstractD20pfsrdScraper implements LocalSourceDatabaseGenerator {

    private final D20pfsrdRaceScraper scraper;

    public void generateLocalDatabase() {

        File file = new File("race_database.yml");
        file.delete();

        List<Race> raceDatabase = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper(new YAMLFactory()
                .disable(Feature.WRITE_DOC_START_MARKER))
                .registerModule(new PathfinderJsonModule())
                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE);

        scraper.streamRaces()
                .forEach(scraped -> {
                    Size size = Size.findByLongName(scraped.size())
                            .orElseThrow();

                    raceDatabase.add(new Race(
                            scraped.id(),
                            scraped.name(),
                            size.longName(),
                            scraped.speed(),
                            scraped.type(),
                            "PZO1110"));
                });

        try (OutputStream fos = new FileOutputStream(file)) {
            objectMapper.writeValue(fos, raceDatabase);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
