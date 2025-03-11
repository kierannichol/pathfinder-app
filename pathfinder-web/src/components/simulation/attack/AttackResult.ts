export class AttackResult {
  constructor(public readonly name: string,
              public readonly chance: number,
              public readonly damage: number,
              public readonly critChance: number,
              public readonly critDamage: number,
              public readonly attackFormula: string,
              public readonly damageFormula: string) {
  }
}