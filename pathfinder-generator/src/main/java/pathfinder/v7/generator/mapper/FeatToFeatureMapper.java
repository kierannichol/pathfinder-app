package pathfinder.v7.generator.mapper;

import java.util.Map;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.NamedEntity;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.Weapons;
import pathfinder.v7.db.PathfinderDatabase;
import pathfinder.v7.db.query.ArmorProficiencyQuery;
import pathfinder.v7.db.query.Query;
import pathfinder.v7.db.query.WeaponProficiencyQuery;
import pathfinder.v7.generator.PrerequisiteParserV7;
import pathfinder.v7.model.FeatureV7;
import pathfinder.v7.model.FeatureV7.FeatureBuilder;

@RequiredArgsConstructor
@Component
@Slf4j
public class FeatToFeatureMapper {
    private final PathfinderDatabase database;
    private final PrerequisiteParserV7 prerequisiteParser;

    public Stream<FeatureV7> flatMap(Feat feat) {
        FeatureBuilder builder = new FeatureBuilder(feat.id())
                .setName(feat.name())
                .setDescription(feat.description())
                .addTag("feat")
                .addTag(feat.type().toLowerCase());

        if (!feat.multiples()) {
            builder.setMaxStacks(1);
        }

        String prerequisiteFormula = tryParsePrerequisites(feat);
        builder.setEnabledCondition(prerequisiteFormula);

        return trySplitOptions(builder, prerequisiteFormula);
    }

    private Stream<FeatureV7> trySplitOptions(FeatureBuilder builder, String prerequisiteFormula) {
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

            if (foundQuery instanceof WeaponProficiencyQuery weaponQuery) {
                return database.query(weaponQuery)
                        .map(weapon -> mapToOption(builder, phrase, weapon))
                        .map(FeatureBuilder::build);
            }

            if (foundQuery instanceof ArmorProficiencyQuery armorQuery) {
                return database.query(armorQuery)
                        .map(armor -> mapToOption(builder, phrase, armor))
                        .map(FeatureBuilder::build);
            }
        }

        return Stream.of(builder.build());
    }

    private FeatureBuilder mapToOption(FeatureBuilder builder, String formulaPart, NamedEntity entity) {
        FeatureV7 original = builder.build();
        FeatureBuilder copy = FeatureV7.builder(original)
                .setMaxStacks(1);

        copy.setId(original.id().withOption(entity.id().key));
        copy.setName(original.name() + ": " + entity.name());

        String newFormula = original.enabledCondition().formula()
                .replaceAll(formulaPart, entity.id().key);
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
