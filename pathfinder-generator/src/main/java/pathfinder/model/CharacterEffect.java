package pathfinder.model;

import java.util.List;
import java.util.stream.Stream;

public interface CharacterEffect {

    int level();

    record ModifyFeatureEffect(int level, String featureId, int delta) implements CharacterEffect {}
    record AddChoiceEffect(int level, CharacterChoice choice) implements CharacterEffect {}
    record GrantFeat(int level, String featId) implements CharacterEffect {}
    record GrantAbility(int level, String abilityId) implements CharacterEffect {}
    record AddChoiceOptions(int level, String choiceType, String databaseId, List<String> optionIds) implements CharacterEffect {}

    record AddNewFeat(int level, Feat feat) implements CharacterEffect {

        @Override
        public Stream<Feat> feats() {
            return Stream.of(feat);
        }
    }
    record AddNewAbility(int level, Ability ability) implements CharacterEffect {

        @Override
        public Stream<Ability> abilities() {
            return Stream.of(ability);
        }
    }

    default Stream<Ability> abilities() {
        return Stream.empty();
    }
    default Stream<Feat> feats() {
        return Stream.empty();
    }
}
