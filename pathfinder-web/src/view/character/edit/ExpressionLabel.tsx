import {HTMLAttributes, useMemo} from "react";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import Expression from "@pathfinder-lib/utils/logic/Expression";

interface FormulaLabelProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  expression: string;
}

function ExpressionLabel({ expression, ...spanProps }: FormulaLabelProps) {
  const characterAtLevel = useCharacterAtLevel();

  const resolved = useMemo(() => {
    const parsed = Expression.parse(expression);
    return parsed.resolve(characterAtLevel)?.asText();
  }, [expression, characterAtLevel]);

  return <span {...spanProps}>{resolved}</span>
}

export default ExpressionLabel;