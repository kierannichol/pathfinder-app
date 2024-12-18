package pathfinder.db.query;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.Source;

public interface Query<T> {

    static FeatQuery feats() {
        return new FeatQuery(null);
    }

    static FeatQuery feat(String name) {
        return new FeatQuery(name);
    }

    static ClassQuery characterClasses() {
        return new ClassQuery(null);
    }

    static ClassQuery characterClass(String name) {
        return new ClassQuery(name);
    }

    static ClassFeatureQuery classFeatures() {
        return new ClassFeatureQuery(null);
    }

    static ClassFeatureQuery classFeature(String name) {
        return new ClassFeatureQuery(name);
    }

    static RaceQuery races() {
        return new RaceQuery(null);
    }

    static RaceQuery race(String name) {
        return new RaceQuery(name);
    }

    static NamedEntityQuery<NamedEntity> namedEntity(String name) {
        return NamedEntityQuery.byName(name);
    }

    static NamedEntityQuery<NamedEntity> namedEntity(Id id) {
        return NamedEntityQuery.byId(id);
    }

    static NamedEntityQuery<NamedEntity> namedEntities() {
        return NamedEntityQuery.all();
    }

    static <U extends NamedEntity> NamedEntityQuery<U> namedEntities(Class<U> type) {
        return NamedEntityQuery.byType(type);
    }

    static BloodlineQuery bloodlines() {
        return new BloodlineQuery(null);
    }

    static WeaponProficiencyQuery weapons() {
        return new WeaponProficiencyQuery();
    }

    static ArmorProficiencyQuery armor() {
        return new ArmorProficiencyQuery();
    }

    static SkillQuery skills() {
        return new SkillQuery(null);
    }

    static SpellQuery spells() {
        return new SpellQuery(null);
    }

    static MagicSchoolQuery magicSchools() {
        return new MagicSchoolQuery();
    }

    static SpellQuery spell(String name) {
        return new SpellQuery(name);
    }

    static ItemQuery items() {
        return new ItemQuery(null);
    }
    static ItemOptionQuery itemOptions() {
        return new ItemOptionQuery(null);
    }

    Stream<T> query(List<Source> sources, CoreCharacterFeatureProvider coreCharacterFeatureProvider);

    default <U> Query<U> map(Function<T,U> mapFn) {
        return new MappedQuery<T,U>(this, mapFn);
    }
}
