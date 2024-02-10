import {CharacterAtLevelModel} from "./CharacterAtLevelModel.ts";
import Description from "../../data/Description.ts";
import {Formula} from "@kierannichol/formula-js";

export abstract class FeatureModel {
  abstract key: string;
  abstract tags: string[];
  abstract enabledFormula: string;
  abstract maxStacks: number|null;
  abstract description: Description;
  abstract label: string | undefined;
  abstract name: string;

  isEnabled(characterAtLevel: CharacterAtLevelModel): boolean {
    return Formula.parse(this.enabledFormula).resolve(characterAtLevel)?.asBoolean()
        ?? false;
  }
}

export abstract class FeatureSummaryModel {
  abstract key: string;
  abstract name: string;
  abstract enabledFormula: string;
  abstract maxStacks: number|null;
  abstract tags: string[];

  isEnabled(characterAtLevel: CharacterAtLevelModel): boolean {
    return Formula.parse(this.enabledFormula).resolve(characterAtLevel)?.asBoolean()
        ?? false;
  }
}