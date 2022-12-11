import Effect from "./Effect";

export default class Option {

  constructor(public readonly id: string,
              public readonly name: string,
              private readonly descriptionFn: () => Promise<string>,
              private readonly effectsFn: () => Promise<Effect[]>) {
  }

  async effects(): Promise<Effect[]> {
    return this.effectsFn();
  }

  async description(): Promise<string> {
    return this.descriptionFn();
  }
}