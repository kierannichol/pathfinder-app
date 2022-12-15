package pathfinder.generator.encode;

import org.springframework.stereotype.Component;
import pathfinder.data.v2.WeaponRangeDbo;
import pathfinder.model.WeaponRange;

@Component("Weapon Range Encoder")
public class WeaponRangeEncoder {

    public WeaponRangeDbo encode(WeaponRange weaponRange) {
        return switch (weaponRange) {
            case MELEE -> WeaponRangeDbo.WEAPON_RANGE_MELEE;
            case REACH -> WeaponRangeDbo.WEAPON_RANGE_REACH;
            case RANGED -> WeaponRangeDbo.WEAPON_RANGE_RANGED;
            default -> WeaponRangeDbo.WEAPON_RANGE_NONE;
        };
    }
}
