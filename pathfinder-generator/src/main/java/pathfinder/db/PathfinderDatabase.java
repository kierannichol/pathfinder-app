package pathfinder.db;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import pathfinder.db.query.Query;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Id;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.SourceId;

@RequiredArgsConstructor
@ToString
public class PathfinderDatabase {
    private final List<Source> sources;
    private final CoreCharacterFeatureProvider coreCharacterFeatureProvider = new CoreCharacterFeatureProvider(this);

    public <T> Stream<T> query(Query<T> query) {
        return query.query(sources, coreCharacterFeatureProvider);
    }

    public Optional<Feat> getFeatById(Id featId) {
        return sources.stream()
                .flatMap(content -> content.feats().stream())
                .filter(feat -> feat.id().equals(featId))
                .findFirst();
    }

    public Optional<ClassFeature> getClassFeatureById(Id featureId) {
        return sources.stream()
                .flatMap(content -> content.classFeatures().stream())
                .filter(feature -> feature.id().equals(featureId))
                .findFirst()
                .or(() -> sources.stream()
                        .flatMap(content -> content.classes().stream())
                        .flatMap(characterClass -> characterClass.class_features().stream()
                                .filter(feature -> feature.id().equals(featureId))
                                .findFirst()
                                .map(feature -> ClassFeature.fromFeature(feature, characterClass.id()))
                                .stream())
                        .findFirst());
    }

    public Optional<CharacterClass> getClassById(Id id) {
        return sources.stream()
                .flatMap(content -> content.classes().stream())
                .filter(characterClass -> characterClass.id().equals(id))
                .findFirst();
    }

    public List<SourceId> sources() {
        return this.sources.stream()
                .map(Source::sourceId)
                .distinct()
                .sorted(Comparator.comparing(SourceId::id))
                .collect(Collectors.toCollection(ArrayList::new));
    }
}
