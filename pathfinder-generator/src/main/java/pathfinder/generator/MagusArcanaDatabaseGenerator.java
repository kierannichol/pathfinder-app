package pathfinder.generator;

import java.io.IOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.model.Ability;
import pathfinder.source.MagusArcanaSourceDatabase;
import pathfinder.spring.ConditionalOnGeneratorEnabled;

@Service("Magus Arcana Database Generator")
@ConditionalOnGeneratorEnabled("magus.arcana")
@RequiredArgsConstructor
public class MagusArcanaDatabaseGenerator extends AbstractAbilityDatabaseGenerator {

    private final MagusArcanaSourceDatabase sourceDatabase;

    @Override
    protected Stream<Ability> streamModels() throws IOException {
        return sourceDatabase.streamAbilities()
                .filter(KNOWN_SOURCES);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "magusarcana";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "MagusArcanaDatabase";
    }
}
