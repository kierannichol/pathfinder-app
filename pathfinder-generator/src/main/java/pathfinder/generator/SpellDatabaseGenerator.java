package pathfinder.generator;

import java.io.IOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.model.Spell;
import pathfinder.source.scraper.nethys.NethysSpellsScraper;

@Service("Spell Database Generator")
@RequiredArgsConstructor
public class SpellDatabaseGenerator extends AbstractSpellDatabaseGenerator {
    private final NethysSpellsScraper sourceDatabase;

    @Override
    protected Stream<Spell> streamModels() throws IOException {
        return sourceDatabase.streamSpells()
                .filter(KNOWN_SOURCES);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "spells";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "SpellDatabase";
    }
}
