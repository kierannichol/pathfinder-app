package pathfinder.model;

import java.io.Serializable;
import java.util.List;

public record Race(String id, String name, Size size, String type, int speed, List<String> languages, List<String> traits) implements
        Serializable {
}
