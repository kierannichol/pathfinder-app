import {Stack} from "./Stack.ts";
import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";

export interface Stacks extends Trait {

}

export class FixedStack implements Stacks {

  constructor(private readonly featureId: string,
              private readonly stacks: Stack[]) {
  }

  next(count: number): Stack {
    return this.stacks[count-1] ?? Stack.Empty;
  }

  resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const count = context.count(this.featureId);
    return this.next(count).resolve(basePath, context);
  }

}
export class RepeatingStack implements Stacks {

  constructor(private readonly stack: Stack) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    return this.stack.resolve(basePath, context);
  }

}
