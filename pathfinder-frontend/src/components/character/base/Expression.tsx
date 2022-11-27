import {DetailedHTMLProps, HTMLAttributes, useMemo} from "react";
import {DataContext} from "../../../logic/DataContext";
import {default as LogicExpression} from "../../../logic/Expression";

interface ExpressionProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'children'> {
  expression: string;
  context?: DataContext;
}

export default function Expression({ expression, context, ...spanProps }: ExpressionProps) {
  const parsed = useMemo(() => LogicExpression.parse(expression), [expression]);
  const resolved = useMemo(() => parsed.resolve(context)?.asText(), [parsed, context]);
  return <span {...spanProps}>{resolved}</span>
}