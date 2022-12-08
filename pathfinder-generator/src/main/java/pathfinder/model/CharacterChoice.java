package pathfinder.model;

import java.util.List;

public interface CharacterChoice {
    String key();

    static AbilityScoreIncreaseChoice abilityScoreIncrease(String key, int delta) {
        return new AbilityScoreIncreaseChoice(key, delta);
    }

    record AbilityScoreIncreaseChoice(String key, int delta) implements CharacterChoice {}
    record FeatChoice(String key, List<String> featIds) implements CharacterChoice {}
    record AbilityChoice(String key, List<String> abilityIds) implements CharacterChoice {}
}
