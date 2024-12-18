package pathfinder.db.modify;

import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import pathfinder.app.SelfExecuting;
import pathfinder.db.AbstractLocalPathfinderDatabaseModifier;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.model.FeatureSelectByTagChoice;
import pathfinder.model.FeatureSelectSortBy;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.Feature;

@Slf4j
@RequiredArgsConstructor
@SelfExecuting
public class DecorateClassSpellFeaturesModifier extends AbstractLocalPathfinderDatabaseModifier {
    private final PathfinderDatabase database;

    @Override
    protected void modify() {
        database.query(Query.characterClasses())
                .forEach(this::modifyCharacterClass);
    }

    private void modifyCharacterClass(CharacterClass characterClass) {
        String classKey = characterClass.id().key;

        var modifiedCharacter = CharacterClass.builder(characterClass);

        String spellLimitFormula = tryGetSpellsPerDayFormula(characterClass, 0)
                .orElse(null);

        modifiedCharacter.modifyClassFeatureIf(
                classFeature -> classFeature.id().key.contains("cantrip"),
                classFeature -> classFeature.setRepeatingStack(new StackBuilder()
                        .addChoice(FeatureSelectByTagChoice.builder("cantrip", "Cantrip")
                                .tag("spell")
                                .tag("spell0")
                                .optionTag(classKey + "0+spell")
                                .sortBy(FeatureSelectSortBy.NAME)
                                .repeating(spellLimitFormula)
                                .build())
                        .build()));

        modifiedCharacter.modifyClassFeatureIf(
                classFeature -> classFeature.id().key.contains("orison"),
                classFeature -> classFeature.setRepeatingStack(new StackBuilder()
                        .addChoice(FeatureSelectByTagChoice.builder("orison", "Orison")
                                .tag("spell")
                                .tag("spell0")
                                .optionTag(classKey + "0+spell")
                                .sortBy(FeatureSelectSortBy.NAME)
                                .repeating(spellLimitFormula)
                                .build())
                        .build()));

        save("class/%s.yml".formatted(characterClass.id().key), modifiedCharacter.build());
    }

    private Optional<String> tryGetSpellsPerDayFormula(CharacterClass characterClass, int level) {
        return tryGetSpellCastingFeature(characterClass)
                .flatMap(feature -> {
                    for (String effect : feature.effects()) {
                        var parts = effect.split(" ");
                        if (parts[1].contains("level_%d_spells_per_day".formatted(level))) {
                            return Optional.of(parts[2]);
                        }
                    }
                    return Optional.empty();
                });
    }

    private Optional<Feature> tryGetSpellCastingFeature(CharacterClass characterClass) {
        return characterClass.class_features().stream()
                .filter(feature -> feature.id().key.equals("spellcasting"))
                .findFirst();
    }

    public static void main(String[] args) {
        SpringApplication.run(DecorateClassSpellFeaturesModifier.class, args);
    }
}
