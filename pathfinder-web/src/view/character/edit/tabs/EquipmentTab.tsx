import * as React from 'react';
import useAsyncMemo from "@/utils/useAsyncMemo.tsx";
import {withGlobalEquipmentSetStore, withGlobalItemDatabase} from "@/data/init.ts";
import {useCharacter} from "@/view/character/edit/CharacterContext.tsx";
import LoadingBlock from "@/components/LoadingBlock.tsx";
import {EquipmentSetEditor} from "@/components/equipment/EquipmentSetEditor.tsx";
import {EquipmentSetStoreContext, ItemDatabaseContext} from "@/data/context.ts";
import {EquipmentSet} from "@/data/Equipment.ts";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";

function roll(sides: number): number {
  return 1 + Math.floor(Math.random() * sides);
}

interface AttackMod {
  mainAttack(value: number): number;
  mainDamage(value: number): number;
  offhandAttack(value: number): number;
  offhandDamage(value: number): number;
}

class PowerAttackMod implements AttackMod {
  constructor(private characterAtLevel: CharacterAtLevel, private hands: number) {
  }

  mainAttack(value: number): number {
    const bab = this.characterAtLevel.get("bab")?.asNumber() ?? 0;
    const mod = 1 + Math.floor(bab / 4);
    return value - mod;
  }

  mainDamage(value: number): number {
    const bab = this.characterAtLevel.get("bab")?.asNumber() ?? 0;
    const normal_mod = (1 + Math.floor(bab / 4)) * 2;
    const str = this.characterAtLevel.get("str_mod")?.asNumber() ?? 0;
    const str_mod = Math.floor(str * this.hands);
    return value + normal_mod + str_mod;
  }

  offhandAttack(value: number): number {
    return this.mainAttack(value);
  }

  offhandDamage(value: number): number {
    const bab = this.characterAtLevel.get("bab")?.asNumber() ?? 0;
    const normal_mod = (1 + Math.floor(bab / 4)) * 2;
    const str = this.characterAtLevel.get("str_mod")?.asNumber() ?? 0;
    const str_mod = Math.floor(str * 0.5);
    return value + normal_mod + str_mod;
  }
}

class TwoWeaponFightingMod implements AttackMod {
    mainAttack(value: number): number {
        return value - 4;
    }
    mainDamage(value: number): number {
        return value;
    }
    offhandAttack(value: number): number {
      return value - 4;
    }
    offhandDamage(value: number): number {
      return value;
    }
}

class WeaponFocusMod implements AttackMod {
    mainAttack(value: number): number {
        return value + 1;
    }
    mainDamage(value: number): number {
        return value;
    }
    offhandAttack(value: number): number {
        return value + 1;
    }
    offhandDamage(value: number): number {
        return value;
    }
}

function simulateAttack(characterAtLevel: CharacterAtLevel) {
  const babs: number[] = [];
  let bab = characterAtLevel.get("bab")?.asNumber() ?? 0;
  do {
    babs.push(bab);
    bab -= 5;
  } while (bab > 0)

  const critRange = 15;
  const primaryWeaponDie = [6];
  const offhandWeaponDie = [4];
  const weaponEnchantment = 3;

  const assumeTargetAc = 20;
  let totalDamage = 0;

  const modifiers: AttackMod[] = [
      new WeaponFocusMod(),
      new PowerAttackMod(characterAtLevel, 1),
      new TwoWeaponFightingMod(),
  ];

  let attackNum = 1;
  for (const bab of babs) {
    let isCrit = false;
    let attackRoll = roll(20);
    if (attackRoll >= critRange) {
      isCrit = true;
    }
    attackRoll += weaponEnchantment + bab;
    for (const mod of modifiers) {
      attackRoll = mod.mainAttack(attackRoll);
    }

    let damageRoll = roll(primaryWeaponDie[0]) + weaponEnchantment;
    for (const mod of modifiers) {
      damageRoll = mod.mainDamage(damageRoll);
    }

    if (attackRoll >= assumeTargetAc) {
      totalDamage += damageRoll;
    }
    console.log(`Attack #${attackNum++} - Attack: ${attackRoll}, Damage: ${damageRoll}, Crit: ${isCrit}`);
  }

  for (let offhandAttack = 0; offhandAttack < 2; offhandAttack++) {
    let isCrit = false;
    let attackRoll = roll(20);
    if (attackRoll >= critRange) {
      isCrit = true;
    }
    attackRoll += weaponEnchantment + bab;
    if (offhandAttack > 0) {
      attackRoll -= 5;
    }
    for (const mod of modifiers) {
      attackRoll = mod.offhandAttack(attackRoll);
    }

    let damageRoll = roll(primaryWeaponDie[0]) + weaponEnchantment;
    for (const mod of modifiers) {
      damageRoll = mod.offhandDamage(damageRoll);
    }

    if (attackRoll >= assumeTargetAc) {
      totalDamage += damageRoll;
    }
    console.log(`Offhand Attack #${offhandAttack+1} - Attack: ${attackRoll}, Damage: ${damageRoll}, Crit: ${isCrit}`);
  }

  console.log(`Assuming Target AC of ${assumeTargetAc}, Total Damage: ${totalDamage}`);
}

function EquipmentTab() {
  const character = useCharacter();
  const [itemDatabase] = useAsyncMemo(async () => withGlobalItemDatabase(), []);
  const [equipmentSetStore] = useAsyncMemo(() => withGlobalEquipmentSetStore(), [itemDatabase]);
  const [equipmentSet] = useAsyncMemo(async () =>
          (await equipmentSetStore?.load(character.id))
          ?? EquipmentSet.create(character.name, itemDatabase, character.id),
      [equipmentSetStore, character.id]);

  if (!itemDatabase || !equipmentSetStore || !equipmentSet) {
    return <LoadingBlock />
  }

  return (
      <ItemDatabaseContext value={itemDatabase}>
        <EquipmentSetStoreContext value={equipmentSetStore}>
          <section>
            <EquipmentSetEditor equipmentSet={equipmentSet} />
          </section>
        </EquipmentSetStoreContext>
      </ItemDatabaseContext>
  )
}

export default EquipmentTab;