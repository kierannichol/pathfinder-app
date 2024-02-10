package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdScalarDeserializer;
import java.io.IOException;
import pathfinder.model.Id;
import pathfinder.model.Link;

public class LinkJsonDeserializer extends StdScalarDeserializer<Link> {

    protected LinkJsonDeserializer() {
        super(Link.class);
    }

    @Override
    public Link deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        if (p.getCurrentToken() == JsonToken.VALUE_NULL) {
            return null;
        }

        if (p.getCurrentToken() != JsonToken.VALUE_STRING) {
            ctxt.reportWrongTokenException(Id.class, JsonToken.VALUE_STRING, "Expected string value");
        }
        return new Link(p.getValueAsString());
    }
}
