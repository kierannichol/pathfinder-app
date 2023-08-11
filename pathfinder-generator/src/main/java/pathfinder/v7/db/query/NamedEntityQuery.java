package pathfinder.v7.db.query;

import java.util.Objects;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.pathfinder.ClassSpecific;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.v7.Source;

public class NamedEntityQuery<T extends NamedEntity> implements SourceSpecificQuery<NamedEntityQuery<T>>, ClassSpecificQuery<NamedEntityQuery<T>> {
    private final String name;
    private final SourceId sourceId;
    private final Id classId;
    private final Class<T> ofType;

    public static NamedEntityQuery<NamedEntity> all() {
        return new NamedEntityQuery<>(null, null, null, NamedEntity.class);
    }

    public static NamedEntityQuery<NamedEntity> byName(String name) {
        return new NamedEntityQuery<>(name, null, null, NamedEntity.class);
    }

    public static <U extends NamedEntity> NamedEntityQuery<U> byType(Class<U> type) {
        return new NamedEntityQuery<>(null, null, null, type);
    }

    @Override
    public NamedEntityQuery<T> classId(Id classId) {
        return new NamedEntityQuery<>(name, sourceId, classId, ofType);
    }

    @Override
    public NamedEntityQuery<T> source(SourceId sourceId) {
        return new NamedEntityQuery<>(name, sourceId, classId, ofType);
    }

    public <U extends NamedEntity> NamedEntityQuery<U> type(Class<U> type) {
        return new NamedEntityQuery<>(name, sourceId, classId, type);
    }

    public boolean matches(Source source) {
        return this.sourceId == null || Objects.equals(source.sourceId(), this.sourceId);
    }

    public boolean matches(NamedEntity entity) {
        if (name != null && !this.name.equalsIgnoreCase(entity.name())) {
            return false;
        }

        if (classId != null && !(entity instanceof ClassSpecific classSpecific && Objects.equals(classSpecific.classId(), classId))) {
            return false;
        }

        return ofType.isInstance(entity);
    }

    private NamedEntityQuery(String name, SourceId sourceId, Id classId, Class<T> type) {
        this.name = name;
        this.sourceId = sourceId;
        this.classId = classId;
        this.ofType = type;
    }
}
