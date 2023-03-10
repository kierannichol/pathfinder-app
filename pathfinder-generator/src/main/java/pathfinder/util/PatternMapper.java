package pathfinder.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class PatternMapper {
    private static final String REPLACEMENT_DESTINATION_PATTERN = "\\{(?:(?<func>\\w+):)?%d}";
    private final List<PatternReplacement> replacements;
    private final Map<String, Pattern> patternsByToken;
    private final Map<PatternReplacement, Pattern> replacementRegexCache = new HashMap<>();
    private final Map<String, String> staticReplacements = new HashMap<>();
    private final Map<String, BiFunction<String, String, String>> functionMap = new HashMap<>();

    public PatternMapper() {
        replacements = new ArrayList<>();
        patternsByToken = new HashMap<>();
    }

    public PatternMapper(PatternMapper copy) {
        replacements = new ArrayList<>(copy.replacements);
        patternsByToken = new HashMap<>(copy.patternsByToken);
    }

    public PatternMapper addToken(String token, String pattern) {
        patternsByToken.put("{" + token.toLowerCase() + "}", Pattern.compile(pattern));
        replacementRegexCache.clear();
        return this;
    }

    public PatternMapper addFunction(String funcKey, BiFunction<String, String, String> func) {
        functionMap.put(funcKey, func);
        return this;
    }

    public PatternMapper addReplacement(String pattern, String replacement) {
        if (!pattern.contains("{")) {
            return addStaticReplacement(pattern, replacement);
        }
        replacements.add(new PatternReplacement(pattern.trim().toLowerCase(), replacement, false));
        return this;
    }

    public PatternMapper addStaticReplacement(String text, String replacement) {
        staticReplacements.put(text.trim().toLowerCase(), replacement);
        return this;
    }

    public PatternMapper addImmediateReplacement(String pattern, String replacement) {
        replacements.add(new PatternReplacement(pattern.trim().toLowerCase(), replacement, true));
        return this;
    }

    public String mapText(String text) {
        return internalMapText(text.trim().toLowerCase());
    }

    private String internalMapText(String text) {
        try {
            var staticReplacement = staticReplacements.get(text);
            if (staticReplacement != null) {
                return staticReplacement;
            }

            for (PatternReplacement replacementEntry : replacements) {
                Pattern regex = patternToRegEx(replacementEntry);
                Matcher matcher = regex.matcher(text);
                if (!matcher.find()) {
                    continue;
                }

                String resolved = replacementEntry.replacement();
                for (int i = 0; i < matcher.groupCount(); i++) {
                    String original = matcher.group(i + 1);
                    String found = internalMapText(original);

                    Pattern destinationPattern = Pattern.compile(REPLACEMENT_DESTINATION_PATTERN.formatted(i));
                    Matcher destinationMatcher = destinationPattern.matcher(resolved);
                    if (destinationMatcher.find()) {
                        String funcKey = destinationMatcher.group("func");
                        if (funcKey != null) {
                            BiFunction<String, String, String> func = functionMap.get(funcKey);
                            if (func == null) {
                                throw new IllegalArgumentException("Unknown pattern mapper function: " + funcKey);
                            }
                            found = func.apply(found, original);
                        }
                        resolved = resolved.replaceAll(destinationPattern.pattern(), found);
                    }
                }
                return resolved;
            }

            return text;
        } catch (Exception e) {
            throw new IllegalArgumentException("Failed to map: " + text, e);
        }
    }

    private Pattern patternToRegEx(PatternReplacement replacement) {
        var cached = replacementRegexCache.get(replacement);
        if (cached != null) {
            return cached;
        }

        String pattern = replacement.pattern;
        boolean immediate = replacement.immediate;

        pattern = "\\Q" + pattern + "\\E";
        pattern = patternsByToken.entrySet()
                .stream()
                .reduce(pattern,
                        (current, entry) -> current.replace(entry.getKey(), "\\E" + entry.getValue() + "\\Q"),
                        (a, b) -> a);
        if (!immediate) {
            pattern = "^" + pattern + "$";
        }
        var regex = Pattern.compile(pattern, Pattern.CASE_INSENSITIVE);
        replacementRegexCache.put(replacement, regex);
        return regex;
    }

    public void addAll(PatternMapper other) {
        this.patternsByToken.putAll(other.patternsByToken);
        this.replacements.addAll(other.replacements);
        this.functionMap.putAll(other.functionMap);
        this.staticReplacements.putAll(other.staticReplacements);
        replacementRegexCache.clear();
    }

    private record PatternReplacement(String pattern, String replacement, boolean immediate) {
    }
}
