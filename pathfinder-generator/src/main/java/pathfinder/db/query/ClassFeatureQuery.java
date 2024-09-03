package pathfinder.db.query;

import java.util.Collection;
import java.util.Objects;
import java.util.regex.Pattern;
import pathfinder.model.Id;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.SourceId;

public class ClassFeatureQuery implements SourceSpecificQuery<ClassFeatureQuery>, ClassSpecificQuery<ClassFeatureQuery> {

    private final String name;
    private Collection<SourceId> sourceId;
    private Id classId;
    private Pattern idMatches;

    public ClassFeatureQuery sources(Collection<SourceId> sourceId) {
        return new ClassFeatureQuery(name, sourceId, classId, idMatches);
    }

    public ClassFeatureQuery classId(Id classId) {
        return new ClassFeatureQuery(name, sourceId, classId, idMatches);
    }

    public ClassFeatureQuery idMatches(String idMatchesRegex) {
        return idMatches(Pattern.compile(idMatchesRegex));
    }

    public ClassFeatureQuery idMatches(Pattern idMatches) {
        return new ClassFeatureQuery(name, sourceId, classId, idMatches);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    public boolean matches(ClassFeature feature) {
        return (this.name == null || feature.name().equalsIgnoreCase(this.name))
                && (this.classId == null || Objects.equals(feature.classId(), this.classId))
                && (this.idMatches == null || this.idMatches.matcher(feature.id().string()).matches());
    }

    ClassFeatureQuery(String name) {
        this.name = name;
    }
    private ClassFeatureQuery(String name, Collection<SourceId> sourceId, Id classId, Pattern idMatches) {
        this.name = name;
        this.sourceId = sourceId;
        this.classId = classId;
        this.idMatches = idMatches;
    }
}
