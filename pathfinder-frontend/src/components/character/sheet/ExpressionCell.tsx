import {useMemo} from "react";
import Expression from "../../../logic/Expression";
import {useCharacterAtLevel} from "./CharacterAtLevelContext";
import SectionCell from "./SectionCell";

interface ExpressionCellProps {
  expression: string;
}

function ExpressionCell({ expression }: ExpressionCellProps) {
  const context = useCharacterAtLevel();
  const resolvedExpression = useMemo(() => Expression.parse(expression).resolve(context)?.asText() ?? '!#ERR',
      [context, expression]);

  return <SectionCell variant={'data'}>{resolvedExpression}</SectionCell>;
}

export default ExpressionCell;