import * as React from "react";
import {createContext, ReactNode, useContext} from "react";
import Character from "@/data/Character.ts";

const CharacterContext = createContext<Character | undefined>(undefined);

export function useCharacter(): Character {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }
  return context;
}

interface CharacterProviderProps {
  character: Character;
  children?: ReactNode;
}

export function CharacterProvider({ character, children }: CharacterProviderProps) {
  return (
      <CharacterContext.Provider value={character}>
        {children}
      </CharacterContext.Provider>
  )
}