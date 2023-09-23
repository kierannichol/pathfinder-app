package pathfinder.generator.mapper;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.PrerequisiteParser;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;

@RequiredArgsConstructor
@Component
public class FeatureMapper {
    private final PrerequisiteParser prerequisiteParser;

    public Feature map(pathfinder.model.pathfinder.Feature model) {
        if (model.id().type == null) {
            throw new IllegalArgumentException("Model ID does not have type: " + model);
        }
        FeatureBuilder builder = new FeatureBuilder(model.id())
                .setName(model.name())
                .setDescription(model.description())
                .addTag(model.id().type);

        String prerequisiteFormula = prerequisiteParser.prerequisites(model);
        builder.setEnabledCondition(prerequisiteFormula);

        return builder.build();
    }

    public Stream<Feature> flatMap(pathfinder.model.pathfinder.Feature model) {
        FeatureBuilder builder = new FeatureBuilder(model.id())
                .setName(model.name())
                .setDescription(model.description())
                .addTag(model.id().type);

        String prerequisiteFormula = prerequisiteParser.prerequisites(model);
        builder.setEnabledCondition(prerequisiteFormula);

        return Stream.of(builder.build());
    }
}
