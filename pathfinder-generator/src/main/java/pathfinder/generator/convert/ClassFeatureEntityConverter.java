package pathfinder.generator.convert;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.Choice;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.SelectChoice;
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
                            .choices(tryFeatureChoice(model.id(), feature.id()).toList())
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

    private static Stream<Choice> tryFeatureChoice(Id classId, Id featureId) {
        String choicePrefix = "%s@{%s}:".formatted(classId, classId);
        return switch (featureId.string()) {
            case "ability:rage_power#barbarian" -> Stream.of(
                    new SelectChoice(choicePrefix + "rage_power", "Rage Power", "rage_power", List.of("rage_power"), List.of()));
            case "ability:bloodline#bloodrager" -> Stream.of(
                    new SelectChoice(choicePrefix + "bloodline", "Bloodline", "bloodrager_bloodline", List.of("bloodrager_bloodline"), List.of()));
            case "ability:mercy#paladin" -> Stream.of(
                    new SelectChoice(choicePrefix + "mercy", "Mercy", "mercy", List.of("mercy"), List.of()));
            case "ability:bonus_feat#magus" -> Stream.of(
                    new SelectChoice(choicePrefix + "bonus_feat", "Bonus Feat (Magus)", "feat",
                            List.of("feat+combat", "feat+item_creation", "feat+metamagic"), List.of()));
            case "ability:arcanist_exploit#arcanist" -> Stream.of(
                    new SelectChoice(choicePrefix + "arcanist_exploit", "Arcanist Exploit", "arcanist_exploit", List.of("arcanist_exploit"), List.of()));
            case "ability:slayer_talent#slayer" -> Stream.of(
                    new SelectChoice(choicePrefix + "slayer_talent", "Slayer Talent", "slayer_talent", List.of("slayer_talent"), List.of()));
            case "ability:rogue_talent#rogue" -> Stream.of(
                    new SelectChoice(choicePrefix + "rogue_talent", "Rogue Talent", "rogue_talent", List.of("rogue_talent"), List.of()));
            case "ability:blessings#warpriest" -> Stream.of(
                    new SelectChoice(choicePrefix + "blessing_1", "Blessing #1", "warpriest_blessing", List.of("warpriest_blessing"), List.of()),
                    new SelectChoice(choicePrefix + "blessing_2", "Blessing #2", "warpriest_blessing", List.of("warpriest_blessing"), List.of())
            );
            case "ability:discovery#alchemist" -> Stream.of(
                    new SelectChoice(choicePrefix + "alchemist_discovery", "Discovery", "alchemist_discovery", List.of("alchemist_discovery"), List.of()));
            case "ability:magus_arcana#magus" -> Stream.of(
                    new SelectChoice(choicePrefix + "magus_arcana", "Magus Arcana", "magus_arcana", List.of("magus_arcana"), List.of()));
            default -> Stream.empty();
        };
    }
}
