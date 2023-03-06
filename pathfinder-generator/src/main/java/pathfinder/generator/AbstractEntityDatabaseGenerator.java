package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import pathfinder.data.v4.EntityDatabaseDbo;
import pathfinder.data.v4.EntityDbo;
import pathfinder.data.v4.EntitySummaryDbo;
import pathfinder.model.Entity;

@RequiredArgsConstructor
public abstract class AbstractEntityDatabaseGenerator extends AbstractDatabaseGenerator<Entity, EntitySummaryDbo, EntityDbo> {

    private final String databaseName;
    private final String databaseId;

    protected abstract Stream<Entity> streamModels() throws IOException;

    @Override
    protected String getRelativeOutputPath() {
        return "v4/" + databaseId;
    }

    @Override
    protected String getOutputDatabaseName() {
        return "v4/" + databaseName;
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
                .setDatabaseId(databaseId)
                .addAllSummaries(summaries)
                .build();
    }
}
