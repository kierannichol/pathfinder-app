package pathfinder.generator.convert;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import logic.util.Ordinal;
import org.springframework.stereotype.Component;
import pathfinder.model.Choice;
import pathfinder.model.Description;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.SelectChoice;
import pathfinder.model.Tags;
import pathfinder.model.Template;
import pathfinder.model.Template.Section;
import pathfinder.model.Template.TemplateBuilder;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassLevel;
import pathfinder.model.pathfinder.Sources;

@Component
public class ClassEntityConverter {
    private static final Tags BASE_TAGS = Tags.of("class");

    public Entity toClassEntity(CharacterClass characterClass) {
        Tags tags = BASE_TAGS.add(characterClass.category());

        var entity = Entity.builder()
                .id(characterClass.id())
                .name(characterClass.name())
                .tags(tags)
                .description(Description.create(characterClass.description()))
                .effect(Effect.addNumber(characterClass.id(), 1))
                .source(Sources.findSourceByNameOrCode(characterClass.source()));

        TemplateBuilder template = Template.builder(characterClass.id());

        characterClass.levels().forEach(levelDefinition ->
                template.section(createLevelTemplateSection(characterClass, levelDefinition)));

        entity.template(template.build());

        return entity.build();
    }

    private static Template.Section createLevelTemplateSection(CharacterClass characterClass, ClassLevel levelDefinition) {
        int level = levelDefinition.level();
        Id id = characterClass.id();
        String condition = "@%s>=%d".formatted(characterClass.id(), level);

        List<Effect> effects = new ArrayList<>();
        List<Choice> choices = new ArrayList<>();

        if (level == 1) {
            // Base class features
            characterClass.weapon_proficiencies().forEach(proficiencyId -> effects.add(
                    Effect.setNumber(proficiencyId, 1)));
            characterClass.armor_proficiencies().forEach(proficiencyId -> effects.add(
                    Effect.setNumber(proficiencyId, 1)));
            characterClass.class_skills().forEach(skillId -> effects.add(
                    Effect.setNumber("trained:" + skillId, 1)));

            effects.addAll(customClassEffects(characterClass.id()));
            choices.addAll(customClassChoices(characterClass.id()));

            choices.add(new SelectChoice(id.key + ":archetype",
                    "Archetype", "archetype", true,
                    List.of("archetype+" + id.key), List.of()));
        }

        int bab = calculateBabForLevel(characterClass.bab(), level);
        int fortSave = calculateSaveForLevel(characterClass.fort(), level);
        int refSave = calculateSaveForLevel(characterClass.ref(), level);
        int willSave = calculateSaveForLevel(characterClass.will(), level);

        effects.add(Effect.setNumber("bab", bab));
        effects.add(Effect.setNumber("fort:base", fortSave));
        effects.add(Effect.setNumber("ref:base", refSave));
        effects.add(Effect.setNumber("will:base", willSave));

        levelDefinition.classFeatureIds().forEach(featureId -> {
            effects.add(Effect.addNumber(featureId, 1));
//            tryFeatureChoice(id, level, featureId).forEach(choices::add);
        });

        levelDefinition.spellsPerDay().forEach((spellLevel, perDay) -> {
            effects.add(Effect.setNumber(Id.partial("spells_per_day#" + spellLevel), perDay));
            characterClass.spell_caster_types().forEach(spellcaster -> {
                effects.add(Effect.setNumber(Id.partial("spells_per_day:%s#%d".formatted(spellcaster, spellLevel)), perDay));
            });
        });

        effects.addAll(customLevelEffects(characterClass.id(), level));

        choices.addAll(skillPointChoices(characterClass, level));
        choices.addAll(spellChoices(characterClass, levelDefinition));

        return new Section(condition, effects, choices);
    }

    private static List<Choice> spellChoices(CharacterClass characterClass, ClassLevel levelDefinition) {
        List<Choice> choices = new ArrayList<>(spellsKnownChoices(characterClass, levelDefinition));

        if (!levelDefinition.spellsPerDay().isEmpty() && levelDefinition.spellsKnown().isEmpty()) {
            choices.addAll(repeatingSpellChoice(characterClass, levelDefinition));
        }
        return choices;
    }

