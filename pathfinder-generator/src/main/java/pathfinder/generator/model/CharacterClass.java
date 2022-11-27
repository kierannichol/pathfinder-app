package pathfinder.generator.model;

import java.util.List;
import java.util.Map;

public record CharacterClass(String id, String name, String shortDescription, Type type, List<Level> levels) {
    public record Level(int level, int bab, int fortSave, int refSave, int willSave, List<Special> specials, Map<Integer, Integer> spellsPerDay) {}

    public enum Type {
        CORE,
        BASE,
        HYBRID,
        UNCHAINED
    }
}
