package pathfinder.generator;

import java.io.IOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import pathfinder.model.Ability;
import pathfinder.source.RogueTalentSourceDatabase;
import pathfinder.spring.ConditionalOnGeneratorEnabled;

@Service("Rogue Talent Database Generator")
@ConditionalOnGeneratorEnabled("rogue.talent")
@Slf4j
@Lazy
@RequiredArgsConstructor
public class RogueTalentGenerator extends AbstractAbilityDatabaseGenerator {

    private final RogueTalentSourceDatabase sourceDatabase;

    @Override
    protected Stream<Ability> streamModels() throws IOException {
        return sourceDatabase.streamAbilities()
                .filter(KNOWN_SOURCES);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "roguetalent";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "RogueTalentDatabase";
    }
}
