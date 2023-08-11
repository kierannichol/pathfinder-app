package pathfinder.generator.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import pathfinder.generator.convert.RagePowerEntityConverter;
import pathfinder.generator.db.local.RagePowerSourceDatabase;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;

//@Component
@RequiredArgsConstructor
public class RagePowerEntityProvider implements EntityProvider {
    private final RagePowerSourceDatabase ragePowerSourceDatabase;
    private final RagePowerEntityConverter ragePowerEntityConverter;

    @Override
    public Stream<Entity> streamEntities(SourceId sourceId) {
        return ragePowerSourceDatabase.streamFeatures()
                .filter(model -> sourceId.equals(Sources.findSourceByNameOrCode(model.source())))
                .flatMap(ragePowerEntityConverter::toEntities);
    }
}
