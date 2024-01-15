import Description from "./Description.ts";
import Feature, {FeatureSummary} from "./Feature.ts";
import SourceModule from "./SourceModule.ts";
import Id from "./Id.ts";

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

    const optionPart = Id.justOption(id);
    if (optionPart) {
      const parentId = id.substring(0, id.lastIndexOf('#'));
      const parentSummary = this.feature(parentId);
      if (parentSummary !== undefined) {
        const option = parentSummary?.optionsTemplate?.queryOptions(this)
        .find(maybe => maybe.id === id);
        if (option !== undefined) {
          return new FeatureSummary(
              option.id,
              parentSummary.name + ": " + option.name,
              undefined,
              [],
              undefined,
              option.enabledFormula,
              parentSummary.maxStacks,
              parentSummary);
        }
      }
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

    const optionPart = Id.justOption(id);
    if (optionPart) {
      const parentId = id.substring(0, id.lastIndexOf('#'));
      const parentFeature = await this.load(parentId);
      if (parentFeature !== undefined) {
        const option = parentFeature.optionsTemplate?.queryOptions(this)
          .find(maybe => maybe.id === id);
        if (option !== undefined) {
          return new Feature(
              option.id,
              parentFeature.name + ": " + option.name,
              undefined,
              [],
              undefined,
              option.enabledFormula,
              parentFeature.maxStacks ?? null,
              parentFeature.description,
              parentFeature.stacks,
              parentFeature.conditionalStacks,
              parentFeature.featureModifications,
              parentFeature);
        }
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