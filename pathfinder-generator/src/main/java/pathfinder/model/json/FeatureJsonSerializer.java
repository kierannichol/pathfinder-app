package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import pathfinder.model.Description;
import pathfinder.model.FixedStacks;
import pathfinder.model.Id;
import pathfinder.model.RepeatingStack;
import pathfinder.model.Stack;
import pathfinder.model.pathfinder.Feature;

public class FeatureJsonSerializer extends StdSerializer<Feature> {

    protected FeatureJsonSerializer() {
        super(Feature.class);
    }

    @Override
    public void serialize(Feature value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
        if (value.id() != null) {
            gen.writeFieldName("id");
            provider.findValueSerializer(Id.class).serialize(value.id(), gen, provider);
        }
        if (value.name() != null) {
            gen.writeStringField("name", value.name());
        }
        if (value.label() != null) {
            gen.writeStringField("label", value.label());
        }
        if (value.description() != null) {
            gen.writeFieldName("description");
            provider.findValueSerializer(Description.class).serialize(value.description(), gen, provider);
        }
        if (value.type() != null) {
            gen.writeStringField("type", value.type());
        }
        if (value.prerequisites() != null) {
            gen.writeStringField("prerequisites", value.prerequisites());
        }
        if (value.effects() != null) {
            gen.writeFieldName("effects");
            gen.writeStartArray();
            for (String effect : value.effects()) {
                gen.writeString(effect);
            }
            gen.writeEndArray();
        }
        if (value.links() != null) {
            gen.writeFieldName("links");
            gen.writeStartArray();
            for (Id effect : value.links()) {
                gen.writeString(effect.string());
            }
            gen.writeEndArray();
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
        if (value.source() != null) {
            gen.writeStringField("source", value.source());
        }
        gen.writeEndObject();
    }
}
