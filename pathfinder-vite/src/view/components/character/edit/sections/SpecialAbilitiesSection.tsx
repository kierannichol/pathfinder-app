import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {useMemo} from "react";
import Section from "@/view/components/character/edit/common/Section.tsx";
import UnderlinedValue from "@/view/components/character/edit/fields/UnderlinedValue.tsx";

interface SpecialAbilitiesSectionProps {

}

export default function SpecialAbilitiesSection({}: SpecialAbilitiesSectionProps) {
  const character = useCharacterAtLevel();
  const featChoices = useMemo(() => character.features, [character]);

  return <Section header='Special Abilities'>
      {featChoices
          .filter(feature => feature.tags.includes('class_feature')
              || feature.tags.includes('feat'))
          .map(feature => <UnderlinedValue key={feature.key}>{feature.name}</UnderlinedValue>)}
  </Section>
}