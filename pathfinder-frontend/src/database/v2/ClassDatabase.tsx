import {util} from "protobufjs";
import {createContext, RefCallback, useCallback, useContext, useEffect, useState} from "react";
import {v2} from "../../compiled";
import LoadingBlock from "../../components/common/LoadingBlock";
import {CharacterClass, CharacterClassSummary} from "../../model/character/CharacterClass";
import fetch = util.fetch;
import CharacterClassDatabaseDbo = v2.ClassDatabaseDbo;
import ClassLevelDbo = v2.ClassLevelDbo;

export class CharacterClassDatabase {
  private static readonly CACHE_SIZE = 5;
  private readonly cache: CharacterClass[] = [];

  static empty(): CharacterClassDatabase {
    return new CharacterClassDatabase({}, false);
  }

  static from(database: CharacterClassDatabaseDbo): CharacterClassDatabase {
    let data: {[id: string]: CharacterClassSummary} = {};
    for (const characterClass of database.classSummaries) {
      const id = characterClass.id;
      data[id] = new CharacterClassSummary(id,
          characterClass.name,
          characterClass.category.toString());
    }
    return new CharacterClassDatabase(data, true);
  }

  get all(): CharacterClassSummary[] {
    return Object.values(this.data)
        .sort((a, b) => a.name.localeCompare(b.name));
  }

  public summary(id: string): CharacterClassSummary | undefined {
    console.log("Looking for class for " + id + " found " + this.data[id])
    return this.data[id];
  }

  public async load(id: string): Promise<CharacterClass | undefined> {
    const cached = this.cache.find(cached => cached.id === id);
    if (cached !== undefined) {
      return cached;
    }

    const data = await loadCharacterClass(idToFilename(id));
    if (data === undefined) {
      return undefined;
    }

    const loaded = new CharacterClass(data.id,
            data.name,
            data.category.toString(),
            data.shortDescription,
            data.skills,
            data.levels.map(l => convertCharacterClassLevel(l)) ?? []);

    if (this.cache.length > CharacterClassDatabase.CACHE_SIZE) {
      this.cache.pop();
    }
    this.cache.unshift(loaded);

    return loaded;
  }

  private constructor(private readonly data: {[id:string]: CharacterClassSummary},
                      public readonly isLoaded: boolean) {
  }
}

function convertCharacterClassLevel(dataType: ClassLevelDbo): CharacterClass.Level {
  return new CharacterClass.Level(
      dataType.levelNumber,
      dataType.bab,
      dataType.fortSave,
      dataType.refSave,
      dataType.willSave,
      dataType.specials?.map(specialDbo =>
          new CharacterClass.Special(specialDbo.id, specialDbo.name, specialDbo.description)) ?? []
  );
}

let globalCharacterClassDatabase: Promise<CharacterClassDatabase> | undefined = undefined;

async function initializeGlobalCharacterClassDatabase() {
  const dbo = await loadCharacterClassDatabase();
  return CharacterClassDatabase.from(dbo);
}

export function withGlobalCharacterClassDatabase(): Promise<CharacterClassDatabase> {
  if (globalCharacterClassDatabase === undefined) {
    globalCharacterClassDatabase = initializeGlobalCharacterClassDatabase();
  }
  return globalCharacterClassDatabase;
}

async function loadCharacterClassDatabase(): Promise<CharacterClassDatabaseDbo> {
  return fetch(`${process.env.PUBLIC_URL}/db/ClassDatabase.bin`, { binary: true }).then(binary =>
      CharacterClassDatabaseDbo.decode(binary as Uint8Array));
}

async function loadCharacterClass(id: string): Promise<v2.ClassDataDbo | undefined> {
  if (id === '') {
    return new Promise<v2.ClassDataDbo|undefined>(_ => undefined);
  }
  return fetch(`${process.env.PUBLIC_URL}/db/classes/${idToFilename(id)}.bin`, { binary: true }).then(binary => {
    return v2.ClassDataDbo.decode(binary as Uint8Array);
  })
}

function idToFilename(id: string): string {
  return id
    .replaceAll(':', '_');
}

const CharacterClassContext = createContext<CharacterClassDatabase>(CharacterClassDatabase.empty());

export function CharacterClassContextProvider({ children}: any) {
  const [ database, setDatabase ] = useState<CharacterClassDatabase>(CharacterClassDatabase.empty());
  const [ isLoading, setIsLoading ]= useState(true);

  useEffect(() => {
    withGlobalCharacterClassDatabase()
        .then(result => {
          setDatabase(result);
          setIsLoading(false);
        })
        .catch(error => console.error(error));
  }, []);

  return (
      <CharacterClassContext.Provider value={database}>
          {database.isLoaded && children || <LoadingBlock/>}
      </CharacterClassContext.Provider>
  );
}

export function useCharacterClassDatabase(): CharacterClassDatabase {
  const context = useContext(CharacterClassContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

export function useCharacterClassOnScreen(classId: string): [ CharacterClassSummary|undefined, RefCallback<HTMLDivElement> ] {
  const database = useCharacterClassDatabase();
  const [characterClass, setCharacterClass] = useState<CharacterClassSummary|undefined>(() => database.summary(classId));

  useEffect(() => {
    setCharacterClass(database.summary(classId));
  }, [classId, database]);

  const ref = useCallback((node: HTMLDivElement) => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!(characterClass instanceof CharacterClass)) {
              database.load(classId).then(found => setCharacterClass(found));
            }
          } else {
            setCharacterClass(database.summary(classId));
          }
        }
    );

    if (node !== null) {
      observer.observe(node);
    } else {
      observer.disconnect();
    }
  }, [database]);

  return [ characterClass, ref ];
}