package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdScalarSerializer;
import java.io.IOException;
import pathfinder.model.Link;

public class LinkJsonSerializer extends StdScalarSerializer<Link> {

    protected LinkJsonSerializer() {
        super(Link.class);
    }

    @Override
    public void serialize(Link value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeString(value.featureId());
    }
}
