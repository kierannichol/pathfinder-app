import {util} from "protobufjs";
import {createContext, RefCallback, useCallback, useContext, useEffect, useState} from "react";
import {v2} from "../../compiled";
import LoadingBlock from "../../components/common/LoadingBlock";
import {Race, RaceSummary} from "../../model/character/Race";
import Size from "../../model/character/Size";
import fetch = util.fetch;
import RaceDatabaseDbo = v2.RaceDatabaseDbo;

export class RaceDatabase {

  static empty(): RaceDatabase {
    return new RaceDatabase({}, false);
  }

  static from(database: RaceDatabaseDbo): RaceDatabase {
    let data: {[id: string]: RaceSummary} = {};
    for (const race of database.raceSummaries) {
      data[race.id] = new RaceSummary(race.id,
          race.name,
          Size.fromId(race.size) ?? Size.NONE,
          race.type,
          race.speed,
          race.languages,
          race.traits);
    }
    return new RaceDatabase(data, true);
  }

  get all(): RaceSummary[] {
    return Object.values(this.data)
    .sort((a, b) => a.name.localeCompare(b.name));
  }

  public summary(id: string): RaceSummary | undefined {
    return this.data[id];
  }

  public async load(id: string): Promise<Race | undefined> {
    const loadId = id.substring('race:'.length);
    return loadRace(loadId).then(race => race === undefined
        ? undefined
        : new RaceSummary(id,
              race.name,
              Size.fromId(race.size) ?? Size.NONE,
              race.type,
              race.speed,
              race.languages,
              race.traits));
  }

  private constructor(private readonly data: {[id:string]: RaceSummary},
                      public readonly isLoaded: boolean) {
  }
}

let globalRaceDatabase: Promise<RaceDatabase> | undefined = undefined;

export function withGlobalRaceDatabase(): Promise<RaceDatabase> {
  if (globalRaceDatabase === undefined) {
    globalRaceDatabase = loadRaceDatabase().then(dbo => RaceDatabase.from(dbo));
  }
  return globalRaceDatabase;
}

async function loadRaceDatabase(): Promise<RaceDatabaseDbo> {
  return fetch(`${process.env.PUBLIC_URL}/db/RaceDatabase.bin`, { binary: true }).then(binary =>
      RaceDatabaseDbo.decode(binary as Uint8Array));
}

async function loadRace(id: string): Promise<v2.RaceDataDbo | undefined> {
  if (id === '') {
    return new Promise<v2.RaceDataDbo|undefined>(_ => undefined);
  }
  return fetch(`${process.env.PUBLIC_URL}/db/race/${idToFilename(id)}.bin`, { binary: true }).then(binary => {
    return v2.RaceDataDbo.decode(binary as Uint8Array);
  })
}

function idToFilename(id: string): string {
  return id
  .replaceAll(':', '_');
}

const RaceContext = createContext<RaceDatabase>(RaceDatabase.empty());

export function RaceContextProvider({ children}: any) {
  const [ database, setDatabase ] = useState<RaceDatabase>(RaceDatabase.empty());
  const [ isLoading, setIsLoading ]= useState(true);

  useEffect(() => {
    loadRaceDatabase().then(result => {
      setDatabase(RaceDatabase.from(result));
      setIsLoading(false);
    })
    .catch(error => console.error(error));
  }, []);

  return (
      <RaceContext.Provider value={database}>
        {database.isLoaded && children || <LoadingBlock/>}
      </RaceContext.Provider>
  );
}

export function useRaceDatabase(): RaceDatabase {
  const context = useContext(RaceContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

export function useRaceOnScreen(raceId: string): [ RaceSummary|undefined, RefCallback<HTMLDivElement> ] {
  const database = useRaceDatabase();
  const [characterClass, setRace] = useState<RaceSummary|undefined>(() => database.summary(raceId));

  useEffect(() => {
    setRace(database.summary(raceId));
  }, [raceId, database]);

  const ref = useCallback((node: HTMLDivElement) => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!(characterClass instanceof Race)) {
              database.load(raceId).then(found => setRace(found));
            }
          } else {
            setRace(database.summary(raceId));
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