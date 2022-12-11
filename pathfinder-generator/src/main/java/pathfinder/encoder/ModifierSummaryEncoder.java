package pathfinder.encoder;

import org.springframework.stereotype.Component;
import pathfinder.data.v2.ModifierSummaryDbo;
import pathfinder.model.CharacterModifier;

@Component
public class ModifierSummaryEncoder implements Encoder<CharacterModifier, ModifierSummaryDbo> {

    @Override
    public ModifierSummaryDbo encode(CharacterModifier model) {
        return ModifierSummaryDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .build();
    }
}
