package pathfinder.parser.db;

import java.util.List;
import java.util.Map;
import pathfinder.model.Id;

public record ClassEntry(Id id, String name, List<Level> levels) {

    public record Level(int level, int bab, int fortSave, int refSave, int willSave, List<String> special, Map<Integer, Integer> spellsPerDay) {}
}
