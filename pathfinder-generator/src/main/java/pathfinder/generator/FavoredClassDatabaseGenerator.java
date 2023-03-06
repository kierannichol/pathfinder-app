package pathfinder.generator;

import com.google.protobuf.Message;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.data.v4.EntityDatabaseDbo;
import pathfinder.data.v4.EntityDbo;
import pathfinder.data.v4.EntitySummaryDbo;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.Sources;
import pathfinder.source.local.ClassSourceDatabase;

@Component
@RequiredArgsConstructor
@Slf4j
public class FavoredClassDatabaseGenerator extends AbstractDatabaseGenerator<Entity, EntitySummaryDbo, EntityDbo> {
    private static final String DATABASE_NAME = "FavoredClassDatabase";
    private static final String DATABASE_ID = "favored_class";

    private final ClassSourceDatabase sourceDatabase;

    @Override
    protected Stream<Entity> streamModels() {
        return sourceDatabase.streamClasses()
                .filter(model -> Sources.findSourceByNameOrCode(model.source()) != null)
                .flatMap(this::createEntities);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "v4/" + DATABASE_ID;
    }

    @Override
    protected String getOutputDatabaseName() {
        return "v4/" + DATABASE_NAME;
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

    private Stream<Entity> createEntities(CharacterClass model) {
        return Stream.of(model.toFavoredClassEntity());
    }
}
