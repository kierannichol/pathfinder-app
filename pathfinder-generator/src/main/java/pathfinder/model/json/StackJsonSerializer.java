package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import pathfinder.model.ConditionalComponent;
import pathfinder.model.Effect;
import pathfinder.model.Link;
import pathfinder.model.Stack;
import pathfinder.model.Unlink;

public class StackJsonSerializer extends StdSerializer<Stack> {

    protected StackJsonSerializer() {
        super(Stack.class);
    }

    @Override
    public void serialize(Stack value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
        if (!value.effects().isEmpty()) {
            gen.writeFieldName("effects");
            gen.writeStartArray();
            for (Effect effect : value.effects()) {
                provider.findValueSerializer(Effect.class).serialize(effect, gen, provider);
            }
            gen.writeEndArray();
        }

        if (!value.links().isEmpty()) {
            gen.writeFieldName("links");
            gen.writeStartArray();
            for (Link link : value.links()) {
                provider.findValueSerializer(Link.class).serialize(link, gen, provider);
            }
            gen.writeEndArray();
        }

        if (!value.unlinks().isEmpty()) {
            gen.writeFieldName("unlinks");
            gen.writeStartArray();
            for (Unlink unlink : value.unlinks()) {
                provider.findValueSerializer(Unlink.class).serialize(unlink, gen, provider);
            }
            gen.writeEndArray();
        }

        if (!value.conditionalComponents().isEmpty()) {
            gen.writeFieldName("conditional_components");
            gen.writeStartArray();
            for (ConditionalComponent component : value.conditionalComponents()) {
                provider.findValueSerializer(ConditionalComponent.class).serialize(component, gen, provider);
            }
            gen.writeEndArray();
        }

        gen.writeEndObject();
    }
}
