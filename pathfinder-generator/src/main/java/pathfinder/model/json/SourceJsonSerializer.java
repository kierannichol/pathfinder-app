package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdScalarSerializer;
import java.io.IOException;
import pathfinder.model.pathfinder.Source;

public class SourceJsonSerializer extends StdScalarSerializer<Source> {

    protected SourceJsonSerializer() {
        super(Source.class);
    }

    @Override
    public void serialize(Source value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        if (value == null || value.equals(Source.NONE)) {
            gen.writeNull();
            return;
        }
        gen.writeString(value.code());
    }
}
