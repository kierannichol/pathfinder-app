package pathfinder.encoder;

import static pathfinder.util.EncoderUtils.whenType;

import org.springframework.stereotype.Component;
import pathfinder.data.v2.CharacterChoiceDbo;
import pathfinder.data.v2.CharacterChoiceDbo.AbilityChoice;
import pathfinder.data.v2.CharacterChoiceDbo.FeatChoice;
import pathfinder.model.CharacterChoice;
import pathfinder.model.CharacterChoice.AbilityScoreIncreaseChoice;

@Component
public class CharacterChoiceEncoder implements Encoder<CharacterChoice, CharacterChoiceDbo> {

    @Override
    public CharacterChoiceDbo encode(CharacterChoice model) {
        var builder = CharacterChoiceDbo.newBuilder();

        whenType(model, AbilityScoreIncreaseChoice.class, choice ->
                builder.setKey(choice.key())
                        .setAbilityScoreIncrease(CharacterChoiceDbo.AbilityScoreIncreaseChoice.newBuilder()
                                .setDelta(choice.delta())));

        whenType(model, CharacterChoice.FeatChoice.class, choice ->
                builder.setKey(choice.key())
                        .setFeat(FeatChoice.newBuilder()
                                .addAllFeatIds(choice.featIds())));

        whenType(model, CharacterChoice.AbilityChoice.class, choice ->
                builder.setKey(choice.key())
                        .setAbility(AbilityChoice.newBuilder()
                                .addAllAbilityIds(choice.abilityIds())));

        return builder.build();
    }
}
