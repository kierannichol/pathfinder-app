package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdScalarDeserializer;
import java.io.IOException;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;

public class SourceJsonDeserializer extends StdScalarDeserializer<SourceId> {

    protected SourceJsonDeserializer() {
        super(SourceId.class);
    }

    @Override
    public SourceId deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        if (p.getCurrentToken() == JsonToken.VALUE_NULL) {
            return SourceId.NONE;
        }
        if (p.getCurrentToken() != JsonToken.VALUE_STRING) {
            ctxt.reportWrongTokenException(SourceId.class, JsonToken.VALUE_STRING, "Expected string value");
        }
        return Sources.findSourceByNameOrCode(p.getValueAsString());
    }
}
