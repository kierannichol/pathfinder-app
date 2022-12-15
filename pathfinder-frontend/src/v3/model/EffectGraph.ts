import {CharacterStateMutator} from "./CharacterState";
import DataHub from "./DataHub";
import Reference from "./Reference";

abstract class EffectNode {
  replace(target: EffectNode, replacement: EffectNode): this {
    return this.copy({ children: this.children.map(child => {
      if (child == target) {
        return replacement;
      }
      return child;
    }) });
  }

  add(child: EffectNode): EffectNode {
    return this.copy({ children: [ ...this.children, child ]});
  }

  abstract unpack(values: {[key:string]: string}, datahub: DataHub): Promise<EffectNode>;

  abstract applyTo(mutator: CharacterStateMutator): void;

  protected copy(overrides: Partial<EffectNode>): this {
    const clone = Object.create(this);
    Object.assign(clone, overrides);
    return clone;
  }

  protected constructor(public readonly parent: EffectNode|null, public readonly children: EffectNode[] = []) {
  }
}

export default class EffectGraph {
  constructor(private readonly root: EffectNode) {
  }
}

class RootEffectNode extends EffectNode {
  protected constructor(children: EffectNode[] = []) {
    super(null, children);
  }

  applyTo(mutator: CharacterStateMutator): void {
    this.children.forEach(child => child.applyTo(mutator));
  }

  async unpack(values: { [key: string]: string }, datahub: DataHub): Promise<EffectNode> {
    return new RootEffectNode(await Promise.all(this.children
        .map(child => child.unpack(values, datahub))))
  }

}

class SetStateEffectNode extends EffectNode {
  constructor(public readonly key: string,
              public readonly value: string,
              public readonly level: number,
              parent: EffectNode|null,
              children: EffectNode[] = []) {
    super(parent, children);
  }

  applyTo(mutator: CharacterStateMutator): void {
    mutator.set(this.key, this.value);
  }

  async unpack(): Promise<EffectNode> {
    return this;
  }
}

class AdjustStateEffectNode extends EffectNode {
  constructor(public readonly key: string,
              public readonly value: string,
              public readonly level: number,
              parent: EffectNode|null,
              children: EffectNode[] = []) {
    super(parent, children);
  }

  applyTo(mutator: CharacterStateMutator): void {
    mutator.set(this.key,
        mutator.get(this.key).asNumber() + this.value);
  }

  async unpack(): Promise<EffectNode> {
    return this;
  }
}

class SelectChoiceNode extends EffectNode {

  constructor(public readonly id: string,
              public readonly label: string,
              public readonly level: number,
              public readonly type: string,
              public readonly references: Reference[],
              public readonly current: string = '',
              parent: EffectNode|null,
              children: EffectNode[] = []) {
    super(parent, children);
  }

  applyTo(mutator: CharacterStateMutator): void {
    this.children.forEach(effect => effect.applyTo(mutator));
  }

  async unpack(values: { [key: string]: string }, datahub: DataHub): Promise<EffectNode> {
    return (this.id in values)
        ? this.copy({ current: values[this.id],
          children: [] })
        : this;
  }

  protected copy(overrides: Partial<SelectChoiceNode>): this {
    const clone = Object.create(this);
    Object.assign(clone, overrides);
    return clone;
  }
}