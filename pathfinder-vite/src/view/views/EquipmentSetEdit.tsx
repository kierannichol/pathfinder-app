import {EquipmentSetEditor} from "../components/equipment/EquipmentSetEditor.tsx";
import {EquipmentSet} from "..//EquipmentSet.ts";
import React from "react";

interface EquipmentSetEditProps {
  loaded: EquipmentSet;
}

export default function EquipmentSetEdit({ loaded }: EquipmentSetEditProps) {
  return <main>
    <EquipmentSetEditor loaded={loaded}/>
    <div className="spacer"/>
  </main>
}