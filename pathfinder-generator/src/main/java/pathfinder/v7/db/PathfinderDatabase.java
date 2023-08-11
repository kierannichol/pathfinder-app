package pathfinder.v7.db;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.pathfinder.Armor;
import pathfinder.model.pathfinder.ArmorProficiency;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.Race;
import pathfinder.model.pathfinder.WeaponType;
import pathfinder.model.pathfinder.Weapons;
import pathfinder.v7.Source;
import pathfinder.v7.db.query.ArmorProficiencyQuery;
import pathfinder.v7.db.query.BloodlineQuery;
import pathfinder.v7.db.query.ClassFeatureQuery;
import pathfinder.v7.db.query.ClassQuery;
import pathfinder.v7.db.query.FeatQuery;
import pathfinder.v7.db.query.NamedEntityQuery;
import pathfinder.v7.db.query.RaceQuery;
import pathfinder.v7.db.query.WeaponProficiencyQuery;

@RequiredArgsConstructor
@ToString
public class PathfinderDatabase {
    private final List<Source> sources;

    public Stream<Feat> query(FeatQuery query) {
        return sources.stream()
                .filter(query::matches)
                .flatMap(content -> content.feats().stream())
                .filter(query::matches);
    }

    public Optional<Feat> getFeatById(Id featId) {
        return sources.stream()
                .flatMap(content -> content.feats().stream())
                .filter(feat -> feat.id().equals(featId))
                .findFirst();
    }

    public Stream<Race> query(RaceQuery query) {
        return sources.stream()
                .filter(query::matches)
                .flatMap(content -> content.races().stream())
                .filter(query::matches);
    }

    public Stream<CharacterClass> query(ClassQuery query) {
        return sources.stream()
                .filter(query::matches)
                .flatMap(content -> content.classes().stream())
                .filter(query::matches);
    }

    public Stream<ClassFeature> query(ClassFeatureQuery query) {
        return sources.stream()
                .filter(query::matches)
                .flatMap(content -> content.classFeatures().stream())
                .filter(query::matches);
    }

    @SuppressWarnings("unchecked")
    public <T extends NamedEntity> Stream<T> query(NamedEntityQuery<T> query) {
        return sources.stream()
                .filter(query::matches)
                .flatMap(Source::namedEntities)
                .filter(query::matches)
                .map(entity -> (T) entity);
    }

    public Stream<Bloodline> query(BloodlineQuery query) {
        return sources.stream()
                .filter(query::matches)
                .flatMap(content -> content.bloodlines().stream())
                .filter(query::matches);
    }

    public Stream<WeaponType> query(WeaponProficiencyQuery query) {
        return Weapons.ALL_WEAPONS.stream()
                .filter(query::matches);
    }

    public Stream<ArmorProficiency> query(ArmorProficiencyQuery query) {
        return Armor.PROFICIENCIES.stream()
                .filter(query::matches);
    }

    public Optional<CharacterClass> getClassById(Id id) {
        return sources.stream()
                .flatMap(content -> content.classes().stream())
                .filter(characterClass -> characterClass.id().equals(id))
                .findFirst();
    }
}
