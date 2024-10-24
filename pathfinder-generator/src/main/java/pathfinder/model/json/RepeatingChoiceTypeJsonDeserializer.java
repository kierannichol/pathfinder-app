package pathfinder.model.json;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import java.io.IOException;
import pathfinder.model.RepeatingChoiceType;

public class RepeatingChoiceTypeJsonDeserializer extends StdDeserializer<RepeatingChoiceType> {

    protected RepeatingChoiceTypeJsonDeserializer() {
        super(RepeatingChoiceType.class);
    }

    @Override
    public RepeatingChoiceType deserialize(JsonParser p, DeserializationContext deserializationContext)
            throws IOException, JacksonException {

        JsonNode node = p.getCodec().readTree(p);

        if (node.isBoolean()) {
            return node.asBoolean()
                    ? RepeatingChoiceType.unlimited()
                    : RepeatingChoiceType.none();
        }

        if (node.isNumber()) {
            return RepeatingChoiceType.maxLimit(node.asInt());
        }

        return RepeatingChoiceType.calculatedLimit(node.asText());
    }
}
