package pathfinder.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import pathfinder.model.ConditionalEffect;
import pathfinder.model.Effect;

public class EffectParser {
    private static final Pattern EFFECT_PATTERN = Pattern.compile("(?:\\[(?<condition>.+?)] )?(?<command>.+?) (?<key>.+?) (?<value>.+)");
    private static final Pattern NUMERIC_VALUE = Pattern.compile("\\d+");

    public static Effect parse(String formula) {
        Matcher matcher = EFFECT_PATTERN.matcher(formula);
        if (!matcher.find()) {
            throw new IllegalArgumentException("Invalid effect formula: " + formula);
        }

        String condition = matcher.group("condition");
        String command = matcher.group("command");
        String key = matcher.group("key");
        String value = matcher.group("value");

        Effect effect = switch (command) {
            case "SET" -> createSetEffect(key, value);
            case "INCR" -> createIncrementEffect(key, value);
            default -> throw new IllegalArgumentException("Unable to parse effect: " + formula);
        };

        if (condition != null) {
            effect = ConditionalEffect.create(effect, condition);
        }

        return effect;
    }

    private static Effect createSetEffect(String targetKey, String value) {
        if (NUMERIC_VALUE.matcher(value).matches()) {
            return Effect.setNumber(targetKey, Integer.parseInt(value));
        }
        return Effect.setFormula(targetKey, value);
    }

    private static Effect createIncrementEffect(String targetKey, String value) {
        if (!NUMERIC_VALUE.matcher(value).matches()) {
            return Effect.addFormula(targetKey, value);
//            throw new IllegalArgumentException("Unable to create increment by non-number: " + value);
        }
        return Effect.addNumber(targetKey, Integer.parseInt(value));
    }

    private EffectParser() {}
}
