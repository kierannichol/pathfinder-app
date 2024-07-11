package pathfinder.generator.mapper;

import java.util.List;
import java.util.Map;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.ArmorProficiencyQuery;
import pathfinder.db.query.Query;
import pathfinder.db.query.SkillQuery;
import pathfinder.db.query.WeaponProficiencyQuery;
import pathfinder.generator.PrerequisiteParser;
import pathfinder.model.Description;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.Weapons;
import pathfinder.util.EffectParser;
import pathfinder.util.StringUtils;

@RequiredArgsConstructor
@Component
@Slf4j
public class FeatMapper {
    private final PathfinderDatabase database;
    private final PrerequisiteParser prerequisiteParser;

    public Stream<Feature> flatMap(Feat feat) {

        Description description = Description.create(feat.description());
        if (StringUtils.notEmpty(feat.benefit())) {
            description.addSection("Benefit", feat.benefit());
        }
        if (StringUtils.notEmpty(feat.normal())) {
            description.addSection("Normal", feat.normal());
        }
        if (StringUtils.notEmpty(feat.special())) {
            description.addSection("Special", feat.special());
        }
        if (StringUtils.notEmpty(feat.completionBenefit())) {
            description.addSection("Completion Benefit", feat.completionBenefit());
        }
        if (StringUtils.notEmpty(feat.goal())) {
            description.addSection("Goal", feat.goal());
        }
        if (StringUtils.notEmpty(feat.note())) {
            description.addSection("Note", feat.note());
        }

        FeatureBuilder builder = new FeatureBuilder(feat.id())
                .setName(feat.name())
                .setDescription(description)
                .addTag("feat")
                .addTag(feat.type().toLowerCase());

        if (!feat.multiples()) {
            builder.setMaxStacks(1);
        }

        String prerequisiteFormula = tryParsePrerequisites(feat);
        builder.setEnabledCondition(prerequisiteFormula);

        if (feat.options() != null) {
            builder.addOptions(feat.options());
        }

        if (feat.effects() != null) {
            StackBuilder stack = new StackBuilder();
            feat.effects().forEach(effect -> stack.addEffect(EffectParser.parse(effect)));
            builder.addFixedStack(stack.build());
        }

        return Stream.of(builder.build(),
                makeGeneric(builder));

//        return trySplitOptions(builder, feat.id().withoutOption(), prerequisiteFormula);
    }

    private Feature makeGeneric(FeatureBuilder builder) {
        Feature source = builder.build();
        return Feature.simple(source.id().withoutOption(),
                source.name());
    }

    private Stream<Feature> trySplitOptions(FeatureBuilder builder, Id featId, String prerequisiteFormula) {
        var splitFeats = Map.of(
                Id.of("feat:skill_focus"), Query.skills()
        );

        if (splitFeats.containsKey(featId)) {
            return splitFeat(builder, null, splitFeats.get(featId));
        }

        return trySplitOptionsByPhrase(builder, prerequisiteFormula);
    }

    private Stream<Feature> trySplitOptionsByPhrase(FeatureBuilder builder, String prerequisiteFormula) {
        var splitPhrases = Map.of(
                "selected_weapon", Query.weapons(),
                "chosen", Query.weapons(),
                "selected_ranged_weapon", Query.weapons().ranged(),
                "selected_natural_weapon", Query.weapons().natural(),
                "selected_thrown_weapon", Query.weapons().in(Weapons.ALL_THROWN),
                "selected_piercing_melee_weapon", Query.weapons().melee().in(Weapons.ALL_PIERCING),
                "selected_deity_weapon", Query.weapons(),
                "selected_deity_melee_weapon", Query.weapons().melee(),
                "selected_shield", Query.armor().shield());

        Object foundQuery;
        for (String phrase : splitPhrases.keySet()) {

            if (!prerequisiteFormula.contains(phrase)) {
                continue;
            }

            foundQuery = splitPhrases.get(phrase);
            return splitFeat(builder, phrase, foundQuery);
        }

        return Stream.of(builder.build());
    }

    private Stream<Feature> splitFeat(FeatureBuilder builder, String formulaPart, Object foundQuery) {
        if (foundQuery instanceof WeaponProficiencyQuery weaponQuery) {
            return database.query(weaponQuery)
                    .map(weapon -> mapToOption(builder, formulaPart, weapon))
                    .map(FeatureBuilder::build);
        }

        if (foundQuery instanceof ArmorProficiencyQuery armorQuery) {
            return database.query(armorQuery)
                    .map(armor -> mapToOption(builder, formulaPart, armor))
                    .map(FeatureBuilder::build);
        }
        if (foundQuery instanceof SkillQuery skillQuery) {
            return database.query(skillQuery)
                    .map(skill -> mapToOption(builder, formulaPart, skill))
                    .map(FeatureBuilder::build);
        }
        throw new IllegalArgumentException("Unknown query: " + foundQuery);
    }

    private FeatureBuilder mapToOption(FeatureBuilder builder, String formulaPart, NamedEntity entity) {
        Feature original = builder.build();
        FeatureBuilder copy = Feature.builder(original)
                .setMaxStacks(1);

        String optionKey = entity.id().key;
        copy.setId(original.id().withOption(optionKey));
        copy.setName(original.name() + ": " + entity.name());

        String newFormula = formulaPart != null ? original.enabledCondition().formula()
                .replaceAll(formulaPart, optionKey) : original.enabledCondition().formula();

        List<String> featsToAppendOptionTag = List.of(
                "feat:weapon_focus",
                "feat:greater_weapon_focus",
                "feat:dazzling_display"
        );

        for (String featToAppendOptionTag : featsToAppendOptionTag) {
            newFormula = newFormula.replaceAll(
                    "@" + featToAppendOptionTag + "[^#]",
                    "@" + Id.of(featToAppendOptionTag).withOption(optionKey));
        }

        copy.setEnabledCondition(newFormula);

        return copy;
    }

    private String tryParsePrerequisites(Feat feat) {
        try {
            return prerequisiteParser.prerequisites(feat);
        } catch (Exception e) {
            log.warn("Failed to parse feat prerequisites", e);
            return "";
        }
    }
}
