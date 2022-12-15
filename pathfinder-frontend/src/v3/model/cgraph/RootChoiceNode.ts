import {CharacterStateMutator} from "../CharacterState";
import Choice from "../Choice";
import DataHub from "../DataHub";
import {ChoiceNode} from "./ChoiceNode";

export class RootChoiceNode extends ChoiceNode {
  public readonly id = '';
  public readonly current = '';

  constructor(children: ChoiceNode[] = []) {
    super(children);
  }

  applyTo(mutator: CharacterStateMutator): void {
    this.children.forEach(child => child.applyTo(mutator));
  }

  async unpack(values: { [key: string]: string }, datahub: DataHub): Promise<ChoiceNode> {
    return new RootChoiceNode(await Promise.all(this.children
    .map(child => child.unpack(values, datahub))))
  }

  choices(level: number): Choice[] {
    return [];
  }
}