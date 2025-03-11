package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import java.util.function.Function;
import pathfinder.model.Attack;

public class AttackJsonSerializer extends StdSerializer<Attack> {

    protected AttackJsonSerializer() {
        super(Attack.class);
    }

    @Override
    public void serialize(Attack value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
        tryWriteField(value, gen, "name", Attack::name);
        tryWriteField(value, gen, "condition", Attack::condition);
        if (value.chanceToHit() != null) {
            gen.writeFieldName("chance_to_hit");
            gen.writeObject(value.chanceToHit());
        }
        tryWriteField(value, gen, "hit_damage", Attack::hitDamage);
        tryWriteField(value, gen, "miss_damage", Attack::missDamage);
        gen.writeEndObject();
    }

    private static void tryWriteField(Attack attack, JsonGenerator gen, String name, Function<Attack, String> valueFn)
            throws IOException {
        var value = valueFn.apply(attack);
        if (value != null) {
            gen.writeFieldName(name);
            gen.writeString(value);
        }
    }
}
