package pathfinder.source.scraper;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;
import pathfinder.model.Spell;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.SpellSourceDatabase;

@Service("d20pfsrd Spell Scraper")
@Slf4j
public class D20pfsrdSpellScraper extends AbstractD20pfsrdScraper<List<Spell>> implements
        SpellSourceDatabase {

    @Override
    public List<Spell> scrape() throws IOException {
        Document masterList = fetch(new URL("https://www.d20pfsrd.com/magic/all-spells/"));

        log.info("Scraping spells...");
        return masterList.select("a").stream()
                .filter(link -> link.attr("href").startsWith("https://www.d20pfsrd.com/magic/all-spells/"))
                .map(link -> {
                    String name = link.text();
                    String id = NameToIdConverter.generateId(AttributeType.SPELL, name);
                    return new Spell(id, name);
//                    try {
//                        return scrapeSpell(new URL(link.attr("href")));
//                    } catch (IOException e) {
//                        throw new UncheckedIOException(e);
//                    }
                })
                .toList();
    }

    private Spell scrapeSpell(URL url) throws IOException {
        Document document = fetch(url);
        Element content = document.getElementById("article-content");

        String name = content.select("h1").first().text();
        // TODO: add rest of details

        String id = NameToIdConverter.generateId(AttributeType.SPELL, name);

        return new Spell(id, name);
    }

    @Override
    public Stream<Spell> stream() throws IOException {
        return scrape().stream();
    }
}
