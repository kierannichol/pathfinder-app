import {OptionMap} from "./Choice";
import Description from "./Description";

export interface IDataHub {
  name(id: string|undefined): string|undefined;
  description(id: string): Promise<Description>;
  options(tags: string[]): OptionMap;
}

export const LoadingDataHub: IDataHub = {
  name: (id: string|undefined): string|undefined => undefined,
  description: async (id: string): Promise<Description> => Description.empty(),
  options: (tags: string[]): OptionMap => Object.create({})
}