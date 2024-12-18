import Description from "../Description.ts";
import SourceModule from "./SourceModule.ts";
import {FeatureSummary} from "./FeatureSummary.ts";
import {Feature} from "./Feature.ts";
import {ItemSummary} from "./ItemSummary.ts";
import {Item} from "./Item.ts";
import {uniqById} from "@/app/pfutils.ts";
import {ItemOption, ItemOptionSummary} from "./ItemOption.ts";
import {ItemOptionSet} from "./ItemOptionSet.ts";
import {SourceItemModule} from "@/data/v8/SourceItemModule.ts";
import Id from "@/utils/Id.ts";

export class ItemDatabase {
  constructor(private readonly modules: SourceItemModule[]) {
  }

  summaries(): ItemSummary[] {
    return uniqById(this.modules.flatMap(module => module.summaries()),
        item => item.name);
  }

  async load(id: number): Promise<Item|undefined> {
    for (let module of this.modules) {
      if (module.item(id)) {
        return await module.load(id);
      }
    }
  }

  summary(id: number): ItemSummary|undefined {
    for (let module of this.modules) {
      const item = module.item(id);
      if (item) {
        return item;
      }
    }
    return undefined;
  }

  options(optionIds: number[]|undefined = undefined): ItemOptionSummary[] {
    const all = this.modules.flatMap(module => module.options());
    if (!optionIds) {
      return all;
    }
    return all.filter(option => optionIds.includes(option.id));
  }

  option(optionId: number): ItemOptionSummary|undefined {
    for (let module of this.modules) {
      const option = module.option(optionId);
      if (option) {
        return option;
      }
    }
    return undefined;
  }

  async optionDetails(optionId: number): Promise<ItemOption|undefined> {
    for (let module of this.modules) {
      const option = module.option(optionId);
      if (option) {
        return await module.optionDetails(optionId);
      }
    }
    return undefined;
  }

  optionSet(optionSetId: number): ItemOptionSet|undefined {
    for (let module of this.modules) {
      const optionSet = module.optionSet(optionSetId);
      if (optionSet) {
        return optionSet;
      }
    }
    return undefined;
  }

  toString(): string {
    return "Pathfinder Item Database";
  }
}

export default class Database {

  constructor(private readonly modules: SourceModule[]) {
  }

  public features(): FeatureSummary[] {
    return this.modules.flatMap(module => module.features());
  }

  public feature(id: string): FeatureSummary|undefined {
    const option = Id.justOption(id);
    if (option !== undefined) {
      const parentKey = Id.withoutOption(id);
      const parent = this.feature(parentKey);

      if (!parent) return undefined;
      return parent.option(option, this);
    }

    for (let module of this.modules) {
      const found = module.feature(id);
      if (found) return found;
    }

    // const optionPart = Id.justOption(id);
    // if (optionPart) {
    //   const parentId = id.substring(0, id.lastIndexOf('#'));
    //   const parentSummary = this.feature(parentId);
    //   if (parentSummary !== undefined) {
    //     const option = parentSummary?.optionsTemplate?.queryOptions(this)
    //     .find(maybe => maybe.id === id);
    //     if (option !== undefined) {
    //       return new FeatureSummary(
    //           option.id,
    //           parentSummary.name + ": " + option.name,
    //           undefined,
    //           [],
    //           undefined,
    //           option.enabledFormula,
    //           parentSummary.maxStacks,
    //           parentSummary
    //       );
    //     }
    //   }
    // }

    return undefined;
  }

  async description(id: string): Promise<Description> {
    if (id === undefined) {
      return Description.empty();
    }
    return (await this.load(id))?.description ?? Description.empty();
  }

  async load(id: string): Promise<Feature|undefined> {
    const option = Id.justOption(id);
    if (option !== undefined) {
      const parentKey = Id.withoutOption(id);
      const parent = await this.load(parentKey);
      if (!parent) {
        console.warn("No parent feature found for " + id);
        return undefined;
      }
      return parent.option(option, this);
    }

    for (let module of this.modules) {
      if (module.feature(id)) {
        return await module.load(id);
      }
    }

    // const optionPart = Id.justOption(id);
    // if (optionPart) {
    //   const parentId = id.substring(0, id.lastIndexOf('#'));
    //   const parentFeature = await this.load(parentId);
    //   if (parentFeature !== undefined) {
    //     const option = parentFeature.optionsTemplate?.queryOptions(this)
    //       .find(maybe => maybe.id === id);
    //     if (option !== undefined) {
    //       return new Feature(
    //           option.id,
    //           parentFeature.name + ": " + option.name,
    //           undefined,
    //           [],
    //           undefined,
    //           option.enabledFormula,
    //           parentFeature.maxStacks ?? null,
    //           parentFeature.description,
    //           parentFeature.stacks,
    //           parentFeature.conditionalStacks,
    //           parentFeature.featureModifications,
    //           parentFeature);
    //     }
    //   }
    // }

    return undefined;
  }

  name(id: string|undefined): string {
    if (id === undefined) {
      return "";
    }
    return this.feature(id)?.name ?? "";
  }

  query(tags: string[]): FeatureSummary[] {
    return this.modules.flatMap(module => module.query(tags));
  }

  toString(): string {
    return "Pathfinder Database";
  }
}