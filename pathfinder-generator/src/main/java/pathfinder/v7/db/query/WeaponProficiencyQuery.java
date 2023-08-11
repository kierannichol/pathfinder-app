package pathfinder.v7.db.query;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import pathfinder.model.pathfinder.WeaponProficiency;
import pathfinder.model.pathfinder.WeaponRange;
import pathfinder.model.pathfinder.WeaponType;
import pathfinder.model.pathfinder.Weapons;

public class WeaponProficiencyQuery {
    private WeaponProficiency proficiency;
    private WeaponRange range;
    private Boolean isMelee;
    private Boolean isRanged;
    private Boolean isNatural;
    private Set<WeaponType> isInSet = new HashSet<>();

    public WeaponProficiencyQuery proficiency(WeaponProficiency proficiency) {
        this.proficiency = proficiency;
        return this;
    }

    public WeaponProficiencyQuery range(WeaponRange range) {
        this.range = range;
        return this;
    }

    public WeaponProficiencyQuery melee() {
        this.isMelee = true;
        return this;
    }

    public WeaponProficiencyQuery ranged() {
        this.isRanged = true;
        return this;
    }

    public WeaponProficiencyQuery natural() {
        this.isNatural = true;
        return this;
    }

    public WeaponProficiencyQuery in(Collection<WeaponType> weaponTypes) {
        this.isInSet.addAll(weaponTypes);
        return this;
    }

    public boolean matches(WeaponType weapon) {
        if (proficiency != null && !weapon.requiredProficiency().equals(proficiency)) {
            return false;
        }

        if (range != null && !weapon.range().equals(range)) {
            return false;
        }

        if (isMelee != null && !weapon.range().isMelee()) {
            return false;
        }

        if (isRanged != null && !weapon.range().isRanged()) {
            return false;
        }

        if (isNatural != null && !Weapons.ALL_NATURAL.contains(weapon)) {
            return false;
        }

        return true;
    }

    WeaponProficiencyQuery() {

    }
}
