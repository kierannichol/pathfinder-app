package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.data.v4.EntityDatabaseDbo;
import pathfinder.data.v4.EntityDbo;
import pathfinder.data.v4.EntitySummaryDbo;
import pathfinder.generator.convert.FeatEntityConverter;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Sources;
import pathfinder.source.local.FeatSourceDatabase;

@Component
@RequiredArgsConstructor
@Slf4j
public class FeatDatabaseGenerator extends AbstractDatabaseGenerator<Entity, EntitySummaryDbo, EntityDbo> {
    private static final String DATABASE_ID = "feat";

    private final FeatSourceDatabase featSourceDatabase;
    private final FeatEntityConverter featEntityConverter;

    @Override
    protected Stream<Entity> streamModels() throws IOException {
        return featSourceDatabase.streamFeats()
                .parallel()
                .filter(feat -> Sources.findSourceByNameOrCode(feat.source()) != null)
                .flatMap(featEntityConverter::toEntities);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "v4/feat";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "v4/FeatDatabase";
    }

    @Override
    protected EntitySummaryDbo encodedSummary(Entity model) {
        return model.toSummaryDbo();
    }

    @Override
    protected EntityDbo encodedDetailed(Entity model, EntitySummaryDbo entitySummaryDbo) {
        return model.toDbo();
    }

    @Override
    protected Message createSummaryDatabase(List<EntitySummaryDbo> summaries) {
        return EntityDatabaseDbo.newBuilder()
                .setDatabaseId(DATABASE_ID)
                .addAllSummaries(summaries)
                .build();
    }
}
