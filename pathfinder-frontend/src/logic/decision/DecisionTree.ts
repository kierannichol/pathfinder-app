import Effect from "../../core/Effect";
import {DataContext, MutableDataContext} from "../DataContext";
import Resolvable from "../Resolvable";

export type DecisionValue = string;
export type DecisionValues = {[key:string]: DecisionValue};
export type OptionMap = {[id:string]: Option};

export class DecisionTree {
  public static readonly None: DecisionTree = new DecisionTree([]);

  constructor(private readonly nodes: DecisionNode[]) {
  }

  public async resolve(values: DecisionValues): Promise<DecisionTree> {
    return new DecisionTree(await Promise.all(
        this.nodes.map(node => node.resolve(values))));
  }

  public applyTo(state: MutableDataContext) {
    this.nodes.forEach(node => node.applyTo(state));
  }

  public decisions(state: DataContext): DecisionNode[] {
    return this.nodes.flatMap(node => node.decisions(state)).flat();
  }
}

export class Decision {

  static text(key: string, condition: Resolvable, effectsFn: (value: string) => Effect[]): TextDecisionNode {
    return new TextDecisionNode(key, condition, '', effectsFn);
  }

  static select(key: string, condition: Resolvable, options: () => OptionMap): SelectDecisionNode {
    return new UnresolvedDecisionNode(key, condition, options);
  }

  static option(id: string, outcomeFn: () => Promise<Outcome>): Option {
    return new UnresolvedOption(id, outcomeFn);
  }
}

export class Outcome {

  constructor(private readonly effects: Effect[],
              private readonly decisionNodes: DecisionNode[]) {
  }

  public async resolve(values: DecisionValues): Promise<Outcome> {
    return new Outcome(this.effects, await Promise.all(this.decisionNodes.map(node => node.resolve(values))));
  }

  public applyTo(state: MutableDataContext) {
    this.effects.forEach(effect => effect.applyTo(state));
    this.decisionNodes.forEach(node => node.applyTo(state));
  }

  public decisions(state: DataContext): DecisionNode[] {
    return this.decisionNodes.flatMap(node => node.decisions(state));
  }
}

export interface Option {
  get id(): string;
  resolve(values: DecisionValues): Promise<ResolvedOption>;
  applyTo(state: MutableDataContext): void;
  decisions(state: DataContext): DecisionNode[];
}

export class UnresolvedOption implements Option {

  constructor(public readonly id: string,
              private readonly outcomeFn: () => Promise<Outcome>) {
  }

  applyTo(state: MutableDataContext): void {}

  public decisions(state: DataContext): DecisionNode[] {
    return [];
  }

  public async resolve(values: DecisionValues): Promise<ResolvedOption> {
    return new ResolvedOption(this.id,
        await (await this.outcomeFn()).resolve(values));
  }
}

export class ResolvedOption implements Option {

  constructor(public readonly id: string,
              private readonly outcome: Outcome) {
  }

  applyTo(state: MutableDataContext): void {
    this.outcome.applyTo(state);
  }

  public decisions(state: DataContext): DecisionNode[] {
    return this.outcome.decisions(state);
  }

  async resolve(values: DecisionValues): Promise<ResolvedOption> {
    return new ResolvedOption(this.id,
        await this.outcome.resolve(values));
  }
}

export interface DecisionNode {
  get key(): string;
  get current(): string|undefined;
  resolve(values: DecisionValues): Promise<DecisionNode>;
  applyTo(state: MutableDataContext): void;
  decisions(state: DataContext): DecisionNode[];
}

export class TextDecisionNode implements DecisionNode {

  constructor(public readonly key: string,
              private readonly condition: Resolvable,
              public readonly current: string,
              private readonly effectsFn: (value: string) => Effect[]) {
  }

  applyTo(state: MutableDataContext): void {
    this.effectsFn(this.current).forEach(effect => effect.applyTo(state));
  }

  decisions(state: DataContext): DecisionNode[] {
    return [];
  }

  async resolve(values: DecisionValues): Promise<TextDecisionNode> {
    return new TextDecisionNode(this.key, this.condition, values[this.key] ?? '', this.effectsFn);
  }
}

export interface SelectDecisionNode extends DecisionNode {

  options(): OptionMap;
  resolve(values: DecisionValues): Promise<DecisionNode>;
}

export class UnresolvedDecisionNode implements SelectDecisionNode {

  constructor(public readonly key: string,
              private readonly condition: Resolvable,
              public readonly options: () => OptionMap) {
  }

  get current(): string|undefined {
    return undefined;
  }

  async resolve(values: DecisionValues): Promise<DecisionNode> {
    const selected = values[this.key];
    const options = this.options();
    return selected in this.options
        ? new ResolvedDecisionNode(this.key,
            this.condition,
            this.options,
            await options[selected].resolve(values))
        : this;
  }

  applyTo(state: MutableDataContext): void {}

  public decisions(state: DataContext): DecisionNode[] {
    return (this.condition.resolve(state)?.asBoolean() ?? false)
        ? [ this ]
        : [];
  }
}

export class ResolvedDecisionNode implements SelectDecisionNode {

  constructor(public readonly key: string,
              private readonly condition: Resolvable,
              public readonly options: () => OptionMap,
              private readonly selected: Option) {
  }

  get current(): string|undefined {
    return this.selected.id;
  }

  async resolve(values: DecisionValues): Promise<DecisionNode> {
    return this.key in values
        ? new ResolvedDecisionNode(this.key,
            this.condition,
            this.options,
            await this.selected.resolve(values))
        : new UnresolvedDecisionNode(this.key,
            this.condition,
            this.options);
  }

  applyTo(state: MutableDataContext): void {
    if (this.condition.resolve(state)?.asBoolean() ?? false) {
      this.selected.applyTo(state);
    }
  }

  public decisions(state: DataContext): DecisionNode[] {
    if (this.condition.resolve(state)?.asBoolean() ?? false) {
      return [ this, ...this.selected.decisions(state) ];
    }
    return [];
  }
}