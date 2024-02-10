import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {EntityState} from "./Entity.ts";

export class FeatureModification implements Trait {

  constructor(private readonly targetFeatureId: string,
              private readonly stackModifications: StackModification[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    return new ResolvedFeatureModification(this.targetFeatureId,
        await Promise.all(this.stackModifications.map(stackModification =>
            stackModification.resolve(basePath, context))));
  }

}

export class ResolvedFeatureModification implements ResolvedTrait {

  constructor(private readonly targetFeatureId: string,
              private readonly stackModifications: ResolvedStackModification[]) {
  }

  get children(): ResolvedTrait[] {
    return this.stackModifications;
  }

  applyTo(state: EntityState): void {

  }

}

export class StackModification implements Trait {

  constructor(private readonly targetStackCount: number,
              private readonly linksToAdd: string[],
              private readonly linksToRemove: string[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedStackModification> {
    await Promise.all(this.linksToAdd.map(context.feature));
    return new ResolvedStackModification(this.targetStackCount,
        this.linksToAdd,
        this.linksToRemove);
  }

}

export class ResolvedStackModification implements ResolvedTrait {
  children: ResolvedTrait[] = [];

  constructor(private readonly targetStackCount: number,
              private readonly linksToAdd: string[],
              private readonly linksToRemove: string[]) {
  }

  applyTo(state: EntityState): void {
  }
}