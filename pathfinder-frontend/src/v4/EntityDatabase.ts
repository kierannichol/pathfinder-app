import Id from "../core/Id";
import {hasTag} from "../model/Tag";
import {Entity, EntitySummary} from "./Entity";

export interface IEntityDatabase {

  summary(id: string): EntitySummary|undefined;

  load(id: string): Promise<Entity|undefined>;

  find(...tags: string[]): EntitySummary[];
}

class EntityCachedEntry {
  constructor(public readonly id: string, public readonly value: Promise<Entity|undefined>) {
  }
}

class EntityCachedLoader {
  private static readonly MaxCacheSize = 10;
  private readonly cache: EntityCachedEntry[] = [];
  private cacheIndex = 0;

  constructor(private readonly loadFn: (id:string) => Promise<Entity|undefined>) {
  }

  load(id: string): Promise<Entity|undefined> {
    const cached = this.cache.find(entry => entry.id === id);
    if (cached) {
      return cached.value;
    }

    const loaded = this.loadFn(id);
    this.cache[this.cacheIndex++] = new EntityCachedEntry(id, loaded);
    if (this.cacheIndex >= EntityCachedLoader.MaxCacheSize) {
      this.cacheIndex = 0;
    }
    return loaded;
  }
}

export default class EntityDatabase implements IEntityDatabase {
  private readonly _summaries: {[id:string]: EntitySummary};

  private readonly tags: Set<string> = new Set<string>();
  private readonly cache: EntityCachedLoader;

  constructor(public readonly id: string,
              summaries: EntitySummary[],
              loadFn: (id:string) => Promise<Entity|undefined>) {
    this._summaries = {};
    this.cache = new EntityCachedLoader(loadFn);
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

    const summary = this.summary(id);
    if (!summary) {
      return undefined;
    }

    const baseId = summary.parent ? idWithoutOption : id;

    let loaded = await this.cache.load(baseId);
    if (loaded) {
      if (summary.parent && idObj.option) {
        loaded = loaded.child(idObj.option)?.toEntity(loaded);
      }
    }
    return loaded;
  }

  find(...tags: string[]): EntitySummary[] {
    if (!tags.some(tag => hasTag(Array.from(this.tags), tag))) {
      return [];
    }
    return Object.values(this._summaries)
        .filter(summary => tags.some(tag => tag === this.id || hasTag(summary.tags, tag)));
  }
}