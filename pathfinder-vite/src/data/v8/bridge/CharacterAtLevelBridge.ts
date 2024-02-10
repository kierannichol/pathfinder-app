import {CharacterAtLevelModel} from "../../../view/model/CharacterAtLevelModel.ts";
import {ChoiceModel} from "../../../view/model/ChoiceModel.ts";
import {FeatureModel} from "../../../view/model/FeatureModel.ts";
import {Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import CharacterAtLevel from "../CharacterAtLevel.ts";
import {ChoiceBridge} from "./ChoiceBridge.ts";
import {FeatureBridge} from "./FeatureBridge.ts";

export class CharacterAtLevelBridge extends CharacterAtLevelModel {

  constructor(private readonly data: CharacterAtLevel) {
    super();
  }

  get choices(): ChoiceModel[] {
    return this.data.choices.map(ChoiceBridge.from);
  }

  get features(): FeatureModel[] {
    return this.data.features.map(f => new FeatureBridge(f));
  }

  get level(): number {
    return this.data.level;
  }

  choice(path: string): ChoiceModel | undefined {
    const choice = this.data.choice(path);
    return choice !== undefined ? ChoiceBridge.from(choice) : undefined;
  }

  choicesOfType(type: string): ChoiceModel[] {
    return this.data.choicesOfType(type).map(ChoiceBridge.from);
  }

  diff(other: CharacterAtLevelModel): CharacterAtLevelModel {
    const otherBridge = other as CharacterAtLevelBridge;
    return new CharacterAtLevelBridge(this.data.diff(otherBridge.data));
  }

  get(key: string): Resolvable | undefined {
    return this.data.get(key);
  }

  resolve(key: string): ResolvedValue | undefined {
    return this.data.resolve(key);
  }

  hasSelection(choice: ChoiceModel): boolean {
    return this.data.hasSelection(choice.path);
  }

  keys(): string[] {
    return this.data.keys();
  }

  selected(choice: ChoiceModel): string {
    return this.data.selected(choice.path);
  }

  without(key: string): CharacterAtLevelModel {
    return new CharacterAtLevelBridge(this.data.without(key));
  }

}