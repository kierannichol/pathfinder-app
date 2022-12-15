import Effect from "../../v3/model/Effect";
import {Modification, ModificationSummary} from "../../v3/model/Modification";
import ModificationDatabase from "../../v3/model/ModificationDatabase";
import AbilityScores from "../AbilityScores";

const AbilityScoreDatabase = new ModificationDatabase("ability_score", AbilityScores.map(abilityScore =>
        new ModificationSummary(abilityScore.id, abilityScore.name, 0, "", [])),
    [],
    async id => {
      const abilityScore = AbilityScores.find(entry => entry.id === id);
      if (!abilityScore) {
        return undefined;
      }
      return new Modification(abilityScore.id, abilityScore.name, 0, "", [], "", "", "", "","", [
        Effect.adjustState(0, `${abilityScore.id}:bonus`, 2)
      ])
    });

export default AbilityScoreDatabase;