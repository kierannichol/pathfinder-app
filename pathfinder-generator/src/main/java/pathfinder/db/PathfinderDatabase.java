package pathfinder.db;

import static pathfinder.model.pathfinder.Sources.CORE;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import pathfinder.db.query.ArmorProficiencyQuery;
import pathfinder.db.query.BloodlineQuery;
import pathfinder.db.query.ClassFeatureQuery;
import pathfinder.db.query.ClassQuery;
import pathfinder.db.query.FeatQuery;
import pathfinder.db.query.ItemOptionQuery;
import pathfinder.db.query.ItemQuery;
import pathfinder.db.query.NamedEntityQuery;
import pathfinder.db.query.RaceQuery;
import pathfinder.db.query.SkillQuery;
import pathfinder.db.query.SpellQuery;
import pathfinder.db.query.WeaponProficiencyQuery;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Id;
import pathfinder.model.ItemOption;
import pathfinder.model.NamedEntity;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.Armor;
import pathfinder.model.pathfinder.ArmorProficiency;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.ItemData;
import pathfinder.model.pathfinder.Skill;
import pathfinder.model.pathfinder.Skills;
import pathfinder.model.pathfinder.Spell;
import pathfinder.model.pathfinder.WeaponType;
import pathfinder.model.pathfinder.Weapons;

@RequiredArgsConstructor
@ToString
public class PathfinderDatabase {
    private final List<Source> sources;
    private final CoreCharacterFeatureProvider coreCharacterFeatureProvider = new CoreCharacterFeatureProvider();

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

    public Stream<ComplexFeature> query(RaceQuery query) {
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
        return Stream.concat(sources.stream()
                .filter(query::matches)
                .flatMap(Source::namedEntities), coreCharacterFeatureProvider.features(CORE))
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

    public Stream<Skill> query(SkillQuery query) {
        return Skills.ALL.stream()
                .filter(query::matches);
    }

    public Stream<Spell> query(SpellQuery query) {
        return sources.stream()
                .filter(query::matches)
                .flatMap(content -> content.spells().stream())
                .filter(query::matches);
    }

    public Stream<ItemData> query(ItemQuery query) {
        return sources.stream()
                .filter(query::matches)
                .flatMap(content -> content.items().stream())
                .filter(query::matches);
    }

    public Stream<ItemOption> query(ItemOptionQuery query) {
        return sources.stream()
                .filter(query::matches)
                .flatMap(content -> content.itemOptions().stream())
                .filter(query::matches);
    }

    public Optional<CharacterClass> getClassById(Id id) {
        return sources.stream()
                .flatMap(content -> content.classes().stream())
                .filter(characterClass -> characterClass.id().equals(id))
                .findFirst();
    }
}
