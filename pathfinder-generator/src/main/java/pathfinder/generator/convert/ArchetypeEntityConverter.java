package pathfinder.generator.convert;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.local.ClassSourceDatabase;
import pathfinder.model.Choice;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.SelectChoice;
import pathfinder.model.Template;
import pathfinder.model.Template.Section;
import pathfinder.model.Template.TemplateBuilder;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassLevel;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class ArchetypeEntityConverter {
    private final ClassSourceDatabase classSourceDatabase;

    public Entity toEntity(Archetype model) {
        CharacterClass targetClass = classSourceDatabase.findById(
                        model.id().withoutOption())
                .orElseThrow(() -> new IllegalArgumentException(
                        "No such class for archetype: " + model.id().withoutOption()));

        var entity = Entity.builder()
                .id(model.id())
                .name(model.name())
                .description(model.description())
                .tags("archetype", model.id().key)
                .source(Sources.findSourceByNameOrCode(model.source()));

        var template = Template.builder(model.id());

        for (int level = 1; level <= 20; level++) {
            int classLevel = level;
            List<Effect> effects = new ArrayList<>();
            List<Choice> choices = new ArrayList<>();

            ClassLevel classLevelDefinition = targetClass.level(level)
                    .orElseThrow(() -> new IllegalArgumentException("No level: " + classLevel));

            model.modifications().forEach(modification -> {
                if (classLevelDefinition.classFeatureIds().contains(modification.remove())) {
                    tryFeatureChoice(model.id(), classLevel, modification.add())
                            .forEach(choices::add);

                    effects.add(Effect.renameKey(modification.remove(), modification.add()));
                }
            });

            if (!effects.isEmpty() || !choices.isEmpty()) {
                template.section(new Section("@%s>=%d".formatted(model.id().withoutOption(), level), effects, choices));
            }
        }

        customizeTemplate(model, template);

        return entity
                .template(template.build())
                .build();
    }

    private void customizeTemplate(Archetype archetype, TemplateBuilder template) {
        if (archetype.id().equals(Id.of("class:magus#hexcrafter"))) {
            IntStream.of(6, 9, 12, 15, 18).forEach(level -> {
                String levelCondition = "@%s>=%d".formatted(archetype.id().withoutOption(), level);
                template.section(Section.builder()
                        .condition(levelCondition)
                        .effect(Effect.renameKey(Id.of("ability:magus_arcana#magus"), Id.of("ability:hex_arcana#magus_hexcrafter")))
                        .build());
            });
        }
    }

    private Stream<Choice> tryFeatureChoice(Id classId, int classLevel, Id featureId) {
        String choicePrefix = "%s%d:".formatted(classId, classLevel);
        String classLevelPrerequisite = "@%s>=%d".formatted(classId, classLevel);
        return switch (featureId.string()) {
            case "ability:hex_magus#magus_hexcrafter" -> Stream.of(
                    new SelectChoice(choicePrefix + "magus_hex", "Hex", "hex", List.of("hex"), List.of()));
            case "ability:hex_arcana#magus_hexcrafter" -> Stream.of(
                    new SelectChoice(choicePrefix + "hex_arcana", "Magus Arcana or Hex", "magus_arcana",
                            List.of("magus_arcana", "hex"), List.of()));
            default -> Stream.empty();
        };
    }
}
