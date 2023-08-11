package pathfinder.generator.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.local.RaceSourceDatabase;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Race;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class RaceEntityProvider implements EntityProvider {
    private final RaceSourceDatabase raceSourceDatabase;

    @Override
    public Stream<Entity> streamEntities(SourceId sourceId) {
        return raceSourceDatabase.streamRaces()
                .filter(model -> sourceId.equals(Sources.findSourceByNameOrCode(model.source())))
                .map(Race::toEntity);
    }
}
