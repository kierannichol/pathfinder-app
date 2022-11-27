export default class Skill {

  public constructor(public readonly id: string,
                     public readonly name: string,
                     public readonly untrained: boolean,
                     public readonly armorCheckPenalty: boolean,
                     public readonly keyAbility: string) {
  }
}