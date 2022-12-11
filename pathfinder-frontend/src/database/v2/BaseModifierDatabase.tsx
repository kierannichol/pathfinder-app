import {util} from "protobufjs";
import {RefCallback, useCallback, useEffect, useState} from "react";
import {v2} from "../../compiled";
import {Effect} from "../../model/character/Effect";
import {Modifier, ModifierSummary} from "../../model/character/Modifier";
import {decodeEffect} from "./decoder";
import fetch = util.fetch;
import ModifierDatabaseDbo = v2.ModifierDatabaseDbo;
import ModifierDetailsDbo = v2.ModifierDetailsDbo;

export function createModifierDatabaseSource(summaryDataUrl: string, detailedDataBaseUrl: string): ModifierDatabaseSource {
  return new ModifierDatabaseSource(summaryDataUrl, detailedDataBaseUrl);
}

class ModifierDatabaseSource {
  private globalModifierDatabase: BaseModifierDatabase|undefined = undefined;

  constructor(private readonly summaryDataUrl: string, private readonly detailedDataBaseUrl: string) {
  }

  public async withGlobalInstance(): Promise<BaseModifierDatabase> {
    if (this.globalModifierDatabase === undefined) {
      this.globalModifierDatabase = BaseModifierDatabase.from(await this.loadModifierDatabase(), this.detailedDataBaseUrl);
    }
    return this.globalModifierDatabase;
  }

  private async loadModifierDatabase(): Promise<ModifierDatabaseDbo> {
    const binary = await fetch(`${process.env.PUBLIC_URL}/db/${this.summaryDataUrl}.bin`, { binary: true });
    return ModifierDatabaseDbo.decode(binary as Uint8Array);
  }

  empty() {
    return BaseModifierDatabase.empty(this.detailedDataBaseUrl);
  }
}

export interface IModifierDatabase {
  get all(): ModifierSummary[];
  summary(id: string): ModifierSummary | undefined;
  load(id: string): Promise<Modifier | undefined>;
}

export class BaseModifierDatabase implements IModifierDatabase {

  static empty(detailedDataBaseUrl: string): BaseModifierDatabase {
    return new BaseModifierDatabase('',{}, detailedDataBaseUrl);
  }

  static from(database: ModifierDatabaseDbo, detailedDataBaseUrl: string): BaseModifierDatabase {
    let data: {[id: string]: ModifierSummary} = {};
    for (const modifier of database.summaries) {
      data[modifier.id] = new ModifierSummary(
          modifier.id,
          modifier.name);
    }
    return new BaseModifierDatabase(database.databaseId, data, detailedDataBaseUrl);
  }

  get all(): ModifierSummary[] {
    return Object.values(this.data)
    .sort((a, b) => a.name.localeCompare(b.name));
  }

  public summary(id: string): ModifierSummary | undefined {
    return this.data[id];
  }

  public async load(id: string): Promise<Modifier | undefined> {
    const loadId = idToFilename(id);
    return this.loadModifier(loadId).then(data => data === undefined
        ? undefined
        : new Modifier(data.id,
            data.name,
            data.descriptionText,
            data.effectText,
            data.effects.map(decodeEffect)
              .filter(x => x !== undefined)
              .map(x =>  x as Effect)));
  }

  private constructor(public readonly databaseId: string, private readonly data: {[id:string]: ModifierSummary}, private readonly detailedDataBaseUrl: string) {
  }

  private async loadModifier(id: string): Promise<ModifierDetailsDbo | undefined> {
    if (id === '') {
      return new Promise<ModifierDetailsDbo|undefined>(_ => undefined);
    }
    return fetch(`${process.env.PUBLIC_URL}/db/${this.detailedDataBaseUrl}/${idToFilename(id)}.bin`, { binary: true }).then(binary => {
      return ModifierDetailsDbo.decode(binary as Uint8Array);
    })
  }
}

function idToFilename(id: string): string {
  return id
  .replaceAll(':', '_');
}

export function useModifierFromSourceOnScreen(source: ModifierDatabaseSource, modifierId: string): [ ModifierSummary|undefined, RefCallback<HTMLDivElement> ] {
  const [ database, setDatabase ] = useState(source.empty);
  const [modifier, setModifier] = useState<ModifierSummary|undefined>(() => database.summary(modifierId));

  useEffect(() => {
    source.withGlobalInstance()
        .then(db => setDatabase(db))
        .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const modifier = database.summary(modifierId);
    setModifier(modifier);
  }, [modifierId, database]);

  const ref = useCallback((node: HTMLDivElement) => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!(modifier instanceof Modifier)) {
              database.load(modifierId).then(found => setModifier(found));
            }
          } else {
            setModifier(database.summary(modifierId));
          }
        }
    );

    if (node !== null) {
      observer.observe(node);
    } else {
      observer.disconnect();
    }
  }, [database]);

  return [ modifier, ref ];
}