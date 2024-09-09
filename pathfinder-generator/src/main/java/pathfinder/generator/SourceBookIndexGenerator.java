package pathfinder.generator;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.data.SourceBookIndexDbo;
import pathfinder.db.PathfinderDatabase;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class SourceBookIndexGenerator {
    private final PathfinderDatabase database;
    private final DatabaseWriter writer;

    public void generate() {
        var builder = SourceBookIndexDbo.newBuilder();

        database.sources().stream()
                .filter(sourceId -> Sources.findSourceByNameOrCode(sourceId.code()).enabled())
                .forEach(sourceId -> builder.addSourceBookCode(sourceId.code()));

        var dbo = builder.build();
        writer.write(dbo, "source_books");
    }
}
