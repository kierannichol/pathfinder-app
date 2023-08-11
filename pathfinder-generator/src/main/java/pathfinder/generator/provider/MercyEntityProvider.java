package pathfinder.generator.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.local.MercySourceDatabase;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Mercy;
import pathfinder.model.pathfinder.SourceId;

@Component
@RequiredArgsConstructor
public class MercyEntityProvider implements EntityProvider {
    private final MercySourceDatabase mercySourceDatabase;

    @Override
    public Stream<Entity> streamEntities(SourceId sourceId) {
        return mercySourceDatabase.streamMercies()
                .map(Mercy::toEntity);
    }
}
