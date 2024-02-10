import {EntityState} from "./Entity.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";

export interface Trait {
  resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}

export interface ResolvedTrait {
  children: ResolvedTrait[];
  applyTo(state: EntityState): void;
}

export function traverseTrait(trait: ResolvedTrait,
                              actionFn: (descendant: ResolvedTrait, depth: number) => void): void {
  traverseTraitWithDepth(trait, 0, actionFn);
}

function traverseTraitWithDepth(trait: ResolvedTrait,
                              depth: number,
                              actionFn: (descendant: ResolvedTrait, depth: number) => void): void {
  actionFn(trait, depth);
  trait.children.forEach(child => {
    traverseTraitWithDepth(child, depth + 1, actionFn);
  });
}