package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import java.util.Map;
import pathfinder.model.ConditionalStack;
import pathfinder.model.Description;
import pathfinder.model.FixedStacks;
import pathfinder.model.RepeatingStack;
import pathfinder.model.Stack;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.Feature;

public class ComplexFeatureJsonSerializer extends StdSerializer<ComplexFeature> {

    protected ComplexFeatureJsonSerializer() {
        super(ComplexFeature.class);
    }

    @Override
    public void serialize(ComplexFeature value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();

        if (value.id() != null) {
            gen.writeStringField("id", value.id().string());
        }
        if (value.name() != null) {
            gen.writeStringField("name", value.name());
        }
        if (value.type() != null) {
            gen.writeStringField("type", value.type());
        }
        if (value.description() != null) {
            gen.writeFieldName("description");
            provider.findValueSerializer(Description.class).serialize(value.description(), gen, provider);
        }

        if (value.stacks() != null) {
            if (value.stacks() instanceof FixedStacks fixedStacks) {
                gen.writeFieldName("fixed_stacks");
                gen.writeStartArray();
                for (Stack stack : fixedStacks.stacks()) {
                    provider.findValueSerializer(Stack.class).serialize(stack, gen, provider);
                }
                gen.writeEndArray();
            }
            if (value.stacks() instanceof RepeatingStack repeatingStack) {
                gen.writeFieldName("repeating_stack");
                provider.findValueSerializer(Stack.class).serialize(repeatingStack.stack(), gen, provider);
            }
        }

        if (!value.conditionalStacks().isEmpty()) {
            gen.writeFieldName("conditional_stacks");
            gen.writeStartArray();
            for (ConditionalStack stack : value.conditionalStacks()) {
                provider.findValueSerializer(ConditionalStack.class).serialize(stack, gen, provider);
            }
            gen.writeEndArray();
        }

        if (!value.features().isEmpty()) {
            gen.writeFieldName("features");
            gen.writeStartArray();
            for (Feature feature : value.features()) {
                provider.findValueSerializer(Feature.class).serialize(feature, gen, provider);
            }
            gen.writeEndArray();
        }

        if (!value.metadata().isEmpty()) {
            gen.writeFieldName("metadata");
            gen.writeStartObject();
            for (Map.Entry<String, String> kv : value.metadata().entrySet()) {
                gen.writeStringField(kv.getKey(), kv.getValue());
            }
            gen.writeEndObject();
        }

        if (value.source() != null) {
            gen.writeStringField("source", value.source());
        }

        gen.writeEndObject();
    }
}
