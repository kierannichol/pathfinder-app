package pathfinder.generator.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.convert.BloodlineFeatureEntityConverter;
import pathfinder.generator.convert.BloodragerBloodlineEntityConverter;
import pathfinder.generator.db.local.BloodragerBloodlineSourceDatabase;
import pathfinder.model.Entity;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class BloodragerBloodlineEntityProvider implements EntityProvider {
    private final BloodragerBloodlineSourceDatabase bloodragerBloodlineSourceDatabase;
    private final BloodragerBloodlineEntityConverter bloodragerBloodlineEntityConverter;
    private final BloodlineFeatureEntityConverter bloodlineFeatureEntityConverter;

    @Override
    public Stream<Entity> streamEntities(Source source) {
        return bloodragerBloodlineSourceDatabase.streamBloodlines()
                .filter(model -> source.equals(Sources.findSourceByNameOrCode(model.source())))
                .flatMap(bloodline -> Stream.concat(
                        bloodragerBloodlineEntityConverter.toEntities(bloodline),
                        bloodlineFeatureEntityConverter.toEntities(bloodline, Tags.of("bloodrager_bloodline_feature"))
                ));
    }
}
