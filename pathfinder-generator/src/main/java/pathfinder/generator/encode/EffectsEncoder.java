package pathfinder.generator.encode;

import static pathfinder.util.EncoderUtils.mapType;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Component;
import pathfinder.data.v3.EffectDbo;
import pathfinder.data.v3.EffectDbo.AddChoicesToTypeEffectDbo;
import pathfinder.data.v3.EffectDbo.AdjustStateEffectDbo;
import pathfinder.data.v3.EffectDbo.SelectChoiceDbo;
import pathfinder.data.v3.EffectDbo.SetStateEffectDbo;
import pathfinder.data.v3.EffectDbo.TextChoiceDbo;
import pathfinder.model.v3.AddChoicesToType;
import pathfinder.model.v3.AdjustStateEffect;
import pathfinder.model.v3.Effect;
import pathfinder.model.v3.Effects;
import pathfinder.model.v3.SelectChoice;
import pathfinder.model.v3.SetBooleanStateEffect;
import pathfinder.model.v3.SetNumericStateEffect;
import pathfinder.model.v3.SetTextStateEffect;
import pathfinder.model.v3.TextChoice;

@Component
public class EffectsEncoder {

    public List<EffectDbo> encode(Effects effects) {
        return effects.effects().stream()
                .map(this::encode)
                .toList();
    }

    public EffectDbo encode(Effect effect) {

        Optional<EffectDbo> setNumericState = mapType(effect, SetNumericStateEffect.class,
                casted -> EffectDbo.newBuilder()
                        .setSetState(SetStateEffectDbo.newBuilder()
                                .setLevel(casted.level())
                                .setKey(casted.key())
                                .setNumericValue(casted.value())
                                .build())
                        .build());

        Optional<EffectDbo> setTextState = mapType(effect, SetTextStateEffect.class,
                casted -> EffectDbo.newBuilder()
                        .setSetState(SetStateEffectDbo.newBuilder()
                                .setLevel(casted.level())
                                .setKey(casted.key())
                                .setTextValue(casted.value())
                                .build())
                        .build());

        Optional<EffectDbo> setBooleanState = mapType(effect, SetBooleanStateEffect.class,
                casted -> EffectDbo.newBuilder()
                        .setSetState(SetStateEffectDbo.newBuilder()
                                .setLevel(casted.level())
                                .setKey(casted.key())
                                .setBooleanValue(casted.value())
                                .build())
                        .build());

        Optional<EffectDbo> adjustState = mapType(effect, AdjustStateEffect.class, casted -> EffectDbo.newBuilder()
                .setAdjustState(AdjustStateEffectDbo.newBuilder()
                        .setLevel(casted.level())
                        .setKey(casted.key())
                        .setDelta(casted.delta())
                        .build())
                .build());

        Optional<EffectDbo> textChoice = mapType(effect, TextChoice.class, casted -> EffectDbo.newBuilder()
                .setTextChoice(TextChoiceDbo.newBuilder()
                        .setLevel(casted.level())
                        .setKey(casted.attributeId())
                        .setLabel(casted.label())
                        .setId(casted.id())
                        .setType(casted.type())
                        .build())
                .build());

        Optional<EffectDbo> selectChoice = mapType(effect, SelectChoice.class, casted -> EffectDbo.newBuilder()
                .setSelectChoice(SelectChoiceDbo.newBuilder()
                        .setLevel(casted.level())
                        .setLabel(casted.label())
                        .setType(casted.type())
                        .setId(casted.id())
                        .addAllReferences(Arrays.asList(casted.references()))
                        .build())
                .build());

        Optional<EffectDbo> addChoicesToType = mapType(effect, AddChoicesToType.class, casted -> EffectDbo.newBuilder()
                .setAddChoicesToType(AddChoicesToTypeEffectDbo.newBuilder()
                        .setType(casted.type())
                        .addAllAdditionalReferences(Arrays.asList(casted.additionalReferences()))
                        .build())
                .build());

        return setNumericState
                .or(() -> setTextState)
                .or(() -> setBooleanState)
                .or(() -> adjustState)
                .or(() -> textChoice)
                .or(() -> selectChoice)
                .or(() -> addChoicesToType)
                .orElseThrow();
    }
}
