import {createContext, ReactNode, useContext} from "react";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";

const CharacterUpdateContext = createContext<ChoiceSelectionHandler | undefined>(undefined);

export function useCharacterUpdate(): ChoiceSelectionHandler {
  const context = useContext(CharacterUpdateContext);
  if (!context) {
    throw new Error("useCharacterUpdate must be used within a CharacterUpdateProvider");
  }
  return context;
}

interface CharacterUpdateProviderProps {
  updateFn: ChoiceSelectionHandler;
  children?: ReactNode;
}

export function CharacterUpdateProvider({updateFn, children}: CharacterUpdateProviderProps) {
  return (
      <CharacterUpdateContext.Provider value={updateFn}>
        {children}
      </CharacterUpdateContext.Provider>
  );
}