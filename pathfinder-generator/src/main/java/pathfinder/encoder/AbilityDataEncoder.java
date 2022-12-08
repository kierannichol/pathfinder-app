package pathfinder.encoder;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.data.v2.AbilityDataDbo;
import pathfinder.generator.encode.AbilityTypeEncoder;
import pathfinder.model.Ability;

@Component
@RequiredArgsConstructor
public class AbilityDataEncoder implements Encoder<Ability, AbilityDataDbo> {
    private final AbilityTypeEncoder abilityTypeEncoder;

    @Override
    public AbilityDataDbo encode(Ability model) {
        return AbilityDataDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .setDescription(model.description())
                .setType(abilityTypeEncoder.encode(model.type()))
                .build();
    }
}
