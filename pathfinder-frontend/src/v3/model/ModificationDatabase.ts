import Category from "./Category";
import {Modification, ModificationSummary} from "./Modification";
import Option from "./Option";

export default class ModificationDatabase {
  private readonly _summaries: {[id:string]: ModificationSummary};
  private readonly _categories: {[id:number]: Category};

  constructor(public readonly id: string,
              summaries: ModificationSummary[],
              categories: Category[],
              private readonly loadFn: (id:string) => Promise<Modification|undefined>) {
    this._summaries = {};
    for (let summary of summaries) {
      this._summaries[summary.id] = summary;
    }

    this._categories = {};
    for (let category of categories) {
      this._categories[category.id] = category;
    }
  }

  public asOptions(filterFn: (summary: ModificationSummary) => boolean = _ => true): Option[] {
    return Object.values(this._summaries)
        .filter(filterFn)
        .map(summary => new Option(
            summary.id,
            summary.name,
            summary.prerequisiteFormula,
            summary.categoryId,
            async () => (await this.load(summary.id))?.description ?? "",
            async () => (await this.load(summary.id))?.effects ?? []));
  }

  public categories(): Category[] {
    return Object.values(this._categories);
  }

  public summary(id: string): ModificationSummary|undefined {
    if (id in this._summaries) {
      return this._summaries[id];
    }
    for (let summary of Object.values(this._summaries)) {
      for (let child of summary.children) {
        if (child.id === id) {
          return child;
        }
      }
    }
    return undefined;
  }

  public async load(id: string): Promise<Modification|undefined> {
    if (id in this._summaries) {
      return this.loadFn(id);
    }
    for (let summary of Object.values(this._summaries)) {
      const child = summary.child(id);
      if (child) {
        const parent = await this.loadFn(summary.id);
        return parent?.child(id);
      }
    }
    return undefined;
  }
}