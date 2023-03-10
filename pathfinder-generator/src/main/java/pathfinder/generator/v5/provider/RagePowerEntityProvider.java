package pathfinder.generator.v5.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.convert.RagePowerEntityConverter;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;
import pathfinder.source.local.RagePowerSourceDatabase;

@Component
@RequiredArgsConstructor
public class RagePowerEntityProvider implements EntityProvider {
    private final RagePowerSourceDatabase ragePowerSourceDatabase;
    private final RagePowerEntityConverter ragePowerEntityConverter;

    @Override
    public Stream<Entity> streamEntities(Source source) {
        return ragePowerSourceDatabase.streamFeatures()
                .filter(model -> source.equals(Sources.findSourceByNameOrCode(model.source())))
                .flatMap(ragePowerEntityConverter::toEntities);
    }
}
