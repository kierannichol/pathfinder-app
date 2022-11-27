package pathfinder.generator.model;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum WeaponRange {
    NONE(false, false),
    MELEE(true, false),
    REACH(true, false),
    RANGED(false, true);

    private final boolean isMelee;
    private final boolean isRanged;

    public boolean isRanged() {
        return isRanged;
    }

    public boolean isMelee() {
        return isMelee;
    }
}
