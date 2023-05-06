package pathfinder.generator.convert;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Sources;

@Component
public class ArchetypeFeatureEntityConverter {

    public Stream<Entity> toEntities(Archetype model) {
        Stream<Entity> converted = model.features().stream()
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

        Stream<Entity> custom = customFeatureEntities(model);

        return Stream.concat(converted, custom);
    }

    private Stream<Entity> customFeatureEntities(Archetype archetype) {
        List<Entity> custom = new ArrayList<>();
        if (archetype.id().equals(Id.of("class:magus#hexcrafter"))) {
            custom.add(Entity.builder()
                    .id(Id.of("ability:hex_arcana#magus_hexcrafter"))
                    .name("Hex Arcana")
                    .tags(createClassFeatureTags(archetype.id().string()))
                    .description("A hexcrafter gains access to the following magus arcana, or may select any witch hex in place of a magus arcana. At 12th level, the hexcrafter may select a hex or major hex in place of a magus arcana. At 18th level, a hexcrafter can select a hex, major hex, or grand hex in place of a magus arcana. He cannot select any hex or arcana more than once.")
                    .source(Sources.ULTIMATE_MAGIC)
                    .effect(Effect.addNumber("ability:magus_arcana#magus_hexcrafter", 1))
                    .build());
        }

        return custom.stream();
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
