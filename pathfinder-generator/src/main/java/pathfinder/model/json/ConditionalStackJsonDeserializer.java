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
import pathfinder.model.ConditionalStack;
import pathfinder.model.Effect;
import pathfinder.model.FeatureModification;
import pathfinder.model.Link;
import pathfinder.model.Stack;

public class ConditionalStackJsonDeserializer extends StdDeserializer<ConditionalStack> {

    protected ConditionalStackJsonDeserializer() {
        super(ConditionalStack.class);
    }

    @Override
    public ConditionalStack deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JacksonException {
        JsonNode node = p.getCodec().readTree(p);

        List<Effect> effects = new ArrayList<>();
        List<Link> links = new ArrayList<>();
        List<Choice> choices = new ArrayList<>();
        List<FeatureModification> featureModifications = new ArrayList<>();
        String when = "";

        if (node.has("when")) {
            when = node.get("when").asText();
        }

        if (node.get("effects") != null) {
            for (JsonNode child : node.get("effects")) {
                Effect effect = p.getCodec().treeToValue(child, Effect.class);
                effects.add(effect);
            }
        }

        if (node.get("links") != null) {
            for (JsonNode child : node.get("links")) {
                Link link = p.getCodec().treeToValue(child, Link.class);
                links.add(link);
            }
        }

        if (node.get("choices") != null) {
            for (JsonNode child : node.get("choices")) {
                Choice choice = p.getCodec().treeToValue(child, Choice.class);
                choices.add(choice);
            }
        }

        if (node.get("feature_modifications") != null) {
            for (JsonNode child : node.get("feature_modifications")) {
                FeatureModification featureModification = p.getCodec().treeToValue(child, FeatureModification.class);
                featureModifications.add(featureModification);
            }
        }

        return new ConditionalStack(when,
                new Stack(effects, links, choices, featureModifications));
    }
}
