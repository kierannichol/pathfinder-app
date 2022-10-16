import {util} from "protobufjs";
import {createContext, RefCallback, useCallback, useContext, useEffect, useState} from "react";
import {v2} from "../../compiled";
import {Ability, AbilitySummary} from "../../model/character/Ability";
import fetch = util.fetch;
import AbilityDatabaseDbo = v2.AbilityDatabaseDbo;
import AbilityTypeDbo = v2.AbilityTypeDbo;

export class AbilityDatabase {

  static empty(): AbilityDatabase {
    return new AbilityDatabase({});
  }

  static from(database: AbilityDatabaseDbo): AbilityDatabase {
    let data: {[id: string]: AbilitySummary} = {};
    for (const ability of database.AbilitySummaries) {
      data['ability:' + ability.id] = new AbilitySummary('ability:' + ability.id,
          ability.name,
          convertAbilityType(ability.type));
    }
    return new AbilityDatabase(data);
  }

  get all(): AbilitySummary[] {
    return Object.values(this.data)
        .sort((a, b) => a.name.localeCompare(b.name));
  }

  public summary(id: string): AbilitySummary | undefined {
    return this.data[id];
  }

  public async load(id: string): Promise<Ability | undefined> {
    const loadId = id.substring('ability:'.length);
    return loadAbility(loadId).then(data => data === undefined
        ? undefined
        : new Ability('ability:' + data.id,
            data.name,
            convertAbilityType(data.type),
            data.description));
  }

  private constructor(private readonly data: {[id:string]: AbilitySummary}) {
  }
}

function convertAbilityType(dataType: AbilityTypeDbo): Ability.Type {
  switch (dataType) {
    case v2.AbilityTypeDbo.ABILITY_TYPE_EX: return Ability.Type.Ex;
    case v2.AbilityTypeDbo.ABILITY_TYPE_SU: return Ability.Type.Su;
    case v2.AbilityTypeDbo.ABILITY_TYPE_SP: return Ability.Type.Sp;
    default: return Ability.Type.None;
  }
}

async function loadAbilityDatabase(): Promise<AbilityDatabaseDbo> {
  return fetch('/db/AbilityDatabase.bin', { binary: true }).then(binary =>
      AbilityDatabaseDbo.decode(binary as Uint8Array));
}

async function loadAbility(id: string): Promise<v2.AbilityDataDbo | undefined> {
  if (id === '') {
    return new Promise<v2.AbilityDataDbo|undefined>(_ => undefined);
  }
  return fetch(`/db/ability/${idToFilename(id)}.bin`, { binary: true }).then(binary => {
    return v2.AbilityDataDbo.decode(binary as Uint8Array);
  })
}

function idToFilename(id: string): string {
  return id
    .replaceAll(':', '_');
}

const AbilityContext = createContext<AbilityDatabase>(AbilityDatabase.empty());

export function AbilityContextProvider({ children}: any) {
  const [ database, setDatabase ] = useState<AbilityDatabase>(AbilityDatabase.empty());
  const [ isLoading, setIsLoading ]= useState(true);

  useEffect(() => {
    loadAbilityDatabase().then(result => {
      setDatabase(AbilityDatabase.from(result));
      setIsLoading(false);
    })
    .catch(error => console.error(error));
  }, []);

  return (
      <AbilityContext.Provider value={database}>
          {children}
          </AbilityContext.Provider>
  );
}

export function useAbilityDatabase(): AbilityDatabase {
  const context = useContext(AbilityContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

export function useAbilityOnScreen(abilityId: string): [ AbilitySummary|undefined, RefCallback<HTMLDivElement> ] {
  const database = useAbilityDatabase();
  const [ability, setAbility] = useState<AbilitySummary|undefined>(() => database.summary(abilityId));

  useEffect(() => {
    setAbility(database.summary(abilityId));
  }, [abilityId, database]);

  const ref = useCallback((node: HTMLDivElement) => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!(ability instanceof Ability)) {
              database.load(abilityId).then(found => setAbility(found));
            }
          } else {
            setAbility(database.summary(abilityId));
          }
        }
    );

    if (node !== null) {
      observer.observe(node);
    } else {
      observer.disconnect();
    }
  }, [database]);

  return [ ability, ref ];
}