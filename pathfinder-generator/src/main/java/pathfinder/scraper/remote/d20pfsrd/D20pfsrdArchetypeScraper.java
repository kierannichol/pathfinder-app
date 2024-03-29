package pathfinder.scraper.remote.d20pfsrd;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.local.ClassSourceDatabase;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.util.StreamUtils;

@Component
@RequiredArgsConstructor
@Slf4j
public class D20pfsrdArchetypeScraper extends AbstractD20pfsrdScraper {
    private final D20pdsrdArchetypePageScraper archetypePageScraper;
    private final ClassSourceDatabase classSourceDatabase;

    public Stream<Archetype> scrapeArchetypes() {
        return StreamUtils.concat(List.of(classSourceDatabase.streamClasses()
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
                }),
                scrapePaladinOaths()));
    }

    public Stream<Archetype> scrapePaladinOaths() {
        try {
            return scrapeArchetypes(Id.of("class:paladin"), "https://www.d20pfsrd.com/classes/core-classes/paladin/archetypes/paizo-paladin-archetypes/oathbound-paladin");
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
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
