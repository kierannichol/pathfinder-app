package pathfinder.model;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public record CharacterClass(String id, String name, String shortDescription, Type type, List<Level> levels, List<String> skills) implements
        Serializable {
    public record Level(int level, int bab, int fortSave, int refSave, int willSave, List<Special> specials, Map<Integer, Integer> spellsPerDay) implements Serializable {}

    public enum Type {
        CORE,
        BASE,
        HYBRID,
        UNCHAINED
    }
}
