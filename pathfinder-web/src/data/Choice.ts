import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";
import {array} from "@/app/pfutils.ts";
import Database from "./Database.ts";
import {FeatureSummary} from "./FeatureSummary.ts";
import React from "react";
import {FeatureRef} from "./Feature.ts";
import {DataContext, Formula} from "@kierannichol/formula-js";
import {Path} from "@pathfinder-lib/utils/Path";

export interface ChoiceRef {
  inputType: ChoiceInputType;
  path: string;
  tags: string[];
  label: string;
  parent: FeatureRef;
  level: number;
}

export interface SelectChoiceRef extends ChoiceRef {
  readonly categories: FeatureSelectCategory[];
  readonly isRepeating: boolean;
  maxLimit(context: DataContext): number | null;
  options(database: Database): FeatureSummary[];
  options(database: Database, query: string | undefined, filterTag: string | undefined): FeatureSummary[];
}

export type ChoiceSelectedHandler = (choice: ChoiceRef, selected: string|string[]) => void;

export enum ChoiceInputType {
  Text,
  Select,
}

export abstract class ResolvedChoice implements ChoiceRef, ResolvedTrait {
  abstract parent: FeatureRef;
  abstract path: string;
  abstract tags: string[];
  abstract label: string;
  abstract children: ResolvedTrait[];
  abstract readonly inputType: ChoiceInputType;
  abstract applyTo(state: AppliedState): void;

  get level(): number {
    return this.parent.level;
  }
}

export class MultiSelectChoice implements Trait {
  constructor(public readonly key: string,
              public readonly label: string,
              public readonly tags: string[],
              public readonly optionTags: string[],
              public readonly featureIds: string[],
              public readonly categories: FeatureSelectCategory[],
              public readonly sortBy: "name" | "none",
              public readonly repeatingIndex: number,
              public readonly repeatingLimit: number | string | null) {
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const path = Path.combine(parent.path, this.key);
    const ref = new FeatureRef(path, 'choice', this.label, parent.level, parent);
    let selectedKeys = array(context.selection(path)) as string[];
    let selected: Trait[] = (selectedKeys?.length ?? []) > 0
        ? (await Promise.all(selectedKeys.map(selectedKey => context.feature(selectedKey))))
          .filter(s => s !== undefined) as Trait[]
        : [];

    selectedKeys.forEach(selectedKey => context.register(selectedKey));

    return new ResolvedMultiSelectChoice(parent,
        path,
        this.key,
        this.label,
        this.tags,
        this.optionTags,
        this.featureIds,
        this.categories,
        this.sortBy,
        this.repeatingIndex,
        this.repeatingLimit,
        await Promise.all(selected.map(s => s.resolve(ref, context))));
  }
}

abstract class BaseResolvedSelectChoice extends ResolvedChoice {
  readonly inputType: ChoiceInputType = ChoiceInputType.Select;

  abstract readonly optionTags: string[];
  abstract readonly featureIds: string[];
  abstract readonly sortBy: "name" | "none";

