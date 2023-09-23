package pathfinder.util;

import java.util.regex.Pattern;
import pathfinder.model.Effect;

public class EffectParser {
    private static final Pattern NUMERIC_VALUE = Pattern.compile("\\d+");

    public static Effect parse(String formula) {
        String[] parts = formula.split("\\s+");

        return switch (parts[0]) {
            case "SET" -> createSetEffect(parts);
            case "INCR" -> createIncrementEffect(parts);
            default -> throw new IllegalArgumentException("Unable to parse effect: " + formula);
        };
    }

    private static Effect createSetEffect(String[] parts) {
        String targetKey = parts[1];
        String value = parts[2];

        if (NUMERIC_VALUE.matcher(value).matches()) {
            return Effect.setNumber(targetKey, Integer.parseInt(value));
        }
        return Effect.setFormula(targetKey, value);
    }

    private static Effect createIncrementEffect(String[] parts) {
        String targetKey = parts[1];
        String value = parts[2];

        if (!NUMERIC_VALUE.matcher(value).matches()) {
            throw new IllegalArgumentException("Unable to create increment by non-number: " + value);
        }
        return Effect.addNumber(targetKey, Integer.parseInt(value));
    }

    private EffectParser() {}
}
