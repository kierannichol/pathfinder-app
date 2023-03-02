package pathfinder.model.v4.pathfinder;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import pathfinder.model.Id;
import pathfinder.model.v4.Choice;
import pathfinder.model.v4.Description;
import pathfinder.model.v4.Effect;
import pathfinder.model.v4.Entity;
import pathfinder.model.v4.SelectChoice;
import pathfinder.model.v4.Tags;
import pathfinder.model.v4.Template;
import pathfinder.model.v4.Template.Section;
import pathfinder.model.v4.Template.TemplateBuilder;

public class ClassEntityGenerator {

    public static Entity toClassEntity(CharacterClass characterClass) {
        Tags tags = Tags.of("class", characterClass.category());

        var entity = Entity.builder()
                .id(characterClass.id())
                .name(characterClass.name())
                .tags(tags)
                .description(Description.create(characterClass.description()))
                .effect(Effect.addNumber(characterClass.id(), 1));

        TemplateBuilder template = Template.builder(characterClass.id());

        characterClass.levels().forEach(levelDefinition -> {
            template.section(createLevelTemplateSection(characterClass, levelDefinition));
        });

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

            choices.add(new SelectChoice(id.key + ":archetype",
                    "Archetype", "archetype", "", List.of("archetype", id.key)));
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
            tryFeatureChoice(id, level, featureId).ifPresent(choices::add);
        });

        // Skill points
        for (int i = 1; i <= Integer.parseInt(characterClass.skill_ranks_per_level()) && level > 0; i++) {
            choices.add(new SelectChoice("%s%d:skill_rank:%d".formatted(id.key, level, i),
                    "",
                    "skill",
                    "",
                    List.of("skill")));
        }

        return new Section(condition, effects, choices);
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

    private static Optional<Choice> tryFeatureChoice(Id classId, int classLevel, Id featureId) {
        return switch (featureId.string()) {
            case "ability:rage_power#barbarian" -> Optional.of(
                    new SelectChoice("barbarian%d:rage_power".formatted(classLevel), "Rage Power", "rage_power", "@%s==%d".formatted(classId, classLevel), List.of("rage_power")));
            default -> Optional.empty();
        };
    }
}
