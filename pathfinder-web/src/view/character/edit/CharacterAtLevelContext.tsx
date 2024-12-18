import * as React from "react";
import {createContext, ReactNode, useContext, useMemo} from "react";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {useCharacter} from "@/view/character/edit/CharacterContext.tsx";

const CharacterAtLevelContext = createContext<CharacterAtLevel | undefined>(undefined);

export function useCharacterAtLevel(level?: number, withoutChoicePath?: string): CharacterAtLevel {
  const context = useContext(CharacterAtLevelContext);
  const character = useCharacter();

  return useMemo(() => {
    if (!level) {
      if (!context) {
        throw new Error("useCharacterAtLevel must be used within a CharacterAtLevelProvider");
      }
      return context;
    }
    return character.atLevel(level, withoutChoicePath);
  }, [character, level, context]);
}

interface CharacterAtLevelProviderProps {
  level: number | 'current';
  children?: ReactNode;
}

export function CharacterAtLevelProvider({ level, children }: CharacterAtLevelProviderProps) {
  const character = useCharacter();
  const characterAtLevel = useMemo(() => {
    if (level === 'current') {
      level = parseInt(character.selected('current_level') as string);
    }
    return character.atLevel(level);
  }, [character, level]);

  return (
      <CharacterAtLevelContext.Provider value={characterAtLevel}>
        {children}
      </CharacterAtLevelContext.Provider>
  )
}