package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.data.v3.ModificationDatabaseDbo;
import pathfinder.data.v3.ModificationDetailsDbo;
import pathfinder.data.v3.ModificationSummaryDbo;
import pathfinder.generator.encode.RaceEncoder;
import pathfinder.model.Race;
import pathfinder.source.RaceSourceDatabase;

@Service
@RequiredArgsConstructor
public class RaceDatabaseGenerator extends AbstractDatabaseGenerator<Race, ModificationSummaryDbo, ModificationDetailsDbo> {
    private final RaceSourceDatabase sourceDatabase;
    private final RaceEncoder raceEncoder;

    @Override
    protected Stream<Race> streamModels() throws IOException {
        return sourceDatabase.streamRaces();
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
    protected ModificationSummaryDbo encodedSummary(Race model) {
        return ModificationSummaryDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .setType("race")
                .build();
    }

    @Override
    protected ModificationDetailsDbo encodedDetailed(Race model, ModificationSummaryDbo summary) {
        return raceEncoder.encodeDetailed(model);
    }

    @Override
    protected Message createSummaryDatabase(List<ModificationSummaryDbo> modificationDetailsDbos) {
        return ModificationDatabaseDbo.newBuilder()
                .setDatabaseId("race")
                .addAllSummaries(modificationDetailsDbos)
                .build();
    }
}
