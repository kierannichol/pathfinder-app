package pathfinder.model;

import java.util.List;
import java.util.stream.Stream;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.ClassModificationFeature;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.ItemData;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Spell;
import pathfinder.util.StreamUtils;

public record BasicSource(SourceId sourceId,
                          List<CharacterClass> classes,
                          List<ClassFeature> classFeatures,
                          List<Archetype> archetypes,
                          List<Spell> spells,
                          List<Feat> feats,
                          List<ComplexFeature> races,
                          List<Bloodline> bloodlines,
                          List<ItemData> items,
                          List<ClassModificationFeature> classModificationFeatures,
                          List<ComplexFeature> complexFeatures) implements Source {

    public Stream<NamedEntity> namedEntities() {
        return StreamUtils.streamLists(List.of(
                classes,
                classes.stream().flatMap(cls -> cls.class_features().stream()
                        .map(feature -> new ClassFeature(
                                feature.id(),
                                feature.name(),
                                feature.label(),
                                feature.type(),
                                cls.id(),
                                feature.description(),
                                feature.prerequisites(),
                                feature.effects(),
                                feature.stacks(),
                                feature.source()
                        ))).toList(),
                classFeatures,
                archetypes,
                archetypes.stream().flatMap(cls -> cls.features().stream()
                        .map(feature -> new ClassFeature(
                                feature.id(),
                                feature.name(),
                                feature.label(),
                                feature.type(),
                                cls.id(),
                                feature.description(),
                                feature.prerequisites(),
                                feature.effects(),
                                feature.stacks(),
                                feature.source()
                        ))).toList(),
                spells,
                feats,
                races,
                bloodlines,
                bloodlines.stream()
                        .flatMap(bl -> bl.bloodlinePowers().stream())
                        .toList(),
                classModificationFeatures,
                classModificationFeatures.stream().flatMap(cls -> cls.features().stream()
                        .map(feature -> new ClassFeature(
                                feature.id(),
                                feature.name(),
                                feature.label(),
                                feature.type(),
                                cls.id(),
                                feature.description(),
                                feature.prerequisites(),
                                feature.effects(),
                                feature.stacks(),
                                feature.source()
                        ))).toList(),
                complexFeatures,
                complexFeatures.stream().flatMap(cls -> cls.features().stream()
                        .map(feature -> new ClassFeature(
                                feature.id(),
                                feature.name(),
                                feature.label(),
                                feature.type(),
                                cls.id(),
                                feature.description(),
                                feature.prerequisites(),
                                feature.effects(),
                                feature.stacks(),
                                feature.source()
                        ))).toList()
        ));
    }
}
