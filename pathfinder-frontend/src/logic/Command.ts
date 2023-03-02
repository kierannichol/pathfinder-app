import {MutableDataContext} from "./DataContext";
import Resolvable from "./Resolvable";
import TokenTree, {alpha, decimal, integer, key, literal, term} from "./TokenTree";

export default abstract class Command {
  private static Parser = new TokenTree()
  .ignoreWhitespaces()
  .add([term("SET")], _ => (tokens: any[]) => new SetCommand(tokens[1], tokens[2]))
  .add([term("INCR")], _ => (tokens: any[]) => new IncrCommand(tokens[1], tokens[2]))
  .add([term("REPLACE")], _ => (tokens: any[]) => new ReplaceCommand(tokens[1], tokens[tokens.length-1]))
  .add([integer], token => parseInt(token))
  .add([decimal], token => parseFloat(token))
  .add([alpha, key], token => token)
  .add(literal('"', '"', '\\"'), quote => quote.slice(1, -1))
  .add(literal("'", "'", "\\'"), quote => quote.slice(1, -1));

  static parse(formula: string): Command {
    const tokens = this.Parser.parse(formula);
    return tokens[0](tokens);
  }

  protected constructor() {
  }

  public abstract execute(context: MutableDataContext): void;
}

class SetCommand extends Command {

  constructor(private readonly target: string, private readonly value: string|number|boolean) {
    super();
  }

  execute(context: MutableDataContext): void {
    context.set(this.target, this.value);
  }
}

class IncrCommand extends Command {

  constructor(private readonly target: string, private readonly delta: number) {
    super();
  }

  execute(context: MutableDataContext): void {
    const existing = context.get(this.target)?.asNumber() ?? 0;
    context.set(this.target, existing + this.delta);
  }
}

class ReplaceCommand extends Command {

  constructor(private readonly target: string, private readonly replacement: string) {
    super();
  }

  execute(context: MutableDataContext): void {
    const existing = context.get(this.target);
    if (!existing) {
      return;
    }
    context.remove(this.target);
    context.set(this.replacement, Resolvable.just(existing));
  }
}