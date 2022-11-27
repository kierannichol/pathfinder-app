package pathfinder.generator.encode;

import org.springframework.stereotype.Component;
import pathfinder.data.v2.WeaponProficiencyDbo;
import pathfinder.generator.model.WeaponProficiency;

@Component("Weapon Proficiency Encoder")
public class WeaponProficiencyEncoder implements Encoder<WeaponProficiency, WeaponProficiencyDbo> {

    @Override
    public WeaponProficiencyDbo encode(WeaponProficiency weaponProficiency) {
        return switch (weaponProficiency) {
            case SIMPLE -> WeaponProficiencyDbo.WEAPON_PROFICIENCY_SIMPLE;
            case MARTIAL -> WeaponProficiencyDbo.WEAPON_PROFICIENCY_MARTIAL;
            case EXOTIC -> WeaponProficiencyDbo.WEAPON_PROFICIENCY_EXOTIC;
            default -> WeaponProficiencyDbo.WEAPON_PROFICIENCY_OTHER;
        };
    }
}
