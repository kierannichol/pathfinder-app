package pathfinder.generator.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.db.local.MercySourceDatabase;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Mercy;
import pathfinder.model.pathfinder.Source;

@Component
@RequiredArgsConstructor
public class MercyEntityProvider implements EntityProvider {
    private final MercySourceDatabase mercySourceDatabase;

    @Override
    public Stream<Entity> streamEntities(Source source) {
        return mercySourceDatabase.streamMercies()
                .map(Mercy::toEntity);
    }
}
