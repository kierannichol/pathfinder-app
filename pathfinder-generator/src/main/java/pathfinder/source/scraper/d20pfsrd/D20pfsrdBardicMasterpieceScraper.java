package pathfinder.source.scraper.d20pfsrd;

import java.io.IOException;
import java.net.URL;
import java.util.Optional;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.model.Spell;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.BardicMasterpieceSourceDatabase;
import pathfinder.util.NameUtils;

@Service("d20pfsrd Bardic Masterpiece Scraper")
@RequiredArgsConstructor
@Slf4j
public class D20pfsrdBardicMasterpieceScraper extends AbstractD20pfsrdTablePageScraper<Spell> implements
        BardicMasterpieceSourceDatabase {
    private final D20pfsrdSpellPageScraper spellPageScraper;

    @Override
    protected URL url() throws IOException {
        return new URL("https://www.d20pfsrd.com/classes/core-classes/bard/bardic-masterpieces/");
    }

    @Override
    protected Optional<Spell> transformRow(Row row) throws IOException {
        if (row.size() != 6) {
            return Optional.empty();
        }

        String href = row.element(0).select("a").attr("href");
        Spell.SpellBuilder builder = spellPageScraper.scrape(AttributeType.BARDIC_MASTERPIECE, new URL(href));

        String name = row.text(0);
        name = NameUtils.fixNameOrder(name);
        builder.name(name);
        builder.id(NameToIdConverter.generateId(AttributeType.BARDIC_MASTERPIECE, name));

        Spell spell = builder.build();
        if (spell.source() == null) {
            return Optional.empty();
        }
        return Optional.of(spell);
    }

    @Override
    public Stream<Spell> streamSpells() throws IOException {
        return stream();
    }
}
