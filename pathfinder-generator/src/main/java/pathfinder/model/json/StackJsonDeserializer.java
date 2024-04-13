package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import java.io.IOException;
import pathfinder.model.Choice;
import pathfinder.model.Effect;
import pathfinder.model.Link;
import pathfinder.model.Stack;
import pathfinder.model.StackBuilder;

public class StackJsonDeserializer extends StdDeserializer<Stack> {

    protected StackJsonDeserializer() {
        super(Stack.class);
    }

    @Override
    public Stack deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        StackBuilder builder = new StackBuilder();

        JsonNode node = p.getCodec().readTree(p);

        if (node.get("effects") != null) {
            for (JsonNode child : node.get("effects")) {
                Effect effect = p.getCodec().treeToValue(child, Effect.class);
                builder.addEffect(effect);
            }
        }

        if (node.get("links") != null) {
            for (JsonNode child : node.get("links")) {
                Link link = p.getCodec().treeToValue(child, Link.class);
                builder.addLink(link.featureId());
            }
        }

        if (node.get("choices") != null) {
            for (JsonNode child : node.get("choices")) {
                Choice choice = p.getCodec().treeToValue(child, Choice.class);
                builder.addChoice(choice);
            }
        }

        return builder.build();
    }
}
