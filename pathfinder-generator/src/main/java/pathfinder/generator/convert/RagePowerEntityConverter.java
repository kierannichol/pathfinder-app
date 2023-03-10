package pathfinder.generator.convert;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class RagePowerEntityConverter {
    private final PrerequisiteParser prerequisiteParser;

    public Stream<Entity> toEntities(Feature feature) {
        Tags tags = createFeatureTags();

        var entity = Entity.builder()
                .id(feature.id())
                .name(feature.name())
                .tags(tags)
                .prerequisiteFormula(appendNotSelfPrerequisite(feature.id(), prerequisiteParser.extractPrerequisiteFormula(feature.prerequisites())))
                .description(feature.description())
                .effect(Effect.addNumber(feature.id(), 1))
                .source(Sources.findSourceByNameOrCode(feature.source()))
                .build();

        return Stream.of(entity);
    }

    private String appendNotSelfPrerequisite(Id featureId, String prerequisiteFormula) {
        String notSelf = "!@" + featureId;
        if (prerequisiteFormula.isBlank()) {
            return notSelf;
        }
        return prerequisiteFormula + " AND " + notSelf;
    }

    private static Tags createFeatureTags() {
        return Tags.of("rage_power");
    }
}
