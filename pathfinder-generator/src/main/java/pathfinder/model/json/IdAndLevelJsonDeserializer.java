package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdScalarDeserializer;
import java.io.IOException;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.IdAndLevel;

public class IdAndLevelJsonDeserializer extends StdScalarDeserializer<IdAndLevel> {

    protected IdAndLevelJsonDeserializer() {
        super(IdAndLevel.class);
    }

    @Override
    public IdAndLevel deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        if (p.getCurrentToken() != JsonToken.VALUE_STRING) {
            ctxt.reportWrongTokenException(Id.class, JsonToken.VALUE_STRING, "Expected string value");
        }
        return IdAndLevel.parse(p.getValueAsString());
    }
}
