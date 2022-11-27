import {createContext, ReactNode, useContext} from "react";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";

const CharacterAtLevelContext = createContext<CharacterAtLevel|undefined>(undefined);

interface CharacterAtLevelContextProviderProps {
  characterAtLevel: CharacterAtLevel;
  children: ReactNode;
}

export function CharacterAtLevelContextProvider({ characterAtLevel, children }: CharacterAtLevelContextProviderProps) {
  return <CharacterAtLevelContext.Provider value={characterAtLevel}>
    {children}
  </CharacterAtLevelContext.Provider>
}

export function useCharacterAtLevel(): CharacterAtLevel {
  const context = useContext(CharacterAtLevelContext);
  if (context === undefined) {
    throw new Error("useCharacterAtLevel must be used in a CharacterAtLevelContextProvider");
  }
  return context;
}