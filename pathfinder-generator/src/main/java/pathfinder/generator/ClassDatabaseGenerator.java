package pathfinder.generator;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.SourceDatabase;
import pathfinder.data.v2.ClassDatabaseDbo;
import pathfinder.generator.encode.ClassDataEncoder;
import pathfinder.generator.encode.ClassSummaryEncoder;
import pathfinder.generator.model.CharacterClass;
import pathfinder.generator.spring.OutputPathValue;
import pathfinder.util.FileUtils;

@Service("Class Database Generator")
@Slf4j
@RequiredArgsConstructor
public class ClassDatabaseGenerator extends AbstractDatabaseGenerator {

    private final SourceDatabase<CharacterClass> classSourceDatabase;
    private final ClassSummaryEncoder classSummaryEncoder;
    private final ClassDataEncoder classDataEncoder;

    @OutputPathValue
    private Path outputBasePath;

    @Override
    public void generate() throws IOException {
        Path classDataPath = outputBasePath.resolve("classes");
        FileUtils.deleteDirectory(classDataPath);
        Files.createDirectory(classDataPath);

        List<CharacterClass> loaded = classSourceDatabase.stream().toList();

        loaded.stream()
                .map(classDataEncoder::encode)
                .forEach(classDataDbo -> write(classDataDbo, idToFilename(classDataDbo.getId()), classDataPath));

        var classDatabaseBuilder = ClassDatabaseDbo.newBuilder();
        classDatabaseBuilder.addAllClassSummaries(
                classSummaryEncoder.encodeAll(loaded.stream().toList())
        );
        write(classDatabaseBuilder.build(), "ClassDatabase", outputBasePath);
    }
}
