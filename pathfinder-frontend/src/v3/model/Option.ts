import {DataContext} from "../../logic/DataContext";
import {Formula} from "../../logic/Formula";
import Effect from "./Effect";

export default class Option {

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly prerequisiteFormula: string,
              public readonly categoryId: number,
              private readonly descriptionFn: () => Promise<string>,
              private readonly effectsFn: () => Promise<Effect[]>) {
  }

  public isValidFor(context: DataContext): boolean {
    if (this.prerequisiteFormula === '') {
      return true;
    }
    return Formula.parse(this.prerequisiteFormula).resolve(context)?.asBoolean() ?? false;
  }

  async effects(): Promise<Effect[]> {
    return this.effectsFn();
  }

  async description(): Promise<string> {
    return this.descriptionFn();
  }
}