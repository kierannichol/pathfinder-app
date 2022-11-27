import Expression from "../base/Expression";
import CharacterAtLevelProps from "./CharacterAtLevelProps";
import "./CharacterHealthSection.scss";
import Section from "./Section";

export default function CharacterHealthSection({ characterAtLevel }: CharacterAtLevelProps) {
  return <Section className='pfcs-character-health-section'>

    <div className='health-row'>
        <div className='health-label'>HP</div>
        <div className='health-block--total-hp'>
          <div className='health-heading'>Total</div>
          <div className='health-value'>
            <Expression expression={'{@hp:total}'} context={characterAtLevel} />
          </div>
        </div>

        <div className='health-block--dr'>
          <div className='health-heading'>DR</div>
          <div className='health-value'>
            <Expression context={characterAtLevel} expression={'{@dr}'} />
          </div>
        </div>
    </div>

    <div className='health-row'>
      <div className='health-block--current-hp'>
        <div className='health-heading'>Current HP</div>
        <div className='health-value health-value--current-hp'></div>
      </div>
    </div>

    <div className='health-row'>
      <div className='health-block--nonlethal-damage'>
        <div className='health-heading'>Nonlethal Damage</div>
        <div className='health-value'></div>
      </div>
    </div>
  </Section>
}