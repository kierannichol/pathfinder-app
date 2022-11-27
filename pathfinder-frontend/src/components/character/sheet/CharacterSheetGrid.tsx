import {useMemo} from "react";
import {ColProps} from "react-bootstrap";
import {DataContext} from "../../../logic/DataContext";
import Expression from "../../../logic/Expression";

type AnchorType = 'top' | 'middle' | 'bottom' | 'left' | 'center' | 'right';

interface CellProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string;
  anchor?: AnchorType|AnchorType[];
}

export function TextCell(props: ColProps) {
  return <div className={'cell--text'} {...props} />
}

export function HeaderCell({ anchor, children, ...props }: CellProps) {
  return <div className={'cell--header'} {...props}><div>{children}</div></div>
}

export function LabelCell({ anchor, ...props }: CellProps) {
  const classNames = useMemo(() => {
    const classNames = ['cell--label'];
    if (anchor) {
      if (!Array.isArray(anchor)) {
        anchor = [anchor];
      }
      classNames.push(...anchor.map(a => `cell--anchor-${a}`));
    }
    return classNames.join(' ');
  }, [anchor]);
  return <div className={classNames} {...props}/>
}

export function ValueCell({ children, label, anchor, ...props }: CellProps) {
  const classNames = useMemo(() => {
    const classNames = ['cell--value'];
    if (anchor) {
      if (!Array.isArray(anchor)) {
        anchor = [anchor];
      }
      classNames.push(...anchor.map(a => `cell--anchor-${a}`));
    }
    return classNames.join(' ');
  }, [anchor]);

  return <div className={classNames} {...props}>
    {label && <div style={ { width: '100%' }}>
      <div className={'cell--value-inner-label'}>{label}</div>
      <div className={'cell--value-inner-content'}>{children}</div>
    </div> || children}
  </div>
}

interface ExpressionColProps extends Omit<CellProps, 'children'> {
  expression: string;
  context: DataContext;
}

export function ExpressionCell({ expression, context, anchor, ...props }: ExpressionColProps) {
  const value = useMemo(() => Expression.parse(expression).resolve(context)?.asText(), [expression, context]);
  return <ValueCell {...props}>{value}</ValueCell>
}