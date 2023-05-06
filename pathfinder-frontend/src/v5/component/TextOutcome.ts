import Effect from "../../core/Effect";

export default class TextOutcome {
  constructor(private readonly effectsFn: (value: string) => Effect[]) {
  }
}