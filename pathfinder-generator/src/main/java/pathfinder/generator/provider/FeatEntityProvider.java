package pathfinder.generator.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.convert.FeatEntityConverter;
import pathfinder.generator.db.local.FeatSourceDatabase;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class FeatEntityProvider implements EntityProvider {
    private final FeatSourceDatabase featSourceDatabase;
    private final FeatEntityConverter featEntityConverter;

    @Override
    public Stream<Entity> streamEntities(Source source) {
        return featSourceDatabase.streamFeats()
                .filter(model -> source.equals(Sources.findSourceByNameOrCode(model.source())))
                .flatMap(featEntityConverter::toEntities);
    }
}
