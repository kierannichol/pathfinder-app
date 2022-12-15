import {CharacterStateMutator} from "../CharacterState";
import Choice from "../Choice";
import DataHub from "../DataHub";
import Effect from "../Effect";
import Reference from "../Reference";
import {ChoiceNode} from "./ChoiceNode";
import {SelectChoiceNode} from "./SelectChoiceNode";

export class SelectChoiceAugmentationNode extends ChoiceNode {
  public readonly id: string = '';

  constructor(public readonly level: number,
              public readonly type: string,
              public readonly references: Reference[],
              public readonly current: string = '',
              public readonly effects: Effect[] = [],
              children: ChoiceNode[] = []) {
    super(children);
  }

  augment(choice: ChoiceNode): ChoiceNode {
    if (!(choice instanceof SelectChoiceNode)) {
      return choice;
    }

    return choice.addReferences(this.references)
  }

  applyTo(mutator: CharacterStateMutator): void {
    this.children.forEach(effect => effect.applyTo(mutator));
  }

  async unpack(values: { [key: string]: string }, datahub: DataHub): Promise<ChoiceNode> {
    return this;
  }

  protected copy(overrides: Partial<SelectChoiceAugmentationNode>): this {
    const clone = Object.create(this);
    Object.assign(clone, overrides);
    return clone;
  }

  choices(level: number): Choice[] {
    return [];
  }
}