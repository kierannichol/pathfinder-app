import Description from "../Description.ts";
import SourceModule, {SourceModuleItemDatabase} from "./SourceModule.ts";
import {FeatureSummary} from "./FeatureSummary.ts";
import {Feature} from "./Feature.ts";
import {ItemSummary} from "./ItemSummary.ts";
import {Item, ItemOption, ItemOptionSet} from "./Item.ts";
import {uniqById} from "../../app/pfutils.ts";

export class ItemDatabase {
  constructor(private readonly modules: SourceModuleItemDatabase[]) {
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

  options(): ItemOption[] {
    return this.modules.flatMap(module => module.options());
  }

  option(optionId: number): ItemOption|undefined {
    for (let module of this.modules) {
      const option = module.option(optionId);
      if (option) {
        return option;
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
}

export default class Database {

  constructor(private readonly modules: SourceModule[]) {
  }

  public features(): FeatureSummary[] {
    return this.modules.flatMap(module => module.features());
  }

  public feature(id: string): FeatureSummary|undefined {
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
    for (let module of this.modules) {
      if (module.feature(id)) {
        return (await module.load(id)).description;
      }
    }
    return Description.empty();
  }

  async load(id: string): Promise<Feature|undefined> {
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

  async itemDatabase(): Promise<ItemDatabase> {
    return new ItemDatabase(await Promise.all(this.modules.map(module =>
        module.itemDatabase())));
  }
}