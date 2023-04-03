package pathfinder.generator.convert;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Sources;
import pathfinder.util.StreamUtils;

@Component
public class ClassFeatureEntityConverter {

    public Stream<Entity> toEntities(CharacterClass model) {
        return model.class_features().stream()
                .filter(StreamUtils.duplicates(Feature::id))
                .map(feature -> {
                    Tags tags = createClassFeatureTags();

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

    private static Tags createClassFeatureTags() {
        return Tags.of("class_feature");
    }
}
