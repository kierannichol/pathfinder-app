package pathfinder.generator;

import java.util.List;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.NamedEntity;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.ItemData;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Spell;

@Component
public class CoreCharacterSource implements Source {

    @Override
    public SourceId sourceId() {
        return SourceId.NONE;
    }

    @Override
    public Stream<NamedEntity> namedEntities() {
        return Stream.empty();
    }

    @Override
    public List<Feat> feats() {
        return List.of();
    }

    @Override
    public List<ComplexFeature> races() {
        return null;
    }

    @Override
    public List<CharacterClass> classes() {
        return null;
    }

    @Override
    public List<ClassFeature> classFeatures() {
        return null;
    }

    @Override
    public List<Bloodline> bloodlines() {
        return null;
    }

    @Override
    public List<Spell> spells() {
        return null;
    }

    @Override
    public List<ItemData> items() {
        return null;
    }
}
