import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {useMemo} from "react";
import Section from "@/view/components/character/edit/common/Section.tsx";
import FeatureBlock from "@/view/components/character/edit/common/FeatureBlock.tsx";

interface SpecialAbilitiesSectionProps {

}

export default function SpecialAbilitiesSection({}: SpecialAbilitiesSectionProps) {
  const character = useCharacterAtLevel();
  const featChoices = useMemo(() => character.features.filter(feature => feature.parent.type === 'feature'), [character]);

  return <Section header='Special Abilities'>
      {featChoices
          .filter(feature => feature.tags.includes('class_feature')
              || feature.tags.includes('feat'))
          .map(feature => <div key={feature.key}>
            <FeatureBlock feature={feature} />
          </div>)}
  </Section>
}