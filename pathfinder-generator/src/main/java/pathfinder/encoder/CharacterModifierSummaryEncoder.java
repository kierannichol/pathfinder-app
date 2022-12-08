package pathfinder.encoder;

import org.springframework.stereotype.Component;
import pathfinder.data.v2.CharacterModifierSummaryDbo;
import pathfinder.model.CharacterModifier;

@Component
public class CharacterModifierSummaryEncoder implements Encoder<CharacterModifier, CharacterModifierSummaryDbo> {

    @Override
    public CharacterModifierSummaryDbo encode(CharacterModifier model) {
        return CharacterModifierSummaryDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .build();
    }
}
