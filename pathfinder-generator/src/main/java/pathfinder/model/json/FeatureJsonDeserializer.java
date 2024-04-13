package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import java.io.IOException;
import java.util.Optional;
import lombok.extern.slf4j.Slf4j;
import pathfinder.model.Description;
import pathfinder.model.Stack;
import pathfinder.model.pathfinder.Feature;

@Slf4j
public class FeatureJsonDeserializer extends StdDeserializer<Feature> {

    public FeatureJsonDeserializer() {
        super(Feature.class);
    }

    @Override
    public Feature deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        ObjectCodec codec = p.getCodec();
        JsonNode node = codec.readTree(p);

        Feature.FeatureBuilder builder = Feature.builder();
        Optional.ofNullable(node.get("id")).filter(this::isValidNode).ifPresent(n -> builder.id(n.asText()));
        Optional.ofNullable(node.get("name")).filter(this::isValidNode).ifPresent(n -> builder.name(n.asText()));
        Optional.ofNullable(node.get("label")).filter(this::isValidNode).ifPresent(n -> builder.label(n.asText()));
        Optional.ofNullable(node.get("prerequisites")).filter(this::isValidNode).ifPresent(n -> builder.prerequisites(n.asText()));
        Optional.ofNullable(node.get("type")).filter(this::isValidNode).ifPresent(n -> builder.type(n.asText()));
        JsonNode dn = node.get("description");
        if (dn != null) {
            builder.description(codec.treeToValue(dn, Description.class));
        }

        JsonNode effectNodes = node.get("effects");
        if (effectNodes != null) {
            for (JsonNode effectNode : effectNodes) {
                builder.addEffect(effectNode.asText());
            }
        }

        JsonNode fixedStacksNode = node.get("fixed_stacks");
        if (fixedStacksNode != null) {
            for (JsonNode fixedStackNode : fixedStacksNode) {
                Stack stack = p.getCodec().treeToValue(fixedStackNode, Stack.class);
                builder.addFixedStack(stack);
            }
        }

        JsonNode repeatingStackNode = node.get("repeating_stack");
        if (repeatingStackNode != null) {
            Stack stack = p.getCodec().treeToValue(repeatingStackNode, Stack.class);
            builder.setRepeatingStack(stack);
        }

        Optional.ofNullable(node.get("source")).filter(this::isValidNode).ifPresent(n -> builder.source(n.asText()));

        return builder.build();
    }

    private boolean isValidNode(JsonNode node) {
        return !node.isNull();
    }
}
