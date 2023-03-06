package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.List;
import pathfinder.data.v4.TemplateDbo;
import pathfinder.data.v4.TemplateSectionDbo;

public record Template(Id id, List<Template.Section> sections) {

    public static TemplateBuilder builder(Id id) {
        return new TemplateBuilder(id);
    }

    public TemplateDbo toDbo() {
        return TemplateDbo.newBuilder()
                .setId(id.string())
                .addAllSections(mapList(sections, Section::toDbo))
                .build();
    }

    public record Section(String condition, List<Effect> effects, List<Choice> choices) {

        public static SectionBuilder builder() {
            return new SectionBuilder();
        }

        public TemplateSectionDbo toDbo() {
            return TemplateSectionDbo.newBuilder()
                    .setCondition(condition)
                    .addAllEffects(mapList(effects, Effect::toDbo))
                    .addAllChoices(mapList(choices, Choice::toDbo))
                    .build();
        }

        public static class SectionBuilder {
            private String condition = "";
            private final List<Effect> effects = new ArrayList<>();
            private final List<Choice> choices = new ArrayList<>();

            public SectionBuilder condition(String condition) {
                this.condition = condition;
                return this;
            }

            public SectionBuilder effect(Effect effect) {
                this.effects.add(effect);
                return this;
            }

            public SectionBuilder choice(Choice choice) {
                this.choices.add(choice);
                return this;
            }

            public Section build() {
                return new Section(condition, effects, choices);
            }

            private SectionBuilder() {}
        }
    }

    public static class TemplateBuilder {
        private final Id id;
        private final List<Template.Section> sections = new ArrayList<>();

        public TemplateBuilder section(Template.Section section) {
            this.sections.add(section);
            return this;
        }

        public Template build() {
            return new Template(id, sections);
        }

        private TemplateBuilder(Id id) {
            this.id = id;
        }
    }
}
