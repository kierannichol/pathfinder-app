package pathfinder.generator;

import java.io.IOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import pathfinder.generator.db.RagePowerSourceDatabase;
import pathfinder.model.Ability;
import pathfinder.spring.ConditionalOnGeneratorEnabled;

@Service("Rage Power Database Generator")
@Slf4j
@Lazy
@RequiredArgsConstructor
@ConditionalOnGeneratorEnabled("rage.power")
public class RagePowerDatabaseGenerator extends AbstractAbilityDatabaseGenerator {
    private final RagePowerSourceDatabase sourceDatabase;

    @Override
    protected Stream<Ability> streamModels() throws IOException {
        return sourceDatabase.streamAbilities()
                .filter(KNOWN_SOURCES);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "rage_power";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "RagePowerDatabase";
    }
}
