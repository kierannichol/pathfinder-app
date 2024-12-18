package pathfinder.generator;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.model.Effect;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.FeatureSelectByTagChoice;
import pathfinder.model.FeatureSelectSortBy;
import pathfinder.model.Id;
import pathfinder.model.StackBuilder;
import pathfinder.model.Tags;
import pathfinder.model.core.AbilityScore;
import pathfinder.model.core.BaseAttackBonus;
import pathfinder.model.pathfinder.Alignment;
import pathfinder.model.pathfinder.ArmorProficiency;
import pathfinder.model.pathfinder.MagicSchools;
import pathfinder.model.pathfinder.Size;
import pathfinder.model.pathfinder.Skills;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;
import pathfinder.model.pathfinder.WeaponProficiency;
import pathfinder.model.pathfinder.Weapons;
import pathfinder.util.StreamUtils;

@Component
@RequiredArgsConstructor
public class CoreCharacterFeatureProvider implements FeatureProvider {
    private final PathfinderDatabase database;

    @Override
    public Stream<Feature> features(SourceId sourceId) {
        if (!sourceId.equals(Sources.CORE)) {
            return Stream.empty();
        }

        return StreamUtils.concat(List.of(
                generalConcepts(),
                BaseAttackBonus.generateBaseAttackBonusFeatures(),
                AbilityScore.abilityScoreFeatures(),
                AbilityScore.asiFeatures(),
                weaponProficiencies(),
                weaponSelectOptions(),
                armorProficiencies(),
                alignments(),
                skills(),
                schoolsOfMagic(),
                spellbooks(),
                classSkills(),
                sizes(),
                asi()
        ));
    }

    private Stream<Feature> spellbooks() {
        var classIds = new HashSet<Id>();
        database.query(Query.spells())
                .flatMap(spell -> spell.levels().stream())
                .forEach(spellLevel -> {
                    classIds.add(spellLevel.classId());
                });
        return classIds.stream()
                .map(classId -> {
                    var classDef = database.getClassById(classId).get();
                    return Feature.builder(Id.of("spellbook:%s", classId.key))
                            .setName("%s Spellbook".formatted(classDef.name()))
                            .addTag("spellbook")
                            .build();
                });
    }

    private Stream<Feature> generalConcepts() {
        return Stream.of(
                Feature.simple(Id.of("character_level"), "Character Level"),
                Feature.simple(Id.of("caster_level"), "Caster Level"),
                Feature.simple(Id.of("size"), "Character size")
        );
    }

    private Stream<Feature> weaponSelectOptions() {
        return Weapons.ALL_WEAPONS.stream()
                .map(weapon -> Feature.builder(Id.of("weapon", weapon.id()))
                        .setName(weapon.name())
                        .addTag("weapon")
                        .addTag(weapon.requiredProficiency().id().key)
                        .addTag(weapon.range().isRanged() ? "ranged" : "melee")
                        .setMaxStacks(1))
                .map(FeatureBuilder::build);
    }

    private Stream<Feature> schoolsOfMagic() {
        return MagicSchools.ALL.stream()
                .map(school -> Feature.builder(school)
                        .addTag("magic_school")
                        .build());
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
                        .setName(weapon.name())
                        .setLabel("Proficiency: " + weapon.name())
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
                        .addFixedStack(new StackBuilder()
                                .addEffect(Effect.setText("alignment", alignment.id().string()))
                                .build())
                        .build());
    }

    private Stream<Feature> skills() {
        return Skills.ALL.stream()
                .map(skill -> Feature.builder(skill.id())
                        .setName(skill.name())
                        .addTag("skill")
                        .build());
    }

    private Stream<Feature> classSkills() {
        return Skills.ALL.stream()
                .map(skill -> Feature.builder(skill.id().changeType("class_skill"))
                        .setName(skill.name())
                        .addTag("class_skill")
                        .addFixedStack(new StackBuilder()
                                .addEffect(Effect.setNumber("trained:" + skill.id().string(), 1))
                                .build())
                        .build());
    }

    private Stream<Feature> sizes() {
        return Arrays.stream(Size.values())
                .map(size -> Feature.builder(size.id())
                        .setName(size.longName())
                        .addFixedStack(new StackBuilder()
                                .addEffect(Effect.setNumber("size", size.number()))
                                .addEffect(Effect.setNumber("size_mod", size.sizeMod()))
                                .build())
                        .build());
    }

    private Stream<Feature> asi() {
        Stream<Feature> asiChoices = Stream.of(
                Feature.builder("asi:any_p2")
                        .setName("Ability Score Increase")
                        .addFixedStack(new StackBuilder()
                                .addChoice(new FeatureSelectByTagChoice("race_asi_plus_2_any",
                                        "Ability Score Increase",
                                        Tags.of("asi"),
                                        List.of("asi_p2"),
                                        List.of(),
                                        List.of(),
                                        FeatureSelectSortBy.NONE))
                                .build())
                        .build()
        );

        Stream<Feature> asip2 = Arrays.stream(AbilityScore.values())
                .map(abilityScore -> Feature.builder("asi:" + abilityScore.shortName + "_p2")
                        .setName(abilityScore.longName)
                        .addTag("asi_p2")
                        .setRepeatingStack(new StackBuilder()
                                .addEffect(Effect.addNumber(abilityScore.shortName + ":asi", 2))
                                .build())
                        .build());

        Stream<Feature> asim2 = Arrays.stream(AbilityScore.values())
                .map(abilityScore -> Feature.builder("asi:" + abilityScore.shortName + "_m2")
                        .setName(abilityScore.longName)
                        .addTag("asi_m2")
                        .setRepeatingStack(new StackBuilder()
                                .addEffect(Effect.addNumber(abilityScore.shortName + ":asi", -2))
                                .build())
                        .build());

        return StreamUtils.concat(List.of(asiChoices, asip2, asim2));
    }
}
