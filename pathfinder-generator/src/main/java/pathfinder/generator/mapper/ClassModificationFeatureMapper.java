package pathfinder.generator.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.NamedEntityQuery;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.FeatureModification;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.ClassModificationFeature;
import pathfinder.model.pathfinder.IdAndLevel;
import pathfinder.util.StreamUtils;

@Component
@RequiredArgsConstructor
@Slf4j
public class ClassModificationFeatureMapper {
    private final ClassFeatureMapper featureMapper;
    private final PathfinderDatabase database;

    public Stream<Feature> flatMap(ClassModificationFeature classModificationFeature) {
        return StreamUtils.concat(List.of(
                mapModificationFeature(classModificationFeature),
                flatMapClassModificationFeatures(classModificationFeature)
        ));
    }

    private Stream<Feature> mapModificationFeature(ClassModificationFeature classModificationFeature) {
        List<Feature> features = new ArrayList<>();

        var builder = new FeatureBuilder(classModificationFeature.id())
                .setName(classModificationFeature.name())
                .setDescription(classModificationFeature.description())
                .addTag(classModificationFeature.id().type);

        var featureStack = new StackBuilder();
        var featureModification = FeatureModification.builder(classModificationFeature.targetId());

        var baseClass = database.getClassById(classModificationFeature.targetId())
                .orElseThrow();

        classModificationFeature.modifications().forEach(modification -> {
            Set<IdAndLevel> toAddSet = defaultIfNull(modification.add(), Set.of());
            Set<IdAndLevel> toRemoveSet = defaultIfNull(modification.remove(), Set.of());

            toAddSet.forEach(toAdd -> {
//                    Stream.concat(
//
//                            classModificationFeature.features().stream(),
//                            baseClass.class_features().stream())
//                            .filter(feature -> feature.id().equals(toAdd.id()))
//                            .findFirst()
//                            .orElseThrow(() -> new NoSuchElementException("Feature not found: " + toAdd.id()));

                database.query(NamedEntityQuery.byId(toAdd.id())).findAny()
                        .orElseThrow(() -> new NoSuchElementException("Feature not found: " + toAdd.id()));

                    var levels = new ArrayList<Integer>();

                    if (toAdd.level().isPresent()) {
                        levels.add(toAdd.level().getAsInt());
                    }

                    levels.forEach(level -> featureModification.stack(level).addsFeature(toAdd.id()));
            });

            toRemoveSet.forEach(idAndLevel ->
                    idAndLevel.level().ifPresent(level -> featureModification.stack(level).removesFeature(idAndLevel.id())));
        });
        featureStack.addFeatureModification(featureModification.build());

        builder.setMaxStacks(1);

        builder.addFixedStack(featureStack.build());

        features.add(builder.build());
        return features.stream();
    }

    private Stream<Feature> flatMapClassModificationFeatures(ClassModificationFeature classModificationFeature) {
        return classModificationFeature.features().stream()
                .map(feature -> ClassFeature.fromFeature(feature, classModificationFeature.id()))
                .flatMap(featureMapper::map);
    }

    private static <T> T defaultIfNull(T t, T orThis) {
        return t == null ? orThis : t;
    }
}
