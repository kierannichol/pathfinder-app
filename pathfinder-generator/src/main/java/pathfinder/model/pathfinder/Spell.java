package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.ToString;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Spell(Id id,
                    String name,
                    Description description,
                    String prerequisites,
                    String components,
                    @JsonProperty("casting_time") String castingTime,
                    String range,
                    String targets,
                    String duration,
                    @JsonProperty("saving_throw") String savingThrow,
                    @JsonProperty("spell_resistance") String spellResistance,
                    String school,
                    List<Spell.Level> levels,
                    String source) implements NamedEntity, FromSourceBook {

    public static SpellBuilder builder() {
        return new SpellBuilder();
    }

    @Override
    public List<String> sources() {
        return List.of(source);
    }

    public record Level(@JsonProperty("class_id") Id classId,
                        int level) {

    }

    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @ToString
    public static class SpellBuilder {
        private Id id;
        private String name;
        private final Description description = Description.empty();
        private String source = "";
        private String school = "";
        private String castingTime = "";
        private String prerequisites = "";
        private String components = "";
        private String range = "";
        private String targets = "";
        private String duration = "";
        private String savingThrow = "";
        private String spellResistance = "";
        private final List<Spell.Level> levels = new ArrayList<>();

        public SpellBuilder id(Id id) {
            this.id = id;
            return this;
        }

        public SpellBuilder name(String name) {
            this.name = name;
            return this;
        }

        public SpellBuilder source(String source) {
            this.source = source;
            return this;
        }

        public SpellBuilder school(String school) {
            this.school = school;
            return this;
        }

        public SpellBuilder castingTime(String castingTime) {
            this.castingTime = castingTime;
            return this;
        }

        public SpellBuilder prerequisites(String prerequisites) {
            this.prerequisites = prerequisites;
            return this;
        }

        public SpellBuilder components(String components) {
            this.components = components;
            return this;
        }

        public SpellBuilder range(String range) {
            this.range = range;
            return this;
        }

        public SpellBuilder targets(String targets) {
            this.targets = targets;
            return this;
        }

        public SpellBuilder duration(String duration) {
            this.duration = duration;
            return this;
        }

        public SpellBuilder savingThrow(String savingThrow) {
            this.savingThrow = savingThrow;
            return this;
        }

        public SpellBuilder spellResistance(String spellResistance) {
            this.spellResistance = spellResistance;
            return this;
        }

        public SpellBuilder effect(String effect) {
            this.description.addSection("Effect", effect);
            return this;
        }

        public SpellBuilder description(String description) {
            this.description.text(description);
            return this;
        }

        public SpellBuilder level(List<Level> level) {
            this.levels.addAll(level);
            return this;
        }

        public Spell build() {
            return new Spell(id, name, description, prerequisites, components, castingTime, range, targets, duration, savingThrow, spellResistance, school, levels, source);
        }
    }
}
