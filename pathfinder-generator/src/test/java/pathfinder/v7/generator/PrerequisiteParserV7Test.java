package pathfinder.v7.generator;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import pathfinder.model.pathfinder.Sources;
import pathfinder.v7.db.PathfinderDatabase;
import pathfinder.v7.db.query.Query;
import pathfinder.v7.local.LocalPathfinderDatabaseLoader;

@Slf4j
@Disabled
class PrerequisiteParserV7Test {
    private static PathfinderDatabase database;
    private static PrerequisiteParserV7 prerequisiteParser;

    @BeforeAll
    static void beforeAll() {
        database = new LocalPathfinderDatabaseLoader().load();
        prerequisiteParser = new PrerequisiteParserV7(database);
    }

    @Test
    void classFeatures() {
        database.query(Query.classFeatures()).forEach(feature -> {
            if (Sources.findSourceByNameOrCode(feature.source()) != null) {
                prerequisiteParser.prerequisites(feature);
            }
        });
    }

    @Test
    void feats() {
        database.query(Query.feats()).forEach(feat ->
                prerequisiteParser.prerequisites(feat));
    }
}