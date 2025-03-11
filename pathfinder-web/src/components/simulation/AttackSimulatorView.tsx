import * as React from 'react';
import {useMemo, useState} from 'react';
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {EquipmentSet} from "@/data/Equipment.ts";
import {useDatabase, useItemDatabase} from "@/data/context.ts";
import useAsyncMemo from "@/utils/useAsyncMemo.tsx";
import LoadingBlock from "@/components/LoadingBlock.tsx";
import {Formula} from "@kierannichol/formula-js";
import {WeaponDefinition} from "@/components/simulation/attack/WeaponDefinition.ts";
import {SingleAttackBreakdownView} from "@/components/simulation/SingleAttackBreakdownView.tsx";
import {AttackTarget} from "@/components/simulation/attack/AttackTarget.ts";
import {TargetStatsView} from "@/components/simulation/TargetStatsView.tsx";
import {simulateAttack} from "@/components/simulation/attack/simulateAttack.ts";
import {generateWeaponDefinitions} from "@/components/simulation/attack/generateWeaponDefinitions.ts";
import {generateSpellAsWeaponDefinitions} from "@/components/simulation/attack/generateSpellAsWeaponDefinitions.ts";
import {
  generateFeaturesAsWeaponDefinitions
} from "@/components/simulation/attack/generateFeaturesAsWeaponDefinitions.ts";

interface AttackSimulatorViewProps {
  characterAtLevel: CharacterAtLevel;
  equipmentSet: EquipmentSet;
  onModify: (modified: EquipmentSet) => Promise<void>;
}

