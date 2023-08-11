package pathfinder.v7;

import java.util.List;
import java.util.stream.Stream;
import pathfinder.model.NamedEntity;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.Race;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Spell;
import pathfinder.util.StreamUtils;

public record Source(SourceId sourceId,
                     List<CharacterClass> classes,
                     List<ClassFeature> classFeatures,
                     List<Archetype> archetypes,
                     List<Spell> spells,
                     List<Feat> feats,
                     List<Race> races,
                     List<Bloodline> bloodlines) {

    public Stream<NamedEntity> namedEntities() {
        return StreamUtils.streamLists(List.of(
                classes,
                classes.stream().flatMap(cls -> cls.class_features().stream()
                        .map(feature -> new ClassFeature(
                                feature.id(),
                                feature.name(),
                                feature.type(),
                                cls.id(),
                                feature.description(),
                                feature.prerequisites(),
                                feature.source()
                        ))).toList(),
                classFeatures,
                archetypes,
                archetypes.stream().flatMap(cls -> cls.features().stream()
                        .map(feature -> new ClassFeature(
                                feature.id(),
                                feature.name(),
                                feature.type(),
                                cls.id(),
                                feature.description(),
                                feature.prerequisites(),
                                feature.source()
                        ))).toList(),
                spells,
                feats,
                races,
                bloodlines,
                bloodlines.stream()
                        .flatMap(bl -> bl.bloodlinePowers().stream())
                        .toList()
        ));
    }
}
