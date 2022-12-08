package pathfinder.generator.encode;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.data.v2.CharacterChoiceDbo;
import pathfinder.data.v2.CharacterChoiceDbo.FeatChoice;
import pathfinder.data.v2.CharacterEffectDbo;
import pathfinder.data.v2.CharacterEffectDbo.GrantAbilityEffect;
import pathfinder.data.v2.CharacterEffectDbo.GrantChoiceEffect;
import pathfinder.data.v2.CharacterEffectDbo.ModifyFeatureEffect;
import pathfinder.data.v2.CharacterEffectDbo.SetFeatureEffect;
import pathfinder.data.v2.ClassCategoryDbo;
import pathfinder.data.v2.ClassDetailsDbo;
import pathfinder.generator.db.RagePowerSourceDatabase;
import pathfinder.model.Ability;
import pathfinder.model.CharacterClass;
import pathfinder.model.CharacterModifier;
import pathfinder.source.AlchemistDiscoverySourceDatabase;
import pathfinder.source.MagusArcanaSourceDatabase;
import pathfinder.source.RogueTalentSourceDatabase;
import pathfinder.source.SorcererBloodlineSourceDatabase;

@Component("Character Class Details Encoder")
@RequiredArgsConstructor
public class ClassDetailsEncoder implements Encoder<CharacterClass, ClassDetailsDbo> {

    private final RagePowerSourceDatabase ragePowerSourceDatabase;
    private final RogueTalentSourceDatabase rogueTalentSourceDatabase;
    private final MagusArcanaSourceDatabase magusArcanaSourceDatabase;
    private final AlchemistDiscoverySourceDatabase alchemistDiscoverySourceDatabase;
    private final SorcererBloodlineSourceDatabase sorcererBloodlineSourceDatabase;

    @Override
    public ClassDetailsDbo encode(CharacterClass characterClass) {
        var builder = ClassDetailsDbo.newBuilder();
        builder.setId(characterClass.id());
        builder.setName(characterClass.name());
        builder.setShortDescription(characterClass.shortDescription());
        builder.setCategory(ClassCategoryDbo.valueOf(characterClass.type().name()));

        List<CharacterEffectDbo> effects = new ArrayList<>();

        // Add standard feat choices every second level
        for (int level = 1; level <= 20; level += 2) {
            effects.add(CharacterEffectDbo.newBuilder()
                    .setLevel(level)
                    .setGrantChoice(GrantChoiceEffect.newBuilder()
                            .setChoice(CharacterChoiceDbo.newBuilder()
                                    .setFeat(FeatChoice.newBuilder())))
                    .build());
        }

        // Add class skills
        characterClass.skills().forEach(skill ->
                effects.add(CharacterEffectDbo.newBuilder()
                        .setLevel(1)
                        .setModifyFeature(ModifyFeatureEffect.newBuilder()
                                .setFeatureId(skill.id())
                                .setDelta(1))
                        .build()));

        // Special abilities
        characterClass.levels().forEach(level -> {
            int levelNumber = level.level();

            effects.add(CharacterEffectDbo.newBuilder()
                    .setLevel(levelNumber)
                    .setSetFeature(SetFeatureEffect.newBuilder()
                            .setFeatureId("bab")
                            .setValue(level.bab()))
                    .build());

            effects.add(CharacterEffectDbo.newBuilder()
                    .setLevel(levelNumber)
                    .setSetFeature(SetFeatureEffect.newBuilder()
                            .setFeatureId("fort:base")
                            .setValue(level.fortSave()))
                    .build());

            effects.add(CharacterEffectDbo.newBuilder()
                    .setLevel(levelNumber)
                    .setSetFeature(SetFeatureEffect.newBuilder()
                            .setFeatureId("reflex:base")
                            .setValue(level.refSave()))
                    .build());

            effects.add(CharacterEffectDbo.newBuilder()
                    .setLevel(levelNumber)
                    .setSetFeature(SetFeatureEffect.newBuilder()
                            .setFeatureId("will:base")
                            .setValue(level.willSave()))
                    .build());

            level.specials().forEach(special -> {
                effects.add(CharacterEffectDbo.newBuilder()
                        .setLevel(levelNumber)
                        .setGrantAbility(GrantAbilityEffect.newBuilder()
                                .setAbilityId(special.id()))
                        .build());
            });

            level.specials().forEach(special -> {
                if (special.id().startsWith("ability:rage_power")) {
                    effects.add(grantAbilityChoice(levelNumber, "rage_power", "Rage Power",
                            ragePowerSourceDatabase.streamAbilities()));
                }

                if (special.id().startsWith("ability:rogue_talent")) {
                    try {
                        effects.add(grantAbilityChoice(levelNumber, "rogue_talent", "Rogue Talent",
                                rogueTalentSourceDatabase.streamAbilities()));
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                }

                if (special.id().startsWith("ability:magus_arcana")) {
                    try {
                        effects.add(grantAbilityChoice(levelNumber, "magus_arcana", "Magus Arcana",
                                magusArcanaSourceDatabase.streamAbilities()));
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                }

                if (special.id().startsWith("ability:discovery")) {
                    try {
                        effects.add(grantAbilityChoice(levelNumber, "discovery", "Discovery",
                                alchemistDiscoverySourceDatabase.streamAbilities()));
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                }

            });
        });

        // Add choices not covered by abilities
        if (characterClass.id().equals("class:sorcerer")) {
            try {
                effects.add(grantModifierChoice(1, "bloodline", "Bloodline",
                        sorcererBloodlineSourceDatabase.streamModifiers()));
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }
        }

        builder.addAllEffects(effects);
        return builder.build();
    }

    private CharacterEffectDbo grantAbilityChoice(int level, String key, String label, Stream<Ability> abilities) {
        return CharacterEffectDbo.newBuilder()
                .setLevel(level)
                .setGrantChoice(GrantChoiceEffect.newBuilder()
                        .setChoice(CharacterChoiceDbo.newBuilder()
                                .setKey(key)
                                .setLabel(label)
                                .setAbility(CharacterChoiceDbo.AbilityChoice.newBuilder()
                                        .addAllAbilityIds(
                                                abilities.map(Ability::id).toList()
                                        ))))
                .build();
    }

    private CharacterEffectDbo grantModifierChoice(int level, String key, String label, Stream<CharacterModifier> modifierStream) {
        return CharacterEffectDbo.newBuilder()
                .setLevel(level)
                .setGrantChoice(GrantChoiceEffect.newBuilder()
                        .setChoice(CharacterChoiceDbo.newBuilder()
                                .setKey(key)
                                .setLabel(label)
                                .setModifier(CharacterChoiceDbo.ModifierChoice.newBuilder()
                                        .addAllModifierIds(
                                                modifierStream.map(CharacterModifier::id).toList()
                                        ))))
                .build();
    }
}
