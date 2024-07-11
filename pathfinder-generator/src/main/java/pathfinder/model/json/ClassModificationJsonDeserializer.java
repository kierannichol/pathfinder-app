package pathfinder.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.TreeNode;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.NullNode;
import com.fasterxml.jackson.databind.node.TextNode;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;
import pathfinder.model.pathfinder.ClassModification;
import pathfinder.model.pathfinder.IdAndLevel;

public class ClassModificationJsonDeserializer extends StdDeserializer<ClassModification> {

    protected ClassModificationJsonDeserializer() {
        super(ClassModification.class);
    }

    @Override
    public ClassModification deserialize(JsonParser p, DeserializationContext ctxt)
            throws IOException {
        var tree = p.getCodec().readTree(p);

        Set<IdAndLevel> toAdd = new HashSet<>();
        Set<IdAndLevel> toRemove = new HashSet<>();

        TreeNode add = tree.get("add");
        if (add != null) {
            if (add.isArray()) {
                for (int i = 0; i < add.size(); i++) {
                    toAdd.add(toId(add.get(i)));
                }
            } else if (add.isValueNode()) {
                toAdd.add(toId(add));
            }
        }

        TreeNode remove = tree.get("remove");
        if (remove != null) {
            if (remove.isArray()) {
                for (int i = 0; i < remove.size(); i++) {
                    toRemove.add(toId(remove.get(i)));
                }
            } else if (remove.isValueNode()) {
                toRemove.add(toId(remove));
            }
        }

        return new ClassModification(toAdd, toRemove);
    }

    private IdAndLevel toId(TreeNode node) {
        return IdAndLevel.parse(toText(node));
    }

    private Integer toInteger(TreeNode node) {
        return ((IntNode) node).asInt();
    }

    private String toText(TreeNode node) {
        if (node instanceof NullNode) {
            return "";
        }
        return ((TextNode) node).asText("");
    }
}
