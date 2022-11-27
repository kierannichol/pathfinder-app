package pathfinder.generator.model;

import java.util.List;

public record Race(String id, String name, Size size, String type, int speed, List<String> languages, List<String> traits) {
}
