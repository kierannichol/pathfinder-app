package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import pathfinder.model.Choice;
import pathfinder.model.FeatureSelectByTagChoice;
import pathfinder.model.FeatureSelectCategory;
import pathfinder.model.FeatureSelectSortBy;
import pathfinder.model.Id;
import pathfinder.model.RepeatingChoiceType;
import pathfinder.model.TextChoice;

public class ChoiceJsonSerializer extends StdSerializer<Choice> {

    protected ChoiceJsonSerializer() {
        super(Choice.class);
    }

    @Override
    public void serialize(Choice value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
        if (value instanceof TextChoice textChoice) {
            gen.writeStringField("choice_id", textChoice.choiceId());
            gen.writeStringField("label", textChoice.label());
            gen.writeStringField("type", textChoice.type());
            provider.findValueSerializer(RepeatingChoiceType.class).serialize(textChoice.repeating(), gen, provider);
        }
        else if (value instanceof FeatureSelectByTagChoice selectChoice) {
            gen.writeStringField("choice_id", selectChoice.choiceId());
            gen.writeStringField("label", selectChoice.label());
            gen.writeStringField("type", selectChoice.type());
            provider.findValueSerializer(RepeatingChoiceType.class).serialize(selectChoice.repeating(), gen, provider);

            if (FeatureSelectSortBy.NAME.equals(selectChoice.sortBy())) {
                gen.writeStringField("sort_by", "name");
            }

            if (!selectChoice.optionTags().isEmpty()) {
                gen.writeFieldName("option_tags");
                gen.writeStartArray();
                for (String optionTag : selectChoice.optionTags()) {
                    gen.writeString(optionTag);
                }
                gen.writeEndArray();
            }

            if (!selectChoice.featureIds().isEmpty()) {
                gen.writeFieldName("feature_ids");
                gen.writeStartArray();
                for (Id featureId : selectChoice.featureIds()) {
                    gen.writeString(featureId.string());
                }
                gen.writeEndArray();
            }

            if (!selectChoice.categories().isEmpty()) {
                gen.writeFieldName("categories");
                gen.writeStartArray();
                for (FeatureSelectCategory category : selectChoice.categories()) {
                    gen.writeStartObject();
                    gen.writeStringField("label", category.label());
                    gen.writeStringField("tag", category.tag());
                    gen.writeEndObject();
                }
                gen.writeEndArray();
            }
        }
        gen.writeEndObject();
    }
}
