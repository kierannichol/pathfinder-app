package pathfinder.v7.generator;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.ArmorProficiency;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;
import pathfinder.model.pathfinder.WeaponProficiency;
import pathfinder.model.pathfinder.Weapons;
import pathfinder.util.StreamUtils;
import pathfinder.v7.model.EffectV7;
import pathfinder.v7.model.FeatureV7;
import pathfinder.v7.model.FeatureV7.FeatureBuilder;
import pathfinder.v7.model.StackBuilder;
import pathfinder.v7.model.core.BaseAttackBonus;

@Component
public class CoreCharacterFeatureProvider implements FeatureProviderV7 {

    @Override
    public Stream<FeatureV7> features(SourceId sourceId) {
        if (!sourceId.equals(Sources.CORE)) {
            return Stream.empty();
        }

        return StreamUtils.concat(List.of(
                BaseAttackBonus.generateBaseAttackBonusFeatures(),
                weaponProficiencies(),
                armorProficiencies()
        ));
    }

    private Stream<FeatureV7> weaponProficiencies() {
        Function<WeaponProficiency, FeatureV7> proficiencyToFeature = (proficiency) -> {
            FeatureBuilder builder = FeatureV7.builder(proficiency.id());

            var stack = new StackBuilder();
            Weapons.filter(weapon -> weapon.requiredProficiency() == proficiency)
                            .forEach(weapon -> stack.addLink(Id.of("proficiency", weapon.id())));

            builder.setMaxStacks(1);
            builder.addFixedStack(stack.build());
            return builder.build();
        };

        Stream<FeatureV7> weaponFeatures = Weapons.ALL_WEAPONS.stream()
                .map(weapon -> FeatureV7.builder(Id.of("proficiency", weapon.id()))
                        .setMaxStacks(1)
                        .addFixedStack(new StackBuilder()
                                .addEffect(EffectV7.setNumber(Id.of("proficiency", weapon.id()), 1))
                                .build()))
                .map(FeatureBuilder::build);

        return StreamUtils.concat(List.of(
                Weapons.PROFICIENCIES.stream().map(proficiencyToFeature),
                weaponFeatures
        ));
    }

    private Stream<FeatureV7> armorProficiencies() {
        return Arrays.stream(ArmorProficiency.values())
                .filter(armorProficiency -> armorProficiency != ArmorProficiency.OTHER)
                .map(armor -> FeatureV7.builder(armor.id())
                        .setMaxStacks(1)
                        .build());
    }
}
