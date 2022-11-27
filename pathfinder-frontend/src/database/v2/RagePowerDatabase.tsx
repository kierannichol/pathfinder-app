import {util} from "protobufjs";
import {createContext, RefCallback, useCallback, useContext, useEffect, useState} from "react";
import {v2} from "../../compiled";
import LoadingBlock from "../../components/common/LoadingBlock";
import {Ability, AbilitySummary} from "../../model/character/Ability";
import fetch = util.fetch;
import RagePowerDatabaseDbo = v2.AbilityDatabaseDbo;
import AbilityTypeDbo = v2.AbilityTypeDbo;

export class RagePowerDatabase {

  static empty(): RagePowerDatabase {
    return new RagePowerDatabase({}, false);
  }

  static from(database: RagePowerDatabaseDbo): RagePowerDatabase {
    let data: {[id: string]: AbilitySummary} = {};
    for (const ability of database.abilitySummaries) {
      data[ability.id] = new AbilitySummary(
          ability.id,
          ability.name,
          convertAbilityType(ability.type),
          ability.prerequisitesFormula);
    }
    return new RagePowerDatabase(data, true);
  }

  get all(): AbilitySummary[] {
    return Object.values(this.data)
    .sort((a, b) => a.name.localeCompare(b.name));
  }

  public summary(id: string): AbilitySummary | undefined {
    return this.data[id];
  }

  public async load(id: string): Promise<Ability | undefined> {
    const loadId = id.replaceAll(":", "_")
    return loadRagePower(loadId).then(ability => ability === undefined
        ? undefined
        : new Ability(
            ability.id,
            ability.name,
            convertAbilityType(ability.type),
            ability.prerequisitesFormula,
            ability.description));
  }

  private constructor(private readonly data: {[id:string]: AbilitySummary},
                      public readonly isLoaded: boolean) {
  }
}

let globalRagePowerDatabase: Promise<RagePowerDatabase> | undefined = undefined;

export function withGlobalRagePowerDatabase(): Promise<RagePowerDatabase> {
  if (globalRagePowerDatabase === undefined) {
    globalRagePowerDatabase = loadRagePowerDatabase().then(dbo => RagePowerDatabase.from(dbo));
  }
  return globalRagePowerDatabase;
}

async function loadRagePowerDatabase(): Promise<RagePowerDatabaseDbo> {
  return fetch(`${process.env.PUBLIC_URL}/db/RagePowerDatabase.bin`, { binary: true }).then(binary =>
      RagePowerDatabaseDbo.decode(binary as Uint8Array));
}

async function loadRagePower(id: string): Promise<v2.AbilityDataDbo | undefined> {
  if (id === '') {
    return new Promise<v2.AbilityDataDbo|undefined>(_ => undefined);
  }
  return fetch(`${process.env.PUBLIC_URL}/db/ragepower/${idToFilename(id)}.bin`, { binary: true }).then(binary => {
    return v2.AbilityDataDbo.decode(binary as Uint8Array);
  })
}

function idToFilename(id: string): string {
  return id
  .replaceAll(':', '_');
}

const RagePowerContext = createContext<RagePowerDatabase>(RagePowerDatabase.empty());

export function RagePowerContextProvider({ children}: any) {
  const [ database, setDatabase ] = useState<RagePowerDatabase>(RagePowerDatabase.empty());
  const [ isLoading, setIsLoading ]= useState(true);

  useEffect(() => {
    loadRagePowerDatabase().then(result => {
      setDatabase(RagePowerDatabase.from(result));
      setIsLoading(false);
    })
    .catch(error => console.error(error));
  }, []);

  return (
      <RagePowerContext.Provider value={database}>
        {database.isLoaded && children || <LoadingBlock/>}
      </RagePowerContext.Provider>
  );
}

export function useRagePowerDatabase(): RagePowerDatabase {
  const context = useContext(RagePowerContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

export function useRagePowerOnScreen(raceId: string): [ AbilitySummary|undefined, RefCallback<HTMLDivElement> ] {
  const database = useRagePowerDatabase();
  const [ability, setAbility] = useState<AbilitySummary|undefined>(() => database.summary(raceId));

  useEffect(() => {
    setAbility(database.summary(raceId));
  }, [raceId, database]);

  const ref = useCallback((node: HTMLDivElement) => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!(ability instanceof Ability)) {
              database.load(raceId).then(found => setAbility(found));
            }
          } else {
            setAbility(database.summary(raceId));
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

function convertAbilityType(dataType: AbilityTypeDbo): Ability.Type {
  switch (dataType) {
    case v2.AbilityTypeDbo.ABILITY_TYPE_EX: return Ability.Type.Ex;
    case v2.AbilityTypeDbo.ABILITY_TYPE_SU: return Ability.Type.Su;
    case v2.AbilityTypeDbo.ABILITY_TYPE_SP: return Ability.Type.Sp;
    default: return Ability.Type.None;
  }
}