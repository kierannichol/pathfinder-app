package pathfinder.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import pathfinder.data.AttackModificationDbo;

public record AttackModification(
        @JsonProperty("attack_bonus") String attackBonus,
        @JsonProperty("damage_bonus") String damageBonus) {

    public AttackModificationDbo toDbo() {
        return AttackModificationDbo.newBuilder()
                .setAttackBonus(emptyIfNull(attackBonus))
                .setDamageBonus(emptyIfNull(damageBonus))
                .build();
    }

    private static String emptyIfNull(String str) {
        return str == null ? "" : str;
    }
}
