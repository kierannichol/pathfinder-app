package pathfinder.generator.db.encode;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.data.v2.WeaponTypeDbo;
import pathfinder.parser.db.WeaponType;

@Component("Weapon Type Encoder")
@RequiredArgsConstructor
public class WeaponTypeEncoder implements Encoder<WeaponType, WeaponTypeDbo> {
    private final WeaponProficiencyEncoder weaponProficiencyEncoder;
    private final WeaponRangeEncoder weaponRangeEncoder;

    @Override
    public WeaponTypeDbo encode(WeaponType weaponType) {
        var builder = WeaponTypeDbo.newBuilder()
                .setId(weaponType.getId())
                .setName(weaponType.getName())
                .setProficiency(weaponProficiencyEncoder.encode(weaponType.getRequiredProficiency()))
                .setRange(weaponRangeEncoder.encode(weaponType.getRange()));
        return builder.build();
    }
}
