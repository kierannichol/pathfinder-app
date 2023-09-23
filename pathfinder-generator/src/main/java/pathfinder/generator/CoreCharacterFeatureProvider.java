package pathfinder.generator;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.Effect;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.Id;
import pathfinder.model.StackBuilder;
import pathfinder.model.core.AbilityScore;
import pathfinder.model.core.BaseAttackBonus;
import pathfinder.model.pathfinder.Alignment;
import pathfinder.model.pathfinder.ArmorProficiency;
import pathfinder.model.pathfinder.Skills;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;
import pathfinder.model.pathfinder.WeaponProficiency;
import pathfinder.model.pathfinder.Weapons;
import pathfinder.util.StreamUtils;

@Component
public class CoreCharacterFeatureProvider implements FeatureProvider {

    @Override
    public Stream<Feature> features(SourceId sourceId) {
        if (!sourceId.equals(Sources.CORE)) {
            return Stream.empty();
        }

        return StreamUtils.concat(List.of(
                generalConcepts(),
                BaseAttackBonus.generateBaseAttackBonusFeatures(),
                AbilityScore.abilityScoreFeatures(),
                weaponProficiencies(),
                armorProficiencies(),
                alignments(),
                skills()
        ));
    }

    private Stream<Feature> generalConcepts() {
        return Stream.of(
                Feature.simple(Id.of("caster_level"), "Caster Level")
        );
    }

    private Stream<Feature> weaponProficiencies() {
        Function<WeaponProficiency, Feature> proficiencyToFeature = (proficiency) -> {
            FeatureBuilder builder = Feature.builder(proficiency.id())
                    .setName("Proficiency: " + proficiency.getName() + " Weapons");

            var stack = new StackBuilder();
            Weapons.filter(weapon -> weapon.requiredProficiency() == proficiency)
                            .forEach(weapon -> stack.addLink(Id.of("proficiency", weapon.id())));

            builder.setMaxStacks(1);
            builder.addFixedStack(stack.build());
            return builder.build();
        };

        Stream<Feature> weaponFeatures = Weapons.ALL_WEAPONS.stream()
                .map(weapon -> Feature.builder(Id.of("proficiency", weapon.id()))
                        .setName("Proficiency: " + weapon.name())
                        .setMaxStacks(1)
                        .addFixedStack(new StackBuilder()
                                .addEffect(Effect.setNumber(Id.of("proficiency", weapon.id()), 1))
                                .build()))
                .map(FeatureBuilder::build);

        return StreamUtils.concat(List.of(
                Weapons.PROFICIENCIES.stream().map(proficiencyToFeature),
                weaponFeatures
        ));
    }

    private Stream<Feature> armorProficiencies() {
        return Arrays.stream(ArmorProficiency.values())
                .filter(armorProficiency -> armorProficiency != ArmorProficiency.OTHER)
                .map(armor -> Feature.builder(armor.id())
                        .setName("Proficiency: " + armor.getName())
                        .setMaxStacks(1)
                        .build());
    }

    private Stream<Feature> alignments() {
        return Arrays.stream(Alignment.values())
                .map(alignment -> Feature.builder(alignment.id())
                        .setName(alignment.longName())
                        .setDescription(alignment.description())
                        .setMaxStacks(1)
                        .addTag("alignment")
//                        .addFixedStack(new StackBuilder()
//                                .addEffect(Effect.setNumber(alignment.id(), 1))
//                                .build())
                        .build());
    }

    private Stream<Feature> skills() {
        return Skills.ALL.stream()
                .map(skill -> Feature.builder(skill.id())
                        .setName(skill.name())
                        .addTag("skill")
                        .build());
    }
}
