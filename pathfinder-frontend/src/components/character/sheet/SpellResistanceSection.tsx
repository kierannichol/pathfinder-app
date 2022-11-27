import Expression from "../base/Expression";
import CharacterAtLevelProps from "./CharacterAtLevelProps";
import Section from "./Section";

export default function SpellResistanceSection({ characterAtLevel }: CharacterAtLevelProps) {
  return <Section className='pfcs-spell-resistance-section w-100'>
    <div className='section-row'>
      <div className='label flex-grow-1'>Spell Resistance</div>
      <div className='value'>
        <Expression expression='{@spell_resistance}' context={characterAtLevel} />
      </div>
    </div>
  </Section>
}