export function AttackSimulatorView({characterAtLevel, equipmentSet, onModify}: AttackSimulatorViewProps) {
  const [workingEquipmentSet, setWorkingEquipmentSet] = useState(equipmentSet);
  const itemDatabase = useItemDatabase();
  const database = useDatabase();

  const equippedCharacterAtLevel = useMemo(() => characterAtLevel.withEquipment(workingEquipmentSet),
      [characterAtLevel, workingEquipmentSet]);

  const [target, setTarget] = useState(AttackTarget.DEFAULT);

  const [mainHandWeapon, setMainHandWeapon] = useState<WeaponDefinition | undefined>(undefined);
  const [offHandWeapon, setOffHandWeapon] = useState<WeaponDefinition | undefined>(undefined);
  const [includeSneakAttack, setIncludeSneakAttack] = useState(workingEquipmentSet.attackSettings.sneakAttack);
  const [includePowerAttack, setIncludePowerAttack] = useState(workingEquipmentSet.attackSettings.powerAttack);

  const [weapons] = useAsyncMemo<WeaponDefinition[]>(async () => {
    const generated = [
      ...(await generateWeaponDefinitions(itemDatabase, workingEquipmentSet)),
      ...(await generateSpellAsWeaponDefinitions(database, characterAtLevel)),
      ...generateFeaturesAsWeaponDefinitions(characterAtLevel),
    ];

    console.log(generated)
    console.log(workingEquipmentSet.attackSettings)

    setMainHandWeapon(generated.find(w => w.uid === workingEquipmentSet.attackSettings.mainHand));
    setOffHandWeapon(generated.find(w => w.uid === workingEquipmentSet.attackSettings.offHand));
    return generated;
  }, [itemDatabase, workingEquipmentSet]);

  const attacks = useMemo(() => simulateAttack(
          equippedCharacterAtLevel,
          mainHandWeapon?.attacks ?? [],
          offHandWeapon?.attacks ?? [],
          target
      ),
      [mainHandWeapon, offHandWeapon, equippedCharacterAtLevel, target, includeSneakAttack, includePowerAttack]);

  const totalAverageDamage = useMemo(() => {
    let damage = 0;
    for (let attack of attacks) {
      damage += attack.damage;
      damage += attack.critDamage;
    }
    return damage;
  }, [attacks]);

  function updateMainHandSelection(weapon: WeaponDefinition | undefined) {
    setMainHandWeapon(weapon);

    const modified = workingEquipmentSet.modifyAttackSettings(settings => settings.setMainHand(weapon?.uid ?? ''));
    setWorkingEquipmentSet(modified);
    onModify(modified)
    .catch(console.error);
  }

  function updateOffHandSelection(weapon: WeaponDefinition | undefined) {
    setOffHandWeapon(weapon);

    const selectedEquipment = workingEquipmentSet.equipment.find(e => e.uid === weapon?.uid);
    const modified = workingEquipmentSet.modifyAttackSettings(settings => settings.setOffHand(selectedEquipment?.uid ?? ''));
    setWorkingEquipmentSet(modified);
    onModify(modified)
    .catch(console.error);
  }

  const currentAc = useMemo(() => {
    let dexBonus = equippedCharacterAtLevel.get('dex_mod')?.asNumber() ?? 0;
    let armorBonus = 0;
    for (let equipment of workingEquipmentSet.equipment) {
      if (!equipment.included) continue;
      if ('armor:max_dex_bonus' in equipment.item.stats) {
        dexBonus = Math.min(dexBonus, equipment.item.stats['armor:max_dex_bonus']);
      }
      armorBonus += equipment.item.stats['armor:bonus'] ?? 0;
      armorBonus += equipment.item.stats['armor:enhancement'] ?? 0;

      for (let option of equipment.options) {
        armorBonus += option.stats['armor:bonus'] ?? 0;
        armorBonus += option.stats['armor:enhancement'] ?? 0;
      }
    }

    let ac = 10;
    ac += dexBonus + armorBonus;
    return ac;
  }, [equippedCharacterAtLevel]);

  if (!weapons) {
    return <LoadingBlock/>
  }

  function handleChangeMainHandWeapon(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedKey = event.target.value;
    if (selectedKey === '') {
      updateMainHandSelection(undefined);
      return;
    }
    const weapon = weapons.find(w => w.uid === selectedKey);
    updateMainHandSelection(weapon);
  }

  function handleChangeOffHandWeapon(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedKey = event.target.value;
    if (selectedKey === '') {
      updateOffHandSelection(undefined);
      return;
    }
    const weapon = weapons.find(w => w.uid === selectedKey);
    updateOffHandSelection(weapon);
  }

  function handleChangeSneakAttack(checked: boolean) {
    setIncludeSneakAttack(checked);
    const modified = workingEquipmentSet.modifyAttackSettings(settings => settings.setSneakAttack(checked));
    setWorkingEquipmentSet(modified);
    onModify(modified)
    .catch(console.error);
  }

  function handleChangePowerAttack(checked: boolean) {
    setIncludePowerAttack(checked);
    const modified = workingEquipmentSet.modifyAttackSettings(settings => settings.setPowerAttack(checked));
    setWorkingEquipmentSet(modified);
    onModify(modified)
    .catch(console.error);
  }

  function handleChangeTarget(value: AttackTarget) {
    setTarget(value);
    const modified = workingEquipmentSet.modifyAttackSettings(settings => settings.setTarget(value));
    setWorkingEquipmentSet(modified);
    onModify(modified)
    .catch(console.error);
  }

  return (
      <div>
        <div>Current AC: {currentAc}</div>
        <label>Main-Hand Weapon</label>
        <select value={mainHandWeapon?.uid ?? ''} onChange={handleChangeMainHandWeapon}>
          <option value={''}></option>
          {weapons.map(weapon => (
              <option key={weapon.uid} value={weapon.uid}>{weapon.name}</option>
          ))}
        </select>
        <label>Off-Hand Weapon</label>
        <select value={offHandWeapon?.uid ?? ''} onChange={handleChangeOffHandWeapon}>
          <option value={''}></option>
          {weapons.map(weapon => (
              <option key={weapon.uid} value={weapon.uid}>{weapon.name}</option>
          ))}
        </select>

        <div>
          <input type={'checkbox'} checked={includeSneakAttack}
                 disabled={!(Formula.parse("sum(@ability:sneak_attack#*)").resolve(equippedCharacterAtLevel)?.asBoolean() ?? false)}
                 onChange={e => handleChangeSneakAttack(e.target.checked)}/>
          <span>Include Sneak Attack</span>
        </div>
        <div>
          <input type={'checkbox'} checked={includePowerAttack}
                 disabled={!equippedCharacterAtLevel.has('feat:power_attack')}
                 onChange={e => handleChangePowerAttack(e.target.checked)}/>
          <span>Include Power Attack</span>
        </div>

        <TargetStatsView value={target} onChange={handleChangeTarget}/>

        <div>
          Total Average Damage: {totalAverageDamage.toFixed(2)}
        </div>
        <div>
          {attacks.map((attack, index) => (
              <SingleAttackBreakdownView key={index} attack={attack}/>
          ))}
        </div>
      </div>
  )
}