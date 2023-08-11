package pathfinder.v7.model.core;

import java.util.function.Predicate;
import pathfinder.v7.model.EffectV7;
import pathfinder.v7.model.wrapper.ClassLevelEditor;

public enum SaveBonus {
    FORT("fort:base"),
    WILL("will:base"),
    REF("ref:base");

    private final String key;

    SaveBonus(String key) {
        this.key = key;
    }

    public void generateSaveBonuses(String rank, ClassLevelEditor levelEditor) {
        Predicate<Integer> plusOneEveryNthLevel = switch (rank) {
            case "A" -> level -> level >= 2 && (level % 2) == 0;
            case "B" -> level -> level >= 3 && (level % 3) == 0;
            default -> ignored -> false;
        };

        int base = "A".equals(rank) ? 2 : 0;

        for (int level = 1; level <= 20; level++) {
            if (level == 1) {
                levelEditor.level(level).addEffect(EffectV7.addNumber(key, base));
                continue;
            }
            if (plusOneEveryNthLevel.test(level)) {
                levelEditor.level(level).addEffect(EffectV7.addNumber(key, 1));
            }
        }
    }
}
