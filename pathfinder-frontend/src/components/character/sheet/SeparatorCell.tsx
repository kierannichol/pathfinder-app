import {ColProps} from "react-bootstrap";

interface SectionCellProps extends ColProps {
}

function SeparatorCell({ ...props }: SectionCellProps) {
  return <div className={'separator-cell'} {...props} />
}

export default SeparatorCell;