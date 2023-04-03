package pathfinder.generator;

import com.google.protobuf.Message;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import pathfinder.data.v4.EntityDatabaseDbo;
import pathfinder.data.v4.EntityDbo;
import pathfinder.data.v4.EntitySummaryDbo;
import pathfinder.generator.provider.EntityProvider;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Source;
import pathfinder.util.StreamUtils;

@RequiredArgsConstructor
public class SourceModuleDatabaseGenerator extends AbstractDatabaseGenerator<Entity, EntitySummaryDbo, EntityDbo> {
    private final Source source;
    private final List<EntityProvider> entityProviders;

    @Override
    protected Stream<Entity> streamModels() {
        return entityProviders.stream()
                .flatMap(provider -> provider.streamEntities(source))
                .filter(StreamUtils.duplicates(Entity::id));
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
