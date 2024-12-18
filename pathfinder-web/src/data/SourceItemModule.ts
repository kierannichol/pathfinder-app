import {fetchProto} from "./loader.ts";
import {data} from "@/compiled";
import {
  decodeItem,
  decodeItemOption,
  decodeItemOptionSet,
  decodeItemOptionSummary,
  decodeItemSummary
} from "./decoder.ts";
import {ItemSummary} from "./ItemSummary.ts";
import {Item} from "./Item.ts";
import {ItemOption, ItemOptionSummary} from "./ItemOption.ts";
import {ItemOptionSet} from "./ItemOptionSet.ts";
import ItemDbo = data.ItemDbo;
import SourceModuleItemDatabaseDbo = data.SourceModuleItemDatabaseDbo;
import ItemOptionDbo = data.ItemOptionDbo;

export class SourceItemModule {

  static async load(sourceCode: string): Promise<SourceItemModule> {
    const dbo = await fetchProto(`db/${sourceCode}_items.bin`, SourceModuleItemDatabaseDbo.decode);
    const summaries = dbo.items.map(i => decodeItemSummary(i, dbo.sourceId));
    const summaryMap: {[id:string]:ItemSummary} = {};
    summaries.forEach(summary => summaryMap[summary.itemId] = summary);
    const optionMap: {[id:number]:ItemOptionSummary} = {};
    dbo.options.forEach(optionDbo => {
      const option = decodeItemOptionSummary(optionDbo);
      optionMap[option.id] = option;
    });
    const optionSetMap: {[id:number]:ItemOptionSet} = {};
    dbo.optionSets.forEach(optionSetDbo => {
      const optionSet = decodeItemOptionSet(optionSetDbo);
      optionSetMap[optionSet.id] = optionSet;
    });
    return new SourceItemModule(
        dbo.sourceId,
        sourceCode,
        summaryMap,
        optionMap,
        optionSetMap);
  }

  constructor(public readonly sourceId: number,
              public readonly sourceCode: string,
              private readonly summaryById: {[id:string]: ItemSummary},
              private readonly optionsById: {[id:number]: ItemOptionSummary},
              private readonly optionSetsById: {[id:number]: ItemOptionSet}) {
  }

  summaries(): ItemSummary[] {
    return Object.values(this.summaryById);
  }

  async load(id: number): Promise<Item> {
    const filename = id.toString();
    const dbo = await fetchProto(`db/${this.sourceCode}/${filename}.bin`, ItemDbo.decode);
    return decodeItem(dbo, this.sourceId);
  }

  item(id: number): ItemSummary|undefined {
    return this.summaryById[id];
  }

  option(optionId: number): ItemOptionSummary|undefined {
    return this.optionsById[optionId];
  }

  optionSet(optionSetId: number): ItemOptionSet|undefined {
    return this.optionSetsById[optionSetId];
  }

  options(): ItemOptionSummary[] {
    return Object.values(this.optionsById);
  }

  async optionDetails(optionId: number): Promise<ItemOption|undefined> {
    const filename = optionId.toString();
    const dbo = await fetchProto(`db/${this.sourceCode}/${filename}.bin`, ItemOptionDbo.decode);
    return decodeItemOption(dbo);
  }

  toString(): string {
    return "Item Source Module: " + this.sourceCode;
  }
}