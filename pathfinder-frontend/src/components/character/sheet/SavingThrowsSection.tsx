import Expression from "../base/Expression";
import CharacterAtLevelProps from "./CharacterAtLevelProps";
import "./SavingThrowsSection.scss";
import Section from "./Section";

export default function SavingThrowsSection({ characterAtLevel }: CharacterAtLevelProps) {
  return <Section className='pfcs-saving-throws-section flex-row'>
    <div>
      <div className='section-row'>
        <div className='label'>Fortitude</div>
        <div>
          <div className='heading'>Total</div>
          <div className='value'>
            <Expression expression='{@fort_save}' context={characterAtLevel} />
          </div>
        </div>
        <span>=</span>
        <div>
          <div className='heading'>Base</div>
          <div className='value'>
            <Expression expression='{@fort:base}' context={characterAtLevel} />
          </div>
        </div>
        <span>+</span>
        <div>
          <div className='heading'>Ability Modifier</div>
          <div className='value'>
            <Expression expression='{@con_mod}' context={characterAtLevel} />
          </div>
        </div>
        <span>+</span>
        <div>
          <div className='heading'>Magic Modifier</div>
          <div className='value'>
            <Expression expression='{@fort:magic}' context={characterAtLevel} />
          </div>
        </div>
        <span>+</span>
        <div>
          <div className='heading'>Misc Modifier</div>
          <div className='value'>
          <Expression expression='{@fort:misc}' context={characterAtLevel} />
          </div>
        </div>
        <span>+</span>
        <div>
          <div className='heading'>Temp Modifier</div>
          <div className='value'>
            <Expression expression='{@fort:temp}' context={characterAtLevel} />
          </div>
        </div>
      </div>
      <div className='section-row'>
        <div className='label'>Reflex</div>
        <div className='value'>
          <Expression expression='{@ref_save}' context={characterAtLevel} />
        </div>
        <span>=</span>
        <div className='value'>
          <Expression expression='{@reflex:base}' context={characterAtLevel} />
        </div>
        <span>+</span>
        <div className='value'>
          <Expression expression='{@dex_mod}' context={characterAtLevel} />
        </div>
        <span>+</span>
        <div>
          <div className='value'>
            <Expression expression='{@reflex:magic}' context={characterAtLevel} />
          </div>
        </div>
        <span>+</span>
        <div>
          <div className='value'>
            <Expression expression='{@reflex:misc}' context={characterAtLevel} />
          </div>
        </div>
        <span>+</span>
        <div>
          <div className='value'>
            <Expression expression='{@reflex:temp}' context={characterAtLevel} />
          </div>
        </div>
      </div>
      <div className='section-row'>
        <div className='label'>Will</div>
        <div className='value'>
          <Expression expression='{@will_save}' context={characterAtLevel} />
        </div>
        <span>=</span>
        <div className='value'>
          <Expression expression='{@will:base}' context={characterAtLevel} />
        </div>
        <span>+</span>
        <div className='value'>
          <Expression expression='{@wis_mod}' context={characterAtLevel} />
        </div>
        <span>+</span>
        <div>
          <div className='value'>
            <Expression expression='{@will:magic}' context={characterAtLevel} />
          </div>
        </div>
        <span>+</span>
        <div>
          <div className='value'>
            <Expression expression='{@will:misc}' context={characterAtLevel} />
          </div>
        </div>
        <span>+</span>
        <div>
          <div className='value'>
            <Expression expression='{@will:temp}' context={characterAtLevel} />
          </div>
        </div>
      </div>
    </div>
    <div className='pfcs-saving-throws-modifiers'>
      <div className='heading'>Modifiers</div>
      <div className='value' />
    </div>
  </Section>
}