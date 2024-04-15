import {EquipmentSetEditor} from "../components/equipment/EquipmentSetEditor.tsx";
import React from "react";
import {EquipmentSet} from "../../data/v8/Equipment.ts";

interface EquipmentSetEditProps {
  loaded: EquipmentSet;
}

export default function EquipmentSetEdit({ loaded }: EquipmentSetEditProps) {
  return <main>
    <EquipmentSetEditor loaded={loaded}/>
    <div className="spacer"/>
  </main>
}