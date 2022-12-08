package pathfinder.generator;

import java.io.IOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.model.CharacterModifier;
import pathfinder.parser.AttributeType;
import pathfinder.source.OracleMysterySourceDatabase;
import pathfinder.spring.ConditionalOnGeneratorEnabled;

@Service("Oracle Mystery Database Generator")
@ConditionalOnGeneratorEnabled("oracle.mystery")
@RequiredArgsConstructor
public class OracleMysteryDatabaseGenerator extends AbstractCharacterModifierDatabaseGenerator {
    private final OracleMysterySourceDatabase sourceDatabase;

    @Override
    protected Stream<CharacterModifier> streamModels() throws IOException {
        return sourceDatabase.streamModifiers()
                .filter(KNOWN_SOURCES);
    }

    @Override
    protected String getRelativeOutputPath() {
        return AttributeType.ORACLE_MYSTERY.key();
    }

    @Override
    protected String getOutputDatabaseName() {
        return "OracleMysteryDatabase";
    }
}
