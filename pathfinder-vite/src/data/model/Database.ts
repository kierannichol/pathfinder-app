import Description from "./Description.ts";
import Feature, {FeatureSummary} from "./Feature.ts";
import SourceModule from "./SourceModule.ts";

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
}