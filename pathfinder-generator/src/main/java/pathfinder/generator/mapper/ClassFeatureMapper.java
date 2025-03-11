package pathfinder.generator.mapper;

import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.formula.Formula;
import org.springframework.stereotype.Component;
import pathfinder.generator.PrerequisiteParser;
import pathfinder.model.Choice;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.FeatureSelectByTagChoice;
import pathfinder.model.FeatureSelectByTagChoice.Builder;
import pathfinder.model.FeatureSelectSortBy;
import pathfinder.model.FixedStacks;
import pathfinder.model.RepeatingStack;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.util.EffectParser;

@Component
@RequiredArgsConstructor
@Slf4j
public class ClassFeatureMapper {
    private final PrerequisiteParser prerequisiteParser;

    public Stream<Feature> map(ClassFeature feature) {
        StackBuilder stack = new StackBuilder();
        FeatureBuilder builder = new FeatureBuilder(feature.id())
                .setName(feature.name())
                .setLabel(feature.label())
                .setDescription(feature.description())
                .addTag("class_feature")
                .addTag(feature.classId().key)
                .addTag(feature.id().type);

        if (feature.attackModifier() != null) {
            builder.setAttackModifier(feature.attackModifier());
        }
        if (feature.attacks() != null) {
            builder.addAllAttacks(feature.attacks());
        }

        String enabledFormula = tryParsePrerequisites(feature);
        builder.setEnabledCondition(enabledFormula);

        if (enabledFormula.contains("@ability:grand_discovery#alchemist")) {
            builder
                    .removeTag("discovery")
                    .addTag("grand_discovery");

            enabledFormula = enabledFormula.replace("@ability:grand_discovery#alchemist", "true");
            enabledFormula = Formula.optimize(enabledFormula);
            builder.setEnabledCondition(enabledFormula);
        }

        if (feature.stacks() instanceof FixedStacks fixedStacks) {
            fixedStacks.stacks().forEach(builder::addFixedStack);
        }
        else if (feature.stacks() instanceof RepeatingStack repeatingStack) {
            builder.setRepeatingStack(repeatingStack.stack());
        }

        if (feature.effects() != null) {
            feature.effects().forEach(effectFormula -> stack.addEffect(EffectParser.parse(effectFormula)));
        }
        if (feature.links() != null) {
            feature.links().forEach(stack::addLink);
        }

        Stream.concat(
                        tryCreateFeatureChoice(feature),
                        tryCreateClassSpecificFeatureChoice(feature))
                .forEach(stack::addChoice);

        if (!stack.isEmpty()) {
            builder.setRepeatingStack(stack.build());
        }
        return Stream.of(builder.build(),
                makeGeneric(builder));
    }

    private Feature makeGeneric(FeatureBuilder builder) {
        Feature source = builder.build();
        return Feature.simple(source.id().withoutOption(),
                source.name());
    }

    private String tryParsePrerequisites(ClassFeature feature) {
        try {
            return prerequisiteParser.prerequisites(feature);
        } catch (Exception e) {
            log.warn("Failed to parse class feature prerequisites: " + e.getMessage());
            return "";
        }
    }

    private Stream<Choice> tryCreateFeatureChoice(ClassFeature feature) {
        return singleOrMultiple(switch (feature.id().key) {
            case "mercy" -> byTagChoice("mercy", "Mercy");
            case "rogue_talent" -> byTagChoice("rogue_talent", "Rogue Talent");
            case "slayer_talent" -> byTagChoice("slayer_talent", "Slayer Talent");
            case "magus_arcana" -> byTagChoice("magus_arcana", "Magus Arcana");
            case "hex_arcana" -> byTagChoice("hex_arcana", "Hex Arcana", List.of("magus_arcana", "witch_hex"))
                    .category("All", "")
                    .category("Magus Arcana", "magus_arcana")
                    .category("Hex", "witch_hex");
            case "hex_magus" -> byTagChoice("hex_magus", "Hex Magus", List.of("witch_hex"));
            case "alchemist_discovery", "discovery" -> byTagChoice("alchemist_discovery", "Discovery", List.of("discovery"));
            case "grand_discovery" -> Stream.of(
                    byTagChoice("alchemist_discovery_1", "Discovery", List.of("discovery")),
                    byTagChoice("alchemist_discovery_2", "Discovery", List.of("discovery")),
                    byTagChoice("alchemist_grand_discovery", "Grand Discovery", List.of("grand_discovery")));
            case "arcanist_exploits" -> byTagChoice("arcanist_exploits", "Arcanist Exploits");
            case "bardic_masterpiece" -> byTagChoice("bardic_masterpiece", "Bardic Masterpiece");
            case "rage_power" -> byTagChoice("rage_power", "Rage Power");
            case "warpriest_blessing" -> byTagChoice("warpriest_blessing", "Warpriest Blessing");
            case "elemental_focus", "expanded_element" -> byTagChoice("kineticist_element", "Kineticist Element", List.of("kineticist_element"));
            default -> Stream.empty();
        });
    }

    private Stream<Choice> tryCreateClassSpecificFeatureChoice(ClassFeature feature) {
        return Stream.ofNullable(switch (feature.id().key + "#" + feature.id().option) {
            case "bonus_feat#magus" -> FeatureSelectByTagChoice.builder(
                    "magus_bonus_feat",
                    "Magus Bonus Feat")
                    .tag("bonus_feat")
                    .tag("class_feature")
                    .optionTag("feat+combat")
                    .optionTag("feat+item_creation")
                    .optionTag("feat+metamagic")
                    .category("Combat", "combat")
                    .category("Metamagic", "metamagic")
                    .category("Item Creation", "item_creation")
                    .sortBy(FeatureSelectSortBy.NAME);
            case "bonus_feat#fighter" -> FeatureSelectByTagChoice.builder(
                    "fighter_bonus_feat",
                    "Fighter Bonus Feat")
                    .tag("bonus_feat")
                    .tag("class_feature")
                    .optionTag("feat+combat")
                    .category("Combat", "feat+combat")
                    .sortBy(FeatureSelectSortBy.NAME);
            default -> null;
        }).map(Builder::build);
    }

    private Stream<Choice> singleOrMultiple(Object choiceBuilder) {
        if (choiceBuilder instanceof Builder builder) {
            return Stream.of(builder.build());
        }
        if (choiceBuilder instanceof Stream<?> stream) {
            return stream.map(obj -> ((Builder) obj).build());
        }
        throw new IllegalArgumentException("Must be Builer or Stream<Builder> but was ");
    }

    private FeatureSelectByTagChoice.Builder byTagChoice(String choiceId, String label) {
        return byTagChoice(choiceId, label, List.of(choiceId));
    }

    private FeatureSelectByTagChoice.Builder byTagChoice(String choiceId, String label, List<String> optionTags) {
        return FeatureSelectByTagChoice.builder(choiceId, label)
                .tag(choiceId)
                .tag("class_feature")
                .optionTags(optionTags)
                .sortBy(FeatureSelectSortBy.NAME);
    }
}
