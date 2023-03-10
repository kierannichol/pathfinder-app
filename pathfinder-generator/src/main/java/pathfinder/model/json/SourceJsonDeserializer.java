package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdScalarDeserializer;
import java.io.IOException;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;

public class SourceJsonDeserializer extends StdScalarDeserializer<Source> {

    protected SourceJsonDeserializer() {
        super(Source.class);
    }

    @Override
    public Source deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        if (p.getCurrentToken() == JsonToken.VALUE_NULL) {
            return Source.NONE;
        }
        if (p.getCurrentToken() != JsonToken.VALUE_STRING) {
            ctxt.reportWrongTokenException(Source.class, JsonToken.VALUE_STRING, "Expected string value");
        }
        return Sources.findSourceByNameOrCode(p.getValueAsString());
    }
}
