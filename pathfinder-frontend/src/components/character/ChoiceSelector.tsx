import {usePathfinderDatabase} from "../../database/v2/PathfinderDatabase";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import AbilityChoice from "../../model/character/choices/AbilityChoice";
import CharacterChoice, {ChoiceTag, ChoiceType} from "../../model/character/choices/CharacterChoice";
import AbilitySelectButton from "./AbilitySelectButton";
import CharacterTextInput from "./base/CharacterTextInput";
import FeatSelectButton from "./edit/FeatSelectButton";

interface ChoiceSelectorProps {
  character: CharacterAtLevel;
  choice: CharacterChoice;
  onChange: (value: string) => void;
}

export default function ChoiceSelector(props: ChoiceSelectorProps) {
  const character = props.character;
  const choice = props.choice;
  const pathfinderDatabase = usePathfinderDatabase();
  switch (choice.type) {
    case ChoiceType.CHARACTER_NAME:
      return <CharacterTextInput
          value={choice.current}
          onChange={props.onChange} />
    case ChoiceType.FEAT:
      return <FeatSelectButton
          value={choice.current}
          bonus={choice.tags.includes(ChoiceTag.BONUS)}
          characterAtLevel={character}
          onSelect={props.onChange} />
    case ChoiceType.ABILITY:
      return <AbilitySelectButton
          choiceName={choice.label}
          variant={"special"}
          value={choice.current}
          onSelect={props.onChange}
          characterAtLevel={character}
          database={pathfinderDatabase.abilityDatabase}
          filterFn={(choice as AbilityChoice)?.filterFn}/>
    // case ChoiceType.RAGE_POWER:
    //   return <AbilitySelectButton
    //       choiceName={choice.label}
    //       value={choice.current}
    //       onSelect={props.onChange}
    //       characterAtLevel={character}
    //       database={pathfinderDatabase.ragePowerDatabase} />
    // case ChoiceType.MERCY:
    //   return <MercySelectButton
    //       value={choice.current}
    //       onSelect={props.onChange}
    //       characterAtLevel={character} />
    // case ChoiceType.ROGUE_TALENT:
    //   return <AbilitySelectButton
    //       choiceName={choice.label}
    //       value={choice.current}
    //       onSelect={props.onChange}
    //       characterAtLevel={character}
    //       database={pathfinderDatabase.rogueTalentDatabase} />
    // case ChoiceType.MAGUS_ARCANA:
    //   return <AbilitySelectButton
    //       choiceName={choice.label}
    //       value={choice.current}
    //       onSelect={props.onChange}
    //       characterAtLevel={character}
    //       database={pathfinderDatabase.magusArcanaDatabase} />
    // case ChoiceType.ALCHEMIST_DISCOVERY:
    //   return <AbilitySelectButton
    //       choiceName={choice.label}
    //       value={choice.current}
    //       onSelect={props.onChange}
    //       characterAtLevel={character}
    //       database={pathfinderDatabase.alchemistDiscoveryDatabase} />
    // case ChoiceType.WITCH_HEX:
    //   return <SpellSelectButton
    //       choiceName={choice.label}
    //       value={choice.current}
    //       onSelect={props.onChange}
    //       characterAtLevel={character}
    //       database={pathfinderDatabase.witchHexDatabase} />
    // case ChoiceType.SORCERER_BLOODLINE:
    //   return <ModifierSelectButton
    //       choiceName={choice.label}
    //       value={choice.current}
    //       onSelect={props.onChange}
    //       characterAtLevel={character}
    //       database={pathfinderDatabase.sorcererBloodlineDataSource} />
    // case ChoiceType.BLOODLINE_POWER:
    //   return <AbilitySelectButton
    //       choiceName={choice.label}
    //       value={choice.current}
    //       onSelect={props.onChange}
    //       characterAtLevel={character}
    //       database={pathfinderDatabase.abilityDb} />
  }
  return <div className="invalid-feedback">Unknown Choice</div>
}