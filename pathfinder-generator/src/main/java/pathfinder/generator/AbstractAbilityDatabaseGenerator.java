package pathfinder.generator;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import org.springframework.beans.factory.annotation.Autowired;
import pathfinder.SourceDatabase;
import pathfinder.data.v2.AbilityDataDbo;
import pathfinder.data.v2.AbilityDatabaseDbo;
import pathfinder.data.v2.AbilitySummaryDbo;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.generator.encode.AbilityTypeEncoder;
import pathfinder.model.Ability;
import pathfinder.spring.OutputPathValue;
import pathfinder.util.FileUtils;

public abstract class AbstractAbilityDatabaseGenerator extends AbstractDatabaseGenerator {

    @Autowired
    protected PrerequisiteParser prerequisiteParser;

    @Autowired
    protected AbilityTypeEncoder abilityTypeEncoder;

    @OutputPathValue
    private Path outputBasePath;

    protected abstract SourceDatabase<Ability> getAbilitySourceDatabase();
    protected abstract String getRelativeOutputPath();
    protected abstract String getOutputDatabaseName();
    protected abstract boolean filterAbilities(Ability ability);

    @Override
    public void generate() throws IOException {
        Path abilityDataPath = outputBasePath.resolve(getRelativeOutputPath());
        FileUtils.deleteDirectory(abilityDataPath);
        Files.createDirectory(abilityDataPath);

        var summaryDatabaseBuilder = AbilityDatabaseDbo.newBuilder();
        getAbilitySourceDatabase().stream()
                .filter(this::filterAbilities)
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

        write(summaryDatabaseBuilder.build(), getOutputDatabaseName(), outputBasePath);
    }
}
