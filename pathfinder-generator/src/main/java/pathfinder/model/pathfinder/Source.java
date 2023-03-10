package pathfinder.model.pathfinder;

import java.io.Serializable;

public record Source(String code, String name, String ...aliases) implements Serializable {

    public static final Source NONE = new Source("", "");

    @Override
    public String toString() {
        return name;
    }
}
