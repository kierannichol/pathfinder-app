import {fetchProto} from "./loader.tsx";
import {data} from "@/compiled";
import {decodeFeature} from "./decoder.ts";
import {FeatureSummary} from "./FeatureSummary.ts";
import {Feature} from "./Feature.ts";
import {hasTag} from "@/utils/tags.ts";
import FeatureDbo = data.FeatureDbo;

export default abstract class SourceModule {
  abstract get sourceCode(): string;
  abstract get title(): string;

  abstract features(): FeatureSummary[];

  abstract feature(id: string): FeatureSummary|undefined;

  abstract load(id: string): Promise<Feature>;

  query(tags: string[]): FeatureSummary[] {
    if (!tags.some(tag => hasTag(Array.from(this.tags), tag))) {
      return [];
    }
    return this.features()
      .filter(summary => tags.some(tag => tag === this.sourceCode || hasTag(summary.tags, tag)));
  }

  protected abstract get tags(): Set<string>;
}

export class ExternalSourceModule extends SourceModule {

  public static create(sourceCode: string, title: string, features: FeatureSummary[]): SourceModule {
    const featuresById: { [id: string]: FeatureSummary } = {};
    let tags = new Set<string>();
    for (let feature of features) {
      featuresById[feature.key] = feature;
      for (const tag of feature.tags) {
        tags = tags.add(tag);
      }
    }
    return new ExternalSourceModule(sourceCode, title, featuresById, tags);
  }

  private constructor(public readonly sourceCode: string,
                      public readonly title: string,
                      private readonly featuresById: { [id: string]: FeatureSummary },
                      protected readonly tags: Set<string>) {
    super();

    for (const feature of Object.values(featuresById)) {
      feature.source = this;
    }
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
    let feature = decodeFeature(dbo);
    feature.source = this;
    return feature;
  }
}
