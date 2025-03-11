export class AttackModification {
  constructor(public readonly name: string,
              public readonly attackBonus: string,
              public readonly damageBonus: string) {
  }

  toString(): string {
    return this.name;
  }
}