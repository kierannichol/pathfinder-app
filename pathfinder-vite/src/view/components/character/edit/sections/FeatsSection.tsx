import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {useMemo} from "react";
import Section from "@/view/components/character/edit/common/Section.tsx";
import {UnderlinedSelectChoiceInput} from "@/view/components/character/edit/fields/UnderlinedSelectChoiceInput.tsx";
import ChoicePathLabel from "@/view/components/character/edit/common/ChoicePathLabel.tsx";

interface FeatsSectionProps {

}

export default function FeatsSection({}: FeatsSectionProps) {
  const character = useCharacterAtLevel();
  const featChoices = useMemo(() => character.choicesOfType('feat', 'bonus_feat'), [character]);

  return <Section header='Feats' className={'d-flex flex-column gap-2'}>
      {featChoices.map(choice =>
          <UnderlinedSelectChoiceInput key={choice.path}
                                       label={<ChoicePathLabel choice={choice}/>} choice={choice} />)}
  </Section>
}