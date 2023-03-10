package pathfinder.generator.v5.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Mercy;
import pathfinder.model.pathfinder.Source;
import pathfinder.source.local.MercySourceDatabase;

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
