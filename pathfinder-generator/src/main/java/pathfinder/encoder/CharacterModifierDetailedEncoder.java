package pathfinder.encoder;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.data.v2.CharacterEffectDbo;
import pathfinder.data.v2.CharacterModifierDetailedDbo;
import pathfinder.model.CharacterEffect;
import pathfinder.model.CharacterModifier;

@Component
@RequiredArgsConstructor
public class CharacterModifierDetailedEncoder implements Encoder<CharacterModifier, CharacterModifierDetailedDbo> {
    private final Encoder<CharacterEffect, CharacterEffectDbo> effectEncoder;

    @Override
    public CharacterModifierDetailedDbo encode(CharacterModifier model) {
        return CharacterModifierDetailedDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .setEffectText(model.effectText())
                .setDescriptionText(model.descriptionText())
                .addAllEffects(effectEncoder.encodeList(model.effects()))
                .build();
    }
}
