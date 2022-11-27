package pathfinder.generator;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.data.v2.RaceDataDbo;
import pathfinder.data.v2.RaceDatabaseDbo;
import pathfinder.data.v2.RaceSummaryDbo;
import pathfinder.generator.db.RaceSourceDatabase;
import pathfinder.generator.encode.RaceDataEncoder;
import pathfinder.generator.encode.RaceSummaryEncoder;
import pathfinder.generator.spring.OutputPathValue;
import pathfinder.util.FileUtils;

@Slf4j
@RequiredArgsConstructor
@Service("Race Database Generator")
public class RaceDatabaseGenerator extends AbstractDatabaseGenerator {
    private final RaceSourceDatabase raceSourceDatabase;
    private final RaceSummaryEncoder raceSummaryEncoder;
    private final RaceDataEncoder raceDataEncoder;

    @OutputPathValue
    private Path outputBasePath;

    @Override
    public void generate() throws IOException {
        Path raceDataPath = outputBasePath.resolve("race");
        FileUtils.deleteDirectory(raceDataPath);
        Files.createDirectory(raceDataPath);

        var summaryDatabaseBuilder = RaceDatabaseDbo.newBuilder();
        raceSourceDatabase.stream()
                .forEachOrdered(race -> {
                    RaceSummaryDbo summaryDbo = raceSummaryEncoder.encode(race);
                    RaceDataDbo data = raceDataEncoder.encode(race);

                    summaryDatabaseBuilder.addRaceSummaries(summaryDbo);

                    String fileName = idToFilename(race.id());
                    write(data, fileName, raceDataPath);
                });

        write(summaryDatabaseBuilder.build(), "RaceDatabase", outputBasePath);
    }
}
