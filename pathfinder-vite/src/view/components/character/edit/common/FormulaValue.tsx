import {useMemo} from "react";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {Formula} from "@kierannichol/formula-js";

interface FormulaValueProps {
  formula: string;
}

export function FormulaValue({ formula }: FormulaValueProps) {
  const character = useCharacterAtLevel();
  const value = useMemo(() => Formula.parse(formula).resolve(character)?.asText() ?? '',
      [formula, character]);
  return <span>{value}</span>
}