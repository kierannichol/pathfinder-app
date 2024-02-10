import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {Path} from "../../utils/Path.ts";
import {EntityState} from "./Entity.ts";

export interface ChoiceRef {
  path: string;
  type: string;
  label: string;
}

export abstract class ResolvedChoice implements ChoiceRef, ResolvedTrait {
  abstract path: string;
  abstract type: string;
  abstract label: string;
  abstract children: ResolvedTrait[];
  abstract applyTo(state: EntityState): void;
}

export class SelectChoice implements Trait {

  constructor(public readonly key: string,
              public readonly label: string,
              public readonly type: string,
              public readonly optionTags: string[],
              public readonly featureIds: string[],
              public readonly categories: FeatureSelectCategory[],
              public readonly sortBy: "name" | "none",
              public readonly repeatingIndex: number) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const path = Path.combine(basePath, this.key);
    const selectedKey = context.selection(path);
    const selected = selectedKey !== undefined
        ? await context.feature(selectedKey)
        : undefined;

    context.register(selectedKey);

    return new ResolvedSelectChoice(path,
        this.key,
        this.label,
        this.type,
        this.optionTags,
        this.featureIds,
        this.categories,
        this.sortBy,
        this.repeatingIndex,
        await selected?.resolve(basePath, context));
  }

}

export class ResolvedSelectChoice extends ResolvedChoice {

  constructor(public readonly path: string,
              public readonly key: string,
              public readonly label: string,
              public readonly type: string,
              public readonly optionTags: string[],
              public readonly featureIds: string[],
              public readonly categories: FeatureSelectCategory[],
              public readonly sortBy: "name" | "none",
              public readonly repeatingIndex: number,
              private readonly selected?: ResolvedTrait) {
    super();
  }

  applyTo(state: EntityState): void {
    return this.selected?.applyTo(state);
  }

  get children(): ResolvedTrait[] {
    return this.selected !== undefined
        ? [ this.selected ]
        : [];
  }
}

export class TextChoice implements Trait {

  constructor(private readonly key: string,
              public readonly label: string,
              public readonly type: string,
              public readonly repeatingIndex: number) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const path = Path.combine(basePath, this.key);
    const selectedValue = context.selection(path);
    return new ResolvedTextChoice(path, this.key, this.label, this.type, this.repeatingIndex, selectedValue);
  }

}

export class ResolvedTextChoice extends ResolvedChoice {
  readonly children: ResolvedTrait[] = [];

  constructor(public readonly path: string,
              public readonly key: string,
              public readonly label: string,
              public readonly type: string,
              public readonly repeatingIndex: number,
              private readonly value: string|undefined) {
    super();
  }

  applyTo(state: EntityState): void {
    if (this.value !== undefined) {
      state[this.path] = this.value;
    }
  }

}

export class FeatureSelectCategory {

  constructor(public readonly label: string,
              public readonly tag: string) {
  }
}