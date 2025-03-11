package pathfinder.model;

import pathfinder.data.AttackDbo;
import pathfinder.util.StringUtils;

public record Attack(
        String name,
        String condition,
        Chance chanceToHit,
        String hitDamage,
        String missDamage
) {

    public AttackDbo toDbo() {
        var builder = AttackDbo.newBuilder()
                .setName(StringUtils.emptyIfNull(name))
                .setCondition(StringUtils.emptyIfNull(condition))
                .setHitDamage(StringUtils.emptyIfNull(hitDamage))
                .setMissDamage(StringUtils.emptyIfNull(missDamage));

        if (chanceToHit != null) {
            builder.setChanceToHit(chanceToHit.toDbo());
        }

        return builder.build();
    }
}
