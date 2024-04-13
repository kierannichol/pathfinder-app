package pathfinder.generator;

import pathfinder.model.Id;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;

public class PrerequisiteContext {
    private final SourceId sourceId;
    private final Id classId;

    public static PrerequisiteContext create() {
        return new PrerequisiteContext(null, null);
    }

    public PrerequisiteContext sourceId(String sourceId) {
        return sourceId(Sources.findSourceByNameOrCode(sourceId));
    }

    public PrerequisiteContext sourceId(SourceId sourceId) {
        return new PrerequisiteContext(sourceId, classId);
    }

    public PrerequisiteContext classId(Id classId) {
        return new PrerequisiteContext(sourceId, classId);
    }

    public SourceId sourceId() {
        return sourceId;
    }

    public Id classId() {
        return classId;
    }

    public PrerequisiteContext merge(PrerequisiteContext other) {
        return new PrerequisiteContext(
                other.sourceId != null ? other.sourceId : sourceId,
                other.classId != null ? other.classId : classId
        );
    }

    private PrerequisiteContext(SourceId sourceId, Id classId) {
        this.sourceId = sourceId;
        this.classId = classId;
    }
}
