package pathfinder.generator.v4;

import java.io.IOException;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.parse.PrerequisiteParserV4;
import pathfinder.model.Id;
import pathfinder.model.v4.Effect;
import pathfinder.model.v4.Entity;
import pathfinder.model.v4.Tags;
import pathfinder.model.v4.pathfinder.Feature;
import pathfinder.source.v4.RagePowerSourceDatabase;

@Component
@Slf4j
public class RagePowerDatabaseGenerator extends AbstractEntityDatabaseGenerator {
    private static final String DATABASE_NAME = "RagePowerDatabase";
    private static final String DATABASE_ID = "rage_power";

    private final RagePowerSourceDatabase sourceDatabase;
    private final PrerequisiteParserV4 prerequisiteParser;

    public RagePowerDatabaseGenerator(RagePowerSourceDatabase sourceDatabase,
            PrerequisiteParserV4 prerequisiteParser) {
        super(DATABASE_NAME, DATABASE_ID);
        this.sourceDatabase = sourceDatabase;
        this.prerequisiteParser = prerequisiteParser;
    }

    @Override
    protected Stream<Entity> streamModels() throws IOException {
        return sourceDatabase.streamFeatures()
                .flatMap(this::createEntity);
    }

    private Stream<Entity> createEntity(Feature feature) {
        Tags tags = createFeatureTags(feature);

        var entity = Entity.builder()
                .id(feature.id())
                .name(feature.name())
                .tags(tags)
                .prerequisiteFormula(appendNotSelfPrerequisite(feature.id(), prerequisiteParser.extractPrerequisiteFormula(feature.prerequisites())))
                .description(feature.description())
                .effect(Effect.addNumber(feature.id(), 1))
                .build();

        return Stream.of(entity);
    }

    private String appendNotSelfPrerequisite(Id featureId, String prerequisiteFormula) {
        String notSelf = "!@" + featureId;
        if (prerequisiteFormula.isBlank()) {
            return notSelf;
        }
        return prerequisiteFormula + " AND " + notSelf;
    }

    private static Tags createFeatureTags(Feature model) {
        return Tags.of(DATABASE_ID);
    }
}
