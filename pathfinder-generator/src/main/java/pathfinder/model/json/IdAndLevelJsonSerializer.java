package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdScalarSerializer;
import java.io.IOException;
import pathfinder.model.pathfinder.IdAndLevel;

public class IdAndLevelJsonSerializer extends StdScalarSerializer<IdAndLevel> {

    protected IdAndLevelJsonSerializer() {
        super(IdAndLevel.class);
    }

    @Override
    public void serialize(IdAndLevel value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeString(value.toString());
    }
}
