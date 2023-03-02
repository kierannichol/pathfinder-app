package pathfinder.generator.v4;

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
import pathfinder.model.Sources;
import pathfinder.model.v4.Entity;
import pathfinder.model.v4.pathfinder.CharacterClass;
import pathfinder.source.v4.ClassSourceDatabase;

@Component
@RequiredArgsConstructor
@Slf4j
public class ClassDatabaseGenerator extends AbstractDatabaseGenerator<Entity, EntitySummaryDbo, EntityDbo> {
    private static final String DATABASE_NAME = "ClassDatabase";
    private static final String DATABASE_ID = "class";

    private final ClassSourceDatabase sourceDatabase;

    @Override
    protected Stream<Entity> streamModels() throws IOException {
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
        return Stream.of(model.toClassEntity());
    }
}
