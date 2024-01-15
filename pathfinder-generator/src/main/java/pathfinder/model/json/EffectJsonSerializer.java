package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdScalarSerializer;
import java.io.IOException;
import pathfinder.data.EffectDbo;
import pathfinder.data.EffectDbo.AddActionDbo;
import pathfinder.data.EffectDbo.SetActionDbo;
import pathfinder.model.Effect;

public class EffectJsonSerializer extends StdScalarSerializer<Effect> {

    protected EffectJsonSerializer() {
        super(Effect.class);
    }

    @Override
    public void serialize(Effect value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        EffectDbo dbo = value.toDbo();

        if (dbo.hasAddAction()) {
            AddActionDbo addAction = dbo.getAddAction();
            gen.writeString("ADD " + addAction.getTargetKey() + " " + addAction.getNumberDelta());
        }
        else if (dbo.hasSetAction()) {
            SetActionDbo setAction = dbo.getSetAction();
            String textValue = setAction.hasNumberValue()
                           ? Integer.toString(setAction.getNumberValue())
                           : setAction.getFormula();

            gen.writeString("SET " + setAction.getTargetKey() + " " + textValue);
        }
        else {
            throw new IllegalArgumentException("Unknown effect action: " + dbo.getActionCase());
        }
    }
}
