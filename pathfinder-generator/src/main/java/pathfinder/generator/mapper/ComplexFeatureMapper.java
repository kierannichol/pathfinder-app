package pathfinder.generator.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.FixedStacks;
import pathfinder.model.RepeatingStack;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.util.StreamUtils;

@Component
@RequiredArgsConstructor
@Slf4j
public class ComplexFeatureMapper {
    private final FeatureMapper featureMapper;

    public Stream<Feature> flatMap(ComplexFeature complexFeature) {
        return StreamUtils.concat(List.of(
                mapComplexFeature(complexFeature),
                flatMapComplexFeatureFeatures(complexFeature)
        ));
    }

    private Stream<Feature> mapComplexFeature(ComplexFeature complexFeature) {
        List<Feature> features = new ArrayList<>();

        var builder = new FeatureBuilder(complexFeature.id())
                .setName(complexFeature.name())
                .setDescription(complexFeature.description())
                .addTag(complexFeature.id().type);

        if (complexFeature.stacks() instanceof FixedStacks fixedStacks) {
            fixedStacks.stacks().forEach(builder::addFixedStack);
        } else if (complexFeature.stacks() instanceof RepeatingStack repeatingStack) {
            builder.setRepeatingStack(repeatingStack.stack());
        } else {
            throw new IllegalArgumentException("Unknown stack type: " + complexFeature.stacks().getClass());
        }

        builder.addConditionalStacks(complexFeature.conditionalStacks());

        features.add(builder.build());
        return features.stream();
    }

    private Stream<Feature> flatMapComplexFeatureFeatures(ComplexFeature complexFeature) {
        return complexFeature.features().stream()
                .map(featureMapper::map);
    }

    private static <T> T defaultIfNull(T t, T orThis) {
        return t == null ? orThis : t;
    }


}
