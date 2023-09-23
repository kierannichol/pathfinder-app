package pathfinder.db;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Path;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.migrate.ArchetypeMigrator;
import pathfinder.db.migrate.CharacterClassMigrator;
import pathfinder.util.FileUtils;

@Component
@Slf4j
@RequiredArgsConstructor
public class LocalPathfinderDatabaseMigrator {

    private final ArchetypeMigrator archetypes;
    private final CharacterClassMigrator classes;

    public void migrate() {
        try {
            FileUtils.deleteDirectory(Path.of("build", "db"));

//            archetypes.migrate();
            classes.migrate();

        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
