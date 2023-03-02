export class BaseStat {
  constructor(public readonly id: string, public readonly name: string) {
  }
}

const BaseStats = {

  find: (id: string): BaseStat|undefined => {
    return BaseStats.all.find(stat => stat.id === id);
  },

  all: [
      new BaseStat("bab", "Base Attack Bonus"),
      new BaseStat("str_score", "Strength"),
      new BaseStat("dex_score", "Dexterity"),
      new BaseStat("con_score", "Constitution"),
      new BaseStat("int_score", "Intelligence"),
      new BaseStat("wis_score", "Wisdom"),
      new BaseStat("cha_score", "Charisma"),
  ]
}

export default BaseStats;