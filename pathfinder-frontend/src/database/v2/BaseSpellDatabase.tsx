import {util} from "protobufjs";
import {RefCallback, useCallback, useEffect, useState} from "react";
import {v2} from "../../compiled";
import {Ability} from "../../model/character/Ability";
import {Spell, SpellSummary} from "../../model/character/Spell";
import fetch = util.fetch;
import SpellTypeDbo = v2.AbilityTypeDbo;
import SpellDatabaseDbo = v2.SpellDatabaseDbo;

export function createSpellDatabaseSource(summaryDataUrl: string, detailedDataBaseUrl: string): SpellDatabaseSource {
  return new SpellDatabaseSource(summaryDataUrl, detailedDataBaseUrl);
}

class SpellDatabaseSource {
  private globalSpellDatabase: BaseSpellDatabase|undefined = undefined;

  constructor(private readonly summaryDataUrl: string, private readonly detailedDataBaseUrl: string) {
  }

  public async withGlobalInstance(): Promise<BaseSpellDatabase> {
    if (this.globalSpellDatabase === undefined) {
      this.globalSpellDatabase = BaseSpellDatabase.from(await this.loadSpellDatabase(), this.detailedDataBaseUrl);
    }
    return this.globalSpellDatabase;
  }

  private async loadSpellDatabase(): Promise<SpellDatabaseDbo> {
    const binary = await fetch(`${process.env.PUBLIC_URL}/db/${this.summaryDataUrl}.bin`, { binary: true });
    return SpellDatabaseDbo.decode(binary as Uint8Array);
  }

  empty() {
    return BaseSpellDatabase.empty(this.detailedDataBaseUrl);
  }
}

export class BaseSpellDatabase {

  static empty(detailedDataBaseUrl: string): BaseSpellDatabase {
    return new BaseSpellDatabase({}, detailedDataBaseUrl);
  }

  static from(database: SpellDatabaseDbo, detailedDataBaseUrl: string): BaseSpellDatabase {
    let data: {[id: string]: SpellSummary} = {};
    for (const spell of database.spellSummaries) {
      data[spell.id] = new SpellSummary(spell.id,
          spell.name,
          convertAbilityType(spell.type),
          spell.prerequisitesFormula);
    }
    return new BaseSpellDatabase(data, detailedDataBaseUrl);
  }

  get all(): SpellSummary[] {
    return Object.values(this.data)
    .sort((a, b) => a.name.localeCompare(b.name));
  }

  public summary(id: string): SpellSummary | undefined {
    return this.data[id];
  }

  public async load(id: string): Promise<Spell | undefined> {
    const loadId = idToFilename(id);
    return this.loadSpell(loadId).then(data => data === undefined
        ? undefined
        : new Spell(data.id,
            data.name,
            convertAbilityType(data.type),
            data.prerequisitesFormula,
            data.description,
            data.effect));
  }

  private constructor(private readonly data: {[id:string]: SpellSummary}, private readonly detailedDataBaseUrl: string) {
  }

  private async loadSpell(id: string): Promise<v2.SpellDataDbo | undefined> {
    if (id === '') {
      return new Promise<v2.SpellDataDbo|undefined>(_ => undefined);
    }
    return fetch(`${process.env.PUBLIC_URL}/db/${this.detailedDataBaseUrl}/${idToFilename(id)}.bin`, { binary: true }).then(binary => {
      return v2.SpellDataDbo.decode(binary as Uint8Array);
    })
  }
}

function convertAbilityType(dataType: SpellTypeDbo): Ability.Type {
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

export function useSpellFromSourceOnScreen(source: SpellDatabaseSource, spellId: string): [ SpellSummary|undefined, RefCallback<HTMLDivElement> ] {
  const [ database, setDatabase ] = useState(source.empty);
  const [spell, setSpell] = useState<SpellSummary|undefined>(() => database.summary(spellId));

  useEffect(() => {
    source.withGlobalInstance()
        .then(db => setDatabase(db))
        .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const spell = database.summary(spellId);
    setSpell(spell);
  }, [spellId, database]);

  const ref = useCallback((node: HTMLDivElement) => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!(spell instanceof Spell)) {
              database.load(spellId).then(found => setSpell(found));
            }
          } else {
            setSpell(database.summary(spellId));
          }
        }
    );

    if (node !== null) {
      observer.observe(node);
    } else {
      observer.disconnect();
    }
  }, [database]);

  return [ spell, ref ];
}