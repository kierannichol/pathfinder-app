import {FeatureModel} from "./FeatureModel.ts";
import {ChoiceModel} from "./ChoiceModel.ts";
import {BaseDataContext, Resolvable, ResolvedValue} from "@kierannichol/formula-js";

export abstract class CharacterAtLevelModel extends BaseDataContext {
  abstract features: FeatureModel[];
  abstract choices: ChoiceModel[];
  abstract level: number;

  abstract diff(other: CharacterAtLevelModel): CharacterAtLevelModel;
  abstract get(key: string): Resolvable | undefined;
  abstract resolve(key: string): ResolvedValue | undefined;
  abstract keys(): string[];
  abstract choicesOfType(type: string): ChoiceModel[];
  abstract hasSelection(choice: ChoiceModel): boolean;
  abstract selected(choice: ChoiceModel): string;
  abstract without(key: string): CharacterAtLevelModel;
  abstract choice(path: string): ChoiceModel|undefined;
}