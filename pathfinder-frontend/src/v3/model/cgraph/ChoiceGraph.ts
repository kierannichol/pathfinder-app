import {splitArray} from "../../../util/pfutils";
import Choice, {SelectChoice, TextChoice} from "../Choice";
import DataHub from "../DataHub";
import Effect, {AddChoicesToTypeEffect} from "../Effect";
import {ChoiceNode} from "./ChoiceNode";
import {RootChoiceNode} from "./RootChoiceNode";
import {SelectChoiceAugmentationNode} from "./SelectChoiceAugmentationNode";
import {SelectChoiceNode} from "./SelectChoiceNode";
import {TextChoiceNode} from "./TextChoiceNode";

export default class ChoiceGraph {
  public static of(datahub: DataHub, ...choices: Choice[]): ChoiceGraph {
    const root = new RootChoiceNode(choices.map(toNode));
    return new ChoiceGraph(datahub, root);
  }

  constructor(private readonly datahub: DataHub, private readonly root: ChoiceNode) {
  }

  async select(id: string, value: string): Promise<ChoiceGraph> {
    return new ChoiceGraph(this.datahub,
        await this.root.unpack({[id]: value}, this.datahub) as RootChoiceNode);
  }

  async selectAll(values: {[id:string]:string}): Promise<ChoiceGraph> {
    return new ChoiceGraph(this.datahub,
        await this.root.unpack(values, this.datahub) as RootChoiceNode);
  }

  find(id: string): ChoiceNode|undefined {
    return this.root.descendant(id);
  }

  flatten(level: number): Choice[] {
    return this.root.flatten(level);
  }
}

function splitEffectsAndChoices(rawEffects: Effect[]): { choices: ChoiceNode[], effects: Effect[] } {
  const [ choices, effectsAndAugments ] = splitArray(rawEffects, effect => effect instanceof Choice);
  const [ augments, effects ] = splitArray(effectsAndAugments, effect => effect instanceof AddChoicesToTypeEffect);

  return {
    effects: effects,
    choices: [ ...(choices as Choice[]).map(toNode), ...augments.map(augment => augment as AddChoicesToTypeEffect).map((augment: AddChoicesToTypeEffect) =>
        new SelectChoiceAugmentationNode(augment.level, augment.type, augment.references)) ]
  }
}

export function toNode(choice: Choice): ChoiceNode {
  switch (choice.input) {
    case "text":
      const textChoice = choice as TextChoice;
      return new TextChoiceNode(choice.id, choice.label, choice.level, choice.type, textChoice.attributeId, textChoice.current);
    case "select":
      const selectChoice = choice as SelectChoice;
      const { choices, effects } = splitEffectsAndChoices(selectChoice.effects);
      return new SelectChoiceNode(choice.id, choice.label, choice.level, choice.type, selectChoice.options, selectChoice.current, effects, choices);
  }
  throw new Error("Unknown choice input type: " + choice.input);
}