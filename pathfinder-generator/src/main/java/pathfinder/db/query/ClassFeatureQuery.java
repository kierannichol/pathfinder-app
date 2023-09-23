package pathfinder.db.query;

import java.util.Objects;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.Source;

public class ClassFeatureQuery implements SourceSpecificQuery<ClassFeatureQuery>, ClassSpecificQuery<ClassFeatureQuery> {

    private final String name;
    private SourceId sourceId;
    private Id classId;

    public ClassFeatureQuery source(SourceId sourceId) {
        return new ClassFeatureQuery(name, sourceId, classId);
    }

    public ClassFeatureQuery classId(Id classId) {
        return new ClassFeatureQuery(name, sourceId, classId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return Objects.equals(source.sourceId(), sourceId);
    }

    public boolean matches(ClassFeature feature) {
        return (this.name == null || feature.name().equalsIgnoreCase(this.name))
                && (this.classId == null || Objects.equals(feature.classId(), this.classId));
    }

    ClassFeatureQuery(String name) {
        this.name = name;
    }
    private ClassFeatureQuery(String name, SourceId sourceId, Id classId) {
        this.name = name;
        this.sourceId = sourceId;
        this.classId = classId;
    }
}
