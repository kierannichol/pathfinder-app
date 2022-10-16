import {useMemo} from "react";
import {Attribute} from "../../model/character/Attribute";
import {Feat} from "../../model/character/Feat";
import {AbilityContextProvider, AbilityDatabase, useAbilityDatabase} from "./AbilityDatabase";
import {FeatContextProvider, FeatDatabase, useFeatDatabase} from "./FeatDatabase";

export class PathfinderDatabase {

  public constructor(private readonly featDb: FeatDatabase,
                     private readonly abilityDb: AbilityDatabase) {
  }

  public getAttribute<T extends Attribute = Attribute>(id: string): T | undefined {
    if (id.startsWith('feat:')) {
      return this.featDb.summary(id) as T | undefined;
    }
    if (id.startsWith('ability:')) {
      return this.abilityDb.summary(id) as T | undefined;
    }
    throw Error("unknown trait: " + id);
  }

  public async loadFeat(id: string): Promise<Feat | undefined> {
    return this.featDb.get(id);
  }

  public async loadAbility(id: string): Promise<Feat | undefined> {
    return this.featDb.get(id);
  }
}

export function PathfinderDatabaseContextProvider({ children}: any) {
  return (
      <FeatContextProvider>
        <AbilityContextProvider>
          {children}
        </AbilityContextProvider>
      </FeatContextProvider>
  );
}

export function usePathfinderDatabase(): PathfinderDatabase {
  const featDb = useFeatDatabase();
  const abilityDb = useAbilityDatabase();
  return useMemo(() => new PathfinderDatabase(featDb, abilityDb),
      [featDb, abilityDb]);
}