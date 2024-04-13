import {EquipmentSetEditor} from "../components/equipment/EquipmentSetEditor.tsx";
import {EquipmentSetModel} from "../model/EquipmentSetModel.ts";
import React from "react";

interface EquipmentSetEditProps {
  loaded: EquipmentSetModel;
}

export default function EquipmentSetEdit({ loaded }: EquipmentSetEditProps) {
  return <main>
    <EquipmentSetEditor loaded={loaded}/>
    <div className="spacer"/>
  </main>
}