import Choice, {SelectChoice} from "./Choice";
import ModificationDatabase from "./ModificationDatabase";
import Option from "./Option";

export default class DataHub {

  constructor(private readonly databases: ModificationDatabase[]) {
  }

  async options(choice: Choice): Promise<Option[]> {
    if (!(choice instanceof SelectChoice)) {
      return [];
    }

    const databases = this.databases.filter(db => choice.options.map(o => o.databaseId).includes(db.id));

    return (await Promise.all(databases.map(db => db.asOptions())))
        .flat()
        .filter(option => choice.options.find(ref => ref.matches(option.id)));
  }

  public name(id: string): string|undefined {
    for (let database of this.databases) {
      const summary = database.summary(id);
      if (summary) {
        return summary.name;
      }
    }
    return undefined;
  }
}