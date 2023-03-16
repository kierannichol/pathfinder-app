package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.data.v4.EntityDatabaseDbo;
import pathfinder.data.v4.EntityDbo;
import pathfinder.data.v4.EntitySummaryDbo;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Sources;
import pathfinder.source.local.ClassSourceDatabase;

@Component
@RequiredArgsConstructor
@Slf4j
public class ClassFeatureDatabaseGenerator extends AbstractDatabaseGenerator<Entity, EntitySummaryDbo, EntityDbo> {
    private static final String DATABASE_NAME = "ClassFeatureDatabase";
    private static final String DATABASE_ID = "class_feature";

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
        return model.class_features().stream()
                .map(feature -> {
                    Tags tags = createClassFeatureTags();

                    return Entity.builder()
                            .id(feature.id())
                            .name(feature.name())
                            .tags(tags)
                            .description(feature.description())
                            .effects(createClassFeatureEffects(feature))
                            .build();
                });
    }

    private static List<Effect> createClassFeatureEffects(Feature model) {
        List<Effect> effects = new ArrayList<>();

        effects.add(Effect.addNumber(model.id(), 1));

        switch (model.id().withoutOption().string()) {
            case "ability:rage", "ability:bloodrage" ->
                    effects.add(Effect.setNumber("feature:rage", 1));
        }

        return effects;
    }

    private static Tags createClassFeatureTags() {
        return Tags.of(DATABASE_ID);
    }
}