package pathfinder.generator.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.convert.ArchetypeEntityConverter;
import pathfinder.generator.convert.ArchetypeFeatureEntityConverter;
import pathfinder.generator.db.local.ArchetypeSourceDatabase;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class ArchetypeEntityProvider implements EntityProvider {
    private final ArchetypeSourceDatabase archetypeSourceDatabase;
    private final ArchetypeEntityConverter archetypeEntityConverter;
    private final ArchetypeFeatureEntityConverter archetypeFeatureEntityConverter;

    @Override
    public Stream<Entity> streamEntities(Source source) {
        return archetypeSourceDatabase.streamArchetypes()
                .filter(model -> source.equals(Sources.findSourceByNameOrCode(model.source())))
                .flatMap(archetype -> Stream.concat(
                        Stream.of(archetypeEntityConverter.toEntity(archetype)),
                        archetypeFeatureEntityConverter.toEntities(archetype)
                ));
    }
}
