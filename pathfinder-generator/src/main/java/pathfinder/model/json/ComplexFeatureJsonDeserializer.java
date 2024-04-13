package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import java.io.IOException;
import java.util.Iterator;
import java.util.Optional;
import pathfinder.model.ConditionalStack;
import pathfinder.model.Stack;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.ComplexFeature.ComplexFeatureBuilder;
import pathfinder.model.pathfinder.Feature;

public class ComplexFeatureJsonDeserializer extends StdDeserializer<ComplexFeature> {

    protected ComplexFeatureJsonDeserializer() {
        super(ComplexFeature.class);
    }

    @Override
    public ComplexFeature deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        ComplexFeatureBuilder builder = ComplexFeature.builder();

        JsonNode node = p.getCodec().readTree(p);

        builder.id(node.get("id").asText());
        builder.name(node.get("name").asText());
        Optional.ofNullable(node.get("type")).ifPresent(child -> builder.type(child.asText()));
        Optional.ofNullable(node.get("description")).ifPresent(child -> builder.description(child.asText()));
        Optional.ofNullable(node.get("source")).ifPresent(child -> builder.source(child.asText()));

        if (node.has("features")) {
            for (JsonNode featureNode : node.get("features")) {
                Feature feature = p.getCodec().treeToValue(featureNode, Feature.class);
                builder.feature(feature);
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

        JsonNode conditionalStacksNode = node.get("conditional_stacks");
        if (conditionalStacksNode != null) {
            for (JsonNode conditionalStackNode : conditionalStacksNode) {
                ConditionalStack stack = p.getCodec().treeToValue(conditionalStackNode, ConditionalStack.class);
                builder.addConditionalStack(stack);
            }
        }

        JsonNode metadataNode = node.get("metadata");
        if (metadataNode != null) {
            Iterator<String> iterator = metadataNode.fieldNames();
            while (iterator.hasNext()) {
                String fieldname = iterator.next();
                String value = metadataNode.get(fieldname).asText();
                builder.addMetadata(fieldname, value);
            }
        }

        return builder.build();
    }
}
