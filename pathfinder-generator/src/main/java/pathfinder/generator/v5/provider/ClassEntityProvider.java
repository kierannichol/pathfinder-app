package pathfinder.generator.v5.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.convert.ClassFeatureEntityConverter;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;
import pathfinder.source.local.ClassSourceDatabase;

@Component
@RequiredArgsConstructor
public class ClassEntityProvider implements EntityProvider {
    private final ClassSourceDatabase classSourceDatabase;
    private final ClassFeatureEntityConverter classFeatureEntityConverter;

    @Override
    public Stream<Entity> streamEntities(Source source) {
        return classSourceDatabase.streamClasses()
                .filter(model -> source.equals(Sources.findSourceByNameOrCode(model.source())))
                .flatMap(characterClass -> Stream.concat(
                        Stream.of(
                            characterClass.toClassEntity(),
                            characterClass.toFavoredClassEntity()
                        ),
                        classFeatureEntityConverter.toEntities(characterClass))
                );
    }
}
