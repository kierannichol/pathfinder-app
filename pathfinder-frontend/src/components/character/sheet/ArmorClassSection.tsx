import Expression from "../base/Expression";
import "./ArmorClassSection.scss";
import CharacterAtLevelProps from "./CharacterAtLevelProps";
import Section from "./Section";

function ArmorClassSection({ characterAtLevel }: CharacterAtLevelProps) {
  return (<Section className='pfsc-armor-class-section'>
    <div className='section-row'>
      <div className='label'>AC</div>
      <div>
        <div className='value'>
          <Expression context={characterAtLevel} expression={'{@ac_total}'} />
        </div>
        <div className='heading'>Total</div>
      </div>
      <span>=&nbsp;<b>10</b>&nbsp;+</span>
      <div>
        <div className='value'>
          <Expression context={characterAtLevel} expression={'{@ac:armor}'} />
        </div>
        <div className='heading'>Armor Bonus</div>
      </div>
      <span>+</span>
      <div>
        <div className='value'>
          <Expression context={characterAtLevel} expression={'{@ac:shield}'} />
        </div>
        <div className='heading'>Shield Bonus</div>
      </div>
      <span>+</span>
      <div>
        <div className='value'>
          <Expression context={characterAtLevel} expression={'{@dex_mod}'} />
        </div>
        <div className='heading'>DEX Modifier</div>
      </div>
      <span>+</span>
      <div>
        <div className='value'>
          <Expression context={characterAtLevel} expression={'{@ac:size}'} />
        </div>
        <div className='heading'>Size Modifier</div>
      </div>
      <span>+</span>
      <div>
        <div className='value'>
          <Expression context={characterAtLevel} expression={'{@ac:natural}'} />
        </div>
        <div className='heading'>Natural Armor</div>
      </div>
      <span>+</span>
      <div>
        <div className='value'>
          <Expression context={characterAtLevel} expression={'{@ac:deflection}'} />
        </div>
        <div className='heading'>Deflection Modifier</div>
      </div>
      <span>+</span>
      <div>
        <div className='value'>
          <Expression context={characterAtLevel} expression={'{@ac:misc}'} />
        </div>
        <div className='heading'>Misc Modifier</div>
      </div>
    </div>

    <div className='section-row'>
      <div className='label'>Touch</div>
      <div className='value'>
        <Expression expression='{@ac_touch}' context={characterAtLevel} />
      </div>
      <div className='label-2'>Flat-Footed</div>
      <div className='value'>
        <Expression expression='{@ac_flat}' context={characterAtLevel} />
      </div>
      <div className='value flex-fill'></div>
    </div>
  </Section>);
}

export default ArmorClassSection;