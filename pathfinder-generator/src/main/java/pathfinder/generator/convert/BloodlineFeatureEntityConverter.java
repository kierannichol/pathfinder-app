package pathfinder.generator.convert;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class BloodlineFeatureEntityConverter {

    public Stream<Entity> toEntities(Bloodline model, Tags tags) {
        return model.bloodlinePowers().stream()
                .map(feature -> {
                    Tags combinedTags = createClassFeatureTags(model, tags);

                    return Entity.builder()
                            .id(feature.id())
                            .name(feature.name())
                            .tags(combinedTags)
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

    private static Tags createClassFeatureTags(Bloodline bloodragerBloodline, Tags tags) {
        return tags.addAll(Tags.of(bloodragerBloodline.id().key, "class_feature"));
    }
}
