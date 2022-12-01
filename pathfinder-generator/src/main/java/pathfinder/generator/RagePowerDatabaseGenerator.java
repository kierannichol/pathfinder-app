package pathfinder.generator;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import pathfinder.data.v2.AbilityDataDbo;
import pathfinder.data.v2.AbilityDatabaseDbo;
import pathfinder.data.v2.AbilitySummaryDbo;
import pathfinder.generator.db.RagePowerSourceDatabase;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.generator.encode.AbilityTypeEncoder;
import pathfinder.spring.OutputPathValue;
import pathfinder.util.FileUtils;

@Service("Rage Power Database Generator")
@Slf4j
@Lazy
@RequiredArgsConstructor
public class RagePowerDatabaseGenerator extends AbstractDatabaseGenerator {
    private final RagePowerSourceDatabase sourceDatabase;
    private final AbilityTypeEncoder abilityTypeEncoder;
    private final PrerequisiteParser prerequisiteParser;

    @OutputPathValue
    private Path outputBasePath;

    @Override
    public void generate() throws IOException {
        Path abilityDataPath = outputBasePath.resolve("ragepower");
        FileUtils.deleteDirectory(abilityDataPath);
        Files.createDirectory(abilityDataPath);

        var summaryDatabaseBuilder = AbilityDatabaseDbo.newBuilder();
        sourceDatabase.stream()
                .forEachOrdered(ability -> {
                    String prerequisiteFormula = prerequisiteParser.extractPrerequisites(ability);

                    AbilitySummaryDbo summaryDbo = AbilitySummaryDbo.newBuilder()
                            .setId(ability.id())
                            .setName(ability.name())
                            .setType(abilityTypeEncoder.encode(ability.type()))
                            .setPrerequisitesFormula(prerequisiteFormula)
                            .build();

                    AbilityDataDbo data = AbilityDataDbo.newBuilder()
                            .setId(ability.id())
                            .setName(ability.name())
                            .setDescription(ability.description())
                            .setType(abilityTypeEncoder.encode(ability.type()))
                            .setPrerequisitesFormula(prerequisiteFormula)
                            .build();

                    summaryDatabaseBuilder.addAbilitySummaries(summaryDbo);

                    String fileName = idToFilename(ability.id());
                    write(data, fileName, abilityDataPath);
                });

        write(summaryDatabaseBuilder.build(), "RagePowerDatabase", outputBasePath);
    }
}
