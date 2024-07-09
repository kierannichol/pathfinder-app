package pathfinder.generator.mapper;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.model.Effect;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.FeatureModification;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.IdAndLevel;
import pathfinder.util.StreamUtils;

@Component
@RequiredArgsConstructor
@Slf4j
public class ArchetypeMapper {
    private static final Pattern INITIAL_LEVEL = Pattern.compile("^At (\\d+)(?:th|st|nd|rd)? level");
    private static final Pattern FOLLOWING_LEVELS = Pattern.compile("This bonus increases by (\\d+) for every (\\d+) .*? levels beyond (\\d+)(?:th|st|nd|rd)?(?: \\(to a maximum of +(\\d+) at (\\d+)(?:th|st|nd|rd)? level\\))?");

    private final ClassFeatureMapper featureMapper;
    private final PathfinderDatabase database;

    public Stream<Feature> flatMap(Archetype archetype) {
        return StreamUtils.concat(List.of(
                mapArchetype(archetype),
                flatMapArchetypeFeatures(archetype)
        ));
    }

    private Stream<Feature> mapArchetype(Archetype archetype) {
        List<Feature> features = new ArrayList<>();

        Id baseClassId = archetype.id().withoutOption();
        var builder = new FeatureBuilder(archetype.id())
                .setName(archetype.name())
                .setDescription(archetype.description())
                .addTag("archetype")
                .addTag(archetype.id().key);

        Set<Id> replacesIds = new HashSet<>();

        var archetypeStack = new StackBuilder();
        var archetypeClassModification = FeatureModification.builder(baseClassId);

        var baseClass = database.getClassById(baseClassId)
                .orElseThrow();

        archetype.modifications().forEach(modification -> {
            Set<IdAndLevel> toAddSet = defaultIfNull(modification.add(), Set.of());
            Set<IdAndLevel> toRemoveSet = ArchetypeMapper.<Set<IdAndLevel>>defaultIfNull(modification.remove(), Set.of())
                    .stream().flatMap(toRemove -> {
                        if (toRemove.level().isPresent()) {
                            return Stream.of(toRemove);
                        }

                        List<IdAndLevel> found = new ArrayList<>();

                        baseClass.levels().forEach(level -> {
                            if (level.classFeatureIds().contains(toRemove.id())) {
                                found.add(IdAndLevel.of(toRemove.id(), level.level()));
                            }
                        });

                        return found.stream();
                    }).collect(Collectors.toSet());

            toAddSet.forEach(toAdd -> {
                    Optional<pathfinder.model.pathfinder.Feature> maybeFeatureToAdd = Stream.concat(
                            archetype.features().stream(),
                            baseClass.class_features().stream())
                            .filter(feature -> feature.id().equals(toAdd.id()))
                            .findFirst();

                    var levels = new ArrayList<Integer>();

                    if (toAdd.level().isPresent()) {
                        levels.add(toAdd.level().getAsInt());
                    }

                    maybeFeatureToAdd.ifPresent(featureToAdd -> {
                        if (levels.isEmpty()) {
                            levels.addAll(tryParseLevelsFromDescription(featureToAdd.description().text()));
                        }

                        if (levels.isEmpty()) {
                            for (var classLevel : baseClass.levels()) {
                                for (IdAndLevel toRemove : toRemoveSet) {
                                    boolean levelMatches =
                                            toRemove.level().isEmpty() || toRemove.level().getAsInt() == classLevel.level();
                                    boolean idMatches = classLevel.classFeatureIds().contains(toRemove.id());

                                    if (levelMatches && idMatches) {
                                        levels.add(classLevel.level());
                                    }
                                }
                            }
                        }
                    });

                levels.forEach(level -> archetypeClassModification.stack(level).addsFeature(toAdd.id()));
            });

            toRemoveSet.forEach(idAndLevel ->
                    idAndLevel.level().ifPresent(level -> archetypeClassModification.stack(level).removesFeature(idAndLevel.id())));
            replacesIds.addAll(toRemoveSet.stream().map(IdAndLevel::id).toList());
        });

        builder.setMaxStacks(1);

        replacesIds.forEach(id -> archetypeStack.addEffect(Effect.setNumber("modifies:" + id, 1)));
        String enabledFormula = replacesIds.stream().map(id -> "!@modifies:" + id).collect(Collectors.joining(" AND "));

        replacesIds.forEach(id -> {
            try {
                features.add(Feature.builder("modifies:" + id)
                        .setName("Archetype that modifies " + database.query(Query.namedEntity(id)).findFirst().map(
                                        NamedEntity::name)
                                .orElseThrow(() -> new NoSuchElementException("[" + archetype.id() + "] Named Entity not found: " + id)))
                        .build());
            } catch (NoSuchElementException e) {
                log.warn(e.getMessage());
            }
        });
        archetypeStack.addFeatureModification(archetypeClassModification.build());

        builder.addFixedStack(archetypeStack.build());
        builder.setEnabledCondition(enabledFormula);

        features.add(builder.build());
        return features.stream();
    }



    private Stream<Feature> flatMapArchetypeFeatures(Archetype archetype) {
        return archetype.features().stream()
                .map(feature -> ClassFeature.fromFeature(feature, archetype.id()))
                .flatMap(featureMapper::map);
    }

    private List<Integer> tryParseLevelsFromDescription(String description) {
        List<Integer> levels = new ArrayList<>();
        Matcher initialLevelMatch = INITIAL_LEVEL.matcher(description);
        if (!initialLevelMatch.find()) {
            return levels;
        }

        levels.add(Integer.parseInt(initialLevelMatch.group(1)));

        Matcher followingLevelsMatch = FOLLOWING_LEVELS.matcher(description);
        if (followingLevelsMatch.find()) {
            int everyNLevel = Integer.parseInt(followingLevelsMatch.group(2));
            int beyondLevel = Integer.parseInt(followingLevelsMatch.group(3));
            int maximumLevel = followingLevelsMatch.groupCount() > 5
                    ? Integer.parseInt(followingLevelsMatch.group(5))
                    : 20;

            for (int level = beyondLevel + everyNLevel; level <= maximumLevel; level += everyNLevel) {
                levels.add(level);
            }
        }

        return levels;
    }

    private static <T> T defaultIfNull(T t, T orThis) {
        return t == null ? orThis : t;
    }
}
