package pathfinder.generator;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.data.v2.AbilityDataDbo;
import pathfinder.data.v2.AbilityDatabaseDbo;
import pathfinder.data.v2.AbilitySummaryDbo;
import pathfinder.generator.db.AbilitySourceDatabase;
import pathfinder.generator.db.encode.AbilityTypeEncoder;
import pathfinder.generator.spring.OutputPathValue;
import pathfinder.util.FileUtils;

@Service("Ability Database Generator")
@Slf4j
@RequiredArgsConstructor
public class AbilityDatabaseGenerator extends AbstractDatabaseGenerator {
    private final AbilitySourceDatabase abilitySourceDatabase;
    private final AbilityTypeEncoder abilityTypeEncoder;

    @OutputPathValue private Path outputBasePath;

    @Override
    public void generate() throws IOException {
        Path abilityDataPath = outputBasePath.resolve("ability");
        FileUtils.deleteDirectory(abilityDataPath);
        Files.createDirectory(abilityDataPath);

        var summaryDatabaseBuilder = AbilityDatabaseDbo.newBuilder();
        abilitySourceDatabase.stream()
                        .forEachOrdered(ability -> {
                            AbilitySummaryDbo summaryDbo = AbilitySummaryDbo.newBuilder()
                                    .setId(ability.id())
                                    .setName(ability.name())
                                    .setType(abilityTypeEncoder.encode(ability.type()))
                                    .build();

                            AbilityDataDbo data = AbilityDataDbo.newBuilder()
                                    .setId(ability.id())
                                    .setName(ability.name())
                                    .setDescription(ability.description())
                                    .setType(abilityTypeEncoder.encode(ability.type()))
                                    .build();

                            summaryDatabaseBuilder.addAbilitySummaries(summaryDbo);

                            String fileName = idToFilename(ability.id());
                            try {
                                write(data, fileName, abilityDataPath);
                            } catch (IOException e) {
                                throw new UncheckedIOException(e);
                            }
                        });

        write(summaryDatabaseBuilder.build(), "AbilityDatabase", outputBasePath);
    }

    private static String idToFilename(String id) {
        return id.replace(':', '_');
    }
}
