package pathfinder.scraper.local;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.v4.pathfinder.Archetype;
import pathfinder.source.scraper.d20pfsrd.AbstractD20pfsrdScraper;
import pathfinder.source.scraper.d20pfsrd.D20pdsrdArchetypePageScraper;
import pathfinder.source.v4.ClassSourceDatabase;

@Component
@RequiredArgsConstructor
@Slf4j
public class D20pdsrfArchetypeYamlGenerator extends AbstractD20pfsrdScraper {
    private final D20pdsrdArchetypePageScraper archetypePageScraper;
    private final ClassSourceDatabase classSourceDatabase;
    private final ObjectMapper yaml;

    public void generateLocalDatabase() {
        try {
            File file = new File("archetype_database.yml");
            file.delete();

            List<Archetype> archetypeDatabase = new ArrayList<>();

            scrape().forEach(archetypeDatabase::add);

            try (OutputStream fos = new FileOutputStream(file)) {
                yaml.writeValue(fos, archetypeDatabase);
            }
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private Stream<Archetype> scrape() {
        return classSourceDatabase.streamClasses()
                .flatMap(characterClass -> {
                    Id id = characterClass.id();
                    try {
                        return scrapeArchetypes(characterClass.id(),
                                "https://www.d20pfsrd.com/classes/%s-classes/%s/archetypes/paizo-%s-archetypes/"
                                        .formatted(characterClass.category().toLowerCase(), id.key, id.key));
                    } catch (IOException e) {
                        log.error("Error scraping archetypes for " + id, e);
                        return Stream.empty();
                    }
                });
    }

    private Stream<Archetype> scrapeArchetypes(Id classId, String url) throws IOException {
        Document document = fetch(new URL(url));
        Element content = contentElement(document);

        return content.select("ul.ogn-childpages li a").stream().map(link -> {
            try {
                return archetypePageScraper.scrape(classId, new URL(link.attr("href")));
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }
        });
    }
}
