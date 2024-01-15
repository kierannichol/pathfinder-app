package pathfinder.generator;

import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.generator.mapper.ArchetypeMapper;
import pathfinder.generator.mapper.BloodlineMapper;
import pathfinder.generator.mapper.ClassFeatureMapper;
import pathfinder.generator.mapper.ClassMapper;
import pathfinder.generator.mapper.ClassModificationFeatureMapper;
import pathfinder.generator.mapper.ComplexFeatureMapper;
import pathfinder.generator.mapper.FavoredClassMapper;
import pathfinder.generator.mapper.FeatMapper;
import pathfinder.generator.mapper.RaceMapper;
import pathfinder.generator.mapper.SpellMapper;
import pathfinder.model.Feature;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.ClassModificationFeature;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.util.StreamUtils;

@Component
@RequiredArgsConstructor
@Slf4j
public class PathfinderDatabaseFeatureProvider implements FeatureProvider {
    private final PathfinderDatabase database;
    private final ClassMapper classToFeature;
    private final ClassFeatureMapper classFeature;
    private final FavoredClassMapper favoredClass;
    private final BloodlineMapper bloodline;
    private final ArchetypeMapper archetype;
    private final FeatMapper feat;
    private final SpellMapper spell;
    private final RaceMapper race;
    private final ClassModificationFeatureMapper classModificationFeature;
    private final ComplexFeatureMapper complexFeature;

    @Override
    public Stream<Feature> features(SourceId sourceId) {
        return StreamUtils.concat(List.of(
                database.query(Query.characterClasses().source(sourceId)).flatMap(characterClass -> Stream.of(
                        classToFeature.map(characterClass),
                        favoredClass.map(characterClass)
                )),
                queryClassAbilitiesAsFeatures(sourceId),
                database.query(Query.classFeatures().source(sourceId)).map(classFeature::map),
                database.query(Query.feats().source(sourceId)).flatMap(feat::flatMap),
                database.query(Query.spells().source(sourceId)).map(spell::map),
                database.query(Query.races().source(sourceId)).flatMap(race::flatMap),
                database.query(Query.bloodlines().source(sourceId)).flatMap(bloodline::flatMap),
                database.query(Query.namedEntities(Archetype.class).source(sourceId)).flatMap(archetype::flatMap),
                database.query(Query.namedEntities(ClassModificationFeature.class).source(sourceId)).flatMap(classModificationFeature::flatMap),
                database.query(Query.namedEntities(ComplexFeature.class).source(sourceId)).flatMap(complexFeature::flatMap)
        ));
    }

    private Stream<Feature> queryClassAbilitiesAsFeatures(SourceId sourceId) {
        return database.query(Query.characterClasses().source(sourceId))
                .flatMap(characterClass -> characterClass.class_features().stream()
                        .map(classFeature -> ClassFeature.fromFeature(classFeature, characterClass.id()))
                        .map(classFeature::map));
    }
}
