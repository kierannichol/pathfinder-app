import CharacterChoice, {ChoiceType} from "../../model/character/choices/CharacterChoice";
import CharacterTextInput from "./base/CharacterTextInput";
import CharacterNumericInput from "./base/CharacterNumericInput";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import RagePowerSelector from "./RagePowerSelector";
import MercySelector from "./MercySelector";
import FeatSelectButton from "./edit/FeatSelectButton";

interface ChoiceSelectorProps {
  character: CharacterAtLevel;
  choice: CharacterChoice;
  onchange: (value:string) => void;
}

function ChoiceSelector(props: ChoiceSelectorProps) {
  const character = props.character;
  const choice = props.choice;
  switch (choice.type) {
    case ChoiceType.TEXT:
      return <CharacterTextInput
          value={choice.current}
          onchange={props.onchange} />
    case ChoiceType.NUMBER:
      return <CharacterNumericInput
          value={choice.current}
          onchange={props.onchange} />
    case ChoiceType.FEAT:
      return <FeatSelectButton
          value={choice.current}
          characterAtLevel={character}
          onSelect={props.onchange} />
    case ChoiceType.RAGE_POWER:
      return <RagePowerSelector
          value={choice.current}
          onchange={props.onchange}
          character={character} />
    case ChoiceType.MERCY:
      return <MercySelector
          value={choice.current}
          onchange={props.onchange}
          character={character} />
  }
  return <div className="invalid-feedback">Unknown Choice</div>
}

export default ChoiceSelector;