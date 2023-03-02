import {ChoiceTree} from "../../core/Choice";
import Description from "../../core/Description";
import Effect from "../../core/Effect";
import Resolvable from "../../logic/Resolvable";
import AbilityScore from "../../model/character/AbilityScore";
import {Entity} from "../../v4/Entity";
import EntityDatabase from "../../v4/EntityDatabase";
import AbilityScores from "../AbilityScores";

function abilityScoreToEntity(abilityScore: AbilityScore): Entity {
  return new Entity(abilityScore.id, abilityScore.name, Resolvable.True, ['ability_score'], Description.empty(),
      [
          Effect.addNumber(`${abilityScore.id}:bonus`, 2)
          ],
      ChoiceTree.None);
}

const AbilityScoreDatabase = new EntityDatabase("ability_score",
    AbilityScores.map(abilityScoreToEntity),
    async id => {
      const abilityScore = AbilityScores.find(entry => entry.id === id);
      if (!abilityScore) {
        return undefined;
      }
      return abilityScoreToEntity(abilityScore);
    });

export default AbilityScoreDatabase;