package pathfinder.generator.convert;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Sources;

@Component
public class ArchetypeFeatureEntityConverter {

    public Stream<Entity> toEntities(Archetype model) {
        return model.features().stream()
                .map(feature -> {
                    Tags tags = createClassFeatureTags(model.id().string());

                    return Entity.builder()
                            .id(feature.id())
                            .name(feature.name())
                            .tags(tags)
                            .description(feature.description())
                            .effects(createClassFeatureEffects(feature))
                            .source(Sources.findSourceByNameOrCode(model.source()))
                            .build();
                });
    }

    private static List<Effect> createClassFeatureEffects(Feature model) {
        List<Effect> effects = new ArrayList<>();

        effects.add(Effect.addNumber(model.id(), 1));

        switch (model.id().withoutOption().string()) {
            case "ability:rage", "ability:bloodrage" ->
                    effects.add(Effect.setNumber("feature:rage", 1));
        }

        return effects;
    }

    private static Tags createClassFeatureTags(String archetypeId) {
        return Tags.of(
                archetypeId,
                "archetype_feature",
                "class_feature");
    }
}
