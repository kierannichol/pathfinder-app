package pathfinder.model.pathfinder;

import java.io.Serializable;

public record SourceId(String code, String name, String ...aliases) implements Serializable {

    public static final SourceId NONE = new SourceId("", "");

    @Override
    public String toString() {
        return name;
    }
}
