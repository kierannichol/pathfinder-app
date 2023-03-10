package pathfinder.generator.convert;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.BloodragerBloodline;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class BloodragerBloodlineFeatureEntityConverter {

    public Stream<Entity> toEntities(BloodragerBloodline model) {
        return model.bloodlinePowers().stream()
                .map(feature -> {
                    Tags tags = createClassFeatureTags(model);

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
        return effects;
    }

    private static Tags createClassFeatureTags(BloodragerBloodline bloodragerBloodline) {
        return Tags.of("bloodrager_bloodline_feature", bloodragerBloodline.id().key, "class_feature");
    }
}
