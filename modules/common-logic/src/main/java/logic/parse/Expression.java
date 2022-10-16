package logic.parse;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import logic.Resolvable;
import logic.ResolvedValue;
import logic.context.DataContext;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class Expression implements Resolvable {
    private static final Pattern INLINE_PATTERN = Pattern.compile("(?<!\\\\)\\{(.*?)}");

    private final String original;
    private final List<Resolvable> parts;

    public static Expression parse(String text) {
        List<Resolvable> parts = new ArrayList<>();

        Matcher matcher = INLINE_PATTERN.matcher(text);
        int lastIndex = 0;
        while (matcher.find()) {
            var before = text.substring(lastIndex, matcher.start());
            if (before.length() > 0) {
                parts.add(Resolvable.just(before
                        .replaceAll("\\\\\\{", "{")
                        .replaceAll("\\\\}", "}")));
            }
            parts.add(Formula.parse(matcher.group(1)));
            lastIndex = matcher.end();
        }

        if (lastIndex < text.length()) {
            parts.add(Resolvable.just(text.substring(lastIndex)
                    .replaceAll("\\\\\\{", "{")
                    .replaceAll("\\\\}", "}")));
        }

        return new Expression(text, parts);
    }

    @Override
    public ResolvedValue resolve(DataContext context) {
        return ResolvedValue.of(this.parts.stream().map(part ->
                part.resolve(context).asText())
                .collect(Collectors.joining("")));
    }
}
