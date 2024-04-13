import {fetchProto} from "./loader.tsx";
import {data} from "../../compiled";
import {decodeFeature, decodeItem, decodeItemOption, decodeItemOptionSet, decodeItemSummary} from "./decoder.ts";
import {FeatureSummary} from "./FeatureSummary.ts";
import {Feature} from "./Feature.ts";
import {ItemSummary} from "./ItemSummary.ts";
import {Item, ItemOption, ItemOptionSet} from "./Item.ts";
import ItemDbo = data.ItemDbo;
import FeatureDbo = data.FeatureDbo;
import SourceModuleItemDatabaseDbo = data.SourceModuleItemDatabaseDbo;
import {hasTag} from "../../utils/tags.ts";

export default abstract class SourceModule {
  abstract get sourceCode(): string;

  abstract features(): FeatureSummary[];

  abstract feature(id: string): FeatureSummary|undefined;

  abstract load(id: string): Promise<Feature>;

  abstract itemDatabase(): Promise<SourceModuleItemDatabase>;

  query(tags: string[]): FeatureSummary[] {
    if (!tags.some(tag => hasTag(Array.from(this.tags), tag))) {
      return [];
    }
    return this.features()
      .filter(summary => tags.some(tag => tag === this.sourceCode || hasTag(summary.tags, tag)));
  }

  protected abstract get tags(): Set<string>;
}

export class SourceModuleItemDatabase {

  constructor(public readonly sourceId: number,
              public readonly sourceCode: string,
              private readonly summaryById: {[id:string]: ItemSummary},
              private readonly optionsById: {[id:number]: ItemOption},
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

  option(optionId: number): ItemOption|undefined {
    return this.optionsById[optionId];
  }

  optionSet(optionSetId: number): ItemOptionSet|undefined {
    return this.optionSetsById[optionSetId];
  }

  options(): ItemOption[] {
    return Object.values(this.optionsById);
  }
}

export class ExternalSourceModule extends SourceModule {

  public static create(sourceCode: string, features: FeatureSummary[]): SourceModule {
    const featuresById: { [id: string]: FeatureSummary } = {};
    let tags = new Set<string>();
    for (let feature of features) {
      featuresById[feature.key] = feature;
      for (const tag of feature.tags) {
        tags = tags.add(tag);
      }
    }
    return new ExternalSourceModule(sourceCode, featuresById, tags);
  }

  private constructor(public readonly sourceCode: string,
                      private readonly featuresById: { [id: string]: FeatureSummary },
                      protected readonly tags: Set<string>) {
    super();
  }

  features(): FeatureSummary[] {
    return Object.values(this.featuresById);
  }

  feature(id: string): FeatureSummary|undefined {
    return this.featuresById[id];
  }

  async load(id: string): Promise<Feature> {
    const filename = id
      .replace(':', '_')
      .replace('#', '_');

    const dbo = await fetchProto(`db/${this.sourceCode}/${filename}.bin`, FeatureDbo.decode);
    return decodeFeature(dbo);
  }

  async itemDatabase(): Promise<SourceModuleItemDatabase> {
    const dbo = await fetchProto(`db/${this.sourceCode}_items.bin`, SourceModuleItemDatabaseDbo.decode);
    const summaries = dbo.items.map(i => decodeItemSummary(i, dbo.sourceId));
    const summaryMap: {[id:string]:ItemSummary} = {};
    summaries.forEach(summary => summaryMap[summary.itemId] = summary);
    const optionMap: {[id:number]:ItemOption} = {};
    dbo.options.forEach(optionDbo => {
      const option = decodeItemOption(optionDbo);
      optionMap[option.id] = option;
    });
    const optionSetMap: {[id:number]:ItemOptionSet} = {};
    dbo.optionSets.forEach(optionSetDbo => {
      const optionSet = decodeItemOptionSet(optionSetDbo);
      optionSetMap[optionSet.id] = optionSet;
    });
    return new SourceModuleItemDatabase(
        dbo.sourceId,
        this.sourceCode,
        summaryMap,
        optionMap,
        optionSetMap);
  }
}
