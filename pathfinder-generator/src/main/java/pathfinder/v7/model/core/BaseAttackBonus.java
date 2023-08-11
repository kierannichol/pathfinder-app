package pathfinder.v7.model.core;

import java.util.function.Predicate;
import java.util.stream.Stream;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.v7.model.EffectV7;
import pathfinder.v7.model.FeatureV7;
import pathfinder.v7.model.StackBuilder;
import pathfinder.v7.model.wrapper.ClassLevelEditor;

public class BaseAttackBonus {

    public static Stream<FeatureV7> generateBaseAttackBonusFeatures() {
        return Stream.of(FeatureV7.builder("bab_1")
                        .setName("Base Attack Bonus +1")
                        .setRepeatingStack(new StackBuilder()
                                .addEffect(EffectV7.addNumber("bab", 1))
                                .build())
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
                levelEditor.level(level).addEffect(EffectV7.addNumber("bab", 1));
            }
        }
    }

    private BaseAttackBonus() {}
}
