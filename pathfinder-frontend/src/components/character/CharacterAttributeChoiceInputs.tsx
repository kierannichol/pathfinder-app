import {useMemo, useState} from "react";
import {Container} from "react-bootstrap";
import {Character} from "../../model/character/Character";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import ValidationError from "../../model/character/ValidationError";
import TextLookup from "../../model/TextLookup";
import NumberSelect from "../common/NumberSelect";
import "./CharacterAttributeChoiceInputs.scss";

export type CharacterAttributeChoiceInputsProps = {
  character: Character;
  characterAtLevel: CharacterAtLevel;
  onCommit: (character: Promise<Character>) => void;
};

export default function CharacterAttributeChoiceInputs(
    { character, characterAtLevel, onCommit }: CharacterAttributeChoiceInputsProps) {

  return (<Container className={'pf-attribute-choice-inputs'}>
    {Character.ABILITIES
    .map(attribute => <CharacterAttributeRow
        key={`attribute_${attribute}`}
        attributeName={attribute}
        baseValue={characterAtLevel.get(`${attribute}:base`)?.asText() ?? ''}
        scoreValue={characterAtLevel.get(`${attribute}_score`)?.asText() ?? ''}
        modifierValue={characterAtLevel.get(`${attribute}_mod`)?.asText() ?? ''}
        onCommit={value => onCommit(character.select(`level0:${attribute}_base`, value))}
      />)}
  </Container>)
}

export type CharacterAttributeRowProps = {
  attributeName: string;
  baseValue: string;
  scoreValue: string;
  modifierValue: string;
  onCommit: (value: string) => void;
}

function CharacterAttributeRow(
    { attributeName, baseValue, scoreValue, modifierValue, onCommit }: CharacterAttributeRowProps) {
  const [ validationError, setValidationError ] = useState<string|null>(null);

  const handleCommit = (value: string) => {
    try {
      setValidationError(null);
      onCommit(value);
    } catch (error) {
      if (!(error instanceof ValidationError)) {
        throw error;
      }
      setValidationError(error.description);
    }
  };

  const handleBaseValueChanged = (value: string) => {
    handleCommit(value);
  }

  const attributeLabel = useMemo(() => TextLookup.get(`ABILITY_${attributeName}_NAME_SHORT`), [attributeName]);
  const modifierLabel = useMemo(() => modifierValue.startsWith('-') ? modifierValue : `+${modifierValue}`, [modifierValue]);
  const bonusValue = useMemo(() => parseInt(scoreValue) - parseInt(baseValue), [scoreValue, baseValue]);
  const bonusLabel = useMemo(() => bonusValue === 0 ? <div className="bonus-value"/> : <div className={bonusValue < 0 ? 'bonus-value--minus' : 'bonus-value--plus'}>{bonusValue < 0 ? `${bonusValue}` : `+${bonusValue}`}</div>, [bonusValue]);

  return <div className={'attribute-score-row'}>
    <label className={'attribute-score-label'}>{attributeLabel}</label>
    <NumberSelect defaultValue={baseValue}
                  min={7}
                  max={20}
                  onChange={handleBaseValueChanged} />
    {/*<Button className={'base-value-minus'} onClick={onMinus}><FontAwesomeIcon icon={faMinus} /></Button>*/}
    {/*<div className={'base-value'}>{baseValue}</div>*/}
    {/*<Button className={'base-value-plus'} onClick={onPlus}><FontAwesomeIcon icon={faPlus} /></Button>*/}

    {bonusLabel}
    <div className="score-value">{scoreValue}</div>
    <div className="modifier-value">({modifierLabel})</div>
  </div>

  // return (<Row className={'flex-nowrap'}>
  //   <Col xs={1} className={'attribute-name-col'}>
  //     <span>{TextLookup.get(`ABILITY_${attributeName}_NAME_SHORT`)}</span>
  //   </Col>
  //   <Col xs={2} className={'attribute-base-col flex-nowrap'}>
  //     <InputGroup hasValidation={true} className={'flex-nowrap'}>
  //       <Button onClick={onMinus}><FontAwesomeIcon icon={faMinus} /></Button>
  //       <CharacterNumericInput
  //           style={ {width: '5em'} }
  //           value={baseValue}
  //           isInvalid={validationError != null}
  //           onCommit={handleCommit} />
  //       <Button onClick={onPlus}><FontAwesomeIcon icon={faPlus} /></Button>
  //     </InputGroup>
  //     {validationError != null && <div className="invalid-feedback">{validationError}</div>}
  //   </Col>
  //   <Col className={'attribute-score-col'}>
  //     <span>{`${scoreValue} (${formatModifier(parseInt(modifierValue))})`}</span>
  //   </Col>
  // </Row>);
}