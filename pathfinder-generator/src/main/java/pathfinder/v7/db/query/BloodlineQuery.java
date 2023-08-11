package pathfinder.v7.db.query;

import java.util.Objects;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.v7.Source;

public class BloodlineQuery implements SourceSpecificQuery<BloodlineQuery>, ClassSpecificQuery<BloodlineQuery> {
    private final String name;
    private SourceId sourceId;
    private Id classId;

    public BloodlineQuery source(SourceId sourceId) {
        return new BloodlineQuery(name, sourceId, classId);
    }

    public BloodlineQuery classId(Id classId) {
        return new BloodlineQuery(name, sourceId, classId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return Objects.equals(source.sourceId(), sourceId);
    }

    public boolean matches(Bloodline feature) {
        return (this.name == null || feature.name().equalsIgnoreCase(this.name))
                && (this.classId == null || Objects.equals(feature.classId(), this.classId));
    }

    BloodlineQuery(String name) {
        this.name = name;
    }

    private BloodlineQuery(String name, SourceId sourceId, Id classId) {
        this.name = name;
        this.sourceId = sourceId;
        this.classId = classId;
    }
}
