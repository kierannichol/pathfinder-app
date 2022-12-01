package pathfinder.generator;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.SourceDatabase;
import pathfinder.data.v2.AbilityDataDbo;
import pathfinder.data.v2.AbilityDatabaseDbo;
import pathfinder.data.v2.AbilitySummaryDbo;
import pathfinder.generator.db.AbilitySourceDatabase;
import pathfinder.generator.encode.AbilityTypeEncoder;
import pathfinder.model.Ability;
import pathfinder.model.Ability.Type;
import pathfinder.model.CharacterClass;
import pathfinder.spring.OutputPathValue;
import pathfinder.util.FileUtils;

@Service("Ability Database Generator")
@Slf4j
@RequiredArgsConstructor
public class AbilityDatabaseGenerator extends AbstractDatabaseGenerator {
    private final AbilitySourceDatabase abilitySourceDatabase;
    private final SourceDatabase<CharacterClass> classSourceDatabase;
    private final AbilityTypeEncoder abilityTypeEncoder;

    @OutputPathValue private Path outputBasePath;

    @Override
    public void generate() throws IOException {
        Path abilityDataPath = outputBasePath.resolve("ability");
        FileUtils.deleteDirectory(abilityDataPath);
        Files.createDirectory(abilityDataPath);

        Set<String> processedAbilityIds = new HashSet<>();

        var summaryDatabaseBuilder = AbilityDatabaseDbo.newBuilder();
        classFeatures()
                        .forEachOrdered(ability -> {
                            if (processedAbilityIds.contains(ability.id())) {
                                return;
                            }
                            processedAbilityIds.add(ability.id());

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
                            write(data, fileName, abilityDataPath);
                        });

        write(summaryDatabaseBuilder.build(), "AbilityDatabase", outputBasePath);
    }

    private Stream<Ability> classFeatures() throws IOException {
        return classSourceDatabase.stream()
                .flatMap(classDef -> classDef.levels().stream())
                .flatMap(level -> level.specials().stream())
                .map(special -> new Ability(special.id(), special.name(), Type.NONE, special.description()));
    }
}
