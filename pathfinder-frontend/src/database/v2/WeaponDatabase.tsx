import {util} from "protobufjs";
import {createContext, useContext, useEffect, useState} from "react";
import {v2} from "../../compiled";
import {Weapon, WeaponType} from "../../model/character/WeaponType";
import fetch = util.fetch;
import WeaponDatabaseDbo = v2.WeaponDatabaseDbo;
import WeaponProficiencyDbo = v2.WeaponProficiencyDbo;
import WeaponRangeDbo = v2.WeaponRangeDbo;

export class WeaponDatabase {

  static empty(): WeaponDatabase {
    return new WeaponDatabase({});
  }

  static from(database: WeaponDatabaseDbo): WeaponDatabase {
    let data: {[id: string]: WeaponType} = {};
    for (const weapon of database.WeaponTypes) {
      data[weapon.id] = new WeaponType(
          weapon.id,
          weapon.name,
          this.decodeWeaponProficiency(weapon.proficiency),
          this.decodeWeaponRange(weapon.range));
    }
    return new WeaponDatabase(data);
  }

  get all(): WeaponType[] {
    return Object.values(this.data)
    .sort((a, b) => a.name.localeCompare(b.name));
  }

  public getWeaponType(id: string): WeaponType | undefined {
    return this.data[id];
  }

  private constructor(private readonly data: {[id:string]: WeaponType}) {
  }

  private static decodeWeaponProficiency(dbo: WeaponProficiencyDbo): Weapon.Proficiency {
    switch (dbo) {
      case v2.WeaponProficiencyDbo.WEAPON_PROFICIENCY_SIMPLE: return Weapon.Proficiency.Simple;
      case v2.WeaponProficiencyDbo.WEAPON_PROFICIENCY_MARTIAL: return Weapon.Proficiency.Martial;
      case v2.WeaponProficiencyDbo.WEAPON_PROFICIENCY_EXOTIC: return Weapon.Proficiency.Exotic;
    }
    return Weapon.Proficiency.Other;
  }

  private static decodeWeaponRange(dbo: WeaponRangeDbo): Weapon.Range {
    switch (dbo) {
      case v2.WeaponRangeDbo.WEAPON_RANGE_MELEE: return Weapon.Range.Melee;
      case v2.WeaponRangeDbo.WEAPON_RANGE_REACH: return Weapon.Range.Reach;
      case v2.WeaponRangeDbo.WEAPON_RANGE_RANGED: return Weapon.Range.Ranged;
    }
    return Weapon.Range.None;
  }
}

async function loadWeaponDatabase(): Promise<WeaponDatabaseDbo> {
  return fetch('/db/WeaponDatabase.bin', { binary: true }).then(binary =>
      WeaponDatabaseDbo.decode(binary as Uint8Array));
}

function idToFilename(id: string): string {
  return id
  .replaceAll(':', '_');
}

const WeaponContext = createContext<WeaponDatabase>(WeaponDatabase.empty());

export function WeaponContextProvider({ children}: any) {
  const [ database, setDatabase ] = useState<WeaponDatabase>(WeaponDatabase.empty());
  const [ isLoading, setIsLoading ]= useState(true);

  useEffect(() => {
    loadWeaponDatabase().then(result => {
      setDatabase(WeaponDatabase.from(result));
      setIsLoading(false);
    })
    .catch(error => console.error(error));
  }, []);

  return (
      <WeaponContext.Provider value={database}>
        {children}
      </WeaponContext.Provider>
  );
}

export function useWeaponDatabase(): WeaponDatabase {
  const context = useContext(WeaponContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}