    private static List<Choice> skillPointChoices(CharacterClass characterClass, int level) {
        List<Choice> choices = new ArrayList<>();
        for (int i = 1; i <= Integer.parseInt(characterClass.skill_ranks_per_level()) && level > 0; i++) {
            choices.add(new SelectChoice("%s%d:skill_rank:%d".formatted(characterClass.id().key, level, i),
                    "",
                    "skill",
                    List.of("skill"),
                    List.of()));
        }
        return choices;
    }

    private static int calculateBabForLevel(String rank, int level) {
        return switch (rank) {
            case "A" -> level;
            case "B" -> (int) Math.floor(level * 0.75);
            case "C" -> (int) Math.floor(level * 0.50);
            default -> throw new IllegalArgumentException("Unknown BAB rank: " + rank);
        };
    }

    private static int calculateSaveForLevel(String rank, int level) {
        return switch (rank) {
            case "A" -> 2 + Math.floorDiv(level, 2);
            case "B" -> Math.floorDiv(level, 3);
            default -> throw new IllegalArgumentException("Unknown save rank: " + rank);
        };
    }
    private static List<Choice> spellsKnownChoices(CharacterClass characterClass, ClassLevel currentLevel) {
        Map<Integer, Integer> spellsKnown = new HashMap<>(currentLevel.spellsKnown());
        characterClass.level(currentLevel.level() - 1)
                .ifPresent(previousLevel ->
                        previousLevel.spellsKnown().forEach((previousLevelSpellLevel, previousLevelSpellsKnown) ->
                                spellsKnown.compute(previousLevelSpellLevel, (key, numKnown) -> {
                                    if (numKnown == null) {
                                        throw new NullPointerException("Should not have more spells in previous level than in later levels");
                                    }
                                    return numKnown - previousLevelSpellsKnown;
                                })));

        List<Choice> choices = new ArrayList<>();
        spellsKnown.forEach((spellLevel, numKnown) -> {
                    for (int i = 0; i < numKnown; i++) {
                        choices.add(spellChoice(spellLevel, i, characterClass.id(), currentLevel));
                    }
                });
        return choices;
    }

    private static List<Choice> repeatingSpellChoice(CharacterClass characterClass, ClassLevel classLevel) {
        String choicePrefix = "%s%d:".formatted(characterClass.id(), classLevel.level());
        Choice choice = new SelectChoice(choicePrefix + "spell", "Spell", "spell", true, List.of("spell+" + characterClass.id().key), List.of());
        return List.of(choice);
    }

    private static Choice spellChoice(int spellLevel, int index, Id classId, ClassLevel classLevel) {
        String choicePrefix = "%s%d:".formatted(classId, classLevel.level());
        return new SelectChoice("%sspell%d_%d".formatted(choicePrefix, spellLevel, index),
                "%s-Level Spell".formatted(Ordinal.toString(spellLevel)),
                "spell",
                spellChoiceTags(classId, spellLevel),
                List.of());
    }

    private static List<String> spellChoiceTags(Id classId, int spellLevel) {
        List<String> tags = new ArrayList<>();
        for (int i = 1; i <= spellLevel; i++) {
            tags.add("spell+" + classId.key + i);
        }
        return tags;
    }

    private static List<Effect> customClassEffects(Id classId) {
        return List.of();
    }

    private static List<Choice> customClassChoices(Id classId) {
        String choicePrefix = "%s%d:".formatted(classId, 1);
        String classLevelPrerequisite = "@%s>=%d".formatted(classId, 1);

        return switch (classId.string()) {
            case "class:sorcerer" -> List.of(new SelectChoice(choicePrefix + "bloodline", "Bloodline", "sorcerer_bloodline",
                    List.of("sorcerer_bloodline"), List.of()));
            default -> List.of();
        };
    }

    private static List<Effect> customLevelEffects(Id classId, int classLevel) {
        return List.of();
    }
}
