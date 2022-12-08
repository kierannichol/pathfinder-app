package pathfinder.generator;

import java.io.IOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.model.Spell;
import pathfinder.parser.AttributeType;
import pathfinder.source.BardicMasterpieceSourceDatabase;
import pathfinder.spring.ConditionalOnGeneratorEnabled;

@Service("Bardic Masterpiece Database Generator")
@ConditionalOnGeneratorEnabled("bardic.masterpiece")
@RequiredArgsConstructor
public class BardicMasterpieceDatabaseGenerator extends AbstractSpellDatabaseGenerator {
    private final BardicMasterpieceSourceDatabase sourceDatabase;

    @Override
    protected Stream<Spell> streamModels() throws IOException {
        return sourceDatabase.streamSpells()
                .filter(KNOWN_SOURCES);
    }

    @Override
    protected String getRelativeOutputPath() {
        return AttributeType.BARDIC_MASTERPIECE.key();
    }

    @Override
    protected String getOutputDatabaseName() {
        return "BardicMasterpieceDatabase";
    }
}
