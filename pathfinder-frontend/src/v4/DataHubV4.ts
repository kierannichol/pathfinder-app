import {Choice, Option, OptionMap, Outcome} from "../core/Choice";
import {IDataHub} from "../core/DataHub";
import Description from "../core/Description";
import {Entity, EntitySummary} from "./Entity";
import EntityDatabase, {IEntityDatabase} from "./EntityDatabase";

class DataHubV4 implements IDataHub, IEntityDatabase {
  private readonly databases: EntityDatabase[];

  constructor(...databases: EntityDatabase[]) {
    this.databases = databases;
  }

  public name(id: string|undefined): string|undefined {
    if (id === undefined) {
      return undefined;
    }
    return this.summary(id)?.name;// + ` (${id})`;
  }

  public async description(id: string): Promise<Description> {
    const entity = await this.load(id);
    return entity?.description ?? new Description("", {});
  }

  public summary(id: string): EntitySummary|undefined {
    for (let database of this.databases) {
      let summary = database.summary(id);
      if (summary) {
        return summary;
      }
    }
    return undefined;
  }

  public async load(id: string): Promise<Entity|undefined> {
    for (let database of this.databases) {
      const summary = database.summary(id);
      if (summary) {
          return await database.load(summary.id);
      }
    }
    console.warn("No entity found for " + id);
    return undefined;
  }

  find(...tags: string[]): EntitySummary[] {
    const found: EntitySummary[] = [];
    for (let database of this.databases) {
      found.push(...database.find(...tags));
    }
    return found;
  }

  options(tags: string[], ids: string[] = []): OptionMap {
    const optionMap: OptionMap = {};
    [ ...this.find(...tags), ...ids.map(id => this.summary(id)) ].flatMap(summary => {
      if (!summary) {
        return undefined;
      }
      if (summary.children.length > 0) {
        return summary.children.map(child => this.summaryToOption(child.toEntitySummary(summary)));
      }
      return [ this.summaryToOption(summary) ]
    })
    .forEach(option => {
      if (option) {
        optionMap[option.id] = option;
      }
    });
    return optionMap;
  }

  private summaryToOption(summary: EntitySummary) {
    return Choice.option(summary.id, summary.name, summary.prerequisiteFormula, () => this.description(summary.id), async () => {
      const entity = await this.load(summary.id);
      if (!entity) {
        return new Outcome([], []);
      }

      return new Outcome(
          entity.effects,
          entity.choiceTree,
          entity.template ? [entity.template] : []
      );
    });
  }

  option(id: string): Option | undefined {
    const summary = this.summary(id);
    return summary ? this.summaryToOption(summary) : undefined;
  }
}

export default DataHubV4;