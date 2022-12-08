package pathfinder.model;

import java.io.Serializable;

public record Source(String code, String name, String ...aliases) implements Serializable {

    @Override
    public String toString() {
        return name;
    }
}
