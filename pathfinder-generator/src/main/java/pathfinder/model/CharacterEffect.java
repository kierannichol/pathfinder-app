package pathfinder.model;

import java.util.stream.Stream;

public interface CharacterEffect {

    record ModifyFeatureEffect(String featureId, int delta) implements CharacterEffect {}
    record AddChoiceEffect(CharacterChoice choice) implements CharacterEffect {}
    record GrantFeat(String featId) implements CharacterEffect {}
    record GrantAbility(String abilityId) implements CharacterEffect {}
    record AddNewFeat(Feat feat) implements CharacterEffect {

        @Override
        public Stream<Feat> feats() {
            return Stream.of(feat);
        }
    }
    record AddNewAbility(Ability ability) implements CharacterEffect {

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
