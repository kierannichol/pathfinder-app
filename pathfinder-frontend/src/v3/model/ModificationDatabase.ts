import {Modification, ModificationSummary} from "./Modification";
import Option from "./Option";

export default class ModificationDatabase {
  private readonly summaries: {[id:string]: ModificationSummary};

  constructor(public readonly id: string,
              summaries: ModificationSummary[],
              private readonly loadFn: (id:string) => Promise<Modification>) {
    this.summaries = {};
    for (let summary of summaries) {
      this.summaries[summary.id] = summary;
    }
  }

  public async asOptions(filterFn: (summary: ModificationSummary) => boolean = _ => true): Promise<Option[]> {
    return Object.values(this.summaries)
        .filter(filterFn)
        .map(summary => new Option(summary.id, summary.name,
        async () => (await this.load(summary.id))?.description ?? "",
        async () => (await this.load(summary.id))?.effects ?? []));
  }

  public summary(id: string): ModificationSummary|undefined {
    return this.summaries[id];
  }

  public async load(id: string): Promise<Modification|undefined> {
    return this.loadFn(id);
  }
}