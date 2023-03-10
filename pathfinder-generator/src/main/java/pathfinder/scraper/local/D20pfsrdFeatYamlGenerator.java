package pathfinder.scraper.local;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UncheckedIOException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.pathfinder.Feat;
import pathfinder.scraper.remote.d20pfsrd.D20pdsrdFeatScrapper;

@Service("d20pfsrd Feat YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class D20pfsrdFeatYamlGenerator implements LocalSourceDatabaseGenerator {
    private final D20pdsrdFeatScrapper featScrapper;
    private final ObjectMapper objectMapper;

    public void generateLocalDatabase() {
        try {
            File file = new File("feat_database.yml");
            file.delete();

            List<Feat> featDatabase = featScrapper.scrapeFeats().toList();

            try (OutputStream fos = new FileOutputStream(file)) {
                objectMapper.writeValue(fos, featDatabase);
            }
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
