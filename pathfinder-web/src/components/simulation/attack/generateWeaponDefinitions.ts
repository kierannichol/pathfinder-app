import {ItemDatabase} from "@/data/Database.ts";
import {Equipment, EquipmentSet} from "@/data/Equipment.ts";
import {WeaponDefinition} from "@/components/simulation/attack/WeaponDefinition.ts";

export async function generateWeaponDefinitions(itemDatabase: ItemDatabase, equipmentSet: EquipmentSet): Promise<WeaponDefinition[]> {
  return (await Promise.all(equipmentSet.equipment.map(equipment => generateWeaponDefinition(itemDatabase, equipment))))
  .filter(weapon => weapon !== undefined);
}

export async function generateWeaponDefinition(itemDatabase: ItemDatabase, equipment: Equipment): Promise<WeaponDefinition | undefined> {
  const item = await itemDatabase.load(equipment.item.itemId);
  if (!item) return undefined;

  if (item.attacks.length === 0) return undefined;

  return WeaponDefinition.create({
    name: equipment.name,
    uid: equipment.uid,
    key: item.name.toLowerCase().replace(' ', '_').replace('-', '_').replace(',', '').replace('\'', ''),
    attackMods: [],
    isLight: item.stats['type:light'] > 0,
    requiresTwoHands: item.stats['type:two-handed'] > 0,
    critRange: item.stats['crit_range'],
    critMultiplier: item.stats['crit_multiplier'],
    attacks: item.attacks
  });

  // if (!item.actions.includes('Attack')) return undefined;
  //
  // const options = await Promise.all(equipment.options.map(option => itemDatabase.optionDetails(option.id)));
  // let enchantmentBonus = 0;
  //
  // const attackMods: AttackModification[] = [];
  // if (item.attackMod) {
  //   attackMods.push(item.attackMod);
  // }
  // for (let option of options) {
  //   if (!option) continue;
  //   if (option.attackMod) {
  //     attackMods.push(option.attackMod);
  //   }
  //   enchantmentBonus += option.stats['weapon:enhancement'] ?? 0;
  // }
  //
  // return {
  //   uid: equipment.uid,
  //   name: equipment.name,
  //   key: item.name.toLowerCase().replace(' ', '_').replace('-', '_').replace(',', '').replace('\'', ''),
  //   enhancementBonus: 3,
  //   critRange: item.stats['crit_range'],
  //   critMultiplier: item.stats['crit_multiplier'],
  //   isLight: item.stats['type:light'] > 0,
  //   requiresTwoHands: item.stats['type:two-handed'] > 0,
  //   attackMods: attackMods,
  //   attacks: [
  //     new Attack("Attack #1", "1", '1d20 + @arg:attack_bab + @str_mod', `${item.stats['dice_count']}d${item.stats['dice_sides']}`, '0'),
  //     new Attack("Attack #2", "@arg:attack_bab > 5", '1d20 + (@arg:attack_bab-5) + @str_mod', `${item.stats['dice_count']}d${item.stats['dice_sides']}`, '0'),
  //     new Attack("Attack #3", "@arg:attack_bab > 10", '1d20 + (@arg:attack_bab-10) + @str_mod', `${item.stats['dice_count']}d${item.stats['dice_sides']}`, '0'),
  //     new Attack("Attack #4", "@arg:attack_bab > 15", '1d20 + (@arg:attack_bab-15) + @str_mod', `${item.stats['dice_count']}d${item.stats['dice_sides']}`, '0'),
  //     new Attack("Attack #5", "@arg:attack_bab > 20", '1d20 + (@arg:attack_bab-20) + @str_mod', `${item.stats['dice_count']}d${item.stats['dice_sides']}`, '0')
  //   ]
  // } as WeaponDefinition;
}