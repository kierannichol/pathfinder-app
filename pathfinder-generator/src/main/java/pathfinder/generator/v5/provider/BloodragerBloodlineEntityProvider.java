package pathfinder.generator.v5.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.convert.BloodragerBloodlineEntityConverter;
import pathfinder.generator.convert.BloodragerBloodlineFeatureEntityConverter;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;
import pathfinder.source.local.BloodragerBloodlineSourceDatabase;

@Component
@RequiredArgsConstructor
public class BloodragerBloodlineEntityProvider implements EntityProvider {
    private final BloodragerBloodlineSourceDatabase bloodragerBloodlineSourceDatabase;
    private final BloodragerBloodlineEntityConverter bloodragerBloodlineEntityConverter;
    private final BloodragerBloodlineFeatureEntityConverter bloodragerBloodlineFeatureEntityConverter;

    @Override
    public Stream<Entity> streamEntities(Source source) {
        return bloodragerBloodlineSourceDatabase.streamBloodlines()
                .filter(model -> source.equals(Sources.findSourceByNameOrCode(model.source())))
                .flatMap(bloodline -> Stream.concat(
                        bloodragerBloodlineEntityConverter.toEntities(bloodline),
                        bloodragerBloodlineFeatureEntityConverter.toEntities(bloodline)
                ));
    }
}
