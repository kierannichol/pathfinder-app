package pathfinder.model;

import java.util.List;
import java.util.stream.Stream;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Spell;

public interface Source {
    SourceId sourceId();
    Stream<NamedEntity> namedEntities();

    List<Feat> feats();
    List<ComplexFeature> races();
    List<CharacterClass> classes();
    List<ClassFeature> classFeatures();
    List<Bloodline> bloodlines();
    List<Spell> spells();
}

