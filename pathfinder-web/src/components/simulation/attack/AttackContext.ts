import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {BaseDataContext, ResolvedValue} from "@kierannichol/formula-js";
import {Attack} from "@/data/Attack.ts";
import {AttackTarget} from "@/components/simulation/attack/AttackTarget.ts";

export enum WeaponSlot {
  NONE = 0,
  MAIN_HAND = 1,
  OFF_HAND = 0.5,
  BOTH_HANDS = 1.5
}

export class AttackContext extends BaseDataContext {
  private readonly extraData: { [key: string]: ResolvedValue } = {};

  constructor(public readonly characterAtLevel: CharacterAtLevel,
              public readonly attack: Attack,
              public readonly attackIndex: number,
              public readonly weaponSlot: WeaponSlot,
              public readonly usedWeaponsCount: number,
              public readonly isCriticalConfirm: boolean,
              public readonly target: AttackTarget,
              public readonly includeSneakAttack: boolean,
              public readonly includePowerAttack: boolean,
              public readonly isVitalStrike: boolean = false) {
    super();

    this.extraData['arg:attack_index'] = ResolvedValue.of(attackIndex);
    this.extraData['arg:is_critical_confirm'] = ResolvedValue.of(isCriticalConfirm);
    this.extraData['arg:is_main_hand'] = ResolvedValue.of(weaponSlot === WeaponSlot.MAIN_HAND || weaponSlot === WeaponSlot.BOTH_HANDS);
    this.extraData['arg:is_off_hand'] = ResolvedValue.of(weaponSlot === WeaponSlot.OFF_HAND);
    this.extraData['arg:two_weapons'] = ResolvedValue.of(usedWeaponsCount > 1);
    this.extraData['arg:grip_multiplier'] = ResolvedValue.of(weaponSlot);
    this.extraData['arg:include_sneak_attack'] = ResolvedValue.of(includeSneakAttack);
    this.extraData['arg:include_power_attack'] = ResolvedValue.of(includePowerAttack);
    this.extraData['target:reflex'] = ResolvedValue.of(target.reflex);
    this.extraData['target:will'] = ResolvedValue.of(target.will);
    this.extraData['target:fort'] = ResolvedValue.of(target.fort);
    this.extraData['target:ac'] = ResolvedValue.of(target.ac);
  }

  get(key: string): ResolvedValue | undefined {
    if (key in this.extraData) return this.extraData[key];
    return this.characterAtLevel.get(key);
  }

  keys(): string[] {
    return [
      ...Object.keys(this.extraData),
      ...this.characterAtLevel.keys()
    ]
  }
}