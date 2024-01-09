import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";

declare global {
  interface Array<T> {
    resolveAll(basePath: string, context: ResolvedEntityContext): Promise<void>;
  }
}

if (!Array.prototype.resolveAll) {
  Array.prototype.resolveAll = async function (basePath: string, context: ResolvedEntityContext): Promise<void> {
    // await Promise.all(this.map(element => element.resolve(basePath, context)));

    for (const element of this) {
      await element.resolve(basePath, context);
    }
  }
}