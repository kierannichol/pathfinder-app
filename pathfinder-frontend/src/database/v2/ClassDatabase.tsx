import {util} from "protobufjs";
import {createContext, RefCallback, useCallback, useContext, useEffect, useState} from "react";
import {v2} from "../../compiled";
import LoadingBlock from "../../components/common/LoadingBlock";
import {CharacterClass, CharacterClassSummary} from "../../model/character/CharacterClass";
import {decodeEffectList} from "./decoder";
import fetch = util.fetch;
import CharacterClassDatabaseDbo = v2.ClassDatabaseDbo;

export class CharacterClassDatabase {
  private static readonly CACHE_SIZE = 5;
  private readonly cache: CharacterClass[] = [];

  static empty(): CharacterClassDatabase {
    return new CharacterClassDatabase({}, false);
  }

  static from(database: CharacterClassDatabaseDbo): CharacterClassDatabase {
    let data: {[id: string]: CharacterClassSummary} = {};
    for (const characterClass of database.summaries) {
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
            decodeEffectList(data.effects));

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

async function loadCharacterClass(id: string): Promise<v2.ClassDetailsDbo | undefined> {
  if (id === '') {
    return new Promise<v2.ClassDetailsDbo|undefined>(_ => undefined);
  }
  return fetch(`${process.env.PUBLIC_URL}/db/classes/${idToFilename(id)}.bin`, { binary: true }).then(binary => {
    try {
      return v2.ClassDetailsDbo.decode(binary as Uint8Array);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
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