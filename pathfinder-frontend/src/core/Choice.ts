import {DataContext, MutableDataContext} from "../logic/DataContext";
import {Formula} from "../logic/Formula";
import Resolvable from "../logic/Resolvable";
import {Template} from "../v4/Template";
import {IDataHub} from "./DataHub";
import Description from "./Description";
import Effect from "./Effect";

export type ChoiceValue = string;
export type ChoiceValues = {[key:string]: ChoiceValue};
export type OptionMap = {[id:string]: Option};

export class ChoiceTree {
  public static readonly None: ChoiceTree = new ChoiceTree([]);

  constructor(private readonly nodes: ChoiceNode[]) {
  }

  public merge(other: ChoiceTree): ChoiceTree {
    return new ChoiceTree([ ...this.nodes, ...other.nodes ]);
  }

  public async resolve(db: IDataHub, values: ChoiceValues): Promise<ChoiceTree> {
    return new ChoiceTree(await Promise.all(
        this.nodes.map(node => node.resolve(db, values))));
  }

  public applyTo(state: MutableDataContext) {
    this.nodes.forEach(node => node.applyTo(state));
  }

  public choices(state: DataContext): ChoiceNode[] {
    return this.nodes.flatMap(node => node.choices(state));
  }

  public templates(): Template[] {
    return this.nodes.flatMap(node => node.templates());
  }
}

export class Choice {

  static text(key: string, label: string, type: string, effectsFn: (value: string) => Effect[]): TextChoiceNode {
    return new TextChoiceNode(key, label, type, 0,'', effectsFn);
  }

  static select(key: string, label: string, type: string, options: (db: IDataHub, category: string|undefined) => OptionMap, categories: OptionCategory[] = []): UnresolvedSelectChoiceNode {
    return new UnresolvedSelectChoiceNode(key, label, type, 0, options, categories);
  }

  static option(id: string, name: string, prerequisiteFormula: string|Resolvable, descriptionFn: () => Promise<Description>, outcomeFn: () => Promise<Outcome>): Option {
    return new UnresolvedOption(id, name, Formula.parse(prerequisiteFormula), descriptionFn, outcomeFn);
  }
}

export class OptionCategory {
  constructor(public readonly id: string, public readonly label: string) {
  }
}

export class Outcome {
  private readonly choiceTree: ChoiceTree;

  constructor(private readonly effects: Effect[],
              choices: ChoiceNode[]|ChoiceTree,
              public readonly templates: Template[] = []) {
    this.choiceTree = choices instanceof ChoiceTree ? choices : new ChoiceTree(choices);
  }

  public async resolve(db: IDataHub, values: ChoiceValues): Promise<Outcome> {
    const resolved = await this.choiceTree.resolve(db, values);
    return new Outcome(this.effects, resolved, this.templates);
  }

  public applyTo(state: MutableDataContext) {
    this.effects.forEach(effect => effect.applyTo(state));
    this.choiceTree.applyTo(state);
  }

  public choices(state: DataContext): ChoiceNode[] {
    return this.choiceTree.choices(state);
  }
}

export interface Option {
  get id(): string;
  get name(): string;
  get prerequisiteFormula(): Resolvable;
  description(): Promise<Description>;
  resolve(db: IDataHub, values: ChoiceValues): Promise<ResolvedOption>;
  applyTo(state: MutableDataContext): void;
  choices(state: DataContext): ChoiceNode[];
  templates(): Template[];
  isValidFor(state: DataContext): boolean;
}

export class UnresolvedOption implements Option {

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly prerequisiteFormula: Resolvable,
              public readonly description: () => Promise<Description>,
              private readonly outcomeFn: () => Promise<Outcome>) {
  }

  applyTo(state: MutableDataContext): void {}

  public choices(state: DataContext): ChoiceNode[] {
    return [];
  }

  templates(): Template[] {
    return [];
  }

  public async resolve(db: IDataHub, values: ChoiceValues): Promise<ResolvedOption> {
    return new ResolvedOption(this.id,
        this.name,
        this.prerequisiteFormula,
        this.description,
        await (await this.outcomeFn()).resolve(db, values));
  }

  isValidFor(state: DataContext): boolean {
    return this.prerequisiteFormula.resolve(state)?.asBoolean() ?? false;
  }
}

export class ResolvedOption implements Option {

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly prerequisiteFormula: Resolvable,
              public readonly description: () => Promise<Description>,
              private readonly outcome: Outcome) {
  }

  applyTo(state: MutableDataContext): void {
    this.outcome.applyTo(state);
  }

  public choices(state: DataContext): ChoiceNode[] {
    return this.outcome.choices(state);
  }

  templates(): Template[] {
    return this.outcome.templates;
  }

  async resolve(db: IDataHub, values: ChoiceValues): Promise<ResolvedOption> {
    return new ResolvedOption(this.id,
        this.name,
        this.prerequisiteFormula,
        this.description,
        await this.outcome.resolve(db, values));
  }

  isValidFor(state: DataContext): boolean {
    return this.prerequisiteFormula.resolve(state)?.asBoolean() ?? false;
  }
}

