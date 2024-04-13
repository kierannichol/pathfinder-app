package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdScalarDeserializer;
import java.io.IOException;
import java.util.Collection;
import java.util.List;
import pathfinder.model.Id;

public class InjectClassIdDeserializer extends StdScalarDeserializer<Id> {
    private final Id classId;

    protected InjectClassIdDeserializer(Id classId) {
        super(Id.class);
        this.classId = classId;
    }

    @Override
    public Collection<Object> getKnownPropertyNames() {
        return List.of("classId");
    }

    @Override
    public Id deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        return classId;
    }
}
