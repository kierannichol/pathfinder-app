import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {useMemo} from "react";
import Section from "@/view/components/character/edit/common/Section.tsx";
import {UnderlinedSelectChoiceInput} from "@/view/components/character/edit/fields/UnderlinedSelectChoiceInput.tsx";

interface FeatsSectionProps {

}

export default function FeatsSection({}: FeatsSectionProps) {
  const character = useCharacterAtLevel();
  const featChoices = useMemo(() => character.choicesOfType('feat'), [character]);

  return <Section header='Feats'>
      {featChoices.map(choice =>
          <UnderlinedSelectChoiceInput key={choice.path} label={<></>} choice={choice} />)}
  </Section>
}