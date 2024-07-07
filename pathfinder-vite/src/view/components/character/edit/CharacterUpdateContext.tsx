import {createContext, useContext} from "react";
import {ChoiceRef} from "@/data/v8/Choice.ts";

export interface CharacterUpdate {
  select(choice: ChoiceRef, value: string|string[]): void;
}

export const CharacterUpdateContext = createContext<CharacterUpdate|undefined>(undefined);

export function useCharacterUpdate(): CharacterUpdate {
  const context = useContext(CharacterUpdateContext);
  if (context === undefined) {
    throw Error("Must be used in a provider");
  }
  return context;
}