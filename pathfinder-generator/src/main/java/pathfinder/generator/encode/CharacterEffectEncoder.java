package pathfinder.generator.encode;

import static pathfinder.util.EncoderUtils.whenType;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.data.v3.EffectDbo;
import pathfinder.model.CharacterChoice;
import pathfinder.model.CharacterChoice.AbilityChoice;
import pathfinder.model.CharacterChoice.FeatChoice;
import pathfinder.model.CharacterEffect;
import pathfinder.model.CharacterEffect.AddChoiceEffect;
import pathfinder.model.CharacterEffect.AddChoiceOptions;
import pathfinder.model.CharacterEffect.GrantAbility;
import pathfinder.model.CharacterEffect.GrantFeat;
import pathfinder.model.CharacterEffect.ModifyFeatureEffect;
import pathfinder.model.v3.Effects;
import pathfinder.util.NameUtils;

@Component
@RequiredArgsConstructor
public class CharacterEffectEncoder {
    private final EffectsEncoder effectsEncoder;

    public List<EffectDbo> encode(CharacterEffect effect) {
        Effects effects = new Effects();

//        effect.feats().forEach(feat -> effects.adjustState(effect.level(), feat.id(), 1));
//        effect.abilities().forEach(ability -> effects.adjustState(effect.level(), ability.id(), 1));

        whenType(effect, ModifyFeatureEffect.class, casted -> effects.adjustState(casted.level(), casted.featureId(), casted.delta()));

        whenType(effect, GrantAbility.class, casted -> effects.adjustState(casted.level(), casted.abilityId(), 1));
        whenType(effect, GrantFeat.class, casted -> effects.adjustState(casted.level(), casted.featId(), 1));
        whenType(effect, AddChoiceEffect.class, casted -> applyCharacterChoice(effects, casted.level(), casted.choice()));

        whenType(effect, AddChoiceOptions.class, casted -> effects.addChoicesToType(casted.choiceType(), casted.optionIds().stream()
                .map(optionId -> casted.databaseId() + "/" + optionId).toArray(String[]::new)));

        return effectsEncoder.encode(effects);
    }

    private void applyCharacterChoice(Effects effects, int level, CharacterChoice choice) {
        String id = "level%d:%s".formatted(level, choice.key());
        String label = NameUtils.idToName(choice.key());

        whenType(choice, FeatChoice.class, casted -> effects.selectChoice(level, casted.key(), id, label, casted.featIds().stream().map(featId -> "feat/" + featId).toArray(String[]::new)));
        whenType(choice, AbilityChoice.class, casted -> effects.selectChoice(level, casted.key(), id, label, casted.abilityIds().stream().map(featId -> "*/" + featId).toArray(String[]::new)));
    }
}
