package pathfinder.generator.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import pathfinder.db.LocalPathfinderDatabaseLoader;
import pathfinder.db.PathfinderDatabase;
import pathfinder.generator.PrerequisiteParser;
import pathfinder.model.Id;
import pathfinder.model.RepeatingStack;

class FeatMapperTest {
    private static PathfinderDatabase database;
    private static FeatMapper mapper;

    @BeforeAll
    static void beforeAll() {
        database = new LocalPathfinderDatabaseLoader().load();
        PrerequisiteParser prerequisiteParser = new PrerequisiteParser(database);
        mapper = new FeatMapper(database, prerequisiteParser);
    }

    @Test
    void featWithRepeatingStackWithChoice() {
        var feat = database.getFeatById(Id.of("feat:extra_arcana")).orElseThrow();

        System.out.println(feat.fixedStacks());

        assertThat(feat.repeatingStack().choices())
                .as("Feat choices not mapped")
                .isNotEmpty();

        var feature = mapper.flatMap(feat).findFirst().orElseThrow();

        assertThat(feature.stacks())
                .isInstanceOf(RepeatingStack.class);

        var repeatingStack = (RepeatingStack) feature.stacks();
        assertThat(repeatingStack.stack().choices())
                .as("Expected repeating stack with a choice")
                .isNotEmpty();
    }
}