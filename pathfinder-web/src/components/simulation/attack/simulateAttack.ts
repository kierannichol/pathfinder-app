import {Attack} from "@/data/Attack.ts";
import {AttackResult} from "@/components/simulation/attack/AttackResult.ts";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {AttackContext, WeaponSlot} from "@/components/simulation/attack/AttackContext.ts";
import {AttackTarget} from "@/components/simulation/attack/AttackTarget.ts";
import FormulaFormatter from "../../../../../pathfinder-lib/utils/src/logic/FormulaTreeFormatter.ts";
import {Formula} from "@kierannichol/formula-js";

export function simulateAttack(characterAtLevel: CharacterAtLevel,
                               mainHandAttacks: Attack[],
                               offhandAttacks: Attack[],
                               target: AttackTarget): AttackResult[] {
  return mainHandAttacks
  .filter(attack => attack.meetsCondition(characterAtLevel))
  .map((attack, index) => {
    const attackContext = new AttackContext(characterAtLevel,
        attack,
        index,
        offhandAttacks.length > 0 ? WeaponSlot.MAIN_HAND : WeaponSlot.BOTH_HANDS,
        (mainHandAttacks.length > 0 ? 1 : 0) + (offhandAttacks.length > 0 ? 1 : 0),
        false,
        target,
        false,
        false,
        false);

    console.log(attack);

    const chanceToHit = attack.calculateChanceToHit(attackContext);
    const hitDamage = attack.calculateHitDamage(attackContext);
    const missDamage = attack.calculateMissDamage(attackContext);

    const averageDamage = chanceToHit * hitDamage + (1 - chanceToHit) * missDamage;

    return new AttackResult(attack.name,
        chanceToHit,
        averageDamage,
        0,
        0,
        generateReadableFormula(attack.chanceToHit, attackContext),
        generateReadableFormula(attack.hitDamage, attackContext));
  })
}

function generateReadableFormula(formula: string, attackContext: AttackContext): string {
  const node = new FormulaFormatter(variable => attackContext.get(variable)?.asText() ?? '0')
    .format(Formula.parse(formula), attackContext);

  return node?.asFormatted() ?? '???';
}