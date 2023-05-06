import {DataContext, Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import Immutable, {Set} from "immutable";

export class EntityContext extends DataContext {
  private stack: EntityContextNode[] = [];

  add(node: EntityContextNode): EntityContext {
    this.stack.push(node);
    return this;
  }

  get(key: string): Resolvable | undefined {
    let value: ResolvedValue|undefined = undefined;

    for (let i = 0; i < this.stack.length; i++) {
      const node = this.stack[i];
      value = node.get(this, value, key);
    }

    return value ? Resolvable.just(value) : undefined;
  }

  keys(): string[] {
    let keys = Set.of<string>();
    for (let i = 0; i < this.stack.length; i++) {
      const node = this.stack[i];
      keys = node.keys(keys);
    }
    return keys.toArray();
  }
}

export abstract class EntityContextNode {

  abstract get(context: DataContext, base: ResolvedValue | undefined, key: string): ResolvedValue | undefined;

  abstract keys(baseKeys: Immutable.Set<string>): Set<string>;

}