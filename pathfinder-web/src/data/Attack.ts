import {DataContext, Formula} from "@kierannichol/formula-js";
import {AttackContext} from "@/components/simulation/attack/AttackContext.ts";
import {Chance} from "@/data/Chance.ts";

export class Attack {
  constructor(public readonly name: string,
              private readonly condition: string,
              public readonly chanceToHit: Chance|null,
              public readonly hitDamage: string,
              public readonly missDamage: string) {
  }

  meetsCondition(context: DataContext) {
    return Formula.parse(this.condition).resolve(context)?.asBoolean() ?? true;
  }

  calculateChanceToHit(attackContext: AttackContext) {
    if (this.chanceToHit === null) {
      return 0;
    }

    return this.chanceToHit.calculate(attackContext);
  }

  calculateHitDamage(attackContext: AttackContext) {
    if ((this.hitDamage ?? '') === '') {
      return 0;
    }
    return Formula.parse(this.hitDamage).resolve(attackContext)?.asNumber() ?? 0;
  }

  calculateMissDamage(attackContext: AttackContext) {
    if ((this.missDamage ?? '') === '') {
      return 0;
    }
    return Formula.parse(this.missDamage).resolve(attackContext)?.asNumber() ?? 0;
  }
}