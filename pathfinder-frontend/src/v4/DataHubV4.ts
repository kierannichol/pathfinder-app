import {Choice, OptionMap, Outcome} from "../core/Choice";
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
    return this.summary(id)?.name;
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

  options(tags: string[]): OptionMap {
    const optionMap: OptionMap = {};
    this.find(...tags).flatMap(summary => {
      if (summary.children.length > 0) {
        return summary.children.map(child => this.summaryToOption(child.toEntitySummary(summary)));
      }
      return [ this.summaryToOption(summary) ]
    })
    .forEach(option => optionMap[option.id] = option);
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
}

export default DataHubV4;