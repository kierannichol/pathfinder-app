import {createContext, useContext, useMemo} from "react";
import {useAsyncMemo} from "../../app/reactHooks";
import {Ability} from "../../model/character/Ability";
import AlignmentDatabase from "../AlignmentDatabase";
import SkillDatabase from "../SkillDatabase";
import {BaseAbilityDatabase, createAbilityDatabaseSource} from "./BaseAbilityDatabase";
import {BaseModifierDatabase, createModifierDatabaseSource} from "./BaseModifierDatabase";
import {BaseSpellDatabase, createSpellDatabaseSource} from "./BaseSpellDatabase";
import {CharacterClassContextProvider, CharacterClassDatabase, withGlobalCharacterClassDatabase} from "./ClassDatabase";
import {FeatContextProvider, FeatDatabase, withGlobalFeatDatabase} from "./FeatDatabase";
import {RaceContextProvider, RaceDatabase, withGlobalRaceDatabase} from "./RaceDatabase";
import Type = Ability.Type;

const AbilityDataSource = createAbilityDatabaseSource("AbilityDatabase", "ability");

const WitchHexDataSource = createSpellDatabaseSource("WitchHexDatabase", "witch_hex");
const BardicMasterpieceDataSource = createSpellDatabaseSource("BardicMasterpieceDatabase", "masterpiece");

const SorcererBloodlineDataSource = createModifierDatabaseSource("SorcererBloodlineDatabase", "sorcerer");

export class PathfinderDatabase {

  public constructor(public readonly featDatabase: FeatDatabase,
                     public readonly abilityDatabase: BaseAbilityDatabase,
                     public readonly classDb: CharacterClassDatabase,
                     public readonly raceDb: RaceDatabase,
                     public readonly witchHexDatabase: BaseSpellDatabase,
                     public readonly bardicMasterpieceDatabase: BaseSpellDatabase,
                     public readonly sorcererBloodlineDataSource: BaseModifierDatabase) {
  }

  public name(id: string|undefined): string|undefined {
    if (id === undefined) {
      return undefined;
    }
    const [type] = id.split(':');
    switch (type) {
      case 'feat':
        return this.featDatabase.summary(id)?.name;
      case 'ability':
        if (id === 'ability:channel_negative_energy') {
          return 'Channel Negative Energy';
        }
        return this.abilityDatabase.summary(id)?.name;
      case 'class':
        return this.classDb.summary(id)?.name;
      case 'rage_power':
        return this.abilityDatabase.summary(id)?.name;
      case 'race':
        return this.raceDb.summary(id)?.name;
      case 'skill':
        return SkillDatabase.find(id)?.name;
      case 'alignment':
        return AlignmentDatabase.find(id)?.name;
      case 'rogue_talent':
        return this.abilityDatabase.summary(id)?.name;
      case 'magus_arcana':
        return this.abilityDatabase.summary(id)?.name;
      case 'alchemist_discovery':
        return this.abilityDatabase.summary(id)?.name;
      case 'witch_hex':
        return this.witchHexDatabase.summary(id)?.name;
      case 'masterpiece':
        return this.bardicMasterpieceDatabase.summary(id)?.name;
      case 'bloodline':
        return this.sorcererBloodlineDataSource.summary(id)?.name;
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

  public async description(id: string|undefined): Promise<string|undefined> {
    if (id === undefined) {
      return undefined;
    }
    const [type] = id.split(':');
    switch (type) {
      case 'feat':
        return (await this.featDatabase.get(id))?.description;
      case 'ability':
      case 'ragepower':
      case 'roguetalent':
      case 'magusarcana':
      case 'alchemistdiscovery':
        return (await this.abilityDatabase.load(id))?.description;
      case 'witch_hex':
        return (await this.witchHexDatabase.load(id))?.description;
      case 'masterpiece':
        return (await this.bardicMasterpieceDatabase.load(id))?.description;
    }

    console.warn("No description found for " + id);
    return undefined;
  }

  ability(id: string) {
    if (id === undefined) {
      return undefined;
    }
    const [type] = id.split(':')

    if (type === 'feat') {
      return this.featDatabase.summary(id)?.name;
    }

    if (id === 'ability:channel_negative_energy') {
      return new Ability('ability:channel_negative_energy',
          'Channel Negative Energy', Type.Su, "", "");
    }

    const name = this.abilityDatabase.summary(id)?.name;
    if (!name) {
      console.warn("No ability found for " + id);
    }
    return name;
  }
}

let globalPathfinderDatabase: Promise<PathfinderDatabase> | undefined = undefined;

async function initializeGlobalPathfinderDatabase(): Promise<PathfinderDatabase> {
  const allDatabases = await Promise.all([
      withGlobalFeatDatabase(),
      AbilityDataSource.withGlobalInstance(),
      withGlobalCharacterClassDatabase(),
      withGlobalRaceDatabase(),
      WitchHexDataSource.withGlobalInstance(),
      BardicMasterpieceDataSource.withGlobalInstance(),
      SorcererBloodlineDataSource.withGlobalInstance(),
  ]);

  return new PathfinderDatabase(
      ...allDatabases
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
      AbilityDataSource.empty(),
      CharacterClassDatabase.empty(),
      RaceDatabase.empty(),
      WitchHexDataSource.empty(),
      BardicMasterpieceDataSource.empty(),
      SorcererBloodlineDataSource.empty(),
  ), []);
  const [ database ] = useAsyncMemo(() => withGlobalPathfinderDatabase(), []);

  return (
      <FeatContextProvider>
          <RaceContextProvider>
            <CharacterClassContextProvider>
                <PathfinderDatabaseContext.Provider value={database ?? empty}>
                  {children}
                </PathfinderDatabaseContext.Provider>
            </CharacterClassContextProvider>
          </RaceContextProvider>
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