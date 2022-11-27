import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import CharacterChoice, {ChoiceType} from "../../model/character/choices/CharacterChoice";
import CharacterTextInput from "./base/CharacterTextInput";
import FeatSelectButton from "./edit/FeatSelectButton";
import MercySelectButton from "./MercySelectButton";
import RagePowerSelectButton from "./RagePowerSelectButton";

interface ChoiceSelectorProps {
  character: CharacterAtLevel;
  choice: CharacterChoice;
  onchange: (value:string) => void;
}

export default function ChoiceSelector(props: ChoiceSelectorProps) {
  const character = props.character;
  const choice = props.choice;
  switch (choice.type) {
    case ChoiceType.CHARACTER_NAME:
      return <CharacterTextInput
          value={choice.current}
          onChange={props.onchange} />
    case ChoiceType.FEAT:
      return <FeatSelectButton
          value={choice.current}
          characterAtLevel={character}
          onSelect={props.onchange} />
    case ChoiceType.RAGE_POWER:
      return <RagePowerSelectButton
          value={choice.current}
          onSelect={props.onchange}
          characterAtLevel={character} />
    case ChoiceType.MERCY:
      return <MercySelectButton
          value={choice.current}
          onSelect={props.onchange}
          characterAtLevel={character} />
  }
  return <div className="invalid-feedback">Unknown Choice</div>
}