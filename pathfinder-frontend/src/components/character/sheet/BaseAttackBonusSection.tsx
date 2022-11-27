import Expression from "../base/Expression";
import CharacterAtLevelProps from "./CharacterAtLevelProps";
import Section from "./Section";

export default function BaseAttackBonusSection({ characterAtLevel }: CharacterAtLevelProps) {
  return <Section className='pfcs-bab w-100'>
    <div className='section-row'>
      <div className='label flex-grow-1'>Base Attack Bonus</div>
      <div className='value'>
        <Expression expression='{@bab}' context={characterAtLevel} />
      </div>
    </div>
  </Section>
}