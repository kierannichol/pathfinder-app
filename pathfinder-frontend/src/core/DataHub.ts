import {Entity, EntitySummary} from "../v4/Entity";
import {IEntityDatabase} from "../v4/EntityDatabase";
import {Option, OptionMap} from "./Choice";
import Description from "./Description";

export interface IDataHub extends IEntityDatabase {
  name(id: string|undefined): string|undefined;
  description(id: string): Promise<Description>;
  options(tags: string[], ids?: string[]): OptionMap;
  option(id: string): Option|undefined;
}

export const LoadingDataHub: IDataHub = {
  name: (): string|undefined => undefined,
  description: async (): Promise<Description> => Description.empty(),
  options: (): OptionMap => Object.create({}),
  option: (): Option|undefined => undefined,
  load: async (): Promise<Entity|undefined> => undefined,
  summary: (): EntitySummary|undefined => undefined,
  find: (): EntitySummary[] => []
}