package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Predicate;
import pathfinder.model.Id;

public record ClassLevel(int level,
                         @JsonProperty(value = "class_feature_names") List<Id> classFeatureIds) {

    public static ClassLevelBuilder builder() {
        return new ClassLevelBuilder();
    }

    public static ClassLevelBuilder builder(ClassLevel copy) {
        return new ClassLevelBuilder(copy);
    }

    public static class ClassLevelBuilder {
        private int level;
        private final List<Id> classFeatureIds = new ArrayList<>();
        private final Map<Integer, Integer> spellsPerDay = new HashMap<>();
        private final Map<Integer, Integer> spellsKnown = new HashMap<>();

        public int level() {
            return this.level;
        }

        public ClassLevelBuilder level(int level) {
            this.level = level;
            return this;
        }

        public ClassLevelBuilder addClassFeatureId(Id id) {
            this.classFeatureIds.add(id);
            return this;
        }

        public ClassLevelBuilder addClassFeatureId(String id) {
            return addClassFeatureId(Id.of(id));
        }

        public ClassLevelBuilder addClassFeatureIds(Collection<Id> ids) {
            this.classFeatureIds.addAll(ids);
            return this;
        }

        public ClassLevelBuilder removeClassFeatureIf(Predicate<Id> classFeaturePredicate) {
            this.classFeatureIds.removeIf(classFeaturePredicate);
            return this;
        }

        public ClassLevel build() {
            return new ClassLevel(level, classFeatureIds);
        }

        private ClassLevelBuilder() {
        }

        private ClassLevelBuilder(ClassLevel copy) {
            this.level = copy.level;

            if (copy.classFeatureIds != null) {
                this.classFeatureIds.addAll(copy.classFeatureIds);
            }
        }

        private ClassLevelBuilder(ClassLevelLegacy copy) {
            this.level = copy.level();
            if (copy.classFeatureIds() != null) {
                this.classFeatureIds.addAll(copy.classFeatureIds());
            }
        }
    }
}
