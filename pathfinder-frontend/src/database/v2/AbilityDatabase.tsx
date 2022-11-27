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
    for (const ability of database.abilitySummaries) {
      data[ability.id] = new AbilitySummary(ability.id,
          ability.name,
          convertAbilityType(ability.type),
          ability.prerequisitesFormula);
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
    const loadId = idToFilename(id);
    return loadAbility(loadId).then(data => data === undefined
        ? undefined
        : new Ability(data.id,
            data.name,
            convertAbilityType(data.type),
            data.prerequisitesFormula,
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

let globalAbilityDatabase: Promise<AbilityDatabase> | undefined = undefined;

export function withGlobalAbilityDatabase(): Promise<AbilityDatabase> {
  if (globalAbilityDatabase === undefined) {
    globalAbilityDatabase = loadAbilityDatabase().then(dbo => AbilityDatabase.from(dbo));
  }
  return globalAbilityDatabase;
}

async function loadAbilityDatabase(): Promise<AbilityDatabaseDbo> {
  const binary = await fetch(`${process.env.PUBLIC_URL}/db/AbilityDatabase.bin`, { binary: true });
  return AbilityDatabaseDbo.decode(binary as Uint8Array);
}

async function loadAbility(id: string): Promise<v2.AbilityDataDbo | undefined> {
  if (id === '') {
    return new Promise<v2.AbilityDataDbo|undefined>(_ => undefined);
  }
  return fetch(`${process.env.PUBLIC_URL}/db/ability/${idToFilename(id)}.bin`, { binary: true }).then(binary => {
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

  useEffect(() => {
    loadAbilityDatabase().then(result => {
      setDatabase(AbilityDatabase.from(result));
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
    const ability = database.summary(abilityId);
    setAbility(ability);
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