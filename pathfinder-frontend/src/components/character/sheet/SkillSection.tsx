import CharacterAtLevelProps from "./CharacterAtLevelProps";
import Section from "./Section";

export default function SkillSection({ characterAtLevel }: CharacterAtLevelProps) {

  return <Section className='pfsc-skill-section g-0 w-100'>
    <div className='label flex-grow-1'>Skills</div>
  </Section>
}