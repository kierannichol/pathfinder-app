package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import pathfinder.model.RepeatingChoiceType;

public class RepeatingChoiceTypeJsonSerializer extends StdSerializer<RepeatingChoiceType> {

    protected RepeatingChoiceTypeJsonSerializer() {
        super(RepeatingChoiceType.class);
    }

    @Override
    public void serialize(RepeatingChoiceType repeatingChoiceType, JsonGenerator jsonGenerator,
            SerializerProvider serializerProvider) throws IOException {

        if (repeatingChoiceType instanceof RepeatingChoiceType.Unlimited) {
            jsonGenerator.writeBoolean(true);
        }
        else if (repeatingChoiceType instanceof RepeatingChoiceType.MaxLimit maxLimit) {
            jsonGenerator.writeNumber(maxLimit.limit);
        }
        else if (repeatingChoiceType instanceof RepeatingChoiceType.CalculatedLimit calculatedLimit) {
            jsonGenerator.writeString(calculatedLimit.formula);
        }
        else {
            jsonGenerator.writeBoolean(false);
        }
    }
}
