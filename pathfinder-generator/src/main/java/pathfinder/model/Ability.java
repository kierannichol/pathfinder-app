package pathfinder.model;

import java.io.Serializable;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.Builder;
import pathfinder.model.v3.Sourced;

@Builder
public record Ability(
        String id,
        String name,
        Type type,
        String description,
        String prerequisites,
        String benefit,
        String normal,
        String special,
        String note,
        Source source
) implements Serializable, FeatureModel, Sourced {
    public enum Type {
        NONE,
        EX,
        SP,
        SU;


        private static final Pattern ABILITY_TYPE_PATTERN = Pattern.compile(" \\((Sp|Su|Ex)(?: or (Sp|Su|Ex))?\\)");

        public static Type fromAbilityName(String name) {
            Matcher matcher = ABILITY_TYPE_PATTERN.matcher(name);
            if (matcher.find()) {
                String typeText = matcher.group(1);
                return Type.valueOf(typeText.toUpperCase());
            }
            return Type.NONE;
        }

        public static String removeTypeFromName(String name) {
            return name
                    .replaceAll(" \\((Sp|Su|Ex)\\)", "")
                    .replaceAll(" \\((Sp|Su|Ex) or (Sp|Su|Ex)\\)", "");
        }
    }
}