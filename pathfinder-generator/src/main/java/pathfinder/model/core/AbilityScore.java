package pathfinder.model.core;

import java.util.Arrays;
import java.util.stream.Stream;
import pathfinder.model.Feature;

public enum AbilityScore {
    STR("str", "Strength"),
    DEX("dex", "Dexterity"),
    CON("con", "Constitution"),
    INT("int", "Intelligence"),
    WIS("wis", "Wisdom"),
    CHA("cha", "Charisma");

    public final String shortName;
    public final String longName;

    AbilityScore(String shortName, String longName) {
        this.shortName = shortName;
        this.longName = longName;
    }

    public String scoreKey() {
        return shortName + "_score";
    }

    public static Stream<Feature> abilityScoreFeatures() {
        return Arrays.stream(values())
                .map(abilityScore -> Feature.builder(abilityScore.scoreKey())
                        .setName(abilityScore.longName)
                        .build());
    }
}
