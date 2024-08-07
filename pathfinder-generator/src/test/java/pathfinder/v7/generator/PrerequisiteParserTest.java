package pathfinder.v7.generator;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import pathfinder.db.LocalPathfinderDatabaseLoader;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.generator.PrerequisiteParser;
import pathfinder.model.pathfinder.Sources;

@Slf4j
class PrerequisiteParserTest {
    private static PathfinderDatabase database;
    private static PrerequisiteParser prerequisiteParser;

    @BeforeAll
    static void beforeAll() {
        database = new LocalPathfinderDatabaseLoader().load();
        prerequisiteParser = new PrerequisiteParser(database);
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

    @Test
    void mercy() {
        database.query(Query.classFeatures().idMatches("mercy:.*")).forEach(mercy ->
                prerequisiteParser.prerequisites(mercy));
    }
}