package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import java.util.List;
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
        if (notNullOrBlank(value.name())) {
            gen.writeStringField("name", value.name());
        }
        if (notNullOrBlank(value.label())) {
            gen.writeStringField("label", value.label());
        }
        if (value.description() != null) {
            gen.writeFieldName("description");
            provider.findValueSerializer(Description.class).serialize(value.description(), gen, provider);
        }
        if (notNullOrBlank(value.type())) {
            gen.writeStringField("type", value.type());
        }
        if (notNullOrBlank(value.prerequisites())) {
            gen.writeStringField("prerequisites", value.prerequisites());
        }
        if (notNullOrBlank(value.enabled_formula())) {
            gen.writeStringField("enabled_formula", value.enabled_formula());
        }
        if (notNullOrEmpty(value.effects())) {
            gen.writeFieldName("effects");
            gen.writeStartArray();
            for (String effect : value.effects()) {
                gen.writeString(effect);
            }
            gen.writeEndArray();
        }
        if (notNullOrEmpty(value.links())) {
            gen.writeFieldName("links");
            gen.writeStartArray();
            for (Id effect : value.links()) {
                gen.writeString(effect.string());
            }
            gen.writeEndArray();
        }
        if (value.stacks() != null) {
            if (value.stacks() instanceof FixedStacks fixedStacks && !fixedStacks.stacks().isEmpty()) {
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
        if (notNullOrBlank(value.source())) {
            gen.writeStringField("source", value.source());
        }
        gen.writeEndObject();
    }

    private static boolean notNullOrEmpty(List<?> list) {
        return list != null && !list.isEmpty();
    }

    private static boolean notNullOrBlank(String text) {
        return text != null && !text.trim().isEmpty();
    }
}
