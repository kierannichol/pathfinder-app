import {ReactNode} from "react";

export type EntityId = string|number;
export type OptionalEntityId = EntityId|undefined;

export const entityId = {
  toKey(id: EntityId): string {
    return id.toString();
  },

  toKeyOrUndefined(id: OptionalEntityId): string|undefined {
    return id?.toString() ?? undefined;
  },

  toOptionalNumber(key: OptionalEntityId): number|undefined {
    if (key === undefined) return undefined;
    if (typeof key === "string") return parseInt(key);
    return key;
  }
}

export class EntitySelectOption {
  constructor(public readonly id: EntityId,
              public readonly label: ReactNode,
              private readonly isValidFn: boolean|(() => boolean),
              public readonly bodyFn?: () => Promise<ReactNode>) {
  }

  public get valid(): boolean {
    return typeof this.isValidFn === "boolean"
        ? this.isValidFn
        : this.isValidFn();
  }
}

export class EntitySelectCategory {

  constructor(public readonly label: ReactNode,
              public readonly tag: string,
              public readonly key: string = tag) {
  }
}

export type EntitySelectOptions = EntitySelectOption
    | Array<EntitySelectOption>;