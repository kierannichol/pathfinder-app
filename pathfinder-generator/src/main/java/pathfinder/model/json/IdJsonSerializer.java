package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdScalarSerializer;
import java.io.IOException;
import pathfinder.model.Id;

public class IdJsonSerializer extends StdScalarSerializer<Id> {

    protected IdJsonSerializer() {
        super(Id.class);
    }

    @Override
    public void serialize(Id value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeString(value.string());
    }
}
