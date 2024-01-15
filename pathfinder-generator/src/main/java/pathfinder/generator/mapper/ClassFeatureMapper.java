package pathfinder.generator.mapper;

import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.generator.PrerequisiteParser;
import pathfinder.model.Choice;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.FeatureSelectByTagChoice;
import pathfinder.model.FeatureSelectByTagChoice.Builder;
import pathfinder.model.FeatureSelectSortBy;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.util.EffectParser;

@Component
@RequiredArgsConstructor
@Slf4j
public class ClassFeatureMapper {
    private final PrerequisiteParser prerequisiteParser;

    public Feature map(ClassFeature feature) {
        StackBuilder stack = new StackBuilder();
        FeatureBuilder builder = new FeatureBuilder(feature.id())
                .setName(feature.name())
                .setLabel(feature.label())
                .setDescription(feature.description())
                .addTag("class_feature")
                .addTag(feature.classId().key)
                .addTag(feature.id().type);

        String prerequisiteFormula = tryParsePrerequisites(feature);
        builder.setEnabledCondition(prerequisiteFormula);

        if (feature.effects() != null) {
            feature.effects().forEach(effectFormula -> stack.addEffect(EffectParser.parse(effectFormula)));
        }

        tryCreateFeatureChoice(feature)
                .or(() -> tryCreateClassSpecificFeatureChoice(feature))
                .ifPresent(stack::addChoice);

        builder.setRepeatingStack(stack.build());
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

    private Optional<Choice> tryCreateFeatureChoice(ClassFeature feature) {
        return Optional.ofNullable(switch (feature.id().key) {
            case "mercy" -> byTagChoice("mercy", "Mercy");
            case "rogue_talent" -> byTagChoice("rogue_talent", "Rogue Talent");
            case "slayer_talent" -> byTagChoice("slayer_talent", "Slayer Talent");
            case "magus_arcana" -> byTagChoice("magus_arcana", "Magus Arcana");
            case "hex_arcana" -> byTagChoice("hex_arcana", "Hex Arcana", List.of("magus_arcana", "witch_hex"))
                    .category("All", "")
                    .category("Magus Arcana", "magus_arcana")
                    .category("Hex", "witch_hex");
            case "hex_magus" -> byTagChoice("hex_magus", "Hex Magus", List.of("witch_hex"));
            case "alchemist_discovery" -> byTagChoice("alchemist_discovery", "Alchemist Discovery");
            case "arcanist_exploits" -> byTagChoice("arcanist_exploits", "Arcanist Exploits");
            case "bardic_masterpiece" -> byTagChoice("bardic_masterpiece", "Bardic Masterpiece");
            case "rage_power" -> byTagChoice("rage_power", "Rage Power");
            case "warpriest_blessing" -> byTagChoice("warpriest_blessing", "Warpriest Blessing");
            case "elemental_focus", "expanded_element" -> byTagChoice("kineticist_element", "Kineticist Element", List.of("kineticist_element"));
            default -> null;
        }).map(Builder::build);
    }

    private Optional<Choice> tryCreateClassSpecificFeatureChoice(ClassFeature feature) {
        return Optional.ofNullable(switch (feature.id().key + "#" + feature.id().option) {
            case "bonus_feat#magus" -> FeatureSelectByTagChoice.builder(
                    "magus_bonus_feat",
                    "Magus Bonus Feat",
                    "bonus_feat")
                    .optionTag("feat+combat")
                    .optionTag("feat+item_creation")
                    .optionTag("feat+metamagic")
                    .category("Combat", "combat")
                    .category("Metamagic", "metamagic")
                    .category("Item Creation", "item_creation")
                    .sortBy(FeatureSelectSortBy.NAME);
            case "bonus_feat#fighter" -> FeatureSelectByTagChoice.builder(
                    "fighter_bonus_feat",
                    "Fighter Bonus Feat",
                    "bonus_feat")
                    .optionTag("feat+combat")
                    .category("Combat", "feat+combat")
                    .sortBy(FeatureSelectSortBy.NAME);
            default -> null;
        }).map(Builder::build);
    }

    private FeatureSelectByTagChoice.Builder byTagChoice(String choiceId, String label) {
        return byTagChoice(choiceId, label, List.of(choiceId));
    }

    private FeatureSelectByTagChoice.Builder byTagChoice(String choiceId, String label, List<String> optionTags) {
        return FeatureSelectByTagChoice.builder(choiceId, label, choiceId)
                .optionTags(optionTags)
                .sortBy(FeatureSelectSortBy.NAME);
    }
}
