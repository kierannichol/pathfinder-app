package pathfinder.model;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;
import pathfinder.model.v3.Sourced;

public record CharacterClass(String id, String name, String shortDescription, Type type, List<Level> levels, List<ClassSkill> skills, Source source) implements
        Serializable, FeatureModel, Sourced {
    public record Level(int level, int bab, int fortSave, int refSave, int willSave, List<Special> specials, Map<Integer, Integer> spellsPerDay) implements Serializable {}

    public enum Type {
        CORE,
        BASE,
        HYBRID,
        UNCHAINED
    }

    public Stream<Ability> abilities() {
        return levels.stream()
                .flatMap(level -> level.specials().stream())
                .map(special -> Ability.builder()
                        .id(special.id())
                        .name(special.name())
                        .description(special.description())
                        .type(Ability.Type.NONE)
                        .source(source)
                        .build());
    }
}
