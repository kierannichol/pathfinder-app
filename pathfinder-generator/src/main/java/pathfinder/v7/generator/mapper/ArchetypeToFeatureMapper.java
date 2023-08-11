package pathfinder.v7.generator.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.Feature;
import pathfinder.util.StreamUtils;
import pathfinder.v7.db.PathfinderDatabase;
import pathfinder.v7.model.FeatureV7;
import pathfinder.v7.model.FeatureV7.FeatureBuilder;
import pathfinder.v7.model.StackBuilder;

@Component
@RequiredArgsConstructor
@Slf4j
public class ArchetypeToFeatureMapper {
    private static final Pattern INITIAL_LEVEL = Pattern.compile("^At (\\d+)(?:th|st|nd|rd)? level");
    private static final Pattern FOLLOWING_LEVELS = Pattern.compile("This bonus increases by (\\d+) for every (\\d+) .*? levels beyond (\\d+)(?:th|st|nd|rd)?(?: \\(to a maximum of +(\\d+) at (\\d+)(?:th|st|nd|rd)? level\\))?");

    private final FeatureModelToFeatureMapper featureMapper;
    private final PathfinderDatabase database;

    public Stream<FeatureV7> flatMap(Archetype archetype) {
        return StreamUtils.concat(List.of(
                mapArchetype(archetype),
                flatMapArchetypeFeatures(archetype)
        ));
    }

    private Stream<FeatureV7> mapArchetype(Archetype archetype) {
        Id baseClassId = archetype.id().withoutOption();
        var builder = new FeatureBuilder(archetype.id())
                .setName(archetype.name())
                .setDescription(archetype.description())
                .addTag("archetype")
                .addTag(archetype.id().key);

        var archetypeStack = new StackBuilder();

        var baseClass = database.getClassById(baseClassId)
                .orElseThrow();

        archetype.modifications().forEach(modification -> {
            Feature featureToAdd = archetype.features().stream()
                    .filter(feature -> feature.id().equals(modification.add()))
                    .findFirst()
                    .orElseThrow();

            var levels = new ArrayList<>(tryParseLevelsFromDescription(featureToAdd.description().text()));
            if (levels.isEmpty()) {
                baseClass.levels().forEach(baseClassLevel -> {
                    if (baseClassLevel.classFeatureIds().contains(modification.remove())) {
                        levels.add(baseClassLevel.level());
                    }
                });
            }

            archetypeStack.removeLink(modification.remove());
            levels.forEach(level -> archetypeStack.addLink(modification.add(), "@%s>=%d".formatted(baseClassId, level)));
        });

        builder.setMaxStacks(1);
        builder.addFixedStack(archetypeStack.build());

        return Stream.of(builder.build());
    }
    private Stream<FeatureV7> flatMapArchetypeFeatures(Archetype archetype) {
        return archetype.features().stream().map(featureMapper::map);
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
}
