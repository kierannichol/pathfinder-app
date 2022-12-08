package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.data.v2.RaceDataDbo;
import pathfinder.data.v2.RaceDatabaseDbo;
import pathfinder.data.v2.RaceSummaryDbo;
import pathfinder.generator.encode.RaceDataEncoder;
import pathfinder.generator.encode.RaceSummaryEncoder;
import pathfinder.model.Race;
import pathfinder.source.RaceSourceDatabase;
import pathfinder.spring.ConditionalOnGeneratorEnabled;

@Slf4j
@RequiredArgsConstructor
@Service("Race Database Generator")
@ConditionalOnGeneratorEnabled("race")
public class RaceDatabaseGenerator extends AbstractDatabaseGenerator<Race, RaceSummaryDbo, RaceDataDbo> {
    private final RaceSourceDatabase raceSourceDatabase;
    private final RaceSummaryEncoder raceSummaryEncoder;
    private final RaceDataEncoder raceDataEncoder;

    @Override
    protected Stream<Race> streamModels() throws IOException {
        return raceSourceDatabase.streamRaces();
    }

    @Override
    protected String getRelativeOutputPath() {
        return "race";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "RaceDatabase";
    }

    @Override
    protected RaceSummaryDbo encodedSummary(Race race) {
        return raceSummaryEncoder.encode(race);
    }

    @Override
    protected RaceDataDbo encodedDetailed(Race race, RaceSummaryDbo raceSummaryDbo) {
        return raceDataEncoder.encode(race);
    }

    @Override
    protected Message createSummaryDatabase(List<RaceSummaryDbo> raceSummaryDbos) {
        return RaceDatabaseDbo.newBuilder()
                .addAllRaceSummaries(raceSummaryDbos)
                .build();
    }
}
