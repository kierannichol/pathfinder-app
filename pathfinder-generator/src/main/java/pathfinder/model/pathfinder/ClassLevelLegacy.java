package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.function.Predicate;
import pathfinder.model.Id;

public record ClassLevelLegacy(int level,
                               @JsonProperty("class_feature_names") List<Id> classFeatureIds) {

    public static ClassLevelBuilder builder() {
        return new ClassLevelBuilder();
    }

    public static ClassLevelBuilder builder(ClassLevelLegacy copy) {
        return new ClassLevelBuilder(copy);
    }

    public static class ClassLevelBuilder {
        private int level;
        private final List<Id> classFeatureIds = new ArrayList<>();

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

        public ClassLevelLegacy build() {
            return new ClassLevelLegacy(level, classFeatureIds);
        }

        private ClassLevelBuilder() {
        }

        private ClassLevelBuilder(ClassLevelLegacy copy) {
            this.level = copy.level;
            this.classFeatureIds.addAll(copy.classFeatureIds);
        }
    }
}
