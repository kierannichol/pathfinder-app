package pathfinder.v7.db.query;

import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.v7.Source;

public class ClassQuery implements SourceSpecificQuery<ClassQuery> {
    private final String name;
    private SourceId sourceId;

    public ClassQuery source(SourceId sourceId) {
        return new ClassQuery(name, sourceId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return source.sourceId().equals(sourceId);
    }

    public boolean matches(CharacterClass pathfinderClass) {
        return this.name == null || pathfinderClass.name().equalsIgnoreCase(this.name);
    }

    ClassQuery(String name) {
        this.name = name;
    }

    private ClassQuery(String name, SourceId sourceId) {
        this.name = name;
        this.sourceId = sourceId;
    }
}
