import {CharacterStateMutator} from "../CharacterState";
import Choice from "../Choice";
import DataHub from "../DataHub";

export abstract class ChoiceNode {
  abstract get id(): string;

  abstract get current(): string;

  replace(target: ChoiceNode, replacement: ChoiceNode): this {
    return this.copy({
      children: this.children.map(child => {
        if (child == target) {
          return replacement;
        }
        return child;
      })
    });
  }

  add(...children: ChoiceNode[]): ChoiceNode {
    return this.copy({children: [...this.children, ...children]});
  }

  abstract unpack(values: { [key: string]: string }, datahub: DataHub): Promise<ChoiceNode>;

  abstract applyTo(mutator: CharacterStateMutator): void;

  protected copy(overrides: Partial<ChoiceNode>): this {
    const clone = Object.create(this);
    Object.assign(clone, overrides);
    return clone;
  }

  flatten(level: number): Choice[] {
    return [
      ...this.choices(level),
      ...this.children
      .flatMap(child => child.flatten(level))
    ];
  }

  find(id: string): ChoiceNode | undefined {
    return this.descendant(id);
  }

  descendant(id: string): ChoiceNode | undefined {
    const child = this.children.find(c => c.id === id);
    if (child) return child;
    for (let child of this.children) {
      const descendant = child.descendant(id);
      if (descendant) return descendant;
    }
    return undefined;
  }

  abstract choices(level: number): Choice[];

  protected constructor(public readonly children: ChoiceNode[] = []) {
  }
}