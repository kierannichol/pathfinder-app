package pathfinder.model.json;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import pathfinder.model.Choice;
import pathfinder.model.FeatureSelectByTagChoice;
import pathfinder.model.FeatureSelectCategory;
import pathfinder.model.FeatureSelectSortBy;
import pathfinder.model.Id;
import pathfinder.model.TextChoice;

public class ChoiceJsonDeserializer extends StdDeserializer<Choice> {

    protected ChoiceJsonDeserializer() {
        super(Choice.class);
    }

    @Override
    public Choice deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JacksonException {
        JsonNode node = p.getCodec().readTree(p);

        String choiceId = node.get("choice_id").asText();
        String label = node.get("label").asText("");
        String type = node.get("type").asText("");
        boolean repeating = node.has("repeating")
                            ? node.get("repeating").asBoolean()
                            : false;
        String sortBy = node.get("sort_by").asText("none");

        boolean isSelect = false;
        List<String> optionTags = new ArrayList<>();
        if (node.has("option_tags")) {
            isSelect = true;
            for (JsonNode optionTagNode : node.get("option_tags")) {
                optionTags.add(optionTagNode.asText());
            }
        }

        List<Id> featureIds = new ArrayList<>();
        if (node.has("feature_ids")) {
            isSelect = true;
            for (JsonNode featureIdNode : node.get("feature_ids")) {
                featureIds.add(Id.of(featureIdNode.asText()));
            }
        }

        List<FeatureSelectCategory> categories = new ArrayList<>();
        if (node.has("categories")) {
            for (JsonNode categoryNode : node.get("categories")) {
                FeatureSelectCategory category = new FeatureSelectCategory(
                        categoryNode.get("label").asText(""),
                        categoryNode.get("tag").asText(""));
                categories.add(category);
            }
        }

        return isSelect
               ? new FeatureSelectByTagChoice(choiceId, label, type, optionTags, featureIds, categories, parseSortBy(sortBy), repeating)
               : new TextChoice(choiceId, label, type, repeating);
    }

    private FeatureSelectSortBy parseSortBy(String sortBy) {
        return switch (sortBy) {
            case "name" -> FeatureSelectSortBy.NAME;
            default -> FeatureSelectSortBy.NONE;
        };
    }
}
