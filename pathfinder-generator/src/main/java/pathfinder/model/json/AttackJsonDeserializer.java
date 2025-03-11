package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import java.io.IOException;
import lombok.extern.slf4j.Slf4j;
import pathfinder.model.Attack;
import pathfinder.model.Chance;

@Slf4j
public class AttackJsonDeserializer extends StdDeserializer<Attack> {

    public AttackJsonDeserializer() {
        super(Attack.class);
    }

    @Override
    public Attack deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        if (p.getCurrentToken() == JsonToken.VALUE_NULL) {
            return null;
        }

        ObjectCodec codec = p.getCodec();
        JsonNode node = codec.readTree(p);

        Chance chanceToHit = null;
        if (node.has("chance_to_hit")) {
            chanceToHit = codec.treeToValue(node.get("chance_to_hit"), Chance.class);
        }

        return new Attack(
                tryReadRoll(node, "name"),
                tryReadRoll(node, "condition"),
                chanceToHit,
                tryReadRoll(node, "hit_damage"),
                tryReadRoll(node, "miss_damage")
        );
    }

    private String tryReadRoll(JsonNode node, String name) {
        if (node.has(name)) {
            return node.get(name).asText();
        }
        return null;
    }
}
