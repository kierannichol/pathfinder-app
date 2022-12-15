import {CharacterStateMutator} from "../CharacterState";
import Choice, {TextChoice} from "../Choice";
import DataHub from "../DataHub";
import {ChoiceNode} from "./ChoiceNode";

export class TextChoiceNode extends ChoiceNode {

  constructor(public readonly id: string,
              public readonly label: string,
              public readonly level: number,
              public readonly type: string,
              public readonly attribute: string,
              public readonly current: string = '') {
    super([]);
  }

  applyTo(mutator: CharacterStateMutator): void {
    mutator.set(this.attribute, this.current);
  }

  async unpack(values: { [key: string]: string }, datahub: DataHub): Promise<ChoiceNode> {
    return (this.id in values)
        ? this.copy({current: values[this.id]})
        : this;
  }

  protected copy(overrides: Partial<TextChoiceNode>): this {
    const clone = Object.create(this);
    Object.assign(clone, overrides);
    return clone;
  }

  choices(level: number): Choice[] {
    if (level < this.level) return [];
    return [new TextChoice(this.id, this.label, this.level, this.type, this.attribute, this.current)];
  }
}