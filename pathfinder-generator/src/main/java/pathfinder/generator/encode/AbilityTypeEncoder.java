package pathfinder.generator.encode;

import org.springframework.stereotype.Component;
import pathfinder.data.v2.AbilityTypeDbo;
import pathfinder.model.Ability.Type;

@Component("Ability Type Encoder")
public class AbilityTypeEncoder {

    public AbilityTypeDbo encode(Type type) {
        return AbilityTypeDbo.valueOf("ABILITY_TYPE_" + type.name().toUpperCase());
    }
}
