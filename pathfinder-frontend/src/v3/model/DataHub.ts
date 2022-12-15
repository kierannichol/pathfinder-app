import Category from "./Category";
import {Modification, ModificationSummary} from "./Modification";
import ModificationDatabase from "./ModificationDatabase";
import Option from "./Option";
import Reference from "./Reference";

export default class DataHub {

  constructor(private readonly databases: ModificationDatabase[]) {
  }

  options(references: Reference[]): Option[] {
    const databases = this.databases.filter(db => references.map(o => o.databaseId).includes(db.id));

    return databases.map(db => db.asOptions())
    .flat()
    .filter(option => references.find(ref => ref.matches(option.id)));
  }

  categories(references: Reference[]): Category[] {
    const databases = this.databases.filter(db => references.map(o => o.databaseId).includes(db.id));

    return databases.map(db => db.categories())
        .flat();
  }

  public name(id: string|undefined): string|undefined {
    if (id === undefined) {
      return undefined;
    }
    return this.summary(id)?.name;
  }

  public summary(id: string): ModificationSummary|undefined {
    for (let database of this.databases) {
      const summary = database.summary(id);
      if (summary) {
        return summary;
      }
    }
    return undefined;
  }

  public async load(id: string): Promise<Modification|undefined> {
    for (let database of this.databases) {
      const summary = database.summary(id);
      if (summary) {
        return database.load(id);
      }
    }
    return undefined;
  }

  public async description(id: string): Promise<string> {
    const modification = await this.load(id);
    return modification?.description ?? "";
  }
}