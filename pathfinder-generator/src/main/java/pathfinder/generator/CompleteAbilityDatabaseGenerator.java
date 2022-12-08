package pathfinder.generator;

import java.io.IOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.model.Ability;
import pathfinder.source.CompleteAbilitySourceDatabase;

@Service("Complete Ability Database Generator")
@Slf4j
@RequiredArgsConstructor
public class CompleteAbilityDatabaseGenerator extends AbstractAbilityDatabaseGenerator {
    private final CompleteAbilitySourceDatabase sourceDatabase;

    @Override
    protected Stream<Ability> streamModels() throws IOException {
        return sourceDatabase.streamAbilities()
                .filter(KNOWN_SOURCES);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "ability";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "AbilityDatabase";
    }
}
