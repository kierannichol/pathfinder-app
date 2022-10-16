import {Form} from "react-bootstrap";
import React, {useState} from "react";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import BooleanExpression from "../../logic/BooleanExpression";
import RagePowers, {RagePower} from "../../database/RagePowers";

interface RagePowerSelectorProps {
  value: string,
  onchange: (changed: string) => void,
  character: CharacterAtLevel
}

function RagePowerSelector({value, onchange, character}: RagePowerSelectorProps) {
  const selectedOption = RagePowers[value];
  const [ options, setOptions ] = useState<RagePower[]>(selectedOption !== undefined ? [ selectedOption ] : []);

  function populateOptions() {
    setOptions(Object.values(RagePowers)
      .filter(ragePower => value === ragePower.id.toString() || isRagePowerValid(character, ragePower)));
  }

  function clearOptions() {
    setOptions(selectedOption !== undefined ? [ selectedOption ] : []);
  }

  return (
      <Form.Select size="lg"
                   value={value}
                   placeholder='Rage Power'
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

function isRagePowerValid(character:CharacterAtLevel, ragePower: RagePower): boolean {
  if (ragePower.prerequisites_formula === '') {
    return true;
  }
  const requirement = BooleanExpression.parse(ragePower.prerequisites_formula);
  return requirement.resolve(character)?.asBoolean() ?? false;
}

export default RagePowerSelector;