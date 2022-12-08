package pathfinder.encoder;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Component;
import pathfinder.data.v2.CharacterChoiceDbo;
import pathfinder.data.v2.CharacterChoiceDbo.FeatChoice;
import pathfinder.data.v2.CharacterEffectDbo;
import pathfinder.data.v2.CharacterEffectDbo.GrantAbilityEffect;
import pathfinder.data.v2.CharacterEffectDbo.GrantChoiceEffect;
import pathfinder.model.Special;

@Component
public class SpecialToEffectDboListEncoder implements Encoder<Special, List<CharacterEffectDbo>> {

    @Override
    public List<CharacterEffectDbo> encode(Special model) {
        List<CharacterEffectDbo> dbos = new ArrayList<>();

        dbos.add(grantAbilityDbo(model));

        switch (model.id()) {
            case "ability:bonus_feat":
                dbos.add(CharacterEffectDbo.newBuilder()
                        .setGrantChoice(GrantChoiceEffect.newBuilder()
                                .setChoice(CharacterChoiceDbo.newBuilder()
                                        .setFeat(FeatChoice.newBuilder())))
                        .build());
                break;
        }

        return dbos;
    }

    private CharacterEffectDbo grantAbilityDbo(Special model) {
        var dbo = CharacterEffectDbo.newBuilder();
        dbo.setGrantAbility(GrantAbilityEffect.newBuilder()
                .setAbilityId(model.id())
                .build());
        return dbo.build();
    }
}
