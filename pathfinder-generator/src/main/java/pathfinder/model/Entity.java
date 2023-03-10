package pathfinder.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import pathfinder.data.v4.EntityDbo;
import pathfinder.data.v4.EntitySummaryDbo;
import pathfinder.model.pathfinder.Source;
import pathfinder.util.ListUtils;

public record Entity(Id id,
                     String name,
                     Tags tags,
                     String prerequisiteFormula,
                     Description description,
                     List<Effect> effects,
                     List<Choice> choices,
                     List<ChildEntity> children,
                     Template template,
                     Source source) implements NamedEntity {

    public static EntityBuilder builder() {
        return new EntityBuilder();
    }

    public static EntityBuilder builder(Entity entity) {
        return new EntityBuilder()
                .id(entity.id)
                .name(entity.name)
                .tags(entity.tags)
                .prerequisiteFormula(entity.prerequisiteFormula)
                .description(entity.description)
                .effects(entity.effects)
                .choices(entity.choices)
                .children(entity.children)
                .template(entity.template);
    }

    public EntitySummaryDbo toSummaryDbo() {
        return EntitySummaryDbo.newBuilder()
                .setId(id.string())
                .setName(name)
                .addAllTags(tags.toDbos())
                .setPrerequisiteFormula(prerequisiteFormula)
                .addAllChildren(ListUtils.mapList(children, ChildEntity::toSummaryDbo))
                .build();
    }

    public EntityDbo toDbo() {
        var builder = EntityDbo.newBuilder()
                .setId(id.string())
                .setName(name)
                .addAllTags(tags.toDbos())
                .setPrerequisiteFormula(prerequisiteFormula)
                .setDescription(description.toDbo())
                .addAllEffects(ListUtils.mapList(effects, Effect::toDbo))
                .addAllChoices(ListUtils.mapList(choices, Choice::toDbo))
                .addAllChildren(ListUtils.mapList(children, ChildEntity::toDbo));

        if (template != null) {
            builder.setTemplate(template.toDbo());
        }

        return builder.build();
    }

    public static class EntityBuilder {
        private Id id = Id.EMPTY;
        private String name = "";
        private final Tags tags = Tags.of();
        private String prerequisiteFormula = "";
        private Description description = Description.empty();
        private final List<Effect> effects = new ArrayList<>();
        private final List<Choice> choices = new ArrayList<>();
        private final List<ChildEntity> children = new ArrayList<>();
        private Template template = null;
        private Source source = Source.NONE;

        private EntityBuilder() {}

        public EntityBuilder id(Id id) {
            this.id = id;
            return this;
        }

        public EntityBuilder name(String name) {
            this.name = name;
            return this;
        }

        public EntityBuilder tags(Tags tags) {
            this.tags.addAll(tags);
            return this;
        }

        public EntityBuilder tags(String... tag) {
            Arrays.stream(tag)
                    .map(Tag::of)
                    .forEach(this.tags::add);
            return this;
        }

        public EntityBuilder description(Description description) {
            this.description = description;
            return this;
        }

        public EntityBuilder prerequisiteFormula(String prerequisiteFormula) {
            this.prerequisiteFormula = prerequisiteFormula;
            return this;
        }

        public EntityBuilder description(String description) {
            this.description = Description.create(description);
            return this;
        }

        public EntityBuilder effect(Effect... effect) {
            this.effects.addAll(Arrays.asList(effect));
            return this;
        }

        public EntityBuilder effects(Iterable<Effect> effects) {
            effects.forEach(this.effects::add);
            return this;
        }

        public EntityBuilder choice(Choice... choice) {
            this.choices.addAll(Arrays.asList(choice));
            return this;
        }

        public EntityBuilder choices(Iterable<Choice> choices) {
            choices.forEach(this.choices::add);
            return this;
        }

        public EntityBuilder child(ChildEntity... child) {
            this.children.addAll(Arrays.asList(child));
            return this;
        }

        public EntityBuilder children(Iterable<ChildEntity> children) {
            children.forEach(this.children::add);
            return this;
        }

        public EntityBuilder template(Template template) {
            this.template = template;
            return this;
        }

        public EntityBuilder source(Source source) {
            this.source = source;
            return this;
        }

        public Entity build() {
            return new Entity(id, name, tags, prerequisiteFormula, description, effects, choices, children, template, source);
        }
    }
}
