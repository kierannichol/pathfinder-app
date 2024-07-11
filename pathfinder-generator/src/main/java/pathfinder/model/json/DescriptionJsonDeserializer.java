package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.core.TreeNode;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.TextNode;
import java.io.IOException;
import pathfinder.model.Description;

public class DescriptionJsonDeserializer extends StdDeserializer<Description> {

    public DescriptionJsonDeserializer() {
        super(Description.class);
    }

    @Override
    public Description deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        if (p.getCurrentToken() == JsonToken.VALUE_STRING) {
            return Description.create(p.getValueAsString());
        }

        var tree = p.getCodec().readTree(p);

        var description = Description.create(readField(tree, "text"));
        TreeNode sections = tree.get("sections");
        var sectionNameIterator = sections.fieldNames();
        while (sectionNameIterator.hasNext()) {
            String sectionName = sectionNameIterator.next();
            String content = readField(sections, sectionName);
            description.addSection(sectionName, content);
        }
        return description;
    }

    private String readField(TreeNode node, String field) {
        TextNode fieldNode = (TextNode) node.get(field);
        if (fieldNode == null) {
            return "";
        }
        return fieldNode.asText("");
    }
}