export interface ChoiceNode {
  get key(): string;
  get label(): string;
  get type(): string;
  get current(): string|undefined;

  get repeatingIndex(): number;
  resolve(db: IDataHub, values: ChoiceValues): Promise<ChoiceNode>;
  applyTo(state: MutableDataContext): void;
  choices(state: DataContext): ChoiceNode[];
  templates(): Template[];
}

export class TextChoiceNode implements ChoiceNode {

  constructor(public readonly key: string,
              public readonly label: string,
              public readonly type: string,
              public readonly repeatingIndex: number,
              public readonly current: string|undefined,
              private readonly effectsFn: (value: string) => Effect[]) {
  }

  applyTo(state: MutableDataContext): void {
    if (this.current) {
      this.effectsFn(this.current).forEach(effect => effect.applyTo(state));
    }
  }

  choices(state: DataContext): ChoiceNode[] {
    return [ this ];
  }

  templates(): Template[] {
    return [];
  }

  repeating(): TextChoiceNode {
    return new TextChoiceNode(this.key,
        this.label,
        this.type,
        this.repeatingIndex > 0 ? this.repeatingIndex : 1,
        this.current,
        this.effectsFn);
  }

  async resolve(db: IDataHub, values: ChoiceValues): Promise<TextChoiceNode> {
    return new TextChoiceNode(this.key,
        this.label,
        this.type,
        this.repeatingIndex,
        values[this.key] ?? '', this.effectsFn);
  }
}

export interface SelectChoiceNode extends ChoiceNode {

  get categories(): OptionCategory[];
  options(db: IDataHub, category: string|undefined): OptionMap;
  resolve(db: IDataHub, values: ChoiceValues): Promise<ChoiceNode>;
}

export class UnresolvedSelectChoiceNode implements SelectChoiceNode {

  constructor(public readonly key: string,
              public readonly label: string,
              public readonly type: string,
              public readonly repeatingIndex: number,
              public readonly options: (db: IDataHub, category: string|undefined) => OptionMap,
              public readonly categories: OptionCategory[] = []) {
  }

  get current(): string {
    return '';
  }

  async resolve(db: IDataHub, values: ChoiceValues): Promise<ChoiceNode> {
    const selected = values[this.key];
    const selectedOption = db.option(selected);
    return selectedOption
        ? new ResolvedSelectChoiceNode(this.key,
            this.label,
            this.type,
            this.repeatingIndex,
            this.options,
            this.categories,
            await selectedOption.resolve(db, values),
            await this.createNextRepeatingChoice()?.resolve(db, values))
        : this;
  }

  applyTo(state: MutableDataContext): void {}

  repeating(): UnresolvedSelectChoiceNode {
    return new UnresolvedSelectChoiceNode(
        this.key,
        this.label,
        this.type,
        this.repeatingIndex > 0 ? this.repeatingIndex : 1,
        this.options,
        this.categories);
  }

  public choices(state: DataContext): ChoiceNode[] {
    return [ this ];
  }

  templates(): Template[] {
    return [];
  }

  private createNextRepeatingChoice() {
    if (this.repeatingIndex > 0) {
      const nextRepeatingIndex = this.repeatingIndex + 1;
      let repeatedChoiceKey = this.key.replace(/_\d+/, '') + "_" + nextRepeatingIndex;
      return new UnresolvedSelectChoiceNode(
          repeatedChoiceKey,
          this.label,
          this.type,
          nextRepeatingIndex,
          this.options,
          this.categories);
    }
  }
}

export class ResolvedSelectChoiceNode implements SelectChoiceNode {
  constructor(public readonly key: string,
              public readonly label: string,
              public readonly type: string,
              public readonly repeatingIndex: number,
              public readonly options: (db: IDataHub, category: string|undefined) => OptionMap,
              public readonly categories: OptionCategory[],
              private readonly selected: Option,
              private readonly nextRepeatedChoice: ChoiceNode|undefined = undefined) {
  }

  get current(): string {
    return this.selected.id;
  }

  async resolve(db: IDataHub, values: ChoiceValues): Promise<ChoiceNode> {
    const selected = values[this.key];
    const selectedOption = db.option(selected);
    return selectedOption
        ? new ResolvedSelectChoiceNode(this.key,
            this.label,
            this.type,
            this.repeatingIndex,
            this.options,
            this.categories,
            await selectedOption.resolve(db, values),
            await this.nextRepeatedChoice?.resolve(db, values))
        : new UnresolvedSelectChoiceNode(this.key,
            this.label,
            this.type,
            this.repeatingIndex,
            this.options,
            this.categories);
  }

  applyTo(state: MutableDataContext): void {
    this.selected.applyTo(state);
  }

  public choices(state: DataContext): ChoiceNode[] {
    const choices = [ this, ...this.selected.choices(state) ];
    if (this.nextRepeatedChoice) {
      choices.push(...this.nextRepeatedChoice.choices(state));
    }
    return choices;
  }

  templates(): Template[] {
    return this.selected.templates();
  }
}