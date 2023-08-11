package pathfinder.v7.generator.mapper;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.model.pathfinder.Feature;
import pathfinder.v7.generator.PrerequisiteParserV7;
import pathfinder.v7.model.FeatureV7;
import pathfinder.v7.model.FeatureV7.FeatureBuilder;

@RequiredArgsConstructor
@Component
public class FeatureModelToFeatureMapper {
    private final PrerequisiteParserV7 prerequisiteParser;

    public FeatureV7 map(Feature model) {
        FeatureBuilder builder = new FeatureBuilder(model.id())
                .setName(model.name())
                .setDescription(model.description())
                .addTag(model.id().type);

        String prerequisiteFormula = prerequisiteParser.prerequisites(model);
        builder.setEnabledCondition(prerequisiteFormula);

        return builder.build();
    }

    public Stream<FeatureV7> flatMap(Feature model) {
        FeatureBuilder builder = new FeatureBuilder(model.id())
                .setName(model.name())
                .setDescription(model.description())
                .addTag(model.id().type);

        String prerequisiteFormula = prerequisiteParser.prerequisites(model);
        builder.setEnabledCondition(prerequisiteFormula);

        return Stream.of(builder.build());
    }
}
