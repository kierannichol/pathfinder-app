import {splitArray} from "../../../util/pfutils";
import {CharacterStateMutator} from "../CharacterState";
import Choice, {SelectChoice} from "../Choice";
import DataHub from "../DataHub";
import Effect from "../Effect";
import Reference from "../Reference";
import {toNode} from "./ChoiceGraph";
import {ChoiceNode} from "./ChoiceNode";

export class SelectChoiceNode extends ChoiceNode {

  constructor(public readonly id: string,
              public readonly label: string,
              public readonly level: number,
              public readonly type: string,
              public readonly references: Reference[],
              public readonly current: string = '',
              public readonly effects: Effect[] = [],
              children: ChoiceNode[] = []) {
    super(children);
  }

  applyTo(mutator: CharacterStateMutator): void {
    this.children.forEach(effect => effect.applyTo(mutator));
  }

  async unpack(values: { [key: string]: string }, datahub: DataHub): Promise<ChoiceNode> {
    if (!(this.id in values)) {
      return this;
    }

    const selected = values[this.id];

    const option = datahub.options(this.references).find(option => option.id === selected);
    const optionEffects = await option?.effects() ?? [];

    const [choices, effects] = splitArray(optionEffects, effect => effect instanceof Choice);
    const children = await Promise.all(choices.map(choice => toNode(choice as Choice).unpack(values, datahub)));

    return this.copy({
      current: selected,
      effects: effects,
      children: children
    });
  }

  protected copy(overrides: Partial<SelectChoiceNode>): this {
    const clone = Object.create(this);
    Object.assign(clone, overrides);
    return clone;
  }

  addReferences(references: Reference[]): SelectChoiceNode {
    return this.copy({
      references: [...this.references, ...references]
    });
  }

  choices(level: number): Choice[] {
    if (level < this.level) return [];
    return [new SelectChoice(this.id, this.label, this.level, this.type, this.references, this.effects, this.current)];
  }
}