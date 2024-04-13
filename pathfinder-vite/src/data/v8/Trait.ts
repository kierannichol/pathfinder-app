import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";

export interface Trait {
  resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}

export interface ResolvedTrait {
  children: ResolvedTrait[];
  applyTo(state: AppliedState): void;
}

export function traverseTrait(trait: ResolvedTrait,
                              actionFn: (descendant: ResolvedTrait, depth: number) => boolean): void {
  traverseTraitWithDepth(trait, 0, actionFn);
}

function traverseTraitWithDepth(trait: ResolvedTrait,
                              depth: number,
                              actionFn: (descendant: ResolvedTrait, depth: number) => boolean): void {
  if (!actionFn(trait, depth)) {
    return;
  }
  trait.children.forEach(child => {
    traverseTraitWithDepth(child, depth + 1, actionFn);
  });
}