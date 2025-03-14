package pathfinder.db.query;

import static pathfinder.model.pathfinder.Sources.CORE;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.ClassSpecific;
import pathfinder.model.pathfinder.SourceId;

public class NamedEntityQuery<T extends NamedEntity> implements Query<T>, SourceSpecificQuery<NamedEntityQuery<T>>, ClassSpecificQuery<NamedEntityQuery<T>> {
    private final Id id;
    private final String name;
    private final Collection<SourceId> sourceIds;
    private final Id classId;
    private final Class<T> ofType;

    public static NamedEntityQuery<NamedEntity> all() {
        return new NamedEntityQuery<>(null, null, null, null, NamedEntity.class);
    }

    public static NamedEntityQuery<NamedEntity> byName(String name) {
        return new NamedEntityQuery<>(null, name, null, null, NamedEntity.class);
    }

    public static NamedEntityQuery<NamedEntity> byId(Id id) {
        return new NamedEntityQuery<>(id, null, null, null, NamedEntity.class);
    }

    public static <U extends NamedEntity> NamedEntityQuery<U> byType(Class<U> type) {
        return new NamedEntityQuery<>(null, null, null, null, type);
    }

    @Override
    @SuppressWarnings("unchecked")
    public Stream<T> query(List<Source> sources, CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return Stream.concat(sources.stream()
                        .filter(this::matches)
                        .flatMap(Source::namedEntities), coreCharacterFeatureProvider.features(CORE))
                .filter(this::matches)
                .map(entity -> (T) entity);
    }

    @Override
    public NamedEntityQuery<T> classId(Id classId) {
        return new NamedEntityQuery<>(id, name, sourceIds, classId, ofType);
    }

    @Override
    public NamedEntityQuery<T> sources(Collection<SourceId> sourceIds) {
        return new NamedEntityQuery<>(id, name, sourceIds, classId, ofType);
    }

    public <U extends NamedEntity> NamedEntityQuery<U> type(Class<U> type) {
        return new NamedEntityQuery<>(id, name, sourceIds, classId, type);
    }

    public boolean matches(Source source) {
        return this.sourceIds == null || this.sourceIds.contains(source.sourceId());
    }

    public boolean matches(NamedEntity entity) {
        if (id != null && !this.id.equals(entity.id())) {
            return false;
        }

        if (name != null && !this.name.equalsIgnoreCase(entity.name())) {
            return false;
        }

        if (classId != null && !(entity instanceof ClassSpecific classSpecific && Objects.equals(classSpecific.classId(), classId))) {
            return false;
        }

        return ofType.isInstance(entity);
    }

    private NamedEntityQuery(Id id, String name, Collection<SourceId> sourceIds, Id classId, Class<T> type) {
        this.id = id;
        this.name = name;
        this.sourceIds = sourceIds;
        this.classId = classId;
        this.ofType = type;
    }
}