  options(database: Database, query: string | undefined = undefined, filterTag: string | undefined = undefined): FeatureSummary[] {
    let tags = [...this.optionTags];
    if (filterTag && filterTag !== '') {
      tags = tags.map(tag => tag + '+' + filterTag);
    }
    return [
      ...database.query(tags, false),
      ...this.featureIds.flatMap(featureId => {
        const option = database.feature(featureId);
        return option !== undefined ? [option] : [];
      })
    ]
    .filter(option => !query || option.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      switch (this.sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }
}

export class ResolvedMultiSelectChoice extends BaseResolvedSelectChoice implements SelectChoiceRef {
  readonly inputType: ChoiceInputType = ChoiceInputType.Select;

  constructor(public readonly parent: FeatureRef,
              public readonly path: string,
              public readonly key: string,
              public readonly label: string,
              public readonly tags: string[],
              public readonly optionTags: string[],
              public readonly featureIds: string[],
              public readonly categories: FeatureSelectCategory[],
              public readonly sortBy: "name" | "none",
              public readonly repeatingIndex: number,
              public readonly repeatingLimit: number | string | null,
              private readonly selected: ResolvedTrait[]) {
    super();
  }

  isRepeating: boolean = true;

  maxLimit(context: DataContext): number | null {
      if (typeof this.repeatingLimit === 'string') {
        return Formula.parse(this.repeatingLimit).resolve(context)?.asNumber() ?? null;
      }
      return this.repeatingLimit;
  }

  applyTo(state: AppliedState): void {
    if (state.withoutChoicePath === this.path) {
      return;
    }
    return this.selected.forEach(s => s.applyTo(state));
  }

  get children(): ResolvedTrait[] {
    return this.selected;
  }
}

export class SelectChoice implements Trait {

  constructor(public readonly key: string,
              public readonly label: string,
              public readonly tags: string[],
              public readonly optionTags: string[],
              public readonly featureIds: string[],
              public readonly categories: FeatureSelectCategory[],
              public readonly sortBy: "name" | "none",
              public readonly repeatingIndex: number) {
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const path = this.repeatingIndex === 0
        ? Path.combine(parent.path, this.key)
        : Path.combine(parent.path, this.key, this.repeatingIndex);
    const ref = new FeatureRef(path, 'choice', this.label, parent.level, parent);
    let selectedKey = context.selection(path) as string;
    let selected = selectedKey !== undefined
        ? await context.feature(selectedKey)
        : undefined;

    if (this.repeatingIndex > 0 && selected === undefined) {
      const nextPath = Path.combine(parent.path, this.key, this.repeatingIndex + 1);
      context.swapSelections(path, nextPath);

      selectedKey = context.selection(path) as string;
      selected = selectedKey !== undefined
          ? await context.feature(selectedKey)
          : undefined;
    }

    context.register(selectedKey);

    let repeatedChoice: ResolvedTrait | undefined = undefined;
    if (this.repeatingIndex > 0 && selected !== undefined) {
      repeatedChoice = await new SelectChoice(this.key,
          this.label,
          this.tags,
          this.optionTags,
          this.featureIds,
          this.categories,
          this.sortBy,
          this.repeatingIndex + 1).resolve(ref, context);
    }

    const resolved = await selected?.resolve(ref, context);

    return new ResolvedSelectChoice(
        parent,
        path,
        this.key,
        this.label,
        this.tags,
        this.optionTags,
        this.featureIds,
        this.categories,
        this.sortBy,
        this.repeatingIndex,
        resolved,
        repeatedChoice);
  }
}

export class ResolvedSelectChoice extends BaseResolvedSelectChoice implements SelectChoiceRef {
  readonly inputType: ChoiceInputType = ChoiceInputType.Select;

  constructor(public readonly parent: FeatureRef,
              public readonly path: string,
              public readonly key: string,
              public readonly label: string,
              public readonly tags: string[],
              public readonly optionTags: string[],
              public readonly featureIds: string[],
              public readonly categories: FeatureSelectCategory[],
              public readonly sortBy: "name" | "none",
              public readonly repeatingIndex: number,
              private readonly selected?: ResolvedTrait,
              private readonly repeatedChoice?: ResolvedTrait,) {
    super();
  }

  isRepeating: boolean = false;

  maxLimit(): number | null {
      return 1;
  }

  applyTo(state: AppliedState): void {
    if (state.withoutChoicePath === this.path) {
      return;
    }
    return this.selected?.applyTo(state);
  }

  get children(): ResolvedTrait[] {
    return this.selected !== undefined
        ? (this.repeatedChoice !== undefined
            ? [this.selected, this.repeatedChoice] : [this.selected])
        : [];
  }
}

export class TextChoice implements Trait {

  constructor(private readonly key: string,
              public readonly label: string,
              public readonly tags: string[],
              public readonly repeatingIndex: number) {
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const path = Path.combine(parent.path, this.key);
    const selectedValue = context.selection(path) as string;
    return new ResolvedTextChoice(parent, path, this.key, this.label, this.tags, this.repeatingIndex, selectedValue);
  }

}

export class ResolvedTextChoice extends ResolvedChoice {
  readonly inputType: ChoiceInputType = ChoiceInputType.Text;
  readonly children: ResolvedTrait[] = [];

  constructor(public readonly parent: FeatureRef,
              public readonly path: string,
              public readonly key: string,
              public readonly label: string,
              public readonly tags: string[],
              public readonly repeatingIndex: number,
              private readonly value: string|undefined) {
    super();
  }

  applyTo(state: AppliedState): void {
    if (this.value !== undefined) {
      state.set(this.path, this.value);
    }
  }

}

export class ChoiceCategory {
  label: React.ReactNode;
  tag: string = "";
}

export class FeatureSelectCategory {

  constructor(public readonly label: string,
              public readonly tag: string) {
  }
}