import {util} from "protobufjs";
import {createContext, useContext, useEffect, useState} from "react";
import {ClassData, ClassDatabase as ClassDatabaseProto} from "../compiled";
import ClassBinary from "./ClassDatabase.bin";
import fetch = util.fetch;

export class ClassDatabase {

  static empty(): ClassDatabase {
    return new ClassDatabase({}, false);
  }

  static from(database: ClassDatabaseProto): ClassDatabase {
    let data: {[id: string]: ClassData} = {};
    for (const Class of database.classes) {
      data[Class.id] = Class;
    }
    return new ClassDatabase(data, true);
  }

  get all(): ClassData[] {
    return Object.values(this.data)
    .sort((a, b) => a.name.localeCompare(b.name));
  }

  public get(id: string): ClassData | undefined {
    return this.data[id];
  }

  private constructor(private readonly data: {[id:string]: ClassData}, public readonly isLoaded: boolean) {
  }
}

export async function loadClassDatabase(): Promise<ClassDatabase> {
  return await fetch(ClassBinary, { binary: true }).then(binary => {
      return ClassDatabaseProto.decode(binary as Uint8Array);
    }).then(proto => ClassDatabase.from(proto));
}

const ClassContext = createContext<ClassDatabase>(ClassDatabase.empty());

export function ClassContextProvider({ children}: any) {
  const [ database, setDatabase ] = useState<ClassDatabase>(ClassDatabase.empty());
  const [ isLoading, setIsLoading ]= useState(true);

  useEffect(() => {
    loadClassDatabase().then(result => {
      setDatabase(result);
      setIsLoading(false);
    })
    .catch(error => console.error(error));
  }, []);

  return (
      <ClassContext.Provider value={database}>
        {children}
      </ClassContext.Provider>
  );
}

export function useClassDatabase(): ClassDatabase {
  const context = useContext(ClassContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}