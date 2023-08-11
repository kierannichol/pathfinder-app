import {Choice} from "./Choice";
import {Effect} from "./Effect";
import {FeatureResolvable} from "./FeatureResolvable";
import {ResolvedEntityContext} from "./ResolvedEntityContext";

export default class Entity implements FeatureResolvable {

  constructor(public readonly levels: EntityLevel[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    await Promise.all(this.levels.map(level =>
        level.resolve(basePath, context)));
  }

}

export class EntityLevel implements FeatureResolvable {

  constructor(public readonly level: number,
              public readonly effects: Effect[],
              public readonly choices: Choice[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    const path = combinePath(basePath, this.level > 0 ? `${this.level}` : '');

    await Promise.all(this.choices.map(c => c.resolve(path, context)));
  }
}

export function combinePath(base: string, key: string|number): string {
  if (base === '') {
    return formatPathPart(key);
  }
  if (key === '') {
    return base;
  }
  return `${base}:${formatPathPart(key)}`;
}

function formatPathPart(part: string|number): string {
  return part.toString()
    .replace(':', '_')
    .replace('#', '_');
}