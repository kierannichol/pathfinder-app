package pathfinder.generator;

import java.io.IOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.model.CharacterModifier;
import pathfinder.source.SorcererBloodlineSourceDatabase;

@Service("Sorcerer Bloodline Database Generator")
@RequiredArgsConstructor
public class SorcererBloodlineDatabaseGenerator extends AbstractCharacterModifierDatabaseGenerator {
    private final SorcererBloodlineSourceDatabase sourceDatabase;

    @Override
    protected Stream<CharacterModifier> streamModels() throws IOException {
        return sourceDatabase.streamModifiers()
                .filter(KNOWN_SOURCES);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "sorcerer";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "SorcererBloodlineDatabase";
    }
}
