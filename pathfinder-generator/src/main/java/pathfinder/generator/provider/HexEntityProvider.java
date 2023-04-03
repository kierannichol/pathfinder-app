package pathfinder.generator.provider;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import logic.parse.FormulaOptimizer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.local.ClassSourceDatabase;
import pathfinder.generator.db.local.HexYamlSourceDatabase;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassLevel;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;
import pathfinder.model.pathfinder.Spell;
import pathfinder.model.pathfinder.Spell.Level;
import pathfinder.util.NameToIdConverter;

@Component
@RequiredArgsConstructor
public class HexEntityProvider implements EntityProvider {
    private final HexYamlSourceDatabase hexDatabase;
    private final ClassSourceDatabase classSourceDatabase;

    @Override
    public Stream<Entity> streamEntities(Source source) {
        return hexDatabase.streamHexes()
                .map(this::createSpellEntity);
    }

    private Entity createSpellEntity(Spell spell) {
        Tags tags = Tags.of("hex")
                .add(NameToIdConverter.partialId(spell.school()).key);

        tags = spell.levels().stream()
                .map(sl -> Tags.of(sl.classId().key, sl.classId().key + sl.level()))
                .reduce(tags, Tags::addAll);

        return Entity.builder()
                .id(spell.id())
                .name(spell.name())
                .tags(tags)
                .description(spell.description())
                .source(Sources.findSourceByNameOrCode(spell.source()))
                .prerequisiteFormula(prerequisiteFormula(spell.levels()))
                .build();
    }

    private String prerequisiteFormula(List<Level> spellLevels) {
        return FormulaOptimizer.optimize(spellLevels.stream()
                .map(sl -> "@%s>=%d".formatted(sl.classId(), firstLevelClassGetsSpellLevel(sl.classId(), sl.level())))
                .collect(Collectors.joining(" OR ")));
    }

    private int firstLevelClassGetsSpellLevel(Id classId, int spellLevel) {
        CharacterClass characterClass = classSourceDatabase.findById(classId)
                .orElseThrow(() -> new IllegalArgumentException("Class not found: " + classId));

        return characterClass.levels().stream()
                .filter(level -> level.spellsPerDay().containsKey(spellLevel) || level.spellsKnown().containsKey(spellLevel))
                .findFirst()
                .map(ClassLevel::level)
                .orElseGet(() -> {
                    if (spellLevel == 0) {
                        return 1;
                    }
                    throw new IllegalArgumentException(characterClass.name() + " cannot cast spells of level " + spellLevel);
                });
    }
}
