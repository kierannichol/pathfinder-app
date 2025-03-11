package pathfinder.generator.mapper;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.model.Feature;
import pathfinder.model.pathfinder.ComplexFeature;

@RequiredArgsConstructor
@Component
public class RaceMapper {
    private final ComplexFeatureMapper complexFeatureMapper;

    public Stream<Feature> flatMap(ComplexFeature model) {
        return complexFeatureMapper.flatMap(model);
    }
}
