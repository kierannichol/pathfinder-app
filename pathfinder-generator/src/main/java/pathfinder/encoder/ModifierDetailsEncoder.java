package pathfinder.encoder;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.data.v2.CharacterEffectDbo;
import pathfinder.data.v2.ModifierDetailsDbo;
import pathfinder.model.CharacterEffect;
import pathfinder.model.CharacterModifier;

@Component
@RequiredArgsConstructor
public class ModifierDetailsEncoder implements Encoder<CharacterModifier, ModifierDetailsDbo> {
    private final Encoder<CharacterEffect, CharacterEffectDbo> effectEncoder;

    @Override
    public ModifierDetailsDbo encode(CharacterModifier model) {
        return ModifierDetailsDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .setEffectText(model.effectText())
                .setDescriptionText(model.descriptionText())
                .addAllEffects(effectEncoder.encodeList(model.effects()))
                .build();
    }
}
