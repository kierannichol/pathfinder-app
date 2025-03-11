package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import pathfinder.model.ChoiceModification;

public class ChoiceModificationJsonSerializer extends StdSerializer<ChoiceModification> {

    protected ChoiceModificationJsonSerializer() {
        super(ChoiceModification.class);
    }

    @Override
    public void serialize(ChoiceModification choiceModification, JsonGenerator gen,
            SerializerProvider serializerProvider) throws IOException {
        gen.writeStartObject();
        gen.writeFieldName("target_choice_id");
        gen.writeString(choiceModification.targetChoiceId());
        gen.writeFieldName("tags_to_add");
        gen.writeArray(choiceModification.tagsToAdd().toArray(new String[0]), 0, choiceModification.tagsToAdd().size());
        gen.writeFieldName("tags_to_remove");
        gen.writeArray(choiceModification.tagsToRemove().toArray(new String[0]), 0, choiceModification.tagsToRemove().size());
        gen.writeFieldName("features_to_add");
        gen.writeArray(choiceModification.featuresToAdd().toArray(new String[0]), 0, choiceModification.featuresToAdd().size());
        gen.writeFieldName("features_to_remove");
        gen.writeArray(choiceModification.featuresToRemove().toArray(new String[0]), 0, choiceModification.featuresToRemove().size());
        gen.writeEndObject();
    }
}
