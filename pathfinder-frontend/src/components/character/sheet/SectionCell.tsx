import {useMemo} from "react";
import {Col, ColProps} from "react-bootstrap";

interface SectionCellProps extends ColProps {
  variant?: 'basic' | 'data' | 'heading' | 'label' | 'math-operator'
}

function SectionCell({ variant = 'data', ...props }: SectionCellProps) {
  const className = useMemo(() => {
    const classNames = [ 'cell' ];
    classNames.push(variant + '-cell');
    return classNames.join(' ');
  }, [variant]);

  return <Col className={className} {...props} />
}

export default SectionCell;