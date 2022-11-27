import {useMemo} from "react";
import CharacterAtLevelProps from "./CharacterAtLevelProps";
import "./InitiativeSection.scss";
import Section from "./Section";

function InitiativeSection({ characterAtLevel }: CharacterAtLevelProps) {
  const total = useMemo(() => characterAtLevel.resolve('{@dex_mod + @initiative:misc}')?.asText(), [characterAtLevel]);
  const dexMod = useMemo(() => characterAtLevel.resolve('{@dex_mod}')?.asText(), [characterAtLevel]);
  const miscMod = useMemo(() => characterAtLevel.get('initiative:misc')?.asText(), [characterAtLevel]);

  return <Section className='pfcs-initiative-section'>
    <div className='section-row'>
      <div className='label'>Initiative</div>
      <div>
        <div className='value'>{total}</div>
        <div className='heading'>Total</div>
      </div>
      <span>=</span>
      <div>
        <div className='value'>{dexMod}</div>
        <div className='heading'>DEX Modifier</div>
      </div>
      <span>+</span>
      <div>
        <div className='value'>{miscMod}</div>
        <div className='heading'>Misc Modifier</div>
      </div>
    </div>
  </Section>
}

export default InitiativeSection;