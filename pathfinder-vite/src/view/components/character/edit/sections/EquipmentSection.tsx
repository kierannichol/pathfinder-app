import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {useCharacterUpdate} from "@/view/components/character/edit/CharacterUpdateContext.tsx";
import Section from "@/view/components/character/edit/common/Section.tsx";
import EquipmentEditor from "@/view/components/character/equipment/EquipmentEditor.tsx";
import React from "react";

interface EquipmentSectionProps {

}

export default function EquipmentSection({}: EquipmentSectionProps) {
  const characterAtLevel = useCharacterAtLevel();
  const update = useCharacterUpdate();

  return <Section header='Equipment'>
    <EquipmentEditor characterAtLevel={characterAtLevel}
                     onChange={update.select} />
  </Section>
};