package pathfinder.db.query;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Id;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.SourceId;

public class BloodlineQuery implements Query<Bloodline>, SourceSpecificQuery<BloodlineQuery>, ClassSpecificQuery<BloodlineQuery> {
    private final String name;
    private Collection<SourceId> sourceId;
    private Id classId;

    @Override
    public Stream<Bloodline> query(List<Source> sources, CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return sources.stream()
                .filter(this::matches)
                .flatMap(content -> content.bloodlines().stream())
                .filter(this::matches);
    }

    public BloodlineQuery sources(Collection<SourceId> sourceId) {
        return new BloodlineQuery(name, sourceId, classId);
    }

    public BloodlineQuery classId(Id classId) {
        return new BloodlineQuery(name, sourceId, classId);
    }

    private boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    private boolean matches(Bloodline feature) {
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
