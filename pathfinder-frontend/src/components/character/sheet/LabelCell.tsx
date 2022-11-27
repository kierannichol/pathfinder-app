import {ColProps} from "react-bootstrap";
import SectionCell from "./SectionCell";

function LabelCell(props: ColProps) {
  return <SectionCell variant={"label"} {...props} />
}

export default LabelCell;