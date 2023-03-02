package pathfinder.model.v4;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.List;
import pathfinder.data.v4.TemplateDbo;
import pathfinder.data.v4.TemplateSectionDbo;
import pathfinder.model.Id;

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

        public TemplateSectionDbo toDbo() {
            return TemplateSectionDbo.newBuilder()
                    .setCondition(condition)
                    .addAllEffects(mapList(effects, Effect::toDbo))
                    .addAllChoices(mapList(choices, Choice::toDbo))
                    .build();
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
