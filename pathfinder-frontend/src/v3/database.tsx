import React, {createContext, useContext, useEffect, useState} from "react";

export abstract class Database<Summary, Record> {
  public abstract list(): Promise<Summary[]>;
  public abstract fetch(id: string): Promise<Record|undefined>;
}

export abstract class Resource<Summary, Record> extends Database<Summary, Record> {
  public abstract update(record: Record): Promise<Record>;
}

export class DatabaseContext<Summary, Record> {
  static create<Summary, Record>(database: Database<Summary, Record>): DatabaseContext<Summary, Record> {
    let context = createContext<Database<Summary, Record>|undefined>(undefined);
    return new DatabaseContext<Summary, Record>(context);
  }

  public Provider() {
    return <this.context.Provider value={undefined} />
  }

  private constructor(public readonly context: React.Context<Database<Summary, Record>|undefined>) {}
}

export function RecordProvider() {

}

export function useRecord<Record>(database: DatabaseContext<any, Record>, id: string): Record|undefined {
  const context = useContext(database.context);
  const [ record, setRecord ] = useState<Record | undefined>();
  useEffect(() => {
    let active = true;
    load();
    return () => { active = false }

    async function load() {
      setRecord(undefined);
      const fetched = await context?.fetch(id);
      if (!active || fetched === undefined) {
        return
      }
      setRecord(fetched);
    }
  })

  return record
}