package pathfinder.db.query;

import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.SourceId;

public class ClassQuery implements Query<CharacterClass>, SourceSpecificQuery<ClassQuery> {
    private final String name;
    private Collection<SourceId> sourceId;

    @Override
    public Stream<CharacterClass> query(List<Source> sources,
            CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return sources.stream()
                .filter(this::matches)
                .flatMap(content -> content.classes().stream())
                .filter(this::matches);
    }

    public ClassQuery sources(Collection<SourceId> sourceId) {
        return new ClassQuery(name, sourceId);
    }

    private boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    private boolean matches(CharacterClass pathfinderClass) {
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
