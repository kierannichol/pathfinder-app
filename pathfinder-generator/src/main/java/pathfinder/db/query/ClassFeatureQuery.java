package pathfinder.db.query;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.regex.Pattern;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Id;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.SourceId;

public class ClassFeatureQuery implements Query<ClassFeature>, SourceSpecificQuery<ClassFeatureQuery>, ClassSpecificQuery<ClassFeatureQuery> {

    private final String name;
    private Collection<SourceId> sourceId;
    private Id classId;
    private Pattern idMatches;

    @Override
    public Stream<ClassFeature> query(List<Source> sources, CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return sources.stream()
                .filter(this::matches)
                .flatMap(content -> content.classFeatures().stream())
                .filter(this::matches);
    }

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

    private boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    private boolean matches(ClassFeature feature) {
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
