package pathfinder.model.pathfinder;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Stream;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.parser.db.WeaponType;

public record D20pfsrdCharacterClass(Id id, String name, String shortDescription, Type type, List<Level> levels, String hitDie, int skillRanksPerLevel, List<ClassSkill> skills, Set<ArmorProficiency> armorProficiencies, Set<WeaponType> weaponProficiencies, String source) implements
        Serializable, NamedEntity {
    public record Level(int level, int bab, int fortSave, int refSave, int willSave, List<Feature> specials, Map<Integer, Integer> spellsPerDay) implements Serializable {}

    public enum Type {
        CORE,
        BASE,
        HYBRID,
        UNCHAINED
    }

    public Stream<Feature> abilities() {
        return levels.stream()
                .flatMap(level -> level.specials().stream())
                .map(special -> Feature.builder()
                        .id(special.id())
                        .name(special.name())
                        .description(special.description())
                        .type(special.type())
                        .source(source)
                        .build());
    }
}
