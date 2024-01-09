import {Choice} from "./Choice.ts";
import {Effect} from "./Effect.ts";
import {FeatureResolvable} from "./FeatureResolvable.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import "./FeatureResolvableExtensions.ts";

export default class Entity implements FeatureResolvable {

  constructor(public readonly levels: EntityLevel[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    await this.levels.resolveAll(basePath, context);
  }

}

export class EntityLevel implements FeatureResolvable {

  constructor(public readonly level: number,
              public readonly effects: Effect[],
              public readonly choices: Choice[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    const path = combinePath(basePath, this.level > 0 ? `${this.level}` : '');

    for (const choice of this.choices) {
      await choice.resolve(path, context);
    }
  }
}

export function combinePath(base: string, ...keys: (string|number)[]): string {
  let path = base;
  for (let key of keys) {
    path = appendPath(path, key);
  }
  return path;
}

function appendPath(base: string, key: string|number): string {
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