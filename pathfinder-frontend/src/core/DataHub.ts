import {Option, OptionMap} from "./Choice";
import Description from "./Description";

export interface IDataHub {
  name(id: string|undefined): string|undefined;
  description(id: string): Promise<Description>;
  options(tags: string[], ids?: string[]): OptionMap;
  option(id: string): Option|undefined;
}

export const LoadingDataHub: IDataHub = {
  name: (): string|undefined => undefined,
  description: async (): Promise<Description> => Description.empty(),
  options: (): OptionMap => Object.create({}),
  option: (): Option|undefined => undefined
}