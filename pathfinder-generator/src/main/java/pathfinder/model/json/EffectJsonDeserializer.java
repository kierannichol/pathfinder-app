package pathfinder.model.json;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdScalarDeserializer;
import java.io.IOException;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import pathfinder.model.Effect;

public class EffectJsonDeserializer extends StdScalarDeserializer<Effect> {
    private static final Pattern NUMBER_PATTERN = Pattern.compile("^(\\d+?)$");
    private static final Pattern TEXT_PATTERN = Pattern.compile("\"(.*?)\"");

    public EffectJsonDeserializer() {
        super(Effect.class);
    }

    @Override
    public Effect deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JacksonException {
        if (p.getCurrentToken() == JsonToken.VALUE_NULL) {
            return null;
        }

        if (p.getCurrentToken() != JsonToken.VALUE_STRING) {
            ctxt.reportWrongTokenException(Effect.class, JsonToken.VALUE_STRING, "Expected string value");
        }

        String effectFormula = p.getValueAsString();
        return parseEffect(effectFormula);
    }

    private Effect parseEffect(String formula) {
        String[] parts = formula.split(" ", 3);
        String action = parts[0];
        return switch (action.toUpperCase()) {
            case "ADD" -> Effect.addNumber(parts[1], Integer.parseInt(parts[2]));
            case "SET" -> tryParseAsNumber(parts[2])
                            .map(val -> Effect.setNumber(parts[1], val))
                    .or(() -> tryParseAsText(parts[2])
                            .map(val -> Effect.setText(parts[1], val)))
                    .orElseGet(() -> Effect.setFormula(parts[1], parts[2]));
            default -> throw new IllegalArgumentException("Unknown effect action: " + action);
        };
    }

    private Optional<Integer> tryParseAsNumber(String value) {
        Matcher matcher = NUMBER_PATTERN.matcher(value);
        if (!matcher.find()) {
            return Optional.empty();
        }
        return Optional.of(Integer.parseInt(matcher.group(1)));
    }

    private Optional<String> tryParseAsText(String value) {
        Matcher matcher = TEXT_PATTERN.matcher(value);
        if (!matcher.find()) {
            return Optional.empty();
        }
        return Optional.of(matcher.group(1));
    }
}
