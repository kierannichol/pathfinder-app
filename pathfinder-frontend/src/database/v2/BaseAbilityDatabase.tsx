import {util} from "protobufjs";
import {RefCallback, useCallback, useEffect, useState} from "react";
import {v2} from "../../compiled";
import {Ability, AbilitySummary} from "../../model/character/Ability";
import fetch = util.fetch;
import AbilityDatabaseDbo = v2.AbilityDatabaseDbo;
import AbilityTypeDbo = v2.AbilityTypeDbo;


export function createAbilityDatabaseSource(summaryDataUrl: string, detailedDataBaseUrl: string): AbilityDatabaseSource {
  return new AbilityDatabaseSource(summaryDataUrl, detailedDataBaseUrl);
}

class AbilityDatabaseSource {
  private globalAbilityDatabase: BaseAbilityDatabase|undefined = undefined;

  constructor(private readonly summaryDataUrl: string, private readonly detailedDataBaseUrl: string) {
  }

  public async withGlobalInstance(): Promise<BaseAbilityDatabase> {
    if (this.globalAbilityDatabase === undefined) {
      this.globalAbilityDatabase = BaseAbilityDatabase.from(await this.loadAbilityDatabase(), this.detailedDataBaseUrl);
    }
    return this.globalAbilityDatabase;
  }

  private async loadAbilityDatabase(): Promise<AbilityDatabaseDbo> {
    const binary = await fetch(`${process.env.PUBLIC_URL}/db/${this.summaryDataUrl}.bin`, { binary: true });
    return AbilityDatabaseDbo.decode(binary as Uint8Array);
  }

  empty() {
    return BaseAbilityDatabase.empty(this.detailedDataBaseUrl);
  }
}

export class BaseAbilityDatabase {

  static empty(detailedDataBaseUrl: string): BaseAbilityDatabase {
    return new BaseAbilityDatabase({}, detailedDataBaseUrl);
  }

  static from(database: AbilityDatabaseDbo, detailedDataBaseUrl: string): BaseAbilityDatabase {
    let data: {[id: string]: AbilitySummary} = {};
    for (const ability of database.abilitySummaries) {
      data[ability.id] = new AbilitySummary(ability.id,
          ability.name,
          convertAbilityType(ability.type),
          ability.prerequisitesFormula);
    }
    return new BaseAbilityDatabase(data, detailedDataBaseUrl);
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
    return this.loadAbility(loadId).then(data => data === undefined
        ? undefined
        : new Ability(data.id,
            data.name,
            convertAbilityType(data.type),
            data.prerequisitesFormula,
            data.description));
  }

  private constructor(private readonly data: {[id:string]: AbilitySummary}, private readonly detailedDataBaseUrl: string) {
  }

  private async loadAbility(id: string): Promise<v2.AbilityDataDbo | undefined> {
    if (id === '') {
      return new Promise<v2.AbilityDataDbo|undefined>(_ => undefined);
    }
    return fetch(`${process.env.PUBLIC_URL}/db/${this.detailedDataBaseUrl}/${idToFilename(id)}.bin`, { binary: true }).then(binary => {
      return v2.AbilityDataDbo.decode(binary as Uint8Array);
    })
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

function idToFilename(id: string): string {
  return id
  .replaceAll(':', '_');
}

export function useAbilityFromSourceOnScreen(source: AbilityDatabaseSource, abilityId: string): [ AbilitySummary|undefined, RefCallback<HTMLDivElement> ] {
  const [ database, setDatabase ] = useState(source.empty);
  const [ability, setAbility] = useState<AbilitySummary|undefined>(() => database.summary(abilityId));

  useEffect(() => {
    source.withGlobalInstance()
        .then(db => setDatabase(db))
        .catch(error => console.error(error));
  }, []);

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