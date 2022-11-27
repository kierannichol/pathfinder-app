import AbilityScoreSection from "../components/character/sheet/AbilityScoreSection";
import ArmorClassSection from "../components/character/sheet/ArmorClassSection";
import BaseAttackBonusSection from "../components/character/sheet/BaseAttackBonusSection";
import CharacterAtLevelDebugView from "../components/character/sheet/CharacterAtLevelDebugView";
import CharacterHealthSection from "../components/character/sheet/CharacterHealthSection";
import CharacterInfoSection from "../components/character/sheet/CharacterInfoSection";
import InitiativeSection from "../components/character/sheet/InitiativeSection";
import SavingThrowsSection from "../components/character/sheet/SavingThrowsSection";
import SkillSection from "../components/character/sheet/SkillSection";
import SpeedSection from "../components/character/sheet/SpeedSection";
import SpellResistanceSection from "../components/character/sheet/SpellResistanceSection";
import LoadingBlock from "../components/common/LoadingBlock";
import {CharacterAtLevel} from "../model/character/CharacterAtLevel";
import "./CharacterSheetPage.scss";

interface CharacterSheetPageProps {
  characterAtLevel: CharacterAtLevel;
}

function CharacterSheetPage({ characterAtLevel }: CharacterSheetPageProps) {

  return (characterAtLevel && <>
      <main className={'pf-character-sheet'}>
        <div className='printable'>
          <CharacterInfoSection characterAtLevel={characterAtLevel} />
            <div className='d-flex flex-row'>
            <div className='d-flex flex-column w-100'>
              <div className='d-flex flex-row w-100'>
                <AbilityScoreSection characterAtLevel={characterAtLevel} />
                <div className='d-flex flex-column flex-grow-1'>
                  <CharacterHealthSection characterAtLevel={characterAtLevel} />
                  <InitiativeSection characterAtLevel={characterAtLevel} />
                </div>
              </div>
              <ArmorClassSection characterAtLevel={characterAtLevel} />
              <SavingThrowsSection characterAtLevel={characterAtLevel} />
              <div className='d-flex flex-row w-100'>
                <BaseAttackBonusSection characterAtLevel={characterAtLevel} />
                <SpellResistanceSection characterAtLevel={characterAtLevel} />
              </div>
            </div>
            <div className='d-flex flex-column w-100'>
              <SpeedSection characterAtLevel={characterAtLevel} />
              <SkillSection characterAtLevel={characterAtLevel} />
            </div>
          </div>
        </div>
      </main>
      <CharacterAtLevelDebugView characterAtLevel={characterAtLevel} />
  </> || <main className={'pf-character-sheet'}><LoadingBlock/></main>)
}

export default CharacterSheetPage;