import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {useMemo} from "react";
import Section from "@/view/components/character/edit/common/Section.tsx";
import {UnderlinedSelectChoiceInput} from "@/view/components/character/edit/fields/UnderlinedSelectChoiceInput.tsx";
import ChoicePathLabel from "@/view/components/character/edit/common/ChoicePathLabel.tsx";
import {ChoiceInputType, ChoiceRef} from "@/data/v8/Choice.ts";

interface ClassOptionsSectionProps {

}

export default function ClassOptionsSection({}: ClassOptionsSectionProps) {
  const character = useCharacterAtLevel();
  const featChoices = useMemo(() => character.choices
      .filter(choice => isClassOption(choice)), [character]);

  return <Section header='Class Options' className={'d-flex flex-column gap-2'}>
      {featChoices.map(choice =>
          <UnderlinedSelectChoiceInput key={choice.path}
                                       label={<ChoicePathLabel choice={choice}/>} choice={choice} />)}
  </Section>
}

const DisallowedChoiceTypes = [
    'feat',
    'bonus_feat',
    'spell',
    'asi',
    'race',
    'class',
    'favored_class',
    'alignment',
    'archetype',
    'equipment',
    'skill',
]

function isClassOption(choice: ChoiceRef): boolean {
  if (choice.inputType !== ChoiceInputType.Select) return false;
  return !DisallowedChoiceTypes.includes(choice.type);
}