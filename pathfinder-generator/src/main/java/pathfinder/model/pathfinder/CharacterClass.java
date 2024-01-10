package pathfinder.model.pathfinder;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.pathfinder.ClassLevel.ClassLevelBuilder;
import pathfinder.model.pathfinder.Feature.FeatureBuilder;

public record CharacterClass(
        Id id,
        String name,
        String category,
        String description,
        String source,
        String hit_die,
        String alignment,
        Set<Id> class_skills,
        String skill_ranks_per_level,
        String bab,
        String fort,
        String ref,
        String will,
        List<ClassLevel> levels,
        Set<Feature> class_features) implements NamedEntity {

    public static CharacterClassBuilder builder() {
        return new CharacterClassBuilder();
    }

    public static CharacterClassBuilder builder(CharacterClass copy) {
        var builder = new CharacterClassBuilder();
        builder.id(copy.id());
        builder.name(copy.name());
        builder.category(copy.category());
        builder.description(copy.description());
        builder.source(copy.source());
        builder.hitDie(copy.hit_die());
        builder.alignment(copy.alignment());
        copy.class_skills().forEach(builder::addClassSkill);
        builder.skillRanksPerLevel(copy.skill_ranks_per_level());
        builder.bab(copy.bab());
        builder.fort(copy.fort());
        builder.ref(copy.ref());
        builder.will(copy.will());
        copy.levels().forEach(builder::addLevel);
        copy.class_features().forEach(builder::addClassFeature);
        return builder;
    }

    public static CharacterClassBuilder builder(CharacterClassLegacy copy) {
        var builder = new CharacterClassBuilder();
        builder.id(copy.id());
        builder.name(copy.name());
        builder.category(copy.category());
        builder.description(copy.description());
        builder.source(copy.source());
        builder.hitDie(copy.hit_die());
        builder.alignment(copy.alignment());
        copy.class_skills().forEach(builder::addClassSkill);
        builder.skillRanksPerLevel(copy.skill_ranks_per_level());
        builder.bab(copy.bab());
        builder.fort(copy.fort());
        builder.ref(copy.ref());
        builder.will(copy.will());
        copy.levels().forEach(builder::addLevel);
        copy.class_features().forEach(builder::addClassFeature);
        return builder;
    }

    public Optional<ClassLevel> level(int num) {
        return levels.stream()
                .filter(level -> level.level() == num)
                .findFirst();
    }

    public static class CharacterClassBuilder {
        private Id id;
        private String name;
        private String category;
        private String description;
        private String source;
        private String hitDie;
        private String alignment;
        private final Set<Id> class_skills = new TreeSet<>(Comparator.comparing(Function.identity()));
        private String skillRanksPerLevel;
        private String bab;
        private String fort;
        private String ref;
        private String will;
        private final Map<Integer, ClassLevelBuilder> levels = new TreeMap<>(Comparator.comparing(Function.identity()));
        private final List<String> spellCasterTypes = new ArrayList<>();
        private final Set<Feature> classFeatures = new TreeSet<>(Comparator.comparing(Feature::id));

        public CharacterClassBuilder id(Id id) {
            this.id = id;
            return this;
        }

        public CharacterClassBuilder id(String id) {
            return id(Id.of(id));
        }

        public String name() {
            return this.name;
        }

        public CharacterClassBuilder name(String name) {
            this.name = name;
            return this;
        }

        public CharacterClassBuilder category(String category) {
            this.category = category;
            return this;
        }

        public CharacterClassBuilder description(String description) {
            this.description = description;
            return this;
        }

        public CharacterClassBuilder source(String source) {
            this.source = source;
            return this;
        }

        public CharacterClassBuilder hitDie(String hitDie) {
            this.hitDie = hitDie;
            return this;
        }

        public CharacterClassBuilder alignment(String alignment) {
            this.alignment = alignment;
            return this;
        }

        public CharacterClassBuilder addClassSkill(Id skillId) {
            this.class_skills.add(skillId);
            return this;
        }

        public CharacterClassBuilder addClassSkill(String skillId) {
            return addClassSkill(Id.of(skillId));
        }

        public CharacterClassBuilder removeClassSkill(Id skillId) {
            this.class_skills.remove(skillId);
            return this;
        }

        public CharacterClassBuilder removeClassSkill(String skillId) {
            return removeClassSkill(Id.of(skillId));
        }

        public CharacterClassBuilder removeClassSkillIf(Predicate<Id> skillIdPredicate) {
            this.class_skills.removeIf(skillIdPredicate);
            return this;
        }

        public CharacterClassBuilder skillRanksPerLevel(String skillRanksPerLevel) {
            this.skillRanksPerLevel = skillRanksPerLevel;
            return this;
        }

        public CharacterClassBuilder bab(String bab) {
            this.bab = bab;
            return this;
        }

        public CharacterClassBuilder fort(String fort) {
            this.fort = fort;
            return this;
        }

        public CharacterClassBuilder ref(String ref) {
            this.ref = ref;
            return this;
        }

        public CharacterClassBuilder will(String will) {
            this.will = will;
            return this;
        }

        public CharacterClassBuilder addLevel(ClassLevel level) {
            return addLevel(ClassLevel.builder(level));
        }

        public CharacterClassBuilder addLevel(ClassLevelBuilder level) {
            this.levels.put(level.level(), level);
            return this;
        }

        public ClassLevelBuilder level(int level) {
            return this.levels.computeIfAbsent(level, k -> ClassLevel.builder());
        }

        public CharacterClassBuilder addSpellCasterType(String casterType) {
            this.spellCasterTypes.add(casterType);
            return this;
        }

        public CharacterClassBuilder removeSpellCasterType(String casterType) {
            this.spellCasterTypes.remove(casterType);
            return this;
        }

        public CharacterClassBuilder addClassFeature(Feature feature) {
            this.classFeatures.add(feature);
            return this;
        }

        public CharacterClassBuilder addClassFeature(FeatureBuilder feature) {
            this.classFeatures.add(feature.build());
            return this;
        }

        public CharacterClassBuilder removeClassFeatureIf(Predicate<Feature> featurePredicate) {
            this.classFeatures.removeIf(featurePredicate);
            return this;
        }

        public CharacterClassBuilder modifyClassFeature(Id id, Consumer<FeatureBuilder> modifyFn) {
            var target = this.classFeatures.stream()
                    .filter(feature -> feature.id().equals(id))
                    .findFirst()
                    .map(Feature::builder)
                    .orElse(Feature.builder().id(id));

            modifyFn.accept(target);
            removeClassFeatureIf(feature -> feature.id().equals(id));
            addClassFeature(target);
            return this;
        }

        public CharacterClassBuilder modifyClassFeatureIf(Predicate<Feature> featurePredicate, Consumer<FeatureBuilder> modifyFn) {
            var target = this.classFeatures.stream()
                    .filter(featurePredicate)
                    .findFirst()
                    .map(Feature::builder);

            target.ifPresent(feature -> {
                modifyFn.accept(feature);
                removeClassFeatureIf(f -> f.id().equals(feature.id()));
                addClassFeature(feature);
            });
            return this;
        }

        public CharacterClass build() {
            return new CharacterClass(id,
                    name,
                    category,
                    description,
                    source,
                    hitDie,
                    alignment,
                    class_skills,
                    skillRanksPerLevel,
                    bab,
                    fort,
                    ref,
                    will,
                    levels.values().stream().map(ClassLevelBuilder::build).toList(),
                    classFeatures);
        }

        public void forEachLevel(Consumer<ClassLevelBuilder> actionFn) {
            this.levels.forEach((lvNum, levelBuilder) -> actionFn.accept(levelBuilder));
        }
    }
}
