package pathfinder.encoder;

import static pathfinder.util.EncoderUtils.whenType;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.data.v2.CharacterChoiceDbo;
import pathfinder.data.v2.CharacterEffectDbo;
import pathfinder.data.v2.CharacterEffectDbo.AddChoiceOptionsEffect;
import pathfinder.data.v2.CharacterEffectDbo.GrantAbilityEffect;
import pathfinder.data.v2.CharacterEffectDbo.GrantChoiceEffect;
import pathfinder.data.v2.CharacterEffectDbo.GrantFeatEffect;
import pathfinder.data.v2.CharacterEffectDbo.ModifyFeatureEffect;
import pathfinder.model.CharacterChoice;
import pathfinder.model.CharacterEffect;

@Component
@RequiredArgsConstructor
public class CharacterEffectEncoder implements Encoder<CharacterEffect, CharacterEffectDbo> {
    private final Encoder<CharacterChoice, CharacterChoiceDbo> choiceEncoder;

    @Override
    public CharacterEffectDbo encode(CharacterEffect model) {
        var builder = CharacterEffectDbo.newBuilder()
                .setLevel(model.level());

        whenType(model, CharacterEffect.ModifyFeatureEffect.class, effect ->
                builder.setModifyFeature(ModifyFeatureEffect.newBuilder()
                                .setFeatureId(effect.featureId())
                                .setDelta(effect.delta())));

        whenType(model, CharacterEffect.AddChoiceEffect.class, effect ->
                builder.setGrantChoice(GrantChoiceEffect.newBuilder()
                                .setChoice(choiceEncoder.encode(effect.choice()))));

        whenType(model, CharacterEffect.GrantAbility.class, effect ->
                builder.setGrantAbility(GrantAbilityEffect.newBuilder()
                                .setAbilityId(effect.abilityId())
                                .build()));

        whenType(model, CharacterEffect.GrantFeat.class, effect ->
                builder.setGrantFeat(GrantFeatEffect.newBuilder()
                                .setFeatId(effect.featId())
                                .build()));

        whenType(model, CharacterEffect.AddChoiceOptions.class, effect ->
                builder.setAddChoiceOptions(AddChoiceOptionsEffect.newBuilder()
                                .setChoiceType(effect.choiceType())
                                .setDatabaseId(effect.databaseId())
                                .addAllOptionIds(effect.optionIds())
                                .build()));

        return builder.build();
    }
}
