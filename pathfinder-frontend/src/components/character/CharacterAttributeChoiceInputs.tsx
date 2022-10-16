import {Button, Col, InputGroup, Row} from "react-bootstrap";
import CharacterNumericInput from "./base/CharacterNumericInput";
import CharacterModifierTextbox from "./base/CharacterModifierTextbox";
import {Character} from "../../model/character/Character";
import ValidationError from "../../model/character/ValidationError";
import {useState} from "react";
import TextLookup from "../../model/TextLookup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export type Props = {
  character: Character
  onchange: (character: Character) => void;
};

export default function CharacterAttributeChoiceInputs(props: Props) {
  const character = props.character;
  const character0 = character.atLevel(0);
  const onchange = props.onchange;
  return (<div>
    <Row>
      <Col lg={3} xl={2}></Col>
      <Col className="header text-center">Base</Col>
      <Col className="header text-center">Final</Col>
      <Col className="header text-center">Modifier</Col>
    </Row>
    {Character.ABILITIES
    .map(attribute => <CharacterAttributeRow
        key={`attribute_${attribute}`}
        attributeName={attribute}
        baseValue={character0.get(`${attribute}_base`)?.asText() ?? ''}
        scoreValue={character0.get(`${attribute}_score`)?.asText() ?? ''}
        modifierValue={character0.get(`${attribute}_mod`)?.asText() ?? ''}
        onchange={value => onchange(character.select(`level0:${attribute}_base`, value))}
      />)}
  </div>)
}

export type CharacterAttributeRowProps = {
  attributeName: string;
  baseValue: string;
  scoreValue: string;
  modifierValue: string;
  onchange: (value: string) => void;
}

function CharacterAttributeRow(props: CharacterAttributeRowProps) {
  const [ validationError, setValidationError ] = useState<string|null>(null);
  const attributeName = props.attributeName;
  const baseValue = props.baseValue;
  const scoreValue = props.scoreValue;
  const modifierValue = props.modifierValue;

  const onchange = (value: string) => {
    try {
      setValidationError(null);
      props.onchange(value);
    } catch (error) {
      if (!(error instanceof ValidationError)) {
        throw error;
      }
      setValidationError(error.description);
    }
  };

  const onMinus = (_: any) => {
    onchange((parseInt(baseValue) - 1).toString());
  }

  const onPlus = (_: any) => {
    onchange((parseInt(baseValue) + 1).toString());
  }

  return (<Row>
    <Col lg={3} xl={2}><label>{TextLookup.get(`ABILITY_${attributeName}_NAME_SHORT`)}</label></Col>
    <Col>
      <InputGroup hasValidation={true}>
        <Button onClick={onMinus}><FontAwesomeIcon icon={faMinus} /></Button>
        <CharacterNumericInput
          value={baseValue}
          isInvalid={validationError != null}
          onchange={onchange} />
        <Button onClick={onPlus}><FontAwesomeIcon icon={faPlus} /></Button>
      </InputGroup>
      {validationError != null && <div className="invalid-feedback">{validationError}</div>}
    </Col>
    <Col>
      <CharacterNumericInput
          value={scoreValue}
          readonly={true} />
    </Col>
    <Col>
      <CharacterModifierTextbox
          value={modifierValue} />
    </Col>
  </Row>);
}