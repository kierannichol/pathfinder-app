package pathfinder.generator.provider;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.convert.BloodlineFeatureEntityConverter;
import pathfinder.generator.convert.SorcererBloodlineEntityConverter;
import pathfinder.generator.db.local.SorcererBloodlineSourceDatabase;
import pathfinder.model.Entity;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class SorcererBloodlineEntityProvider implements EntityProvider {
    private final SorcererBloodlineSourceDatabase sorcererBloodlineSourceDatabase;
    private final SorcererBloodlineEntityConverter sorcererBloodlineEntityConverter;
    private final BloodlineFeatureEntityConverter bloodlineFeatureEntityConverter;

    @Override
    public Stream<Entity> streamEntities(Source source) {
        return sorcererBloodlineSourceDatabase.streamBloodlines()
                .filter(model -> source.equals(Sources.findSourceByNameOrCode(model.source())))
                .flatMap(bloodline -> Stream.concat(
                        sorcererBloodlineEntityConverter.toEntities(bloodline),
                        bloodlineFeatureEntityConverter.toEntities(bloodline, Tags.of("sorcerer_bloodline_feature"))
                ));
    }
}
