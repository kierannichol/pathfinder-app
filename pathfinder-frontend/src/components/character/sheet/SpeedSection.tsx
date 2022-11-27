import {Col, Row} from "react-bootstrap";
import CharacterAtLevelProps from "./CharacterAtLevelProps";
import {ExpressionCell, LabelCell} from "./CharacterSheetGrid";
import Section from "./Section";

export default function SpeedSection({ characterAtLevel }: CharacterAtLevelProps) {
  return <Section>
    <Row>
      <Col className='cell'>
        <LabelCell>Speed</LabelCell>
      </Col>
      <Col className='cell'>
        <ExpressionCell expression='{@speed:land}' context={characterAtLevel} />
      </Col>
      <Col className='cell'>
        <ExpressionCell expression='{@speed:land}' context={characterAtLevel} />
      </Col>
    </Row>
    <Row>
      <Col className='cell'>
        <ExpressionCell expression='{@speed:fly}' context={characterAtLevel} />
      </Col>
      <Col className='cell'>
        <ExpressionCell expression='{@speed:swim}' context={characterAtLevel} />
      </Col>
      <Col className='cell'>
        <ExpressionCell expression='{@speed:climb}' context={characterAtLevel} />
      </Col>
      <Col className='cell'>
        <ExpressionCell expression='{@speed:burrow}' context={characterAtLevel} />
      </Col>
    </Row>
  </Section>
}