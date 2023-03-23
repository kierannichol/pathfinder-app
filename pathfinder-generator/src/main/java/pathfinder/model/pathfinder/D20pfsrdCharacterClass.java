package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Stream;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record D20pfsrdCharacterClass(Id id,
                                     String name,
                                     String shortDescription,
                                     Type type,
                                     List<Level> levels,
                                     String hitDie,
                                     int skillRanksPerLevel,
                                     List<ClassSkill> skills,
                                     Set<ArmorProficiency> armorProficiencies,
                                     Set<WeaponType> weaponProficiencies,
                                     String source) implements
        Serializable, NamedEntity {
    public record Level(int level,
                        int bab,
                        @JsonProperty("fort_save") int fortSave,
                        @JsonProperty("ref_save") int refSave,
                        @JsonProperty("will_save") int willSave,
                        List<Feature> specials,
                        @JsonProperty("spells_per_dau") Map<Integer, Integer> spellsPerDay,
                        @JsonProperty("spells_known") Map<Integer, Integer> spellsKnown) implements Serializable {}

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
