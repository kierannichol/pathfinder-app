import {AttackModification} from "@/data/AttackModification.ts";
import {Attack} from "@/data/Attack.ts";

interface WeaponDefinitionState {
  name: string;
  key: string;
  uid: string;
  critRange: number;
  critMultiplier: number;
  isLight: boolean;
  requiresTwoHands: boolean;
  attacks: Attack[];
  attackMods: AttackModification[];
}

export class WeaponDefinition {
  static create(state: WeaponDefinitionState): WeaponDefinition {
    return new WeaponDefinition(
        state.name,
        state.uid,
        state.key,
        state.critRange,
        state.critMultiplier,
        state.isLight,
        state.requiresTwoHands,
        state.attacks,
        state.attackMods
    );
  }

  constructor(
      public readonly name: string,
      public readonly uid: string,
      public readonly key: string,
      public readonly critRange: number,
      public readonly critMultiplier: number,
      public readonly isLight: boolean,
      public readonly requiresTwoHands: boolean,
      public readonly attacks: Attack[],
      public readonly attackMods: AttackModification[]) {

  }
}