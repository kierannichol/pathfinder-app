import React from "react";
import {Form} from "react-bootstrap";
import {useRaceDatabase} from "../../database/v2/RaceDatabase";

interface CharacterRaceChoiceInputProps {
  id?: string;
  value: string;
  onChange: (changed: string) => void;
}

function CharacterRaceChoiceInput({id, value, onChange}: CharacterRaceChoiceInputProps) {
  const raceDatabase = useRaceDatabase();

  return (
      <Form.Select id={id}
                   size="lg"
                   value={value}
                   placeholder='Race'
                   onChange={event => onChange(event.target.value)}>
        <option value=""></option>
        {raceDatabase.all.map(race => <option key={race.id} value={race.id}>{race.name}</option>)}
      </Form.Select>
  );
}

export default CharacterRaceChoiceInput;