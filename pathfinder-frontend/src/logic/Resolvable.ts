import {DataContext} from "./DataContext";
import {ResolvedValue} from "./ResolvedValue";

export default abstract class Resolvable {
  static just(value: string|number|boolean|ResolvedValue): Resolvable {
    if (value instanceof ResolvedValue) {
      return new StaticResolvable(value);
    }
    return new StaticResolvable(ResolvedValue.of(value));
  }

  abstract resolve(context?: DataContext): ResolvedValue|undefined;
}

class StaticResolvable extends Resolvable {
  constructor(private readonly resolved: ResolvedValue) {
    super();
  }

  resolve(context?: DataContext): ResolvedValue | undefined {
    return this.resolved;
  }
}