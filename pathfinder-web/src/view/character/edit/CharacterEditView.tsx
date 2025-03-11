import Tabs from "@/components/base/Tabs.tsx";
import {useMemo, useState} from "react";
import CharacterSummaryTab from "@/view/character/edit/tabs/CharacterSummaryTab.tsx";
import AbilityScoresTab from "@/view/character/edit/tabs/AbilityScoresTab.tsx";
import FeaturesTab from "@/view/character/edit/tabs/FeaturesTab.tsx";
import CharacterAtLevelDebugView from "@/view/character/debug/CharacterAtLevelDebugView.tsx";
import SpellsTab from "@/view/character/edit/tabs/SpellsTab.tsx";
import {Formula} from "@kierannichol/formula-js";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import EquipmentTab from "@/view/character/edit/tabs/EquipmentTab.tsx";
import {AttackSimulatorTab} from "@/view/character/edit/tabs/AttackSimulatorTab.tsx";
import {SkillsTab} from "@/view/character/edit/tabs/SkillsTab.tsx";


function CharacterEditView() {
  const [currentTab, setCurrentTab] = useState<string|undefined>();
  const characterAtLevel = useCharacterAtLevel();

  console.log(characterAtLevel)

  const hasSpells = useMemo(() => {
    return Formula.parse("sum(@ability:spellcasting#*)")
      .resolve(characterAtLevel)
        ?.asBoolean() ?? false;
  }, [characterAtLevel])

  return <main>
    <Tabs activeKey={currentTab} onSelect={setCurrentTab}>
      <Tabs.Tab eventKey='summary' header="Summary">
        <CharacterSummaryTab />
      </Tabs.Tab>
      <Tabs.Tab eventKey='abilityscore' header="Ability Scores">
        <AbilityScoresTab />
      </Tabs.Tab>
      <Tabs.Tab eventKey='features' header="Features">
        <FeaturesTab />
      </Tabs.Tab>
      {hasSpells && <Tabs.Tab eventKey='spells' header="Spells">
        <SpellsTab />
      </Tabs.Tab>}
      <Tabs.Tab eventKey='skills' header="Skills">
        <SkillsTab />
      </Tabs.Tab>
      <Tabs.Tab eventKey='equipment' header="Equipment">
        <EquipmentTab />
      </Tabs.Tab>
      <Tabs.Tab eventKey='attack' header="Attack Simulator">
        <AttackSimulatorTab />
      </Tabs.Tab>
      <Tabs.Tab eventKey='debug' header="Debug">
        <CharacterAtLevelDebugView characterAtLevel={characterAtLevel} />
      </Tabs.Tab>
    </Tabs>
  </main>
}

export default CharacterEditView;