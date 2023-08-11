package pathfinder.generator.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.convert.ClassEntityConverter;
import pathfinder.generator.convert.ClassFeatureEntityConverter;
import pathfinder.generator.convert.FavoredClassEntityConverter;
import pathfinder.generator.db.local.ClassSourceDatabase;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class ClassEntityProvider implements EntityProvider {
    private final ClassSourceDatabase classSourceDatabase;
    private final ClassEntityConverter classEntityConverter;
    private final FavoredClassEntityConverter favoredClassEntityConverter;
    private final ClassFeatureEntityConverter classFeatureEntityConverter;

    @Override
    public Stream<Entity> streamEntities(SourceId sourceId) {
        return classSourceDatabase.streamClasses()
                .filter(model -> sourceId.equals(Sources.findSourceByNameOrCode(model.source())))
                .flatMap(characterClass -> Stream.concat(
                        Stream.of(
                            classEntityConverter.toClassEntity(characterClass),
                            favoredClassEntityConverter.toFavoredClassEntity(characterClass)
                        ),
                        classFeatureEntityConverter.toEntities(characterClass))
                );
    }
}
