package pathfinder.v7.generator;

import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.Race;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.util.StreamUtils;
import pathfinder.v7.db.PathfinderDatabase;
import pathfinder.v7.db.query.Query;
import pathfinder.v7.generator.mapper.ArchetypeToFeatureMapper;
import pathfinder.v7.generator.mapper.BloodlineToFeatureMapper;
import pathfinder.v7.generator.mapper.ClassFeatureToFeatureMapper;
import pathfinder.v7.generator.mapper.ClassToFavoredClassFeatureMapper;
import pathfinder.v7.generator.mapper.ClassToFeatureMapper;
import pathfinder.v7.generator.mapper.FeatToFeatureMapper;
import pathfinder.v7.model.FeatureV7;
import pathfinder.v7.model.FeatureV7.FeatureBuilder;

@Component
@RequiredArgsConstructor
@Slf4j
public class PathfinderDatabaseFeatureProviderV7 implements FeatureProviderV7 {
    private final PathfinderDatabase database;
    private final ClassToFeatureMapper classToFeature;
    private final ClassFeatureToFeatureMapper classFeature;
    private final ClassToFavoredClassFeatureMapper favoredClass;
    private final BloodlineToFeatureMapper bloodline;
    private final ArchetypeToFeatureMapper archetype;
    private final FeatToFeatureMapper feat;

    @Override
    public Stream<FeatureV7> features(SourceId sourceId) {
        return StreamUtils.concat(List.of(
                database.query(Query.characterClasses().source(sourceId)).flatMap(characterClass -> Stream.of(
                        classToFeature.map(characterClass),
                        favoredClass.map(characterClass)
                )),
                queryClassAbilitiesAsFeatures(),
                database.query(Query.classFeatures().source(sourceId)).map(classFeature::map),
                database.query(Query.feats().source(sourceId)).flatMap(feat::flatMap),
                database.query(Query.races().source(sourceId)).map(this::raceToFeature),
                database.query(Query.bloodlines().source(sourceId)).flatMap(bloodline::flatMap),
                database.query(Query.namedEntities(Archetype.class).source(sourceId)).flatMap(archetype::flatMap)
        ));
    }

    private Stream<FeatureV7> queryClassAbilitiesAsFeatures() {
        return database.query(Query.characterClasses())
                .flatMap(characterClass -> characterClass.class_features().stream()
                        .map(classFeature -> ClassFeature.fromFeature(classFeature, characterClass.id()))
                        .map(classFeature::map));
    }

    private FeatureV7 raceToFeature(Race race) {
        FeatureBuilder builder = new FeatureBuilder(race.id())
                .setName(race.name())
                .addTag("race")
                .addTag(race.type().toLowerCase());

        return builder.build();
    }
}
