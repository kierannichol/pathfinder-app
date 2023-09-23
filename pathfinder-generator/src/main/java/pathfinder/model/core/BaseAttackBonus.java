package pathfinder.model.core;

import java.util.function.Predicate;
import java.util.stream.Stream;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.Effect;
import pathfinder.model.Feature;
import pathfinder.model.StackBuilder;
import pathfinder.model.wrapper.ClassLevelEditor;

public class BaseAttackBonus {

    public static Stream<Feature> generateBaseAttackBonusFeatures() {
        return Stream.of(Feature.builder("bab")
                        .setName("Base Attack Bonus")
                        .build());
    }

    public static void generateClassBabEffects(CharacterClass characterClass, ClassLevelEditor levelEditor) {
        Predicate<Integer> plusOneEveryNthLevel = switch (characterClass.bab()) {
            case "A" -> level -> true;
            case "B" -> level -> (level - 1) % 4 != 0;
            case "C" -> level -> level > 1 && (level % 2) == 0;
            default -> ignored -> false;
        };

        for (int level = 1; level <= 20; level++) {
            if (plusOneEveryNthLevel.test(level)) {
                levelEditor.level(level).addEffect(Effect.addNumber("bab", 1));
            }
        }
    }

    private BaseAttackBonus() {}
}
