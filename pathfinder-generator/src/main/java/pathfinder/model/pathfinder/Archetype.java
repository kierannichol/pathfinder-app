package pathfinder.model.pathfinder;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import pathfinder.model.Choice;
import pathfinder.model.Description;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.SelectChoice;
import pathfinder.model.Template;
import pathfinder.model.Template.Section;

public record Archetype(Id id,
                        String name,
                        Description description,
                        List<ArchetypeModification> modifications,
                        List<Feature> features,
                        String source) implements NamedEntity {

    public Entity toArchetypeEntity() {
        var entity = Entity.builder()
                .id(id())
                .name(name())
                .description(description())
                .tags("archetype", id().key)
                .source(Sources.findSourceByNameOrCode(source()));

        var template = Template.builder(id());

        for (int level = 1; level <= 20; level++) {
            int classLevel = level;
            List<Effect> effects = new ArrayList<>();
            List<Choice> choices = new ArrayList<>();

            modifications().forEach(modification -> {
                tryFeatureChoice(id, classLevel, modification.add())
                        .forEach(choices::add);

                effects.add(Effect.renameKey(modification.remove(), modification.add()));
            });

            template.section(new Section("@%s>=%d".formatted(id().withoutOption(), level), effects, choices));
        }

        return entity
                .template(template.build())
                .build();
    }

    private static Stream<Choice> tryFeatureChoice(Id classId, int classLevel, Id featureId) {
        String choicePrefix = "%s%d:".formatted(classId, classLevel);
        String classLevelPrerequisite = "@%s==%d".formatted(classId, classLevel);
        return switch (featureId.string()) {
            case "ability:hex_magus#magus_hexcrafter" -> Stream.of(
                    new SelectChoice(choicePrefix + "magus_hex", "Hex", "hex", List.of("hex"), List.of()));
            default -> Stream.empty();
        };
    }
}
