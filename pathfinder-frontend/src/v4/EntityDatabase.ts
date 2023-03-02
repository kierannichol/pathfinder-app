import Id from "../core/Id";
import {Entity, EntitySummary} from "./Entity";

export interface IEntityDatabase {

  summary(id: string): EntitySummary|undefined;

  load(id: string): Promise<Entity|undefined>;

  find(...tags: string[]): EntitySummary[];
}

export default class EntityDatabase implements IEntityDatabase {
  private readonly _summaries: {[id:string]: EntitySummary};

  private static readonly MaxCacheSize = 20;
  private readonly cache: Entity[] = [];
  private cacheIndex = 0;

  private readonly tags: Set<string> = new Set<string>();

  constructor(public readonly id: string,
              summaries: EntitySummary[],
              private readonly loadFn: (id:string) => Promise<Entity|undefined>) {
    this._summaries = {};
    for (let summary of summaries) {
      if (summary.children && summary.children.length > 0) {
        summary.children.forEach(child => {
          const entity = child.toEntitySummary(summary);
          this._summaries[entity.id] = entity;
          entity.tags.forEach(tag => this.tags.add(tag));
        });
      } else {
        this._summaries[summary.id] = summary;
        summary.tags.forEach(tag => this.tags.add(tag));
      }
    }
  }

  summary(id: string): EntitySummary|undefined {
    return this._summaries[id];
  }

  async load(id: string): Promise<Entity|undefined> {
    const idObj = Id.of(id);
    const idWithoutOption = idObj.withoutOption().string();

    const cached = this.cache.find(maybe => maybe.id === id);
    if (cached) {
      return cached;
    }
    const summary = this.summary(id);
    if (!summary) {
      return undefined;
    }

    const baseId = summary.parent ? idWithoutOption : id;

    let loaded = await this.loadFn(baseId);
    if (loaded) {
      if (summary.parent && idObj.option) {
        loaded = loaded.child(idObj.option)?.toEntity(loaded);
      }

      if (loaded) {
        this.cache[this.cacheIndex++] = loaded;
        if (this.cacheIndex > EntityDatabase.MaxCacheSize) {
          this.cacheIndex = 0;
        }
      }
    }
    return loaded;
  }

  find(...tags: string[]): EntitySummary[] {
    if (!tags.some(tag => this.tags.has(tag))) {
      return [];
    }
    return Object.values(this._summaries)
        .filter(summary => tags.every(tag => tag === this.id || summary.tags.includes(tag)));
  }
}