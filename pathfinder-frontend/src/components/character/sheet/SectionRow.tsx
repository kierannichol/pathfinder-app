import {Row, RowProps} from "react-bootstrap";

function SectionRow(props: RowProps) {
  return <Row className={'section-row g-0'} {...props} />
}

export default SectionRow;