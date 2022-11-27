import {Row, RowProps} from "react-bootstrap";

function LabelRow(props: RowProps) {
  return <Row className={'section-row label-row g-0'} {...props} />
}

export default LabelRow;