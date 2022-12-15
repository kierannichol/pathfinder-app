package pathfinder.generator;

import java.io.IOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.model.Ability;
import pathfinder.source.AlchemistDiscoverySourceDatabase;

@Service("Alchemist Discovery Database Generator")
@RequiredArgsConstructor
public class AlchemistDiscoveryDatabaseGenerator extends AbstractAbilityDatabaseGenerator {

    private final AlchemistDiscoverySourceDatabase sourceDatabase;

    @Override
    protected Stream<Ability> streamModels() throws IOException {
        return sourceDatabase.streamAbilities()
                .filter(KNOWN_SOURCES);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "alchemist_discovery";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "AlchemistDiscoveryDatabase";
    }
}
