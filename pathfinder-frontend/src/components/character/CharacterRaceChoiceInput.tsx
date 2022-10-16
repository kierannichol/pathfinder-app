import {Form} from "react-bootstrap";
import React from "react";
import TextLookup from "../../model/TextLookup";

interface CharacterRaceChoiceInputProps {
  value: string,
  onChange: (changed: string) => void
}

function CharacterRaceChoiceInput({value, onChange}: CharacterRaceChoiceInputProps) {
  return (
      <Form.Select size="lg"
                   value={value}
                   placeholder='Race'
                   onChange={event => onChange(event.target.value)}>
        <option value=""></option>
        {['human', 'dwarf']
        .map(raceId => <option key={raceId} value={raceId}>{TextLookup.get(`RACE_${raceId}_NAME`)}</option>)}
      </Form.Select>
  );
}

export default CharacterRaceChoiceInput;