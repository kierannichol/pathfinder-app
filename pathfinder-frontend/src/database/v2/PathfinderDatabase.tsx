import {createContext, useContext, useMemo} from "react";
import {useAsyncMemo} from "../../app/reactHooks";
import AlignmentDatabase from "../AlignmentDatabase";
import SkillDatabase from "../SkillDatabase";
import {AbilityContextProvider, AbilityDatabase, withGlobalAbilityDatabase} from "./AbilityDatabase";
import {CharacterClassContextProvider, CharacterClassDatabase, withGlobalCharacterClassDatabase} from "./ClassDatabase";
import {FeatContextProvider, FeatDatabase, withGlobalFeatDatabase} from "./FeatDatabase";
import {RaceContextProvider, RaceDatabase, withGlobalRaceDatabase} from "./RaceDatabase";
import {RagePowerContextProvider, RagePowerDatabase, withGlobalRagePowerDatabase} from "./RagePowerDatabase";

export class PathfinderDatabase {

  public constructor(private readonly featDb: FeatDatabase,
                     private readonly abilityDb: AbilityDatabase,
                     private readonly ragePowerDb: RagePowerDatabase,
                     private readonly classDb: CharacterClassDatabase,
                     private readonly raceDb: RaceDatabase) {
  }

  public name(id: string|undefined): string|undefined {
    if (id === undefined) {
      return undefined;
    }
    const [type] = id.split(':');
    switch (type) {
      case 'feat':
        return this.featDb.summary(id)?.name;
      case 'ability':
        if (id === 'ability:channel_negative_energy') {
          return 'Channel Negative Energy';
        }
        return this.abilityDb.summary(id)?.name;
      case 'class':
        return this.classDb.summary(id)?.name;
      case 'ragepower':
        return this.ragePowerDb.summary(id)?.name;
      case 'race':
        return this.raceDb.summary(id)?.name;
      case 'skill':
        return SkillDatabase.find(id)?.name;
      case 'alignment':
        return AlignmentDatabase.find(id)?.name;
      case 'bab':
        return 'Base Attack Bonus';
      case 'caster_level':
        return 'Caster Level';
      case 'str':
      case 'str_score':
        return 'Strength';
      case 'dex':
      case 'dex_score':
        return 'Dexterity';
      case 'con':
      case 'con_score':
        return 'Constitution';
      case 'wis':
      case 'wis_score':
        return 'Wisdom';
      case 'int':
      case 'int_score':
        return 'Intelligence';
      case 'cha':
      case 'cha_score':
        return 'Charisma';
    }

    console.warn("No name found for " + id);
    return undefined;
  }

}

let globalPathfinderDatabase: Promise<PathfinderDatabase> | undefined = undefined;

async function initializeGlobalPathfinderDatabase(): Promise<PathfinderDatabase> {
  return new PathfinderDatabase(
      await withGlobalFeatDatabase(),
      await withGlobalAbilityDatabase(),
      await withGlobalRagePowerDatabase(),
      await withGlobalCharacterClassDatabase(),
      await withGlobalRaceDatabase(),
  );
}

export function withGlobalPathfinderDatabase(): Promise<PathfinderDatabase> {
  if (globalPathfinderDatabase === undefined) {
    globalPathfinderDatabase = initializeGlobalPathfinderDatabase();
  }
  return globalPathfinderDatabase;
}

const PathfinderDatabaseContext = createContext<PathfinderDatabase|undefined>(undefined);

export function PathfinderDatabaseContextProvider({ children}: any) {

  const empty = useMemo(() => new PathfinderDatabase(
      FeatDatabase.empty(),
      AbilityDatabase.empty(),
      RagePowerDatabase.empty(),
      CharacterClassDatabase.empty(),
      RaceDatabase.empty(),
  ), []);
  const [ database ] = useAsyncMemo(() => withGlobalPathfinderDatabase(), []);

  return (
      <FeatContextProvider>
        <AbilityContextProvider>
          <RaceContextProvider>
            <CharacterClassContextProvider>
              <RagePowerContextProvider>
                <PathfinderDatabaseContext.Provider value={database ?? empty}>
                  {children}
                </PathfinderDatabaseContext.Provider>
              </RagePowerContextProvider>
            </CharacterClassContextProvider>
          </RaceContextProvider>
        </AbilityContextProvider>
      </FeatContextProvider>
  );
}

export function usePathfinderDatabase(): PathfinderDatabase {
  const pathfinderDb = useContext(PathfinderDatabaseContext);
  if (pathfinderDb === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return pathfinderDb;
}