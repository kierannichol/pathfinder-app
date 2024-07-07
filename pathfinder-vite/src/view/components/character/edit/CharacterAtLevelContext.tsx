import {createContext, useContext} from "react";
import CharacterAtLevel from "@/data/v8/CharacterAtLevel.ts";

export const CharacterAtLevelContext = createContext<CharacterAtLevel|undefined>(undefined);

export function useCharacterAtLevel(): CharacterAtLevel {
  const context = useContext(CharacterAtLevelContext);
  if (context === undefined) {
    throw Error("Must be used in a provider");
  }
  return context;
}