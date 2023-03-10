package pathfinder.generator.v5;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import pathfinder.data.v4.EntityDatabaseDbo;
import pathfinder.data.v4.EntityDbo;
import pathfinder.data.v4.EntitySummaryDbo;
import pathfinder.generator.AbstractDatabaseGenerator;
import pathfinder.generator.v5.provider.EntityProvider;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Source;

@RequiredArgsConstructor
public class SourceModuleDatabaseGenerator extends AbstractDatabaseGenerator<Entity, EntitySummaryDbo, EntityDbo> {
    private final Source source;
    private final List<EntityProvider> entityProviders;

    @Override
    protected Stream<Entity> streamModels() throws IOException {
        return entityProviders.stream()
                .flatMap(provider -> provider.streamEntities(source));
    }

    private String databaseId() {
        return source.code();
    }

    @Override
    protected String getRelativeOutputPath() {
        return "v5/" + databaseId();
    }

    @Override
    protected String getOutputDatabaseName() {
        return "v5/" + databaseId();
    }

    @Override
    protected EntitySummaryDbo encodedSummary(Entity entity) {
        return entity.toSummaryDbo();
    }

    @Override
    protected EntityDbo encodedDetailed(Entity entity, EntitySummaryDbo entitySummaryDbo) {
        return entity.toDbo();
    }

    @Override
    protected Message createSummaryDatabase(List<EntitySummaryDbo> summaries) {
        return EntityDatabaseDbo.newBuilder()
                .setDatabaseId(databaseId())
                .addAllSummaries(summaries)
                .build();
    }
}
