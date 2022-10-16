import {Form} from "react-bootstrap";
import React from "react";
import TextLookup from "../../model/TextLookup";
import {Character} from "../../model/character/Character";

interface CharacterRaceAbilityScoreIncreaseChoiceInputProps {
  value: string,
  onChange: (changed: string) => void
}

function CharacterRaceAbilityScoreIncreaseChoiceInput({value, onChange}: CharacterRaceAbilityScoreIncreaseChoiceInputProps) {
  return (
      <Form.Select size="lg"
                   value={value}
                   placeholder='Ability Score Increase'
                   onChange={event => onChange(event.target.value)}>
        <option value=""></option>
        {Character.ABILITIES.map(ability => (
            <option key={ability} value={ability}>{TextLookup.get(`ABILITY_${ability}_NAME_LONG`)}</option>
        ))}
      </Form.Select>
  );
}

export default CharacterRaceAbilityScoreIncreaseChoiceInput;