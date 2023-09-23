package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdScalarDeserializer;
import java.io.IOException;
import pathfinder.model.Id;

public class IdJsonDeserializer extends StdScalarDeserializer<Id> {

    protected IdJsonDeserializer() {
        super(Id.class);
    }

    @Override
    public Id deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        if (p.getCurrentToken() == JsonToken.VALUE_NULL) {
            return null;
        }

        if (p.getCurrentToken() != JsonToken.VALUE_STRING) {
            ctxt.reportWrongTokenException(Id.class, JsonToken.VALUE_STRING, "Expected string value");
        }
        return Id.of(p.getValueAsString());
    }
}
