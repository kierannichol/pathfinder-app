package pathfinder.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PatternMapper {
    private final List<PatternReplacement> replacements;
    private final Map<String, String> patternsByToken;

    public PatternMapper() {
        replacements = new ArrayList<>();
        patternsByToken = new HashMap<>();
    }

    public PatternMapper(PatternMapper copy) {
        replacements = new ArrayList<>(copy.replacements);
        patternsByToken = new HashMap<>(copy.patternsByToken);
    }

    public PatternMapper addToken(String token, String pattern) {
        patternsByToken.put("{" + token + "}", pattern);
        return this;
    }

    public PatternMapper addReplacement(String pattern, String replacement) {
        replacements.add(new PatternReplacement(pattern, replacement, false));
        return this;
    }

    public PatternMapper addImmediateReplacement(String pattern, String replacement) {
        replacements.add(new PatternReplacement(pattern, replacement, true));
        return this;
    }

    public String mapText(String text) {

        for (PatternReplacement replacementEntry : replacements) {
            Pattern regex = patternToRegEx(replacementEntry.pattern(), replacementEntry.immediate());
            Matcher matcher = regex.matcher(text);
            if (!matcher.find()) {
                continue;
            }

            String resolved = replacementEntry.replacement();
            for (int i = 0; i < matcher.groupCount(); i++) {
                String found = matcher.group(i + 1);
                found = mapText(found);
                resolved = resolved.replace("{" + i + "}", found);
            }
            return resolved;
        }
        return text;
    }

    private Pattern patternToRegEx(String pattern, boolean immediate) {
        pattern = "\\Q" + pattern + "\\E";
        pattern = patternsByToken.entrySet()
                .stream()
                .reduce(pattern,
                        (current, entry) -> current.replace(entry.getKey(), "\\E" + entry.getValue() + "\\Q"),
                        (a, b) -> a);
        if (!immediate) {
            pattern = "^" + pattern + "$";
        }
        return Pattern.compile(pattern, Pattern.CASE_INSENSITIVE);
    }

    private record PatternReplacement(String pattern, String replacement, boolean immediate) {}
}
