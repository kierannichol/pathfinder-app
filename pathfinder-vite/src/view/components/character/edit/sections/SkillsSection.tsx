import Section from "@/view/components/character/edit/common/Section.tsx";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import SkillsEditor from "@/view/components/character/plan/SkillsEditor.tsx";
import {useCharacterUpdate} from "@/view/components/character/edit/CharacterUpdateContext.tsx";

interface SkillsSectionProps {

}

export default function SkillsSection({}: SkillsSectionProps) {
  const character = useCharacterAtLevel();
  const update = useCharacterUpdate();

  return <Section header='Skills'>
    <SkillsEditor characterAtLevel={character} onChange={update.select} />
  </Section>
};