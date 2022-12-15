package pathfinder.generator.encode;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.data.v2.WeaponTypeDbo;
import pathfinder.parser.db.WeaponType;

@Component("Weapon Type Encoder")
@RequiredArgsConstructor
public class WeaponTypeEncoder {
    private final WeaponProficiencyEncoder weaponProficiencyEncoder;
    private final WeaponRangeEncoder weaponRangeEncoder;
    
    public WeaponTypeDbo encode(WeaponType weaponType) {
        var builder = WeaponTypeDbo.newBuilder()
                .setId(weaponType.id())
                .setName(weaponType.name())
                .setProficiency(weaponProficiencyEncoder.encode(weaponType.requiredProficiency()))
                .setRange(weaponRangeEncoder.encode(weaponType.range()));
        return builder.build();
    }
}
