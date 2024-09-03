package pathfinder.db.query;

import java.util.Collection;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.SourceId;

public class ClassQuery implements SourceSpecificQuery<ClassQuery> {
    private final String name;
    private Collection<SourceId> sourceId;

    public ClassQuery sources(Collection<SourceId> sourceId) {
        return new ClassQuery(name, sourceId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    public boolean matches(CharacterClass pathfinderClass) {
        return this.name == null || pathfinderClass.name().equalsIgnoreCase(this.name);
    }

    ClassQuery(String name) {
        this.name = name;
    }

    private ClassQuery(String name, Collection<SourceId> sourceId) {
        this.name = name;
        this.sourceId = sourceId;
    }
}
