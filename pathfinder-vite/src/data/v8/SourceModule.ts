import {fetchProto} from "./loader.tsx";
import {data} from "../../compiled";
import {decodeFeature} from "./decoder.ts";
import {FeatureSummary} from "./FeatureSummary.ts";
import {Feature} from "./Feature.ts";
import FeatureDbo = data.FeatureDbo;

function hasTag(tags: string[], searchTag: string): boolean {
  const searchTags = searchTag.split("+");
  return searchTags.every(tag => tags.includes(tag.toLowerCase()));
}

export default abstract class SourceModule {
  abstract get sourceId(): string;

  abstract features(): FeatureSummary[];

  abstract feature(id: string): FeatureSummary|undefined;

  abstract load(id: string): Promise<Feature>;

  query(tags: string[]): FeatureSummary[] {
    if (!tags.some(tag => hasTag(Array.from(this.tags), tag))) {
      return [];
    }
    return this.features()
      .filter(summary => tags.some(tag => tag === this.sourceId || hasTag(summary.tags, tag)));
  }

  protected abstract get tags(): Set<string>;
}

export class ExternalSourceModule extends SourceModule {

  public static create(sourceId: string, features: FeatureSummary[]): SourceModule {
    const featuresById: { [id: string]: FeatureSummary } = {};
    let tags = new Set<string>();
    for (let feature of features) {
      featuresById[feature.key] = feature;
      for (const tag of feature.tags) {
        tags = tags.add(tag);
      }
    }
    return new ExternalSourceModule(sourceId, featuresById, tags);
  }

  private constructor(public readonly sourceId: string,
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

    const dbo = await fetchProto(`db/${this.sourceId}/${filename}.bin`, FeatureDbo.decode);
    return decodeFeature(dbo);
  }
}

export class LocalSourceModule extends SourceModule {

  static create(sourceId: string, features: Feature[]): SourceModule {
    const featuresById: { [id: string]: Feature } = {};
    let tags = new Set<string>();
    for (let feature of features) {
      featuresById[feature.key] = feature;
      for (const tag of feature.tags) {
        tags = tags.add(tag);
      }
    }
    return new LocalSourceModule(sourceId, featuresById, tags);
  }

  private constructor(public readonly sourceId: string,
                      private readonly data: {[id: string]: Feature},
                      protected readonly tags: Set<string>) {
    super();
  }

  feature(id: string): FeatureSummary | undefined {
    return this.data[id];
  }

  features(): FeatureSummary[] {
    return Object.values(this.data);
  }

  async load(id: string): Promise<Feature> {
    return this.data[id];
  }

}