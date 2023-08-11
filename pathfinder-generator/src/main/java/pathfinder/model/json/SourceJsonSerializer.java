package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdScalarSerializer;
import java.io.IOException;
import pathfinder.model.pathfinder.SourceId;

public class SourceJsonSerializer extends StdScalarSerializer<SourceId> {

    protected SourceJsonSerializer() {
        super(SourceId.class);
    }

    @Override
    public void serialize(SourceId value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        if (value == null || value.equals(SourceId.NONE)) {
            gen.writeNull();
            return;
        }
        gen.writeString(value.code());
    }
}
