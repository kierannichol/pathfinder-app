package pathfinder.source.scraper.d20pfsrd;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import pathfinder.model.Spell;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.SpellSourceDatabase;

//@Service("d20pfsrd Spell Scraper")
@Slf4j
public class D20pfsrdSpellScraper extends AbstractD20pfsrdScraper implements
        SpellSourceDatabase {

    public List<Spell> scrape() throws IOException {
        Document masterList = fetch(new URL("https://www.d20pfsrd.com/magic/all-spells/"));

        log.info("Scraping spells...");
        return masterList.select("a").stream()
                .filter(link -> link.attr("href").startsWith("https://www.d20pfsrd.com/magic/all-spells/"))
                .map(link -> {
                    String name = link.text();
                    String id = NameToIdConverter.generateId(AttributeType.SPELL, name);
                    return Spell.builder()
                            .id(id)
                            .name(name)
                            .build();
                })
                .toList();
    }

    private Spell scrapeSpell(URL url) throws IOException {
        Document document = fetch(url);
        Element content = document.getElementById("article-content");

        String name = content.select("h1").first().text();
        // TODO: add rest of details

        String id = NameToIdConverter.generateId(AttributeType.SPELL, name);

        return Spell.builder()
                .id(id)
                .name(name)
                .build();
    }

    @Override
    public Stream<Spell> streamSpells() throws IOException {
        return scrape().stream();
    }
}
