import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {Path} from "@/utils/Path.ts";
import AppliedState from "./AppliedState.ts";
import {array} from "@/app/pfutils.ts";
import Database from "./Database.ts";
import {FeatureSummary} from "./FeatureSummary.ts";
import React from "react";

export interface ChoiceRef {
  inputType: ChoiceInputType;
  path: string;
  type: string;
  label: string;
}

export interface SelectChoiceRef extends ChoiceRef {
  readonly categories: FeatureSelectCategory[];
  readonly repeatingIndex: number;
  options(database: Database, query: string | undefined, filterTag: string | undefined): FeatureSummary[];
}

export type ChoiceSelectedHandler = (choice: ChoiceRef, selected: string|string[]) => void;

export enum ChoiceInputType {
  Text,
  Select,
}

export abstract class ResolvedChoice implements ChoiceRef, ResolvedTrait {
  abstract path: string;
  abstract type: string;
  abstract label: string;
  abstract children: ResolvedTrait[];
  abstract readonly inputType: ChoiceInputType;
  abstract applyTo(state: AppliedState): void;
}

export class MultiSelectChoice implements Trait {
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
    let selectedKeys = array(context.selection(path)) as string[];
    let selected: Trait[] = (selectedKeys?.length ?? []) > 0
        ? (await Promise.all(selectedKeys.map(selectedKey => context.feature(selectedKey))))
          .filter(s => s !== undefined) as Trait[]
        : [];

    selectedKeys.forEach(selectedKey => context.register(selectedKey));

    return new ResolvedMultiSelectChoice(path,
        this.key,
        this.label,
        this.type,
        this.optionTags,
        this.featureIds,
        this.categories,
        this.sortBy,
        this.repeatingIndex,
        await Promise.all(selected.map(s => s.resolve(basePath, context))));
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
      ...database.query(tags),
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

  constructor(public readonly path: string,
              public readonly key: string,
              public readonly label: string,
              public readonly type: string,
              public readonly optionTags: string[],
              public readonly featureIds: string[],
              public readonly categories: FeatureSelectCategory[],
              public readonly sortBy: "name" | "none",
              public readonly repeatingIndex: number,
              private readonly selected: ResolvedTrait[]) {
    super();
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
              public readonly type: string,
              public readonly optionTags: string[],
              public readonly featureIds: string[],
              public readonly categories: FeatureSelectCategory[],
              public readonly sortBy: "name" | "none",
              public readonly repeatingIndex: number) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const path = this.repeatingIndex === 0
        ? Path.combine(basePath, this.key)
        : Path.combine(basePath, this.key, this.repeatingIndex);
    let selectedKey = context.selection(path) as string;
    let selected = selectedKey !== undefined
        ? await context.feature(selectedKey)
        : undefined;

    if (this.repeatingIndex > 0 && selected === undefined) {
      const nextPath = Path.combine(basePath, this.key, this.repeatingIndex + 1);
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
          this.type,
          this.optionTags,
          this.featureIds,
          this.categories,
          this.sortBy,
          this.repeatingIndex + 1).resolve(basePath, context);
    }

    return new ResolvedSelectChoice(path,
        this.key,
        this.label,
        this.type,
        this.optionTags,
        this.featureIds,
        this.categories,
        this.sortBy,
        this.repeatingIndex,
        await selected?.resolve(basePath, context),
        repeatedChoice);
  }
}

export class ResolvedSelectChoice extends BaseResolvedSelectChoice implements SelectChoiceRef {
  readonly inputType: ChoiceInputType = ChoiceInputType.Select;

  constructor(public readonly path: string,
              public readonly key: string,
              public readonly label: string,
              public readonly type: string,
              public readonly optionTags: string[],
              public readonly featureIds: string[],
              public readonly categories: FeatureSelectCategory[],
              public readonly sortBy: "name" | "none",
              public readonly repeatingIndex: number,
              private readonly selected?: ResolvedTrait,
              private readonly repeatedChoice?: ResolvedTrait) {
    super();
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
              public readonly type: string,
              public readonly repeatingIndex: number) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const path = Path.combine(basePath, this.key);
    const selectedValue = context.selection(path) as string;
    return new ResolvedTextChoice(path, this.key, this.label, this.type, this.repeatingIndex, selectedValue);
  }

}

export class ResolvedTextChoice extends ResolvedChoice {
  readonly inputType: ChoiceInputType = ChoiceInputType.Text;
  readonly children: ResolvedTrait[] = [];

  constructor(public readonly path: string,
              public readonly key: string,
              public readonly label: string,
              public readonly type: string,
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