package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import pathfinder.model.Choice;
import pathfinder.model.Effect;
import pathfinder.model.Link;
import pathfinder.model.Stack;

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

        if (!value.choices().isEmpty()) {
            gen.writeFieldName("choices");
            gen.writeStartArray();
            for (Choice choice : value.choices()) {
                provider.findValueSerializer(Choice.class).serialize(choice, gen, provider);
            }
            gen.writeEndArray();
        }

        gen.writeEndObject();
    }
}
