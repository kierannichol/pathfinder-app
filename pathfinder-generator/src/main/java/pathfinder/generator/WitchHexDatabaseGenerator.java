package pathfinder.generator;

import java.io.IOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.model.Spell;
import pathfinder.source.WitchHexSourceDatabase;
import pathfinder.spring.ConditionalOnGeneratorEnabled;

@Component("Witch Hex Database Generator")
@ConditionalOnGeneratorEnabled("witch.hex")
@RequiredArgsConstructor
public class WitchHexDatabaseGenerator extends AbstractSpellDatabaseGenerator {
    private final WitchHexSourceDatabase sourceDatabase;

    @Override
    protected Stream<Spell> streamModels() throws IOException {
        return sourceDatabase.streamSpells()
                .filter(KNOWN_SOURCES);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "witch_hex";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "WitchHexDatabase";
    }
}
