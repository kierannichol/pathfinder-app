package pathfinder.db.query;

import java.util.Collection;
import java.util.Objects;
import pathfinder.model.Id;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.SourceId;

public class BloodlineQuery implements SourceSpecificQuery<BloodlineQuery>, ClassSpecificQuery<BloodlineQuery> {
    private final String name;
    private Collection<SourceId> sourceId;
    private Id classId;

    public BloodlineQuery sources(Collection<SourceId> sourceId) {
        return new BloodlineQuery(name, sourceId, classId);
    }

    public BloodlineQuery classId(Id classId) {
        return new BloodlineQuery(name, sourceId, classId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    public boolean matches(Bloodline feature) {
        return (this.name == null || feature.name().equalsIgnoreCase(this.name))
                && (this.classId == null || Objects.equals(feature.classId(), this.classId));
    }

    BloodlineQuery(String name) {
        this.name = name;
    }

    private BloodlineQuery(String name, Collection<SourceId> sourceId, Id classId) {
        this.name = name;
        this.sourceId = sourceId;
        this.classId = classId;
    }
}
