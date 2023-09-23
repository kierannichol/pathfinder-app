package pathfinder.db.query;

import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public class Query {

    public static FeatQuery feats() {
        return new FeatQuery(null);
    }

    public static FeatQuery feat(String name) {
        return new FeatQuery(name);
    }

    public static ClassQuery characterClasses() {
        return new ClassQuery(null);
    }

    public static ClassQuery characterClass(String name) {
        return new ClassQuery(name);
    }

    public static ClassFeatureQuery classFeatures() {
        return new ClassFeatureQuery(null);
    }

    public static ClassFeatureQuery classFeature(String name) {
        return new ClassFeatureQuery(name);
    }

    public static RaceQuery races() {
        return new RaceQuery(null);
    }

    public static RaceQuery race(String name) {
        return new RaceQuery(name);
    }

    public static NamedEntityQuery<NamedEntity> namedEntity(String name) {
        return NamedEntityQuery.byName(name);
    }

    public static NamedEntityQuery<NamedEntity> namedEntity(Id id) {
        return NamedEntityQuery.byId(id);
    }

    public static NamedEntityQuery<NamedEntity> namedEntities() {
        return NamedEntityQuery.all();
    }

    public static <U extends NamedEntity> NamedEntityQuery<U> namedEntities(Class<U> type) {
        return NamedEntityQuery.byType(type);
    }

    public static BloodlineQuery bloodlines() {
        return new BloodlineQuery(null);
    }

    public static WeaponProficiencyQuery weapons() {
        return new WeaponProficiencyQuery();
    }

    public static ArmorProficiencyQuery armor() {
        return new ArmorProficiencyQuery();
    }

    public static SkillQuery skills() {
        return new SkillQuery(null);
    }

    public static SpellQuery spells() {
        return new SpellQuery(null);
    }

    public static SpellQuery spell(String name) {
        return new SpellQuery(name);
    }
}
