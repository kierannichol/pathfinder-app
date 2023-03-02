package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import java.io.UncheckedIOException;
import pathfinder.model.v4.Description;

public class DescriptionJsonSerializer extends StdSerializer<Description> {

    public DescriptionJsonSerializer() {
        super(Description.class);
    }

    @Override
    public void serialize(Description value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
        gen.writeFieldName("text");
        gen.writeString(value.text());
        gen.writeFieldName("sections");
        gen.writeStartObject();
        value.sections().forEach((heading, content) -> {
            try {
                gen.writeFieldName(heading);
                gen.writeString(content);
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }
        });
        gen.writeEndObject();
        gen.writeEndObject();
    }
}
