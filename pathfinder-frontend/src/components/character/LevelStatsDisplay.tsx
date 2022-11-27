import {Col, Container, Row} from "react-bootstrap";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import "./LevelStatsDisplay.css";

interface LevelStatsDisplayProps {
  characterAtLevel: CharacterAtLevel
}

function LevelStatsDisplay({characterAtLevel}: LevelStatsDisplayProps) {

  return (<Container className={"level-stats-display"}>
    <Row>
      <Col className={"header"}>BAB</Col>
      <Col className={"header"}>Fortitude</Col>
      <Col className={"header"}>Reflex</Col>
      <Col className={"header"}>Will</Col>
    </Row>
    <Row>
      <Col className={"numeric-value"}>{characterAtLevel.resolve('{signed(@bab)}')?.asText()}</Col>
      <Col className={"numeric-value"}>{characterAtLevel.resolve('{signed(@fort:base)}')?.asText()}</Col>
      <Col className={"numeric-value"}>{characterAtLevel.resolve('{signed(@reflex:base)}')?.asText()}</Col>
      <Col className={"numeric-value"}>{characterAtLevel.resolve('{signed(@will:base)}')?.asText()}</Col>
    </Row>
  </Container>);
}

export default LevelStatsDisplay;