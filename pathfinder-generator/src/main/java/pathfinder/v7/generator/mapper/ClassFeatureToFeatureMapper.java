package pathfinder.v7.generator.mapper;

import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.v7.generator.PrerequisiteParserV7;
import pathfinder.v7.model.ChoiceV7;
import pathfinder.v7.model.FeatureSelectByTagChoiceV7;
import pathfinder.v7.model.FeatureV7;
import pathfinder.v7.model.FeatureV7.FeatureBuilder;
import pathfinder.v7.model.StackBuilder;

@Component
@RequiredArgsConstructor
@Slf4j
public class ClassFeatureToFeatureMapper {
    private final PrerequisiteParserV7 prerequisiteParser;

    public FeatureV7 map(ClassFeature feature) {
        FeatureBuilder builder = new FeatureBuilder(feature.id())
                .setName(feature.name())
                .setDescription(feature.description())
                .addTag("class_feature")
                .addTag(feature.classId().key)
                .addTag(feature.id().type);

        String prerequisiteFormula = tryParsePrerequisites(feature);
        builder.setEnabledCondition(prerequisiteFormula);

        tryCreateFeatureChoice(feature).ifPresent(choice ->
                builder.setRepeatingStack(new StackBuilder()
                        .addChoice(choice)
                        .build()));

        return builder.build();
    }

    private String tryParsePrerequisites(ClassFeature feature) {
        try {
            return prerequisiteParser.prerequisites(feature);
        } catch (Exception e) {
            log.warn("Failed to parse class feature prerequisites: " + e.getMessage());
            return "";
        }
    }

    private Optional<ChoiceV7> tryCreateFeatureChoice(ClassFeature feature) {
        return Optional.ofNullable(switch (feature.id().key) {
            case "mercy" -> new FeatureSelectByTagChoiceV7("mercy", "Mercy", "mercy", List.of("mercy"), List.of());
            case "rogue_talent" -> new FeatureSelectByTagChoiceV7("rogue_talent", "Rogue Talent", "rogue_talent", List.of("rogue_talent"), List.of());
            default -> null;
        });
    }
}
