import {Form} from "react-bootstrap";
import React, {useState} from "react";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import BooleanExpression from "../../logic/BooleanExpression";
import MercyDatabase, {Mercy} from "../../database/MercyDatabase";

interface MercySelectorProps {
  value: string,
  onchange: (changed: string) => void,
  character: CharacterAtLevel
}

function MercySelector({value, onchange, character}: MercySelectorProps) {
  const selectedOption = MercyDatabase[value];
  const [ options, setOptions ] = useState<Mercy[]>(selectedOption !== undefined ? [ selectedOption ] : []);

  function populateOptions() {
    setOptions(Object.values(MercyDatabase)
        .filter(entry => value === entry.id.toString() || isEntryValidForCharacter(character, entry))
        .sort((a, b) => a.name.localeCompare(b.name)));
  }

  function clearOptions() {
    setOptions(selectedOption !== undefined ? [ selectedOption ] : []);
  }

  return (
      <Form.Select size="lg"
                   value={value}
                   placeholder='Mercy'
                   onFocus={_ => populateOptions()}
                   onBlur={_ => clearOptions()}
                   onChange={event => onchange(event.target.value)}>
        <option value=""></option>
        {options
        .map(option => {
          return (<option key={option.id} value={option.id}>{option.name}</option>)
        })
        }
      </Form.Select>
  );
}

function isEntryValidForCharacter(character:CharacterAtLevel, mercy: Mercy): boolean {
  if (mercy.prerequisites_formula === '') {
    return true;
  }
  const requirement = BooleanExpression.parse(mercy.prerequisites_formula);
  return requirement.resolve(character)?.asBoolean() ?? false;
}

export default MercySelector;