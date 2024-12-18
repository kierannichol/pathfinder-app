import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {ChoiceRef} from "@/data/Choice.ts";
import {useMemo} from "react";

function useChoiceValue(characterAtLevel: CharacterAtLevel, choiceRef: ChoiceRef, index?: number): string | undefined {
  return useMemo(() => {
        if (!choiceRef) {
          return undefined;
        }
        const selectedValues = characterAtLevel?.selected(choiceRef);
        if (selectedValues instanceof Array) {
          return selectedValues[index ?? 0];
        }
        return selectedValues;
      },
      [characterAtLevel, choiceRef]);
}

export default useChoiceValue;