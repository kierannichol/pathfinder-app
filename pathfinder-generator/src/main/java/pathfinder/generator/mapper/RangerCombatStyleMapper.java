package pathfinder.generator.mapper;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.model.Effect;
import pathfinder.model.Feature;
import pathfinder.model.FeatureSelectByTagChoice;
import pathfinder.model.Id;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.RangerCombatStyle;
import pathfinder.util.StreamUtils;

@RequiredArgsConstructor
@Component
public class RangerCombatStyleMapper {
    private final PathfinderDatabase database;
    private final FeatMapper featMapper;

    public Stream<Feature> flatMap(RangerCombatStyle model) {
        var styleFeatures = Stream.of(
                buildLevel1(model),
                buildLevel6(model),
                buildLevel10(model)
        );

        return Stream.concat(
                buildCustomFeats(model),
                styleFeatures
        );
    }

    private Stream<Feature> buildCustomFeats(RangerCombatStyle model) {
        return StreamUtils.concat(List.of(
                model.featsToAddAtLevel1().stream(),
                model.featsToAddAtLevel6().stream(),
                model.featsToAddAtLevel10().stream()
        )).map(this::buildCustomFeat);
    }

    private Feature buildCustomFeat(String name) {
        var original = featMapper.map(database.query(Query.feat(name)).findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Feat not found: " + name)));

        return Feature.builder(original)
                .setId(original.id().changeType("ranger_combat_style_feat"))
                .modifyStack(1, stack -> stack
                        .addEffect(Effect.addNumber(original.id(), 1)))
                .setEnabledCondition("")
                .clearTags()
                .addTag("ranger_combat_style_feat")
                .build();
    }

    private Feature buildLevel1(RangerCombatStyle model) {
        var feature = Feature.builder(model.id().string() + "_1")
                .setName(model.name())
                .addTag("ranger_combat_style_1");

        return feature.addFixedStack(new StackBuilder()
                .addChoice(FeatureSelectByTagChoice.builder("ranger_combat_style_1", "Ranger Combat Style Feat")
                        .featureIds(mapList(model.featsToAddAtLevel1(), this::featId))
                        .tag("class_feature")
                        .build())
                .build())
                .build();
    }

    private Feature buildLevel6(RangerCombatStyle model) {
        var feature = Feature.builder(model.id().string() + "_2")
                .setName(model.name())
                .addTag("ranger_combat_style_2")
                .setEnabledCondition("@%s_1".formatted(model.id().string()));

        return feature.addFixedStack(new StackBuilder()
                .addChoice(FeatureSelectByTagChoice.builder("ranger_combat_style_2", "Ranger Combat Style Feat")
                        .featureIds(mapList(model.featsToAddAtLevel1(), this::featId))
                        .featureIds(mapList(model.featsToAddAtLevel6(), this::featId))
                        .tag("class_feature")
                        .build())
                .build())
                .build();
    }

    private Feature buildLevel10(RangerCombatStyle model) {
        var feature = Feature.builder(model.id().string() + "_3")
                .setName(model.name())
                .addTag("ranger_combat_style_3")
                .setEnabledCondition("@%s_2".formatted(model.id().string()));

        return feature.addFixedStack(new StackBuilder()
                        .addChoice(FeatureSelectByTagChoice.builder("ranger_combat_style_3", "Ranger Combat Style Feat")
                                .featureIds(mapList(model.featsToAddAtLevel1(), this::featId))
                                .featureIds(mapList(model.featsToAddAtLevel6(), this::featId))
                                .featureIds(mapList(model.featsToAddAtLevel10(), this::featId))
                                .tag("class_feature")
                                .build())
                        .build())
                .build();
    }

    private Id featId(String name) {
        return database.query(Query.feat(name)).findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Feat not found: " + name))
                .id()
                .changeType("ranger_combat_style_feat");
    }
}
