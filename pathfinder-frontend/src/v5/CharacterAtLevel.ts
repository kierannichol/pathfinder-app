import {BaseDataContext, DataContext, Resolvable} from "@kierannichol/formula-js";

export default class CharacterAtLevel extends BaseDataContext {

  constructor(public readonly level: number,
              private readonly state: DataContext) {
    super();
  }

  get(key: string): Resolvable | undefined {
    return this.state.get(key);
  }

  keys(): string[] {
    return this.state.keys();
  }
}