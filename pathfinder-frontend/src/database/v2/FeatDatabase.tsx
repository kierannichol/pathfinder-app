import {util} from "protobufjs";
import React, {createContext, RefCallback, useCallback, useContext, useEffect, useState} from "react";
import {v2} from "../../compiled";
import {Formula} from "../../logic/Formula";
import Resolvable from "../../logic/Resolvable";
import {Feat, FeatSummary} from "../../model/character/Feat";
import fetch = util.fetch;
import FeatDatabaseDbo = v2.FeatDatabaseDbo;
import FeatDbo = v2.FeatDbo;

export class FeatDatabase {

  static empty(): FeatDatabase {
    return new FeatDatabase({}, false);
  }

  static from(database: FeatDatabaseDbo): FeatDatabase {
    let data: {[id: string]: FeatSummary} = {};
    for (const feat of database.FeatSummaries) {
      data[feat.id] = this.convertSummary(feat);
    }
    return new FeatDatabase(data, true);
  }

  get all(): FeatSummary[] {
    return Object.values(this.data);
  }

  public summary(id: string): FeatSummary | undefined {
    const [ featId, optionId ] = id.split("#");
    if (optionId !== undefined) {
      return this.data[featId];
    }

    const feat = this.data[featId];
    if (feat === undefined) {
      return undefined;
    }

    let name = feat.name;
    let prerequisiteFormulaText = feat.prerequisitesFormulaText;
    const option = feat.options.find(o => o.id === id);
    if (option !== undefined) {
      name = name + `: ${option.name}`;
      prerequisiteFormulaText = option.prerequisitesFormulaText;
    }

    const prerequisiteFormula = prerequisiteFormulaText === ''
        ? Resolvable.just(true)
        : Formula.parse(prerequisiteFormulaText);

    return new FeatSummary(id, name, feat.types, prerequisiteFormula, prerequisiteFormulaText, feat.options);
  }

  public async get(id: string): Promise<Feat | undefined> {
    const [ featId ] = id.split("#");

    return loadFeat(featId)
      .then(loaded => {
        return loaded !== undefined
            ? FeatDatabase.convertData(loaded, id)
            : undefined;
      });
  }

  private constructor(private readonly data: {[id:string]: FeatSummary}, public readonly isLoaded: boolean) {
  }

  private static convertSummary(feat: v2.FeatSummaryDbo): FeatSummary {
    const types = feat.types.map(dataType => dataType.valueOf());

    const prerequisiteFormula = feat.prerequisitesFormula === ''
        ? Resolvable.just(true)
        : Formula.parse(feat.prerequisitesFormula);

    return new FeatSummary(feat.id, feat.name, types, prerequisiteFormula, feat.prerequisitesFormula,
        feat.options.map(option => this.convertOption(option)));
  }

  private static convertData(feat: v2.FeatDbo, optionId: string|undefined = undefined): Feat {
    let id = feat.id;
    let name = feat.name;
    let prerequisiteFormulaText = feat.prerequisitesFormula;
    const types = feat.types.map(dataType => dataType.valueOf());
    const option = feat.options.find(o => o.id === id + '#' + optionId);
    if (option !== undefined) {
      id = option.id;
      name = name + `: ${option.name}`;
      prerequisiteFormulaText = option.prerequisitesFormula;
    }

    const prerequisiteFormula = prerequisiteFormulaText === ''
        ? Resolvable.just(true)
        : Formula.parse(prerequisiteFormulaText);

    return new Feat(id, name, types,
          feat.description, feat.prerequisites, feat.benefit, feat.normal, feat.special, feat.note, prerequisiteFormula, prerequisiteFormulaText,
          feat.options.map(option => this.convertOption(option)));
  }

  private static convertOption(option: v2.FeatOptionDbo): Feat.Option {
    return new Feat.Option(option.id, option.name, option.prerequisitesFormula);
  }
}

async function loadFeatDatabase(): Promise<FeatDatabaseDbo> {
  return fetch('/db/FeatDatabase.bin', { binary: true }).then(binary =>
      FeatDatabaseDbo.decode(binary as Uint8Array));
}

async function loadFeat(id: string): Promise<FeatDbo | undefined> {
  if (id === '') {
    return new Promise<FeatDbo|undefined>(_ => undefined);
  }
  const loadId = id.replace(':', '_');
  return fetch(`/db/feat/${loadId}.bin`, { binary: true }).then(binary => {
    return FeatDbo.decode(binary as Uint8Array);
  })
}

const FeatContext = createContext<FeatDatabase>(FeatDatabase.empty());

export function FeatContextProvider({ children }: any) {
  const [ database, setDatabase ] = useState<FeatDatabase>(FeatDatabase.empty());

  useEffect(() => {
    loadFeatDatabase().then(result => setDatabase(FeatDatabase.from(result)))
    .catch(error => console.error(error));
  }, []);

  return (
      <FeatContext.Provider value={database}>
          {children}
          </FeatContext.Provider>
  );
}

export function useFeatDatabase(): FeatDatabase {
  const context = useContext(FeatContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

export function useFeatOnScreen(featId: string): [ FeatSummary|undefined, RefCallback<HTMLDivElement> ] {
  const database = useFeatDatabase();
  const [feat, setFeat] = useState<FeatSummary|undefined>(() => database.summary(featId));

  useEffect(() => {
    setFeat(database.summary(featId));
  }, [featId, database]);

  const ref = useCallback((node: HTMLDivElement) => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!(feat instanceof Feat)) {
              database.get(featId).then(found => setFeat(found));
            }
          } else {
            setFeat(database.summary(featId));
          }
        }
    );

    if (node !== null) {
      observer.observe(node);
    } else {
      observer.disconnect();
    }
  }, [database]);

  return [ feat, ref ];
}