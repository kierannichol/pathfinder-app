import {BaseDataContext, ResolvedValue} from "@kierannichol/formula-js";
import {Database} from "@ttrpg-data/Database";
import {Trait} from "@ttrpg-data/Trait";
import {Choice, SelectChoice, TextChoice} from "@ttrpg-data/Choice";
import {ResolveContext} from "@ttrpg-data/ResolveContext";
import {TraitPath} from "@ttrpg-data/TraitPath";

export type Selections = { [key: string]: string; };

export class Entity extends BaseDataContext {

  constructor(private readonly database: Database,
              private readonly traits: Trait[],
              private selections: Selections = {}) {
    super();
  }

  get(key: string): ResolvedValue | undefined {
    return this.traits.reduce(
        (value, feature) => feature.apply(key, value),
        ResolvedValue.None);
  }

  keys(): string[] {
    return this.traits.flatMap(trait => trait.keys());
  }

  choices(): Choice[] {
    return this.traits.filter(
        trait => trait instanceof TextChoice || trait instanceof SelectChoice) as Choice[];
  }

  choice(choiceId: string): Choice {
    return this.choices().find(choice => choice.id === choiceId);
  }

  async select(selections: {[key:string]: string}): Promise<void> {
    this.selections = { ...this.selections, ...selections };
    await this.resolve();
  }

  private async resolve(): Promise<void> {
    const context = new ResolveContext(this.database, this.selections);
    await Promise.all(this.traits.map(trait => trait.resolve(TraitPath.EMPTY, context)));
  }
}