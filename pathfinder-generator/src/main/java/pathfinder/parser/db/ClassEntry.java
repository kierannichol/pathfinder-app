package pathfinder.parser.db;

import java.util.List;
import java.util.Map;

public record ClassEntry(String id, String name, List<Level> levels) {

    public record Level(int level, int bab, int fortSave, int refSave, int willSave, List<String> special, Map<Integer, Integer> spellsPerDay) {}
}
